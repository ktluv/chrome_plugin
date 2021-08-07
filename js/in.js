var bg = chrome.extension.getBackgroundPage();
var playk= document.getElementById("play");
var st = document.getElementById("stop");
var switk = document.getElementById("switch");
switk.onclick = function(){
	bg.swit();
}
st.onclick = function(){
	bg.stop();
}
playk.onclick = function(){
	alert("没有play");
}