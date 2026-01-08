
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){		
		var manifest = [
		{src:"images/bg_bluegreen_gradient.jpg", id:"bg_bluegreen_gradient"},
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap3.png", id:"Bitmap3"}
	];
		return manifest;	
});

(slideViewDidLoad = function(_container,_id)
{
	if(_id==5)
	{
			  btnXPosArr=[102.95, 491.85, 594.75, 484.05];
  btnYPosArr=[303.75, 260.75, 260.75, 76.75];
	buttonArr=[];	
	sampleArray=[];
	bubbleArr=[];
	var lastBtnClick;
    bubbleTitleArr=["ID_s5_titleTxt01","ID_s5_titleTxt02","ID_s5_titleTxt03","ID_s5_titleTxt04"];
    bubbleTextArr=["ID_s5_bodyTxt01","ID_s5_bodyTxt02","ID_s5_bodyTxt03","ID_s5_bodyTxt04"];
	 function mouseOverFunc_1(e) {
            $("#" + e.target.id.split('_dummy')[1]).attr("src", "plus_btn_over.png");

            if (lastBtnClick == e.target.id.split('_dummy')[1]) {
                $("#" + e.target.id.split('_dummy')[1]).attr("src", "plus_btn_over2.png");
            }
        }

        function mouseOutFunc_1(e) {
            $("#" + e.target.id.split('_dummy')[1]).attr("src", "plus_btn.png");
            if (lastBtnClick == e.target.id.split('_dummy')[1]) {
                $("#" + e.target.id.split('_dummy')[1]).attr("src", "plus_btn_over2.png");
            }

        }

        function clickFunction_1(e) {
            if (lastBtnClick != null) {
                $("#" + lastBtnClick).attr("src", "plus_btn.png");
                $("#" + lastBtnClick).on("mouseover", mouseOverFunc);
                $("#" + lastBtnClick).on("mouseout", mouseOutFunc);
                bubbleArr[lastBtnClick].visible = false;
            }
            lastBtnClick = e.target.id.split('_dummy')[1];
            $("#" + e.target.id.split('_dummy')[1]).attr("src", "plus_btn_over2.png");
            bubbleArr[e.target.id.split('_dummy')[1]].visible = true;

        }

		function clickFunction(e){
		if(lastBtnClick!=null){
			
			$("#"+lastBtnClick).attr("src","plus_btn.png");
			$("#"+lastBtnClick).on("mouseover",mouseOverFunc);
			$("#"+lastBtnClick).on("mouseout",mouseOutFunc);
			bubbleArr[lastBtnClick].visible=false;
		}
	    lastBtnClick=e.target.id
		$("#"+e.target.id).attr("src","plus_btn_over2.png");		
		$("#"+e.target.id).off("mouseover",mouseOverFunc);
		$("#"+e.target.id).off("mouseout",mouseOutFunc);
		bubbleArr[e.target.id].visible=true;
	}
	
	
	function mouseOverFunc(e){	
		$("#"+e.target.id).attr("src","plus_btn_over.png");
	}
	
	
	function mouseOutFunc(e){
		$("#"+e.target.id).attr("src","plus_btn.png");
	}	
		
	for(var i=0;i<4;i++)
	{
         var btn2 = getCJSElement("TEXTBOX",{x:196,y:226,width:250,height:224.85,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
		_container.addChild(btn2);		
		bubbleArr[i]=btn2;
		bubbleArr[i].visible=false;
		var j =i +1;
                if (j <= btnXPosArr.length) {
                    var s = document.getElementById("textBoxDiv_" + j);
                    $("#slide_5").append(s);
                }
		var htmlElement = document.createElement("div");
		htmlElement.style.cssText = "position:absolute;";
		htmlElement.id = "domElement_"+i;
		htmlElement.innerHTML = "<img id="+i+" 'height='50' alt='button' width='50' src='plus_btn.png'></img>";
		
		$("#slide_5").append(htmlElement)
		$("#"+i).on("click",clickFunction)
		$("#"+i).on("mouseover",mouseOverFunc);
		$("#"+i).on("mouseout",mouseOutFunc);
		$("#domElement_"+i).css("top",btnYPosArr[i]+"px")
		$("#domElement_"+i).css("left",btnXPosArr[i]+"px")
		$("#domElement_"+i).css("cursor","pointer")

			
            var _btn = document.createElement("button");
            _btn.style.cssText = "border: 1px solid rgb(0,0,0,0);padding: 0;background-color: transparent;top:1px;left:px;width:36px;height:36px;cursor:pointer;visibility:visible;pointer-events:none;";
            _btn.innerHTML = " ";
            _btn.id = "domElement_dummy" + i;
            _btn.tabIndex = 0;
            _btn.name="moreInfo";
            $("#slide_5").append(_btn);
            $(_btn).insertBefore($('#textBoxDiv_' + j));
            $("#domElement_dummy" + i).on("focus", mouseOverFunc_1);
            $("#domElement_dummy" + i).on("focusout", mouseOutFunc_1);
            $("#domElement_dummy" + i).on("click", clickFunction_1);
            $("#domElement_dummy" + i).css({ "position": "absolute", "margin-top": btnYPosArr[i] + 3 + "px", "margin-left": btnXPosArr[i] + 5 + "px" })
	
	}

	var domElement = new createjs.DOMElement(htmlElement);


	}


	 function handlerMethod(event) {
		
		ID_txt02.visible=!(ID_txt02.visible);
		ID_txt01.visible=!(ID_txt01.visible);
		btn2.visible=!(btn2.visible);
		
		hit.visible=!(hit.visible);
		
		
	   
 }
 
 function handlerOverMethod(event)
 {

	btn1.visible=true;
	

 }
  function handlerOutMethod(event)
 {
	btn1.visible=false;
	}

});

