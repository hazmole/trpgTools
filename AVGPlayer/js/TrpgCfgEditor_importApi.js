class ImportAPI {
	constructor(){
		// TRPG-line
		this.TRPGLine = {
			getChannels: "https://test.trpgline.com/api/channels",
			getScripts: "https://test.trpgline.com/api/messages?channels="
		};
	}

	TRPGLine_GetChannels(roomId){
		var url = this.TRPGLine.getChannels;
		var headers = {
			'accept': 'application/json',
			'x-requested-with': 'XMLHttpRequest',
			'Authorization': `Bearer ${roomId}`,
		};
		this.send(url, headers, function(result){
			console.log(result);
		});
	}
	TRPGLine_GetScripts(roomId, channelArr){
		var url = this.TRPGLine.getScripts + channelArr.join(',');
		var headers = {
			'accept': 'application/json',
			'x-requested-with': 'XMLHttpRequest',
			'Authorization': `Bearer ${roomId}`,
		};
		this.send(url, headers, function(result){
			console.log(result);
		});
	}

	send(url, header, successFunc){
		$.ajax({
			type: "GET",
			url,
			headers,

			success: successFunc
		});
	}

}


