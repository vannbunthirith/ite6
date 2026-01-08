
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(){
	for(var i=1;i<=3;i++){
		var s=document.getElementById('ID_s2_btn0'+i);
		$(s).insertBefore("#slide_2_"+i)
	}

});