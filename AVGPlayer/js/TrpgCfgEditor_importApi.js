class ImportAPI {
	constructor(){
		// TRPG-line
		this.TRPGLine = {
			getChannels: "https://test.trpgline.com/api/room",
			getScripts: "https://test.trpgline.com/api/messages?channels="
		};
	}

	TRPGLine_GetChannels(roomId, callback){
		var url = this.TRPGLine.getChannels;
		var headers = {
			'accept': 'application/json',
			'x-requested-with': 'XMLHttpRequest',
			'Authorization': `Bearer ${roomId}`,
		};
		this.send(url, headers, function(result){
			callback(result);
		}, function(error){
			callback({ error: error.responseJSON.message });
		});
	}
	TRPGLine_GetScripts(roomId, channelArr, callback){
		var url = this.TRPGLine.getScripts + channelArr.join(',');
		var headers = {
			'accept': 'application/json',
			'x-requested-with': 'XMLHttpRequest',
			'Authorization': `Bearer ${roomId}`,
		};
		this.send(url, headers, function(result){
			callback(result);
		}, function(error){
			callback({ error: error.responseJSON.message });
		});
	}

	send(url, headers, successFunc, failFunc){
		$.ajax({
			type: "GET",
			url,
			headers,

			success: successFunc,
			error: failFunc
		});
	}

}


