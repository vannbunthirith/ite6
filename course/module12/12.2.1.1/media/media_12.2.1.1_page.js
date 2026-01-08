
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
if(_id == 3){
btnXPosArr=[62,62,62,62,62,62];
btnYPosArr=[130.05,177.15,224.25,271.35,318.45,365.55];
buttonArr=[];
buttonClickArr=[];
buttonOverArr=[];
bubbleArr=[];
sampleArray=[];
var lastBtnClick;
bubbleTitleArr=["ID_s3_txtTitle01","ID_s3_txtTitle02","ID_s3_txtTitle03","ID_s3_txtTitle04","ID_s3_txtTitle05","ID_s3_txtTitle06"]
bubbleTextArr=["ID_s3_txtBody01","ID_s3_txtBody02","ID_s3_txtBody03","ID_s3_txtBody04","ID_s3_txtBody05","ID_s3_txtBody06"]
for(var i=0;i<6;i++)
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
var btn2 = getCJSElement("TEXTBOX",{x:400,y:50,width:250,height:400,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
_container.addChild(btn2);

bubbleArr[i]=btn2;
buttonClickArr[0].visible=true;
bubbleArr[0].visible=true;
bubbleArr[i].visible=false;
//accessibility fix -------------------------------------
       j = i + 1;
                if (j <= btnXPosArr.length) {
                    var s = document.getElementById("textBoxDiv_" + (j+1));
                    $("#slide_3").append(s);
       }
        var label = document.createElement("button");
        label.style.cssText = "border: 1px solid rgba(0,0,0,0);padding: 0;background-color:transparent;top:2px;left:2px;cursor:pointer;pointer-events:none;";
        label.innerHTML = "";
        label.name="moreInfo";
        label.id = "btn" + j;
        label.tabIndex = 0;
        $("#slide_3").append(label);
        $(label).insertBefore($('#textBoxDiv_' + (j+1)));

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
            for (var i = 0; i < 6; i++) {

                bubbleArr[i].visible = false;
                buttonClickArr[i].visible = false;

            }
            
            bubbleArr[id].visible = true;
            buttonClickArr[id].visible = true;

        }

}
}

     function handlerMethod(event) {
        
        for(var i=0;i<6;i++)
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
