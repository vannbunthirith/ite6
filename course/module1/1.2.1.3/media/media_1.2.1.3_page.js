//loadScript("../../../common/scripts/templates/slide/InteractiveSlide.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad = function(){
	for(var i=1;i<=6;i++){
		var s=document.getElementById('ID_s2_btn0'+i);
		$(s).insertBefore("#slide_1_"+i)
	}

});