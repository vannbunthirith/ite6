function registerSWF() {
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container, _id) {
    if (_id == 1) {
        btnXPosArr = [20, 622, 20, 622];
        btnYPosArr = [138.5, 134, 206, 206];
        buttonArr = [];
        sampleArray = [];
        bubbleArr = [];
        var lastBtnClick;
        bubbleTitleArr = ["ID_s1_titleTxt01", "ID_s1_titleTxt02", "ID_s1_titleTxt03", "ID_s1_titleTxt04"]
        bubbleTextArr = ["ID_s1_bodyTxt01", "ID_s1_bodyTxt02", "ID_s1_bodyTxt03", "ID_s1_bodyTxt04"]

        function mouseOverFunc_1(e) {
            $("#slide1_" + e.target.id.split('_dummy')[1]).attr("src", "plus_btn_over.png");
            $("#slide1_" + e.target.id.split('_dummy')[1]).attr("width", "45");
            $("#slide1_" + e.target.id.split('_dummy')[1]).attr("height", "45");

            if (lastBtnClick == e.target.id.split('_dummy')[1]) {
                $("#slide1_" + e.target.id.split('_dummy')[1]).attr("src", "plus_btn_over2.png");
                $("#slide1_" + e.target.id.split('_dummy')[1]).attr("width", "35");
                $("#slide1_" + e.target.id.split('_dummy')[1]).attr("height", "35");
            }
        }

        function mouseOutFunc_1(e) {
            $("#slide1_" + e.target.id.split('_dummy')[1]).attr("src", "plus_btn.png");
            $("#slide1_" + e.target.id.split('_dummy')[1]).attr("width", "45");
            $("#slide1_" + e.target.id.split('_dummy')[1]).attr("height", "45");
            if (lastBtnClick == e.target.id.split('_dummy')[1]) {
                $("#slide1_" + e.target.id.split('_dummy')[1]).attr("src", "plus_btn_over2.png");
                $("#slide1_" + e.target.id.split('_dummy')[1]).attr("width", "35");
                $("#slide1_" + e.target.id.split('_dummy')[1]).attr("height", "35");
            }

        }

        function clickFunction_1(e) {

            if (lastBtnClick != null) {
                $("#slide1_" + lastBtnClick).attr("src", "plus_btn.png");
                $("#slide1_" + lastBtnClick).attr("width", "45");
                $("#slide1_" + lastBtnClick).attr("height", "45");
                $("#slide1_" + lastBtnClick).on("mouseover", mouseOverFunc);
                $("#slide1_" + lastBtnClick).on("mouseout", mouseOutFunc);
                bubbleArr[lastBtnClick].visible = false;
            }
            lastBtnClick = e.target.id.split('_dummy')[1];
            $("#slide1_" + e.target.id.split('_dummy')[1]).attr("src", "plus_btn_over2.png");
            $("#slide1_" + e.target.id.split('_dummy')[1]).attr("width", "35");
            $("#slide1_" + e.target.id.split('_dummy')[1]).attr("height", "35");
            bubbleArr[e.target.id.split('_dummy')[1]].visible = true;

        }

        for (var i = 0; i < btnXPosArr.length; i++) {
            var btn2 = getCJSElement("TEXTBOX", { x: 142.6, y: 362.3, width: 395, height: 110, size: 11, subType: "CLOSABLE", titleId: bubbleTitleArr[i], bodyId: bubbleTextArr[i] });
            _container.addChild(btn2);
            bubbleArr[i] = btn2;
            bubbleArr[i].visible = false;

            var htmlElement = document.createElement("div");
            htmlElement.style.cssText = "position:absolute;";
            htmlElement.id = "domElement_" + i;
            htmlElement.innerHTML = "<img id=" + 'slide1_' + i + " height='45' width='45' alt='button' src='plus_btn.png'></img>";

            $("#mediaContainer").find('#commonMediaText').find('#slide_1').append(htmlElement)
            $("#slide1_" + i).on("click", clickFunction)
            $("#slide1_" + i).on("mouseover", mouseOverFunc);
            $("#slide1_" + i).on("mouseout", mouseOutFunc);
            $("#domElement_" + i).css("top", btnYPosArr[i] + "px")
            $("#domElement_" + i).css("left", btnXPosArr[i] + "px")
            $("#domElement_" + i).css("cursor", "pointer")
            $("#domElement_" + i).css("z-index", "99")


            // var _btn = document.createElement("button");
            // _btn.style.cssText = "border: 1px solid rgb(0,0,0,0);padding: 0;background-color: transparent;opacity:0;top:2px;left:2px;width:30px;height:30px;cursor:pointer;visibility:visible;pointer-events:none;";
            // _btn.innerHTML = " ";
            // _btn.id = "domElement_dummy" + i;
            // _btn.tabIndex = i + 1;
                
             j=i+1;   
            var label = document.createElement("button");
            label.style.cssText = "width: 35px;height:35px;border: 1px solid rgba(0,0,0,0);padding: 0;background-color:transparent;top:-2px;left:-2px;cursor:pointer;pointer-events:none;";
            label.innerHTML ="";
            label.name="moreInfo";
            label.id = "domElement_dummy"+ i ;
            label.tabIndex = 0;
            $('#slide_1').append($('#textBoxDiv_' + j))
            $('#slide_1').append($('#domElement_close' + j))
            
            $(label).insertBefore($('#textBoxDiv_' + j));
            //$("#slide_1").append(label);
            $("#domElement_dummy" + i).on("focus", mouseOverFunc_1);
            $("#domElement_dummy" + i).on("focusout", mouseOutFunc_1);
            $("#domElement_dummy" + i).on("click", clickFunction_1);
            $("#domElement_dummy" + i).css({ "position": "absolute", "margin-top": btnYPosArr[i] + 3 + "px", "margin-left": btnXPosArr[i] + 5 + "px" })


        }




        var domElement = new createjs.DOMElement(htmlElement);
    }

    if (_id == 2) {
        btnXPosArr1 = [567.95, 602.45, 624.95, 624.95, 602.45, 192.5, 20, 20];
        btnYPosArr1 = [40.95, 95, 150.75, 225.7, 300.35, 427.45, 427.45, 144.5];
        buttonArr1 = [];
        sampleArray1 = [];
        bubbleArr1 = [];
        var lastBtnClick1;
        bubbleTitleArr1 = ["ID_s2_titleTxt01", "ID_s2_titleTxt02", "ID_s2_titleTxt03", "ID_s2_titleTxt04", "ID_s2_titleTxt05", "ID_s2_titleTxt06", "ID_s2_titleTxt07", "ID_s2_titleTxt08"];
        bubbleTextArr1 = ["ID_s2_bodyTxt01", "ID_s2_bodyTxt02", "ID_s2_bodyTxt03", "ID_s2_bodyTxt04", "ID_s2_bodyTxt05", "ID_s2_bodyTxt06", "ID_s2_bodyTxt07", "ID_s2_bodyTxt08"];

        function mouseOverFunc_2(e) {
            $("#slide2_" + e.target.id.split('_dummy2')[1]).attr("src", "plus_btn_over.png");
            $("#slide2_" + e.target.id.split('_dummy2')[1]).attr("width", "45");
            $("#slide2_" + e.target.id.split('_dummy2')[1]).attr("height", "45");

            if (lastBtnClick1 == e.target.id.split('_dummy2')[1]) {
                $("#slide2_" + e.target.id.split('_dummy2')[1]).attr("src", "plus_btn_over2.png");
                $("#slide2_" + e.target.id.split('_dummy2')[1]).attr("width", "35");
                $("#slide2_" + e.target.id.split('_dummy2')[1]).attr("height", "35");
            }
        }

        function mouseOutFunc_2(e) {
            $("#slide2_" + e.target.id.split('_dummy2')[1]).attr("src", "plus_btn.png");
            $("#slide2_" + e.target.id.split('_dummy2')[1]).attr("width", "45");
            $("#slide2_" + e.target.id.split('_dummy2')[1]).attr("height", "45");
            if (lastBtnClick1 == e.target.id.split('_dummy2')[1]) {
                $("#slide2_" + e.target.id.split('_dummy2')[1]).attr("src", "plus_btn_over2.png");
                $("#slide2_" + e.target.id.split('_dummy2')[1]).attr("width", "35");
                $("#slide2_" + e.target.id.split('_dummy2')[1]).attr("height", "35");
            }

        }

        function clickFunction_2(e) {
            if (lastBtnClick1 != null) {
                $("#slide2_" + lastBtnClick1).attr("src", "plus_btn.png");
                $("#slide2_" + lastBtnClick1).attr("width", "45");
                $("#slide2_" + lastBtnClick1).attr("height", "45");
                $("#slide2_" + lastBtnClick1).on("mouseover", mouseOverFunc);
                $("#slide2_" + lastBtnClick1).on("mouseout", mouseOutFunc);
                bubbleArr1[lastBtnClick1].visible = false;
            }
            lastBtnClick1 = e.target.id.split('_dummy2')[1];
            $("#slide2_" + e.target.id.split('_dummy2')[1]).attr("src", "plus_btn_over2.png");
            $("#slide2_" + e.target.id.split('_dummy2')[1]).attr("width", "35");
            $("#slide2_" + e.target.id.split('_dummy2')[1]).attr("height", "35");
            bubbleArr1[e.target.id.split('_dummy2')[1]].visible = true;

        }

        for (var i = 0; i < btnXPosArr1.length; i++) {
            var btn2 = getCJSElement("TEXTBOX", { x: 350, y: 356.85, width: 310, height: 130, size: 11, subType: "CLOSABLE", titleId: bubbleTitleArr1[i], bodyId: bubbleTextArr1[i] });
            _container.addChild(btn2);
            bubbleArr1[i] = btn2;
            bubbleArr1[i].visible = false;

            var htmlElement1 = document.createElement("div");
            htmlElement1.style.cssText = "position:absolute;";
            htmlElement1.id = "domElement2_" + i;
            htmlElement1.innerHTML = "<img id=" + 'slide2_' + i + " 'height='45' width='45' alt='button' src='plus_btn.png'></img>";

            $("#mediaContainer").find('#commonMediaText').find('#slide_2').append(htmlElement1)
            $("#slide2_" + i).on("click", clickFunction1)
            $("#slide2_" + i).on("mouseover", mouseOverFunc1);
            $("#slide2_" + i).on("mouseout", mouseOutFunc1);
            $("#domElement2_" + i).css("top", btnYPosArr1[i] + "px")
            $("#domElement2_" + i).css("left", btnXPosArr1[i] + "px")
            $("#domElement2_" + i).css("cursor", "pointer")
            $("#domElement2_" + i).css("z-index", "99")

            // var _btn = document.createElement("button");
            // _btn.style.cssText = "border: 1px solid rgb(0,0,0,0);padding: 0;background-color: transparent;opacity:0;top:2px;left:2px;width:30px;height:30px;cursor:pointer;visibility:visible;pointer-events:none;";
            // _btn.innerHTML = " ";
            // _btn.id = "domElement_dummy2" + i;
            // _btn.tabIndex = i + 1;
           j=i+1; 
           fs = i+5;  
            var label = document.createElement("button");
            label.style.cssText = "width: 35px;height:35px;border: 1px solid rgba(0,0,0,0);padding: 0;background-color:transparent;top:-2px;left:-2px;cursor:pointer;pointer-events:none;";
            label.innerHTML ="";
            label.name="moreInfo";
            label.id = "domElement_dummy2"+ i ;
            label.tabIndex = 0;
            //$("#slide_2").append(label);
            $('#slide_2').append($('#textBoxDiv_' + fs));
            $('#slide_2').append($('#domElement_close' + fs));
            $(label).insertBefore($('#textBoxDiv_' + fs));

            
            $("#domElement_dummy2" + i).on("focus", mouseOverFunc_2);
            $("#domElement_dummy2" + i).on("focusout", mouseOutFunc_2);
            $("#domElement_dummy2" + i).on("click", clickFunction_2);
            $("#domElement_dummy2" + i).css({ "position": "absolute", "margin-top": btnYPosArr1[i] + 3 + "px", "margin-left": btnXPosArr1[i] + 5 + "px" })


        }

        var domElement = new createjs.DOMElement(htmlElement1);
    }


    function clickFunction(e) {
        var _id = e.target.id.split('_')[1];
        if (lastBtnClick != null) {
            
            $("#slide1_" + lastBtnClick).attr("src", "plus_btn.png");
            $("#slide1_" + lastBtnClick).attr("width", "45");
            $("#slide1_" + lastBtnClick).attr("height", "45");
            $("#domElement_" + lastBtnClick).css("top", (btnYPosArr[lastBtnClick]) + "px");
            $("#domElement_" + lastBtnClick).css("left", (btnXPosArr[lastBtnClick]) + "px")
            $("#slide1_" + lastBtnClick).on("mouseover", mouseOverFunc);
            $("#slide1_" + lastBtnClick).on("mouseout", mouseOutFunc);
            bubbleArr[lastBtnClick].visible = false;
        }
       
        lastBtnClick = _id
        $("#slide1_" + _id).attr("src", "plus_btn_over2.png");
        $("#slide1_" + _id).attr("width", "35");
        $("#slide1_" + _id).attr("height", "35");
        $("#domElement_" + _id).css("top", (btnYPosArr[_id] + 5) + "px");
        $("#domElement_" + _id).css("left", (btnXPosArr[_id] + 3) + "px")
        $("#slide1_" + _id).off("mouseover", mouseOverFunc);
        $("#slide1_" + _id).off("mouseout", mouseOutFunc);
        bubbleArr[_id].visible = true;
    }


    function mouseOverFunc(e) {
        var _id = e.target.id.split('_')[1];
        $("#slide1_" + _id).attr("src", "plus_btn_over.png");
    }


    function mouseOutFunc(e) {
        var _id = e.target.id.split('_')[1];
        $("#slide1_" + _id).attr("src", "plus_btn.png");
    }

    function clickFunction1(e) {
        var _id = e.target.id.split('_')[1];
        if (lastBtnClick1 != null) {
            
            $("#slide2_" + lastBtnClick1).attr("src", "plus_btn.png");
            $("#slide2_" + lastBtnClick1).attr("width", "45");
            $("#slide2_" + lastBtnClick1).attr("height", "45");
            $("#domElement2_" + lastBtnClick1).css("top", (btnYPosArr1[lastBtnClick1]) + "px");
            $("#domElement2_" + lastBtnClick1).css("left", (btnXPosArr1[lastBtnClick1]) + "px")
            $("#slide2_" + lastBtnClick1).on("mouseover", mouseOverFunc1);
            $("#slide2_" + lastBtnClick1).on("mouseout", mouseOutFunc1);
            bubbleArr1[lastBtnClick1].visible = false;
        }
        lastBtnClick1 = _id
        $("#slide2_" + _id).attr("src", "plus_btn_over2.png");
        $("#slide2_" + _id).attr("width", "35");
        $("#slide2_" + _id).attr("height", "35");
        $("#domElement2_" + _id).css("top", (btnYPosArr1[_id] + 5) + "px");
        $("#domElement2_" + _id).css("left", (btnXPosArr1[_id] + 3) + "px")
        $("#slide2_" + _id).off("mouseover", mouseOverFunc1);
        $("#slide2_" + _id).off("mouseout", mouseOutFunc1);
        bubbleArr1[_id].visible = true;
    }


    function mouseOverFunc1(e) {
        var _id = e.target.id.split('_')[1];
        $("#slide2_" + _id).attr("src", "plus_btn_over.png");
    }


    function mouseOutFunc1(e) {
        var _id = e.target.id.split('_')[1];
        $("#slide2_" + _id).attr("src", "plus_btn.png");
    }

});
