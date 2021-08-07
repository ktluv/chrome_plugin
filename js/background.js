var voice = {
				player: null,
				createPlayer: function() {
					voice.player = document.createElement("audio");
				},
				playContent: function(content) {
					if (voice.player == null) {
						voice.createPlayer();
					}
					voice.player.src = content;
					voice.player.play();
				}
			}
function swit(){
	var API = "https://api.uomg.com/api/rand.music?sort=热歌榜&format=json"
	var ajax = new XMLHttpRequest();
	ajax.open("GET",API,true);
	ajax.send();
	ajax.onload = function(){
		var datajson = JSON.parse(ajax.responseText);
		var url = datajson.data.url;
		var icon = datajson.data.picurl;
		var name = datajson.data.name;
		var views = chrome.extension.getViews({type:'popup'});
		for (var i = 0; i < views.length; i++) {
		    views[i].document.getElementById('name').value=name;
		    views[i].document.getElementById("icon").src=icon;            
		}
		voice.playContent(url);
	}
	
}
function stop(){
	voice.player.src = voice.url
	voice.player.pause();
}
