var VERSION = "hazmole_v1.0";

class CfgExporter {
	constructor(){}

	Export(mode, cfgData){
		switch(mode){
			case "HZRP":         return this._exportHzrpFile(cfgData);
			case "HTML_SIMPLE": return this._exportHtmlFile(cfgData, 'simple');
			case "HTML_STD":    return this._exportHtmlFile(cfgData, 'standard');
		}
	}

	_exportHzrpFile(cfgData){
		var filename = `${cfgData.generalCfg.title}.hzrp`;
		var filedata = {
				version: VERSION,
				config: {
					title: cfgData.generalCfg.title,
					isOnlyMainCh: cfgData.generalCfg.isOnlyMainCh,
					actors: Object.values(cfgData.actorCfg),
				},
				script: cfgData.scriptCfg,
			};
		return {
			fileName: filename,
			fileData: JSON.stringify(filedata, null, "\t")
		};
	}

	_exportHtmlFile(cfgData, mode){
		var title = cfgData.generalCfg.title;
		var isOnlyMainCh = cfgData.generalCfg.isOnlyMainCh;
		var actorMap = cfgData.actorCfg;
		var scriptArr = cfgData.scriptCfg;
		
		var self = this;
		var filename = `${title}.html`;

		var extraStyle = Object.values(actorMap).map( actorObj => this.getActorStyle(actorObj) ).join('\n');
		if(isOnlyMainCh){
			extraStyle += '\n.otherCh{ display:none; }';
		}
		var body = scriptArr
			.map( script => this.getScriptEntry(actorMap, script) ).join('\n');

		return {
			fileName: filename,
			fileData: this.getBasicWebStruct(mode, title, "", extraStyle, body),
		};
	}


	//===================

	getActorStyle(actorObj){
		return `._actor_${actorObj.id} ._actorName { color: #${actorObj.color}; }
				._actor_${actorObj.id} ._actorName::after { content:"${actorObj.name}"; }
				._actor_${actorObj.id} ._actorImg { background-image:url(${actorObj.imgUrl}); } `.fmt();
	}
	getScriptEntry(actorMap, scriptObj){
		var type = scriptObj.type;
		var innerHtml = '';
		switch(type){
			case "talk": innerHtml = talkCmd(actorMap, scriptObj); break;
			case "halt": innerHtml = haltCmd(); break;
			case "sect_title": innerHtml = sectTitleCmd(scriptObj.text); break;
			case "changeBg": innerHtml = bgCmd(); break;
		}
		return `<div class="_script" data-type="${type}">${innerHtml}</div><!--EOS-->`;

		//=================
		function sectTitleCmd(text){
			return `<div class="_sectTitle">${text}</div>`;
		}
		function haltCmd(){
			return `<div class="_halt"></div>`;
		}
		function bgCmd(){
			return `<div class="_bgImg"><img src="${scriptObj.bgUrl}"></div>`;
		}
		function talkCmd(actorMap, scriptObj){
			var id = scriptObj.actorId;
			var actorObj = actorMap[id];
			var imgUrl = actorObj.imgUrl;
			var chClass = scriptObj.channel=="main"? "mainCh": "otherCh";
			return `
			<div class="_talk ${chClass} _actor_${id}">
				<div class="_leftCol">
					<div class="_actorImg ${imgUrl==""? "_hidden": ""}"></div>
				</div>
				<div class="_rightCol">
					<div class="_actorName"></div>
					<div class="_actorWords">${scriptObj.content}</div>
				</div>
			</div>`
		}
	}
	getStyle(type){
		switch(type){
			case "simple": return simpleWebStyle();
			case "standard": return standardWebStyle();
		}
		return '';

		//=======
		function standardWebStyle(){
			return `
	._halt { padding:30px 0; }
	._bgImg { text-align: center; }
	._bgImg img { max-width: 800px; }
	._talk { margin:5px 0; display:flex; border:1px solid black; background:#1e1e1e; color:#eee; width:100%; max-width:1080px; border-radius:5px; }
	._leftCol { width:122px; }
	._rightCol { width:calc(100% - 126px); }
	._actorName{ padding:5px 10px; height:20px; font-size:18px; }
	._actorImg { margin:6px; width:110px; height:110px; background-repeat:no-repeat; background-size:cover; background-color:#2a2a2a; }
	._actorWords { margin:5px; background:#2a2a2a; font-size:1.1rem; padding:10px; height:calc(100% - 60px); border-radius:5px; }
	._sectTitle { border-radius:5px; margin-bottom:5px; }

	@media only screen and (max-width: 400px) {
		._leftCol { width:100px; }
		._rightCol { width:calc(100% - 100px); }
		._actorImg { margin:35px 0 5px 10px; width: 85px; height: 85px; }
	}

	._talk.otherCh { width:calc(50%); text-align:right; margin-left:auto; }
	._talk.otherCh ._leftCol { display:none; }
	._talk.otherCh ._rightCol { width:100%; }
	._talk.otherCh ._actorWords { background:black;color:white; }
			`.fmt();
		}
		function simpleWebStyle(){
			return `
	._halt { padding:40px 0; }
	._bgImg { text-align: center; }
	._bgImg img { max-width: 800px; }
	._talk { margin:0; display:flex; border-bottom:1px solid #3a3a3a; background:#1e1e1e; color:#eee; width:100%; max-width:1080px; }
	._leftCol { width: 20px; }
	._rightCol { width:100%; }
	._actorName{ padding:10px; height:16px; font-size:18px; }
	._actorImg { display:none; }
	._actorWords { margin:5px; font-size:1.1rem; padding:0 10px 10px 10px; border-radius:5px; }

	._talk.otherCh { text-align:right; background:black; }
	._talk.otherCh ._actorWords { background:black;color:white; }
			`.fmt();
		}
	}
	getBasicWebStruct(mode, title, subtitle, actorStyle, body){
		return `
			<html>
				<head>
					<meta charset="utf-8">
					<meta property="og:title" content="${title}">
					<meta property="og:description" content="${subtitle}">
					<title>${title}</title>
					<style>
						h1{ color:white; margin: 5px 0; }
						body{ background:#454752; }
						._subtitle { color:#ddd; margin:5px 0 20px 0; }
						._sectTitle { background:#ddd; margin-top:30px; padding:10px;font-weight:bold;font-size:1.3rem;text-align:center; }
						._hidden { display:none; }
						.center { display:flex; flex-direction:column; align-items:center; }
						#_main { display:flex; flex-direction:column; align-items:end; }
						._script {width: 100%;}

						${this.getStyle(mode)}
						${actorStyle}
					</style>
				</head>
				<body class="center">
					<div class="_hidden">
						<version>${VERSION}</version>
					</div>
					
					<h1>${title}</h1>
					<div class="_subtitle">${subtitle}</div>

					<div id="_main">${body}</div>
				</body>
			</html>`.fmt();
	}
}
