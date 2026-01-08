
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(){
	for(var i=0;i<6;i++){
		var s=document.getElementById('ID_s1_btn0'+i);
		$(s).insertBefore("#commonMediaText_"+i)
	}
});
