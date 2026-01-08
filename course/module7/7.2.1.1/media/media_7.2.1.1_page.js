loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

//Function triggers when all the slides/view contents are loaded
(slideViewDidLoad = function(slideContainer){	
	
	
	var imgArray = [
		{src:"7.2.1.1B.jpg", id:"image_2", x:"55", y:"310", width:"351.4", height:"110", clickSrc:"http://www.ieee.org/index.html", alt:"http://www.ieee.org/index.html"},
		{src:"7.2.1.1C.jpg", id:"image_3", x:"247", y:"50", width:"110", height:"110", clickSrc:"http://www.itu.int/en/Pages/default.aspx", alt:"http://www.ieee.org/index.html"},
		{src:"7.2.1.1D.jpg", id:"image_4", x:"90", y:"180", width:"285.8", height:"110", clickSrc:"http://www.iana.org/", alt:"http://www.ieee.org/index.html"},
		{src:"7.2.1.1E.jpg", id:"image_5", x:"426", y:"180", width:"164.2", height:"110", clickSrc:"http://www.icann.org/", alt:"http://www.ieee.org/index.html"},
		{src:"7.2.1.1F.jpg", id:"image_6", x:"456", y:"310", width:"170.5", height:"110", clickSrc:"http://www.tiaonline.org/", alt:"http://www.ieee.org/index.html"},
		{src:"7.2.1.1G.jpg", id:"image_7", x:"404", y:"50", width:"200.2", height:"110", clickSrc:"http://www.ietf.org/", alt:"http://www.ieee.org/index.html"},
		{src:"7.2.1.1A.png", id:"image_1", x:"76", y:"50", width:"119.9", height:"110", clickSrc:"http://www.iso.org", alt:"http://www.ieee.org/index.html"}];
		
		
		
		
	function imageLoaded(imgs){
		var dom;
		 //style='visibility:hidden;'
		for(var i = 0;i<imgArray.length;i++)
		{
			$("#commonMediaText").append("<div id=div_"+imgArray[i].id+" class='roundimg'><a href='"+imgArray[i].clickSrc+"' target='_blank'><img alt='"+imgArray[i].alt+"' src='"+imgArray[i].src+"' id='"+imgArray[i].id+"' width='"+imgArray[i].width+"' height='"+imgArray[i].height+"' /></a></div>");
			
			//dom = new createjs.DOMElement(document.getElementById(imgArray[i].id));
			divdom = new createjs.DOMElement(document.getElementById("div_"+imgArray[i].id));
			//dom.x = imgArray[i].x;
			//dom.y = imgArray[i].y;
			
			divdom.x = imgArray[i].x;
			divdom.y = imgArray[i].y;
			
			//slideContainer.addChild(dom);
			
			slideContainer.addChild(divdom);
			//divdom.addChild(dom);
		}
		
	}	
	loadImages(imgArray,imageLoaded);

});