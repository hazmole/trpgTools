var MSG = {
	"btn_import": "匯入團錄",
	"btn_export": "輸出",
	"btn_generalCfg": "團錄設定",
	"btn_actorCfg": "角色設定",
	"btn_scriptCfg": "腳本設定",
	"btn_information": "說明",
	"btn_save": "儲存",
	"btn_apply": "確定",
	"btn_cancel": "取消",
	"btn_preview": "預覽",
	"btn_delete": "刪除",
	"btn_methodMoveUp": "上移",
	"btn_methodMoveDown": "下移",
	"btn_methodEdit": "編輯段落",
	"btn_methodDel": "刪除段落",
	"btn_methodDelAllOtherCh": "刪除所有場外",
	"btn_methodAddTalk": "插入：對話",
	"btn_methodAddChangeBg": "插入：設定背景",
	"btn_methodAddHalt": "插入：停頓",
	"btn_methodAddTitle": "插入：段落標題",

	"Title_Import": "匯入檔案",
	"Title_Export": "輸出檔案",
	"Title_IntroDocList": "說明文件",
	"Title_ActorList": "登場角色列表",
	"Title_ScriptMethodList": "編輯腳本功能",
	"Title_EditBgImg": "設定背景圖片",
	"Title_EditTalk": "設定對話",
	"Title_EditTitle": "設定段落標題",

	"introDoc": `<u>此工具以及輸出成品皆使用 CC-BY 4.0 授權，可以自由散佈使用。</u>
		<p>此工具能夠將其他跑團平台輸出的團錄轉換成播放器可用的格式。<br/>
		目前支援的格式：
		<ul><li>此工具輸出的文件 (.html, .hzrp)</li>
		<li>どどんとふ (.html)</li>
		<li>ccfolia (.html)</li></ul></p>
		使用流程：
		<ul><li>先使用左上角的「匯入團錄」將團錄文件匯入工具中。</li>
		<li>利用「團錄設定」可以設定輸出檔的標題。</li>
		<li>利用「角色設定」可以設定團錄中登場人物的代表色跟頭像。</li>
		<li>利用「腳本設定」可以編輯團錄內容並加入播放特效。</li>
		<li>在設定完成後，點擊「輸出」來將團錄輸出成播放器可用的格式。</li></ul>
		若有其他使用上的疑問或建議，請不吝在Discord上聯絡 <b>hazmole#6672</b>。`,
	"howToPublishDoc1": `花了大把時間，你編輯好了你的團錄，重新輸出成了美美的新格式，接下來呢？<br>
		在這篇文章，我們將說明該如何把這個工具輸出的網頁檔發布到網路上，讓所有人看到你辛苦的成果。
		<h4>Google雲端硬碟</h4><p>我們建議的其中一個作法，是透過<a href="https://www.google.com.tw/intl/zh-TW/drive">Google Drive雲端硬碟</a>的服務來儲存管理你的團錄。<br>
		你可能會想問：「不對啊？我試過把網頁檔丟到雲端硬碟，但其他人連過去只能看到一堆醜醜的原始檔文字啊？」你是對的，所以我們需要在這裡做一點手腳。</p>
		<p>首先，我們需要在雲端硬碟中建立一個<b>公開資料夾</b>，我們將把所有的團錄文件都放在這裡面。
		建立公開資料夾的方式很簡單：你正常建立一個資料夾，然後對它<b>按右鍵，選擇「共用」</b>，把存取權設定成「<b>知道連結的任何人</b>」。</p>
			<img src="image/docs/001.JPG">
		<p>進到資料夾，你會看到你的目錄右邊多了一個代表公開的符號。<br>把你的團錄檔案放進去之後，就可以繼續下一步。</p>
			<img src="image/docs/002.jpg">
		<h4>DriveToWeb</h4><p>接下來，我們進到這個第三方網站「<a href="https://www.drv.tw/">DriveToWeb</a>」。<br>這個網站可以幫助我們把雲端硬碟中公開資料夾裡的網頁檔發布出去。</p>
			<img src="image/docs/003.jpg">
		<p>選擇上方的「<b>Host on Google Drive</b>」，登入帳號並授權。<br>然後，噹噹，你就得到每個團錄的超連結了！<br>你還可以在下面設定這些超連結的網域名稱！</p>
			<img src="image/docs/004.jpg">
		<p>最後，把超連結整理到你喜歡的平台上，就大功告成了！<br>如果你想要讓更多人看到你的團錄，也可以把他們分享到<a href="https://sites.google.com/view/cosmosbravesbar">TRPG Brave's Bar</a>上喔！</p>
			<img src="image/docs/005.jpg">`,
	"importMethod": "匯入方式",
	"importOpt_fromFile": "讀取團錄檔案",
	"importOpt_fromApi": "從跑團平台匯入 (TRPG網頁版)",
	"roomToken": "房間Token",
	"roomToken_desc": "這個工具會擷取房間內主故事頻道和主聊天頻道的內容。<br>你可以從TRPG網頁版的房間網址找到你的房間Token。",
	"exportFormat": "輸出格式",
	"exportFormat_htmlSimple_desc": "簡化的團錄網頁，無角色頭像，排版間隔較密集。",
	"exportFormat_htmlStandard_desc": "標準的團錄網頁，有角色頭像，排版間隔較寬，場外對話靠右縮排。",
	"exportFormat_hzrp_desc": "供播放器使用的特殊格式。",
	"replayTitle": "團錄標題",
	"otherOptions": "其他選項",
	"isOnlyShowMainCh": "只顯示主要頻道？<br>(這個選項不會刪除場外資訊，只是將其隱藏起來)",
	"talk_actor": "發話角色",
	"talk_channel": "頻道",
	"talkTimes": "發話次數",
	"section_title": "段落標題",
	"ch_main": "主要",
	"ch_other": "場外",
	"actor_id": "ID",
	"actor_name": "名稱",
	"actor_color": "代表色",
	"actor_headImg_url": "角色頭像URL",
	"undefined_headImg": "未設定頭像",
	"imgUrl": "圖片網址",
	"cmd_changeBg": "指令：設定背景",
	"cmd_halt": "指令：停頓",
	"SOF": "文件開頭",
	"EOF": "文件結尾",
	"Error_NoFileSelected": "錯誤！你尚未選擇任何檔案！",
	"Error_WrongFileFormat": "錯誤！無法辨識的檔案格式！",
	"Error_NoFileLoaded": "錯誤！尚未上傳原始團錄！",
	"Error_ImportFail_EmptyToken": "錯誤！請輸入房間Token！",
	"Error_ImportFail_Unauthorized": "導入失敗！無效的房間Token！",
	"Error_NoSelectedEntry": "請先選擇一個段落！",
	"Error_UnderDeveloping": "尚未實裝功能",
	"Warn_WebStorageExceedLimit": "警告！網頁儲存空間超過上限，自動儲存失敗。",
	"Success_ParseComplete": "讀取成功！",
	"Success_AutoLoaded": "自動讀取成功！",
	"Success_SaveCfg": "設定已儲存！",
	"Confrim_inheritCurrentActorCfg": "是否要沿用目前的角色設定？",
	"Confrim_makeSureAction": "你確定要進行此操作嗎？",
	"Tip_import": "你可以選擇讀取已輸出的團錄檔案、或是直接從跑團平台的房間匯入紀錄。<br>關於目前支援的格式和平台，請參見右上角的「說明」。",
	"Tip_export": "將編輯後的團錄輸出成重新排版過的網頁、或是供「播放器」使用的特殊格式(.hzrp)。",
	"Tip_howToGetRoomToken_trpgLine": "你可以從TRPG網頁版的房間網址找到你的房間Token。",
	"Tip_selectActor": "請點選左側的登場角色進行個別設定。",
	"Tip_editScript": "請使用左側功能編輯你的團錄。",
	"fileType_HZRP": ".hzrp (團錄播放器專用格式)",
	"fileType_HTML_simple": ".html (網頁格式, 簡易版)",
	"fileType_HTML_standard": ".html (網頁格式, 標準版)",
	"doc_introduction": "介紹",
	"doc_howToPublish": "我要如何發布團錄？",
	"Yes": "是",
	"No": "否",
};

class CfgEditor {
	constructor(id){
		this.viewPort = document.getElementById(id);
		this.importAPI = new ImportAPI();
		this.parser = new TrpgParser();
		this.exporter = new CfgExporter();

		this.generalCfg = {};
		this.actorCfg = {};
		this.scriptCfg = [];

		this.selectedPtr = null;
	}

	init(){
		this.createFrame();
		this.createMsgBox();
		this.createCtrlWindow();

		this.loadFromWebStorage();
		
		this.goToPage("info");
	}

	initConfig(){
		this.generalCfg = {
			title: this.parser.GetTitle(),
			isOnlyMainCh: this.parser.GetGeneralCfg().isOnlyMainCh,
			exportType: "HTML_SIMPLE",
		};
		this.actorCfg = this.parser.GetActorList();
		this.scriptCfg = this.parser.GetScript();
	}

	//================
	// Parser Ref
	Parse(filename, data, isInheritActor){
		try{
			this.parser.ParseData(filename, data);
			if(isInheritActor){
				this.parser.InheritActorCfg(this.actorCfg);
			}
			this.initConfig();
	 	} catch(e){
			this.popupMsgBox("error", MSG["Error_WrongFileFormat"]);
			console.error(e);
			return ;
		}
		this.popupMsgBox("success", MSG["Success_ParseComplete"]);
		this.saveToWebStorage();
		this.goToPage("general");
	}
	doLoadedCheck(){
		if(!this.parser.isLoaded){
			this.popupMsgBox("error", MSG["Error_NoFileLoaded"]);
			return false;
		}
		return true;
	}

	//============
	// Main Button Event
	clickTest(){
		// For Testing New Function
	}
	clickImport(){
		this.goToPage("import");
	}
	clickExport(){
		if(!this.doLoadedCheck()) return ;
		this.goToPage("export");
		//this.downloadFile();
	}
	clickPreview(){
		if(!this.doLoadedCheck()) return ;
		this.previewReplay();
	}
	clickGoToGeneral(){
		if(!this.doLoadedCheck()) return ;
		this.goToPage("general");
	}
	clickGoToActor(){
		if(!this.doLoadedCheck()) return ;
		this.goToPage("actor");
	}
	clickGoToScript(){
		if(!this.doLoadedCheck()) return ;
		this.goToPage("script");
	}
	clickGoToInfo(){
		this.goToPage("info");
	}

	//============
	// Page Handler
	goToPage(pageId){
		this.clearPage();
		switch(pageId){
			case "import":  this.goToPage_Import(); break;
			case "export":  this.goToPage_Export(); break;
			case "general": this.goToPage_general(); break;
			case "actor":   this.goToPage_actor(); break;
			case "script":  this.goToPage_script(); break;
			case "info":    this.goToPage_info(); break;
		}
	}

	goToPage_Import(){
		$("#btn_import").addClass("active");
		$("#_rightCol").append(builder.pageR_import());
		this.render_importFromFile()
		//---
		$("#_input_importMethod").on('change', this.onChange_renderImportMethod.bind(this));
	}
	goToPage_Export(){
		$("#btn_export").addClass("active");
		$("#_rightCol").append(builder.pageR_export());
		//---
		this.render_exportFormat();
		$("#_input_exportFormat").on('change', this.render_exportFormat.bind(this));
		$("#_btn_exportToFile").on('click', this.onClick_Export.bind(this));
	}
	goToPage_general(){
		$("#btn_to_general").addClass("active");
		$("#_rightCol").append(builder.pageR_generalCfg(this.generalCfg));
		//---
		$("#_btn_saveGeneralCfg").on('click', this.onClick_SaveGeneralCfg.bind(this));
	}
	goToPage_actor(){
		$("#btn_to_actor").addClass("active");
		$("#_leftCol").append( builder.pageL_actorEntryList(Object.values(this.actorCfg)));
		$("#_rightCol").append(builder.pageR_actorCfg_Workspace());
		//---
		$("._actorEntry").on("click", this.onClick_selectActorEntry.bind(this));
	}
	goToPage_script(){
		$("#btn_to_script").addClass("active");
		$("#_leftCol").append( builder.pageL_scriptMethodList());
		$("#_rightCol").append(builder.pageR_scriptCfg_Workspace());
		this.render_scriptList();
		//---
		$("#_btn_previewScript").on('click', this.clickPreview.bind(this));
		$("#_btn_saveScriptCfg").on('click', this.onClick_SaveScriptCfg.bind(this));
		$("#_btn_moveUpCmd").on('click', this.onClick_moveUpCmd.bind(this));
		$("#_btn_moveDownCmd").on('click', this.onClick_moveDownCmd.bind(this));
		$("#_btn_editCmd").on('click', this.onClick_editCmd.bind(this));
		$("#_btn_delCmd").on('click', this.onClick_delScriptCmd.bind(this));
		$("#_btn_delOtherChCmd").on('click', this.onClick_delAllOtherTalkCmd.bind(this));
		$("#_btn_addTalkCmd").on('click', this.onClick_addScriptCmd.bind(this, "talk"));
		$("#_btn_addTitleCmd").on('click',this.onClick_addScriptCmd.bind(this, "sect_title"));
		$("#_btn_addChBgCmd").on('click', this.onClick_addScriptCmd.bind(this, "changeBg"));
		$("#_btn_addHaltCmd").on('click', this.onClick_addScriptCmd.bind(this, "halt"));
	}
	goToPage_info(){
		$("#btn_to_info").addClass("active");
		$("#_leftCol").append(builder.pageL_introDocList());
		//---
		this.render_docIntro();
		//---
		$("#_doc_intro").on('click', this.render_docIntro.bind(this));
		$("#_doc_publish").on('click', this.render_docHowToPublish.bind(this));
	}

	clearPage(){
		this.selectedPtr = null;
		$("._btn").removeClass("active");
		$("#_leftCol").empty();
		$("#_rightCol").empty();
		this.hideCtrlWindow();
	}
	//============
	// Sub-Page Handler
	render_actorEdit(){
		var actorObj = this.selectedPtr;
		//---
		$("#_actor_workspace").html(builder.subpage_actorEditPage(actorObj));
		this.render_actorHeadImg();
		this.render_actorTalkTimes(actorObj);
		//---
		$("#_btn_saveActorCfg").on('click', this.onClick_SaveActorCfg.bind(this, actorObj.id));
		$("#_btn_deleteActorCfg").on('click', this.onClick_DelActorCfg.bind(this, actorObj.id));
		$("#_input_actorHeadImgUrl").on('change', this.onChange_setActorHeadImg.bind(this));
		$("#_input_actorColor_text").on('change', this.onChange_setActorColor.bind(this, "text"));
		$("#_input_actorColor").on('change', this.onChange_setActorColor.bind(this, "picker"));
	}
	render_actorHeadImg(){
		var url = $("#_input_actorHeadImgUrl").val();
		if(url){
			$("._actor_headImg").empty();
			$("._actor_headImg").css("background-image", `url(${url})`);
		} else {
			$("._actor_headImg").html(builder.actorUndefinedImg());
			$("._actor_headImg").css("background-image", '');
		}
	}
	render_actorTalkTimes(actorObj){
		var actorTalkArr = Object.values(this.scriptCfg)
			.filter(script => script.type == "talk" && script.actorId == actorObj.id);
		var actorTalkTimes = actorTalkArr.length;

		$("#_output_talkTimes").text(actorTalkTimes);
		if(actorTalkTimes == 0) $("#_btn_deleteActorCfg").removeClass("hidden");
	}
	render_scriptList(){
		var isOnlyShowMainCh = this.generalCfg.isOnlyMainCh;
		$("#_script_listPanel").html(builder.subpage_scriptList(this.actorCfg, this.scriptCfg, isOnlyShowMainCh));
		//---
		$("._scriptEntry").on('click', this.onClick_selectScriptEntry.bind(this));
	}

	render_docIntro(){
		$("#_rightCol").html(builder.pageR_introduction());
		//---
		$("._introDocEntry").removeClass("active");
		$("#_doc_intro").addClass("active");
	}
	render_docHowToPublish(){
		$("#_rightCol").html(builder.pageR_howToPublish());
		//---
		$("._introDocEntry").removeClass("active");
		$("#_doc_publish").addClass("active");
	}

	render_importFromFile(){
		$("#_import_workspace").html(builder.subpage_importFromFile());
		$("#_btn_importFromFile").on('click', this.onClick_importFromFile.bind(this));
	}
	render_importFromApi(){
		$("#_import_workspace").html(builder.subpage_importFromApi());
		$("#_btn_importFromFile").on('click', this.onClick_importFromApi.bind(this));
	}

	render_exportFormat(){
		var mode = $("#_input_exportFormat").val();
		$("#_export_workspace").html(builder.subpage_exportFormatPreview(mode));
	}

	//=================
	// Interact Method
	onClick_importFromFile(){
		var files = $("#_input_uploadFile").prop("files");
		if(files.length==0){
			this.popupMsgBox("error", MSG["Error_NoFileSelected"]);
			return ;
		}
		this.uploadFile(files[0]);
	}
	onClick_importFromApi(){
		var token = $("#_input_trpgline_roomtoken").val();
		if(!token){
			this.popupMsgBox("error", MSG["Error_ImportFail_EmptyToken"]);
			return ;
		}

		this.importFromTRPGLine(token);
	}

	onClick_Export(){
		var mode = $("#_input_exportFormat").val();
		this.downloadFile(mode);
	}

	onClick_SaveGeneralCfg(){
		var inputVal = {
			title: $("#_input_title").val(),
			isOnlyMainCh: $("#_input_isOnlyMainCh").prop('checked'),
			exportType: $("#_input_exportType").val(),
		};
		//---
		this.generalCfg.title = inputVal.title;
		this.generalCfg.isOnlyMainCh = inputVal.isOnlyMainCh;
		this.generalCfg.exportType = inputVal.exportType;
		this.saveToWebStorage();
		//---
		this.popupMsgBox("success", MSG["Success_SaveCfg"]);
	}
	onClick_SaveActorCfg(id){
		var inputVal = {
			name: $("#_input_actorName").val(),
			color: $("#_input_actorColor").val(),
			headImgUrl: $("#_input_actorHeadImgUrl").val(),
		};
		//---
		this.actorCfg[id].name = inputVal.name;
		this.actorCfg[id].color = inputVal.color.substring(1);
		this.actorCfg[id].imgUrl = inputVal.headImgUrl;
		this.saveToWebStorage();
		//---
		$(`._actorEntry[data-id=${id}]`).text(inputVal.name);
		this.popupMsgBox("success", MSG["Success_SaveCfg"]);
	}
	onClick_SaveScriptCfg(){
		var self = this;
		var scriptArr = $("._scriptEntry:not(.SOF):not(.EOF)")
			.map(function(){
				return self.getScriptObjFromEntryElem(this);
			})
			.toArray();
		//---
		this.scriptCfg = scriptArr;
		this.saveToWebStorage();
		//---
		this.popupMsgBox("success", MSG["Success_SaveCfg"]);
	}

	onClick_DelActorCfg(id){
		delete this.actorCfg[id];
		this.goToPage("actor");
		//---
		this.saveToWebStorage();
		this.popupMsgBox("success", MSG["Success_SaveCfg"]);
	}

	onClick_selectActorEntry(event){
		var elem = this.getEntryElemByEvent(event, "_actorEntry");
		//---
		$('._actorEntry').removeClass("active");
		$(elem).addClass("active");
		//---
		var actorId = elem.getAttribute("data-id");
		this.selectedPtr = this.actorCfg[actorId];
		this.render_actorEdit();
	}
	onClick_selectScriptEntry(event){
		var elem = this.getEntryElemByEvent(event, "_scriptEntry");
		//---
		$('._scriptEntry').removeClass("active");
		$(elem).addClass("active");
		//---
		this.selectedPtr = elem;
	}

	onClick_moveUpCmd(){
		if(!this.selectedPtr){
			this.popupMsgBox("error", MSG["Error_NoSelectedEntry"]);
			return ;
		}
		if($(this.selectedPtr).hasClass("SOF")) return ;
		if($(this.selectedPtr).prev().hasClass("SOF")) return ;
		//---
		$(this.selectedPtr).prev().before(this.selectedPtr);
	}
	onClick_moveDownCmd(){
		if(!this.selectedPtr){
			this.popupMsgBox("error", MSG["Error_NoSelectedEntry"]);
			return ;
		}
		if($(this.selectedPtr).hasClass("SOF")) return ;
		if($(this.selectedPtr).next().hasClass("EOF")) return ;
		//---
		$(this.selectedPtr).next().after(this.selectedPtr);
	}
	onClick_editCmd(){
		if(!this.selectedPtr){
			this.popupMsgBox("error", MSG["Error_NoSelectedEntry"]);
			return ;
		}
		if($(this.selectedPtr).hasClass("SOF")) return ;
		//---
		var self = this;
		var cmdType = $(this.selectedPtr).attr("data-type");
		switch(cmdType){
			case "changeBg": editChangeBgCmd(); break;
			case "talk": editTalkCmd(); break;
			case "sect_title": editSectTitleCmd(); break;
			case "halt": break;
			default:
				this.popupMsgBox("error", MSG["Error_UnderDeveloping"]);
				break;
		}

		//===============
		function editTalkCmd(){
			var actorElem = $(self.selectedPtr).children("._scriptEntry_talkActor");
			var contentElem = $(self.selectedPtr).children("._scriptEntry_talkContent");
			var arg = {
				actorId: actorElem.attr("data-actor-id"),
				content: contentElem.html().replace(/<br>/g, '\n'),
				isOtherCh: $(self.selectedPtr).hasClass("otherCh"),
			};
			self.popWindow_editTalk(arg, function(){
				var newActorId = $("#_input_actor").val();
				var newActorObj = self.actorCfg[newActorId];
				var isOtherCh = $("input[name=channel]:checked").val() == 'other';
				actorElem.attr('data-actor-id', newActorId);
				actorElem.css('color', "#"+newActorObj.color);
				actorElem.text(newActorObj.name);
				(isOtherCh)? $(self.selectedPtr).addClass("otherCh"): $(self.selectedPtr).removeClass("otherCh");

				var newContent = $("#_input_content").val().replace(/\n/g, '<br>');
				contentElem.html(newContent);
			}.bind(self));
		}
		function editChangeBgCmd(){
			var imgElem = $(self.selectedPtr).children("._scriptEntry_image");
			var arg_url = imgElem.attr("data-url");
			self.popWindow_editBackground(arg_url, function(){
				var newUrl = $("#_input_imgUrl").val();
				imgElem.attr("data-url", newUrl);
				imgElem.css("background-image", `url(${newUrl})`);
			}.bind(self));
		}
		function editSectTitleCmd(){
			var textElem = $(self.selectedPtr).children().children("span");
			var text = textElem.text();
			self.popWindow_editTitle(text, function(){
				var newTxt = $("#_input_section_title").val();
				textElem.text(newTxt);
			}.bind(self));
		}
	}

	onClick_addScriptCmd(cmdType){
		if(!this.selectedPtr){
			this.popupMsgBox("error", MSG["Error_NoSelectedEntry"]);
			return ;
		}
		//---
		var self = this;
		switch(cmdType){
			case "changeBg": addChBgCmd(); break;
			case "talk": addTalkCmd(); break;
			case "halt": addHaltCmd(); break;
			case "sect_title": addTitleCmd(); break;
			default:
				this.popupMsgBox("error", MSG["Error_UnderDeveloping"]);
				break;
		}

		//===============
		function addTalkCmd(){
			var arg = {
				actorId: 0,
				content: "",
				isOtherCh: false,
			};
			self.popWindow_editTalk(arg, function(){
				var scriptObj = {
					type: "talk",
					actorId: $("#_input_actor").val(),
					content: $("#_input_content").val(),
					channel: $("input[name=channel]:checked").val(),
				};
				self.insertScriptEntry(self.selectedPtr, scriptObj);
			}.bind(self));
		}
		function addChBgCmd(){
			self.popWindow_editBackground("", function(){
				var scriptObj = {
					type: "changeBg",
					bgUrl: $("#_input_imgUrl").val(),
				};
				self.insertScriptEntry(self.selectedPtr, scriptObj);
			}.bind(self));
		}
		function addHaltCmd(){
			var scriptObj = {
				type: "halt"
			};
			self.insertScriptEntry(self.selectedPtr, scriptObj);
		}
		function addTitleCmd(){
			self.popWindow_editTitle("", function(){
				var scriptObj = {
					type: "sect_title",
					text: $("#_input_section_title").val(),
				};
				self.insertScriptEntry(self.selectedPtr, scriptObj);
			}.bind(self));
		}
	}
	
	onClick_delScriptCmd(){
		if(!this.selectedPtr){
			this.popupMsgBox("error", MSG["Error_NoSelectedEntry"]);
			return ;
		}
		
		if(!this.selectedPtr) return;
		if($(this.selectedPtr).hasClass("SOF")) return ;

		$(this.selectedPtr).remove();
		this.selectedPtr = null;
	}
	onClick_delAllOtherTalkCmd(){
		var self = this;
		this.popConfirm(MSG["Confrim_makeSureAction"], function(ret){
			if(ret==false) return ;
			$("._scriptEntry.otherCh").remove();
			self.selectedPtr = null;
		});
	}

	onChange_setActorHeadImg(){
		this.render_actorHeadImg();
	}
	onChange_setActorColor(fromWho){
		switch(fromWho){
			case "picker":
				$("#_input_actorColor_text").val($("#_input_actorColor").val().substring(1).toUpperCase());
				break;
			case "text":
				$("#_input_actorColor").val("#"+$("#_input_actorColor_text").val());
				break;
		}
	}
	onChange_renderImportMethod(event){
		var importMethod = event.target.value;
		switch(importMethod){
			case "file": this.render_importFromFile(); break;
			case "api": this.render_importFromApi(); break;
		}
	}


	//=================
	// Supportive Function
	insertScriptEntry(root, scriptObj){
		if(!root) return;
		$(root).after(builder.scriptEntry(this.actorCfg, scriptObj));
		$(root).next().on('click', this.onClick_selectScriptEntry.bind(this));
	}
	getEntryElemByEvent(event, targetClass){
		var elem = event.target;
		while(!$(elem).hasClass(targetClass)){
			elem = elem.parentElement;
		}
		return elem;
	}
	getScriptObjFromEntryElem(scriptEntry){
		var type = $(scriptEntry).attr("data-type");
		switch(type){
			case "changeBg":
				var bgUrl = $(scriptEntry).children("._scriptEntry_image").attr("data-url");
				return { type, bgUrl };
			case "talk":
				var actorId = $(scriptEntry).children("._scriptEntry_talkActor").attr("data-actor-id");
				var content = $(scriptEntry).children("._scriptEntry_talkContent").html();
				var channel = $(scriptEntry).hasClass("otherCh")? "other": "main";
				return { type, actorId, content, channel };
			case "sect_title":
				var text = $(scriptEntry).children().children("span").text();
				return { type, text };
			default:
				return { type };
		}
	}

	//=================
	// Confirm Window
	popConfirm(text, callback){
		$(this.viewPort).append(builder.confirmWindow());

		var self = this;
		$("#_cnfmwindow #_cnfm_content").append('<div class="message"></div>');
		$("#_cnfmwindow .message").text(text);
		$("#_cnfmwindow #_btn_cnfm_yes").on('click', function(){ self.hideConfirm(); callback(true); });
		$("#_cnfmwindow #_btn_cnfm_no").on('click', function(){ self.hideConfirm(); callback(false); });
		$("#_cnfmwindow").fadeIn(200);
		$("#_blockScreen").fadeIn(200);
	}
	hideConfirm(){
		$("#_blockScreen").fadeOut(200);
		$("#_cnfmwindow").fadeOut(200, function(){
			$("#_cnfmwindow").remove();
		});
	}

	//=================
	// Control Window
	popWindow_editBackground(imgUrl, applyCallback){
		var title = MSG["Title_EditBgImg"];
		var content = builder.ctrlWin_editBgImg(imgUrl);
		//---
		this.popupCtrlWindow(title, content, applyCallback);
		//---
		$("#_input_imgUrl").on('change', function(){
			$("#_output_imgPreview").css("background-image", `url(${$("#_input_imgUrl").val()})`);
		}.bind(this));
	}
	popWindow_editTalk(arg, applyCallback){
		var title = MSG["Title_EditTalk"];
		var content = builder.ctrlWin_editTalk(this.actorCfg, arg.actorId, arg.content, arg.isOtherCh, this.generalCfg.isOnlyMainCh);
		//---
		this.popupCtrlWindow(title, content, applyCallback);
	}
	popWindow_editTitle(text, applyCallback){
		var title = MSG["Title_EditTitle"];
		var content = builder.ctrlWin_editSectTitle(text);
		//---
		this.popupCtrlWindow(title, content, applyCallback);
	}

	popupCtrlWindow(title, content, callback){
		var self = this;
		$("._ctrlwindow_title").text(title);
		$("._ctrlbody").html(content);
		$("._btn_ctrlWinApply").on('click', function(){ self.hideCtrlWindow(); callback(); });
		$("#_blockScreen").fadeIn(200);
		$("._ctrlwindow").fadeIn(200);
	}
	hideCtrlWindow(){
		$("._btn_ctrlWinApply").off();
		$("#_blockScreen").fadeOut(200);
		$("._ctrlwindow").fadeOut(200);
	}
	//=================
	// Create Elements
	createMsgBox(){
		$(this.viewPort).append(builder.messageBox());
	}
	createCtrlWindow(){
		$(this.viewPort).append(builder.controlWindow());
		var self = this;
		$("._ctrlwindow .cross-stand-alone").on('click', this.hideCtrlWindow.bind(this));
		$("._btn_ctrlWinCancel").on('click', this.hideCtrlWindow.bind(this));
	}
	createFrame(){
		$(this.viewPort).append(builder.mainFrame());
		$(this.viewPort).append(builder.loadingIcon());
		$(this.viewPort).append(builder.blockScreen());
		$("#btn_import").on('click',    this.clickImport.bind(this));
		$("#btn_export").on('click',    this.clickExport.bind(this));

		$("#btn_to_general").on('click',this.clickGoToGeneral.bind(this));
		$("#btn_to_actor").on('click',  this.clickGoToActor.bind(this));
		$("#btn_to_script").on('click', this.clickGoToScript.bind(this));

		$("#btn_to_info").on('click', this.clickGoToInfo.bind(this));
	}
	//=================
	// Loading Block
	popupLoading(){
		$("#_blockScreen").fadeIn(200);
		$("#Loading").fadeIn(200);
	}
	hideLoading(){
		$("#Loading").fadeOut(200);
		$("#_blockScreen").fadeOut(200);
	}
	//=================
	// Message Box
	popupMsgBox(type, msg){
		$("#_msgbox").attr('class', type)
		$("#_msgbox").text(msg).fadeIn(200);
			setTimeout(function(){
				$("#_msgbox").fadeOut(200);
			}, 1200);
	}
	//=================
	// Local Storage
	saveToWebStorage(){
		var obj = {
			general: this.generalCfg,
			actors: this.actorCfg,
			script: this.scriptCfg,
		};
		if(obj.general.exportType) delete obj.general.exportType;

		try{
			localStorage.setItem('rpCfgSave', JSON.stringify(obj));
		} catch(e){
			this.popupMsgBox("warn", MSG["Warn_WebStorageExceedLimit"]);
			console.error(e);
		}
	}
	loadFromWebStorage(){
		var cfg = localStorage.getItem('rpCfgSave');
		if(cfg){
			try{
				var jsonObj = JSON.parse(cfg);
				this.parser.isLoaded = true;
				this.generalCfg = jsonObj.general;
				this.actorCfg = jsonObj.actors;
				this.scriptCfg = jsonObj.script;
				this.popupMsgBox("success", MSG["Success_AutoLoaded"]);
			}catch(e){
				localStorage.clear();
				console.error(e);
			}
		}
	}
	getWebStorageUsage(){
		var _key = 'rpCfgSave';
		var _bytes = ((localStorage[_key].length + _key.length) * 2);

		return (_bytes / 1024).toFixed(2) + " KB";
	}

	//================
	// API
	importFromTRPGLine(roomId){
		if(!roomId.match(/^[\w\d]+$/)){
			this.popupMsgBox("error", MSG["Error_ImportFail_Unauthorized"]);
			return ;
		}

		var self = this;
		this.popupLoading();
		this.importAPI.TRPGLine_GetChannels(roomId, function(ret){
			if(ret.error){
				if(ret.error == "Unauthenticated.")
					self.popupMsgBox("error", MSG["Error_ImportFail_Unauthorized"]);
				self.hideLoading();
				return ;
			}

			var roomName = ret.name;
			var mainCh = ret.channels.filter( ch => ch.isInit && ch.type == "story" )[0];
			var chArr = ret.channels.filter( ch => ch.isInit ).map( ch => ch.id );

			self.importAPI.TRPGLine_GetScripts(roomId, chArr, function(ret){
				self.parser.ParseFromAPI("trpg-line", {
					roomName: roomName,
					mainChId: mainCh.id,
					scripts: ret.messages
				});
				self.initConfig();
				self.popupMsgBox("success", MSG["Success_ParseComplete"]);
				self.goToPage("general");
				self.saveToWebStorage();

				self.hideLoading();
			})
		});
	}

	//================
	// File I/O
	downloadFile(mode){
		var exportData = this.exporter.Export(mode, this);

		var elem = document.createElement('a');
		elem.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(exportData.fileData));
		elem.setAttribute('download', exportData.fileName);
		document.body.appendChild(elem);
		elem.click();
	}
	previewReplay(){
		var mode = "HTML_STD";
		var exportData = this.exporter.Export(mode, this);
		var w = window.open('');
		w.document.write(exportData.fileData);
	}
	uploadFile(file){
		var self = this;
		var filename = file.name;
		
		var fr = new FileReader();
		fr.onload = function(){
			if(Object.keys(self.actorCfg).length>0){
				self.popConfirm(MSG["Confrim_inheritCurrentActorCfg"], function(retVal){
					self.Parse(filename, fr.result, retVal);
				});
			} else {
				self.Parse(filename, fr.result, false);
			}
		}
		fr.readAsText(file);
	}

}

