class TrpgParser{
	constructor(){
		this.regList = {
			"getFileName": new RegExp(/(.*)\.\w+$/),
			"htmlStyle": new RegExp(/<style>(.*)<\/style>/, 's'),
			"htmlBody": new RegExp(/<body.*?>(.*)<\/body>/, 's'),
			"ccfFotmat": new RegExp(/<p style="color:#([\w\d]{6});">.*?<span> \[(.*?)\].*?<span>(.*?)<\/span>.*?<span>(.*?)<\/span>/, 'smg'),
			"ddfFotmat": new RegExp(/(^\[(.*?)\])?<font color='#([\w\d]{6})'><b>(.*?)<\/b>：(.*?)<\/font>/, 'smg'),

			"isHZWEB": new RegExp(/<version>hazmole_v(.*?)<\/version>/),
			"hzweb_actorCss": new RegExp(/\._actor_(\d+) ._actorName { color: #([\w\d]{6}); }\n\._actor_\d+ ._actorName::after { content:"(.*?)"; }\n._actor_\d+ ._actorImg { background-image:url\((.*?)\); }/, 'g'),
			"hzwebFormat": new RegExp(/<div class="_script" data-type="(\w+)">(.*?)<\/div><!--EOS-->/, 'smg'),
			"hzweb_getTitle": new RegExp(/<title>(.*?)<\/title>/, 's'),
			"hzweb_getBgImg": new RegExp(/<div class="_hidden">(.*?)<\/div>/, 's'),
			"hzweb_getTalk": new RegExp(/<div class="_talk (.*?) _actor_(\d+)">/, 'sg'),
			"hzweb_getTalkContent": new RegExp(/<div class="_actorWords">(.*?)<\/div>/, 'smg'),
		};
		this.filename = '';
		this.rawData = null;
		this.mode = '';

		this.generalCfg = {};
		this.userMap = {};
		this.script = null;

		this.isLoaded = false;
	}

	ParseData(filename, data){
		var mode = this.checkMode(data);
		if(mode === "unknown"){
			throw 'Unknown file format';
		}

		this.rawData = data;
		this.mode = mode;

		this.generalCfg = {
			title: null,
			isOnlyMainCh: false,
		};
		this.userMap = {};
		this.script = [];
		this.filename = filename.match(this.regList["getFileName"])[1];

		switch(mode){
			case "HZRP": this.parseFormat_ARP(); break;
			case "HZWEB": this.parseFormat_HZWEB(); break;
			case "CCF": this.parseFormat_CCF(); break;
			case "DDF": this.parseFormat_DDF(); break;
		}

		this.isLoaded = true;
	}

	GetFilename(){
		return this.filename;
	}
	GetTitle(){
		return this.generalCfg.title? this.generalCfg.title: this.filename;
	}
	GetGeneralCfg(){
		return this.generalCfg;
	}
	GetActorList(){
		var retList = {};
		for(var actor of Object.values(this.userMap)){
			retList[actor.id] = actor;
		}
		return retList;
	}
	GetScript(){
		return this.script;
	}
	InheritActorCfg(actorMap){
		var inheritedCfg = Object.values(actorMap);
		for(var actorObj of inheritedCfg){
			var match = Object.values(this.userMap).find( actor => actor.name == actorObj.name );
			if(match){
				this.userMap[match.id].color = actorObj.color;
				this.userMap[match.id].imgUrl = actorObj.imgUrl;
			} else {
				this.registerUser(actorObj.name, actorObj.color, actorObj.imgUrl);
			}
		}
	}

	//=================
	checkMode(data){
		var self = this;

		if(isJSON(data)){
			if(isHZRP(data)) return "HZRP";
		} else if(isHTML(data)){
			if(isHZWEB(data)) return "HZWEB";
			if(isCCF(data)) return "CCF";
			if(isDDF(data)) return "DDF";
		} 
		return "unknown";

		//==================
		function isJSON(data){
			try{ JSON.parse(data) }
			catch(e){ return false; }
			return true;
		}
		function isHZRP(data){
			var jsonObj = JSON.parse(data);
			return jsonObj.version.includes("hazmole");
		}
		function isHTML(data){
			var matchResult = data.match(self.regList["htmlBody"]);
			return (matchResult!=null);
		}
		function isCCF(data){
			var matchResult = data.match(self.regList["ccfFotmat"]);
			return (matchResult!=null);
		}
		function isDDF(data){
			var matchResult = data.match(self.regList["ddfFotmat"]);
			return (matchResult!=null);
		}
		function isHZWEB(data){
			var matchResult = data.match(self.regList["isHZWEB"]);
			return (matchResult!=null);
		}
	}

	//==================
	registerUser(userName, color, imgUrl){
		if(!imgUrl) imgUrl = "";

		var actorArr = Object.values(this.userMap);
		var matchActorObj = null;
		var maxId = -1;
		for(var actor of actorArr){
			var id = parseInt(actor.id)
			if(id > maxId) maxId = id;
			if(actor.name == userName) matchActorObj = actor;
		}

		if(matchActorObj == null){
			var id = (maxId+1);
			this.userMap[id] = new Actor(id, userName, color, imgUrl);
			return id;
		}
		return matchActorObj.id;
	}
	//==================
	parseFormat_ARP(){
		var jsonObj = JSON.parse(this.rawData);

		this.generalCfg.title = jsonObj.config.title;
		this.generalCfg.isOnlyMainCh = !!(jsonObj.config?.isOnlyMainCh);

		for(var actor of jsonObj.config.actors){
			this.userMap[actor.id] = new Actor(actor.id, actor.name, actor.color, actor.imgUrl);
		}

		for(var scriptObj of jsonObj.script){
			this.script.push(new ScirptLine(scriptObj.type, scriptObj));
		}
	}

	parseFormat_HZWEB(){
		var self = this;
		var style = this.rawData.match(this.regList["htmlStyle"])[1];
		var body = this.rawData.match(this.regList["htmlBody"])[1];

		var title = this.rawData.match(this.regList["hzweb_getTitle"])[1];
		var isOtherChHidden = style.match(/\.otherCh{ display:none; }/)!=null;
		this.generalCfg.title = title;
		this.generalCfg.isOnlyMainCh = isOtherChHidden;

		var actorArr = style.match(this.regList["hzweb_actorCss"])
			.map( actor => parseActorStyle(actor) );

		var sectionphArr = body.match(this.regList["hzwebFormat"])
			.map( sect => sect.trim() )
			.map( sect => parseSection(sect) )
			.filter( sect => sect!=null );
		this.script = sectionphArr;

		//==============
		function parseActorStyle(data){
			if(!data) return null;

			var matchMap = [...data.matchAll(self.regList['hzweb_actorCss'])][0];
			var id = matchMap[1];
			var colorCode = matchMap[2];
			var name = matchMap[3];
			var imgUrl = matchMap[4]!=null? matchMap[4]: "";

			if(self.userMap[id]!=null) return ;
			self.userMap[id] = new Actor(id, name, colorCode, imgUrl);
		}
		//=======
		function parseSection(data){
			if(!data) return null;

			var matchMap = [...data.matchAll(self.regList['hzwebFormat'])][0];
			var type = matchMap[1];
			var innerData = matchMap[2];

			var info = {};
			switch(type){
				case "halt": break;
				case "changeBg": info = parseInfo_changeBg(innerData); break;
				case "talk":     info = parseInfo_talk(innerData); break;
			}
			return new ScirptLine(type, info);
		}
		function parseInfo_changeBg(data){
			var bgImgUrl = data.match(self.regList['hzweb_getBgImg'])[1];
			return {
				bgUrl: bgImgUrl
			};
		}
		function parseInfo_talk(data){
			var matchMap = [];

			matchMap = [...data.matchAll(self.regList['hzweb_getTalk'])][0];
			var channel = matchMap[1]=="mainCh"? "main": "other";
			var actorId = matchMap[2];

			matchMap = [...data.matchAll(self.regList['hzweb_getTalkContent'])][0];
			var content = matchMap[1];

			return {
				channel: channel,
				actorId: actorId,
				content: content,
			};
		}
	}
	parseFormat_DDF(){
		var self = this;
		var body = this.rawData.match(this.regList["htmlBody"])[1];

		var sectionphArr = body.match(this.regList['ddfFotmat'])
			.map( sect => sect.trim() )
			.map( sect => parseSection(sect) )
			.filter( sect => sect!=null );

		this.generalCfg.isOnlyMainCh = false;
		this.script = sectionphArr;
		
		//==============
		function parseSection(data){
			if(!data) return null;

			var matchMap = [...data.matchAll(self.regList['ddfFotmat'])][0];
			var channel = matchMap[2];
			var color = matchMap[3];
			var user = matchMap[4];
			var content = matchMap[5];

			var id = self.registerUser(user, color);
			var line = new ScirptLine("talk", {
				channel: isMainChannel(channel)? "main": "other",
				actorId: id,
				content: content.trim()
			});
			return line;
		}
		function isMainChannel(ch){
			if(!ch) return true;
			if(ch=="主要" || ch=="メイン") return true;
			return false;
		}
	}
	parseFormat_CCF(){
		var self = this;
		var body = this.rawData.match(this.regList["htmlBody"])[1];

		var sectionphArr = body.match(this.regList['ccfFotmat'])
			.map( sect => sect.trim() )
			.map( sect => parseSection(sect) )
			.filter( sect => sect!=null );

		this.generalCfg.isOnlyMainCh = false;
		this.script = sectionphArr;

		//==============
		function parseSection(data){
			if(!data) return null;

			var matchMap = [...data.matchAll(self.regList['ccfFotmat'])][0];
			var channel = matchMap[2];
			var color = matchMap[1];
			var user = matchMap[3];
			var content = matchMap[4];

			var id = self.registerUser(user, color);
			var line = new ScirptLine("talk", {
				channel: isMainChannel(channel)? "main": "other",
				actorId: id,
				content: content.trim()
			});
			return line;
		}
		function isMainChannel(ch){
			if(!ch) return true;
			if(ch=="主頻道" || ch=="メイン" || ch=="Main") return true;
			return false;
		}
	}
}


class Actor {
	constructor(id, name, colorCode, imgUrl){
		this.id = id;
		this.name = name;
		this.color = colorCode;
		this.imgUrl = imgUrl;
	}
}
class ScirptLine {
	constructor(type, info){
		this.type = type;
		if(info){
			this.setFields(info);
		}
	}
	setFields(info){
		switch(this.type){
			case "talk":
				this.channel = info.channel;
				this.actorId = info.actorId;
				this.content = info.content;
				break;
			case "changeBg":
				this.bgUrl = info.bgUrl;
				break;
			case "halt":
				break;
		}
	}

}
