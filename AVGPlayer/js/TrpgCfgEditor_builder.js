function builder(){}

/*----------------
  Page: Introduction
 ----------------*/
builder.pageR_intro = function(){
	return `<div class="infoBlock">${MSG["introDoc"]}</div>`;
}

/*----------------
  Page: General Config
 ----------------*/
builder.pageR_generalCfg = function(generalCfg){
	var title = generalCfg.title;
	var isOnlyMainCh = generalCfg.isOnlyMainCh;
	var exportType = generalCfg.exportType;
	return `
		<h2>${MSG["btn_generalCfg"]}</h2>
		<div class="row"><b>${MSG["replatTitle"]}</b>：<input type="text" id="_input_title" value="${title}" style="width:280px;"></div>
		<div class="row"><b>${MSG["exportFormat"]}</b>：<select id="_input_exportType">
				<option value="HTML_SIMPLE" ${ exportType=="HTML_SIMPLE"? "selected": "" }>${MSG["fileType_HTML_simple"]}</option>
				<option value="HTML_STD"    ${ exportType=="HTML_STD"? "selected": "" }>${MSG["fileType_HTML_standard"]}</option>
				<option value="HZRP"        ${ exportType=="HZRP"? "selected": "" }>${MSG["fileType_HZRP"]}</option>
			</select>
		</div>
		<div class="row"><b>${MSG["otherOptions"]}：</b></div>
		<div class="row flexST">
			<input type="checkbox" id="_input_isOnlyMainCh" ${isOnlyMainCh? "checked='checked'":""}>
			<label for="_input_isOnlyMainCh"> ${MSG["isOnlyShowMainCh"]}</label>
		</div>
		<div class="row right"><button id="_btn_saveGeneralCfg" class="_btn_save">${MSG["btn_save"]}</button></div>`.fmt();
}

/*----------------
  Page: Actor Config
 ----------------*/
builder.pageL_actorEntryList = function(actorList){
	var entryList = actorList.map( actor => builder.actorEntry(actor) )
	return `<div class="title">${MSG["Title_ActorList"]}</div>
					<div class="entryList">${entryList.join('')}</div>`.fmt();
}
builder.pageR_actorCfg_Workspace = function(title){
	return `
		<h2>${MSG["btn_actorCfg"]}</h2>
		<div id="_actor_workspace" class="row">${MSG["Tip_selectActor"]}</div>`.fmt();
}
builder.actorEntry = function(actorObj){
	var actorName = (actorObj.name)? actorObj.name: "&nbsp;";
	return `<div class="_actorEntry Entry clickable" data-id="${actorObj.id}">${actorName}</div>`;
}
builder.actorUndefinedImg = function(){
	return `<div>${MSG["undefined_headImg"]}</div>`;
}

builder.subpage_actorEditPage = function(actorObj){
	var imgUrl = actorObj.imgUrl;
	return `
		<div class="_actor_frame">
			<div class="_actor_headImg_frame">
				<div class="_actor_headImg"></div>
			</div>
			<div class="_actor_basicInfo_frame">
				<div class="row flex"><div class="_entry_title">${MSG["actor_id"]}：</div><div>${actorObj.id}</div></div>
				<div class="row flex"><div class="_entry_title">${MSG["actor_name"]}：</div><div><input type="text" id="_input_actorName" value="${actorObj.name}"></div></div>
				<div class="row flex"><div class="_entry_title">${MSG["actor_color"]}：</div>
					<div class="flex">
						<div style="margin-right:5px;">#<input type="text" id="_input_actorColor_text" value="${actorObj.color.toUpperCase()}" style="width:60px;"></div>
						<div><input type="color" id="_input_actorColor" value="#${actorObj.color}"></div>
					</div>
				</div>
				<div class="row flex">
					<div class="_entry_title">${MSG["actor_headImg_url"]}：</div>
					<div class="_entry_content"><input class="long" type="text" id="_input_actorHeadImgUrl" value="${imgUrl}"></div>
				</div>
			</div>
		</div>
		<div class="row">${MSG["talkTimes"]}：<span id="_output_talkTimes"></span></div>
		<div class="row right">
			<button id="_btn_saveActorCfg" class="_btn_save">${MSG["btn_save"]}</button>
			<button id="_btn_deleteActorCfg" class="hidden _btn_delete">${MSG["btn_delete"]}</button>
		</div>`.fmt();
}

/*----------------
  Page: Script Config
 ----------------*/
builder.pageL_scriptMethodList = function(){
	return `
		<div class="title">${MSG["Title_ScriptMethodList"]}</div>
		<div id="_btn_moveUpCmd" class="_scriptMethodEntry Entry clickable">${MSG["btn_methodMoveUp"]}</div>
		<div id="_btn_moveDownCmd" class="_scriptMethodEntry Entry clickable">${MSG["btn_methodMoveDown"]}</div>
		<div id="_btn_editCmd" class="_scriptMethodEntry Entry clickable">${MSG["btn_methodEdit"]}</div>
		<div id="_btn_delCmd" class="_scriptMethodEntry Entry clickable">${MSG["btn_methodDel"]}</div>
		<div id="_btn_delOtherChCmd" class="_scriptMethodEntry Entry clickable">${MSG["btn_methodDelAllOtherCh"]}</div>
		<div id="_btn_addTalkCmd" class="_scriptMethodEntry Entry clickable">${MSG["btn_methodAddTalk"]}</div>
		<div id="_btn_addTitleCmd" class="_scriptMethodEntry Entry clickable">${MSG["btn_methodAddTitle"]}</div>
		<div id="_btn_addChBgCmd" class="_scriptMethodEntry Entry clickable">${MSG["btn_methodAddChangeBg"]}</div>
		<div id="_btn_addHaltCmd" class="_scriptMethodEntry Entry clickable">${MSG["btn_methodAddHalt"]}</div>`.fmt();
}
builder.pageR_scriptCfg_Workspace = function(){
	return `
		<div id="_script_ctrlPanel">
			<h2>${MSG["btn_scriptCfg"]}</h2>
			<div class="row">${MSG["Tip_editScript"]}</div>
			<div class="row right">
				<button id="_btn_previewScript" class="_btn_preview">${MSG["btn_preview"]}</button>
				<button id="_btn_saveScriptCfg" class="_btn_save">${MSG["btn_save"]}</button>
			</div>
		</div>
		<div id="_script_listPanel">
		</div>`.fmt();
}
builder.subpage_scriptList = function(actorCfg, scriptList, isOnlyShowMain){
	return `
		${builder.scriptEntrySOF()}
		${Object.values(scriptList)
			.map( script => { script.isHidden = (isOnlyShowMain && script.channel=="other"); return script; } )
			.map( script => builder.scriptEntry(actorCfg, script)).join('')}
		${builder.scriptEntryEOF()}`.fmt();
}
builder.scriptEntry = function(actorCfg, scriptObj){
	var elem = '';
	var type = scriptObj.type;
	var isHidden = scriptObj.isHidden;
	var isOtherCh = (scriptObj.type=="talk" && scriptObj.channel=="other");
	switch(type){
		case "talk":
			var actorObj = actorCfg[scriptObj.actorId];
			elem = builder._scriptEntryInner_talk(actorObj, scriptObj);
			break;
		case "changeBg":
			elem = builder._scriptEntryInner_changeBg(scriptObj);
			break;
		case "sect_title":
			elem = builder._scriptEntryInner_sectTitle(scriptObj);
			break;
		case "halt":
			elem = builder._scriptEntryInner_halt();
			break;
	}
	return `<div class="_scriptEntry clickable ${isOtherCh? "otherCh": ""} ${isHidden? "hidden": ""}" data-type="${type}">${elem}</div>`;
}

builder.scriptEntrySOF = function(){
	return `<div class="_scriptEntry clickable SOF">${MSG["SOF"]}</div>`;
}
builder.scriptEntryEOF = function(){
	return `<div class="_scriptEntry EOF">${MSG["EOF"]}</div>`;
}

builder._scriptEntryInner_talk = function(actorObj, scriptObj){
	return `
		<div class="_scriptEntry_talkActor" style="color:#${actorObj.color};" data-actor-id=${actorObj.id}>${actorObj.name}</div>
		<div class="_scriptEntry_talkContent">${scriptObj.content}</div>`.fmt();
}
builder._scriptEntryInner_changeBg = function(scriptObj){
	return `
		<div class="_scriptEntry_specialCmd">${MSG["cmd_changeBg"]}</div>
		<div class="_scriptEntry_image" style="background-image: url(${scriptObj.bgUrl});" data-url="${scriptObj.bgUrl}"></div>`.fmt();
}
builder._scriptEntryInner_halt = function(){
	return `<div class="_scriptEntry_specialCmd">${MSG["cmd_halt"]}</div>`;
}
builder._scriptEntryInner_sectTitle = function(scriptObj){
	return `<div class="_scriptEntry_specialCmd">${MSG["section_title"]}：<span>${scriptObj.text}</span></div>`;
}

/*----------------
  Control Window Content
 ----------------*/
builder.ctrlWin_editBgImg = function(imgUrl){
	return `
		<div class="row"><b>${MSG["imgUrl"]}：</b><div><input type=text id="_input_imgUrl" class="fullWidth" value="${imgUrl}"></div></div>
		<div class="row"><div id="_output_imgPreview" style="background-image:url(${imgUrl});"></div></div>`.fmt();
}
builder.ctrlWin_editTalk = function(actorCfg, actorId, content, isOtherCh, isOnlyShowMain){
	var actorObj = actorCfg[actorId];
	return `
		<div class="row"><b>${MSG["talk_actor"]}：</b>
			<select id="_input_actor">${Object.values(actorCfg).map( actor => builder._ctrlWin_actorEntry(actor, actor.id==actorId) )}</select>
		</div>
		<div class="row"><b>${MSG["talk_channel"]}：</b>
			<input type="radio" id="chMain"  name="channel" value="main" ${isOtherCh? "": "checked"}>${MSG["ch_main"]}
			<input type="radio" id="chOther" name="channel" value="other" ${isOtherCh? "checked": ""} ${isOnlyShowMain? "disabled": ""}>${MSG["ch_other"]}
		</div>
		<div class="row"><textarea id="_input_content">${content}</textarea></div>`.fmt();
}
builder.ctrlWin_editSectTitle = function(text){
	return `
		<div class="row"><b>${MSG["section_title"]}：</b>
			<input type="text" id="_input_section_title" class="long" value="${text}">
		</div>`.fmt();
}
builder._ctrlWin_actorEntry = function(actorObj, isSelected){
	return `<option value="${actorObj.id}" ${isSelected? "selected": ""}>${actorObj.name}</option>`;
}


/*----------------
  Basic Element 
 ----------------*/
builder.controlWindow = function(){
	return `
		<div class="_ctrlwindow">
			<div class="_ctrlbar">
				<div class="_ctrlbar_title"></div>
				<div>
					<span class="cross-stand-alone">&nbsp;</span>
				</div>
			</div>
			<div class="_ctrlbody"></div>
			<div class="_ctrlfooter">
				<div class="row right"><button id="_btn_ctrlWinApply" class="_btn_save">${MSG["btn_apply"]}</button></div>
			</div>
		</div>`;
}
builder.confirmWindow = function(){
	return `
		<div id="_cnfmwindow">
			<div class="message"></div>
			<div class="row">
				<button id="_btn_cnfm_yes" class="_btn_confrim">${MSG["Yes"]}</button>
				<button id="_btn_cnfm_no"  class="_btn_confrim">${MSG["No"]}</button>
			</div>
		</div>`.fmt();
}
builder.messageBox = function(){
	return `<div id="_msgbox"></div>`;
}
builder.blockScreen = function(){
	return `<div id="_blockScreen"></div>`
}
builder.mainFrame = function(){
	return `
		<div id="_toolbar">
			<div id='_toolbar_leftGroup'>
				<div class="_btn_group">
					<div id="btn_import" class="_btn clickable">
						<div class="_icon"></div><div class="_label">${MSG["btn_import"]}</div>
					</div>
					<div id="btn_export" class="_btn clickable">
						<div class="_icon"></div><div class="_label">${MSG["btn_export"]}</div>
					</div>
				</div>
				<div class="_btn_group">
					<div id="btn_to_general" class="_btn clickable">
						<div class="_icon"></div><div class="_label">${MSG["btn_generalCfg"]}</div>
					</div>
					<div id="btn_to_actor" class="_btn clickable">
						<div class="_icon"></div><div class="_label">${MSG["btn_actorCfg"]}</div>
					</div>
					<div id="btn_to_script" class="_btn clickable">
						<div class="_icon"></div><div class="_label">${MSG["btn_scriptCfg"]}</div>
					</div>
				</div>
			</div>
			<div id='_toolbar_rightGroup'>
					<div id="btn_to_info" class="_btn clickable">
						<div class="_icon"></div><div class="_label">${MSG["btn_information"]}</div>
					</div>
			</div>
		</div>
		<div id="_workspace">
			<div id="_leftCol"></div>
			<div id="_rightCol"></div>
		</div>`.fmt();
}

String.prototype.fmt = function(){
	return this.replace(/[\t]/g, '')
}