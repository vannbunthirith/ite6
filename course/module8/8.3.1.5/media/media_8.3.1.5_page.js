function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
(slideViewDidLoad = function(_container,_id)
{
btnXPosArr=[68.05,200.4,334.95,200.4,83.35,193.65,312.35];
btnYPosArr=[195.4,120.3,195.4,400.6,319,250.3,319];
buttonArr=[];
buttonClickArr=[];
buttonOverArr=[];
bubbleArr=[];
sampleArray=[];
var lastBtnClick;

bubbleTitleArr=["ID_titleTxt01","ID_titleTxt02","ID_titleTxt03","ID_titleTxt04","ID_titleTxt05","ID_titleTxt06","ID_titleTxt07"]
bubbleTextArr=["ID_bodyTxt01","ID_bodyTxt02","ID_bodyTxt03","ID_bodyTxt04","ID_bodyTxt05","ID_bodyTxt06","ID_bodyTxt07"]
for(var i=0;i<7;i++)
{
var container=new createjs.Container()
_container.addChild(container);
container.id=i;

container.cursor="pointer";


btn = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn.png",});

buttonArr.push(btn);
container.addChild(btn);


btn1 = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn_over.png",});

buttonOverArr.push(btn1);
container.addChild(btn1);
btn1.visible=false;

btn4 = getCJSElement("IMAGE",{x:btnXPosArr[i]+5,y:btnYPosArr[i]+3,width:35,height:35,src:"plus_btn_over2.png",});

buttonClickArr.push(btn4);
container.addChild(btn4);
btn4.visible=false;

container.addEventListener("click", handlerMethod);
container.addEventListener("mouseover", handlerOverMethod);
container.addEventListener("mouseout", handlerOutMethod);
var btn2 = getCJSElement("TEXTBOX",{x:452.55,y:65.35,width:215,height:360,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
_container.addChild(btn2);

bubbleArr[i]=btn2;
bubbleArr[i].visible=false;
//accessibility fix -------------------------------------
       j = i + 1;
        var label = document.createElement("button");
        label.style.cssText = "border: 1px solid rgba(0,0,0,0);padding: 0;background-color:transparent;top:2px;left:2px;cursor:pointer;pointer-events:none;";
        label.innerHTML = "";
        label.name="moreInfo";
        label.id = "btn" + j;
        label.tabIndex = 0;
        $(label).insertBefore($('#textBoxDiv_' + j));

        $("#btn" + j).on("focus", mouseOver);
        $("#btn" + j).on("focusout", mouseOut);
        $("#btn" + j).on("click", mouseClick);
        $("#btn" + j).css({ "position": "absolute", "margin-top": btnYPosArr[i], "margin-left": btnXPosArr[i], "width": 35 + "px", "height": 35 + "px" });


        
        function mouseOver(event) {
            var id = (event.target.id.split('btn')[1]) - 1;
            buttonOverArr[id].visible = true;
        }
        //Mouse out function
        function mouseOut() {
            var id = (event.target.id.split('btn')[1]) - 1;
            buttonOverArr[id].visible = false;
        }
        //Mouse click function
        function mouseClick(event) {
            var id = (event.target.id.split('btn')[1]) - 1;
            for (var i = 0; i < 7; i++) {

                bubbleArr[i].visible = false;
                buttonClickArr[i].visible = false;

            }
            
            bubbleArr[id].visible = true;
            buttonClickArr[id].visible = true;

        }

}


	 function handlerMethod(event) {
		
		for(var i=0;i<7;i++)
		{
	
		bubbleArr[i].visible=false;
		buttonClickArr[i].visible=false;
		
		}
		if(lastBtnClick)
		{
		buttonOverArr[lastBtnClick.id].visible=false;
		lastBtnClick.addEventListener("mouseover", handlerOverMethod);
		lastBtnClick.addEventListener("mouseout", handlerOutMethod);
		}
		bubbleArr[event.target.id].visible=true;
		buttonClickArr[event.target.id].visible=true;

       event.target.removeEventListener("mouseover", handlerOverMethod);
       event.target.removeEventListener("mouseout", handlerOutMethod);
	   lastBtnClick=event.target;
	   
 }
 
 function handlerOverMethod(event)
 {

	buttonOverArr[event.target.id].visible=true;
	

 }
  function handlerOutMethod(event)
 {
	buttonOverArr[event.target.id].visible=false;
	}

	
});