function registerSWF() {
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container, _id) {
    if (_id == 1) {
        btnXPosArr = [635.5, 414.65, 635.5, 195.5, 635.5];
        btnYPosArr = [75.95, 38.7, 141.1, 38.7, 293.8];
        buttonArr = [];
        sampleArray = [];
        bubbleArr = [];
        var lastBtnClick;
        var bubbleTitleArr = ["ID_s1_titleTxt01", "ID_s1_titleTxt02", "ID_s1_titleTxt03", "ID_s1_titleTxt04", "ID_s1_titleTxt05"]
        var bubbleTextArr = ["ID_s1_bodyTxt01", "ID_s1_bodyTxt02", "ID_s1_bodyTxt03", "ID_s1_bodyTxt04", "ID_s1_bodyTxt05"]

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
            var btn2 = getCJSElement("TEXTBOX", { x: 14, y: 416.75, width: 640, height: 60, size: 11, bodyId: bubbleTextArr[i] });
            _container.addChild(btn2);
            bubbleArr[i] = btn2;
            bubbleArr[i].visible = false;
            fs = i + 1;
                if (fs <= btnXPosArr.length) {
                    var s = document.getElementById("textBoxDiv_" + fs);
                    $("#slide_1").append(s);
                }
            var htmlElement = document.createElement("div");
            htmlElement.style.cssText = "position:absolute;";
            htmlElement.id = "domElement_" + i;
            htmlElement.innerHTML = "<img id=" + 'slide1_' + i + " 'height='45' width='45' alt='button' src='plus_btn.png'></img>";

            $("#mediaContainer").find('#commonMediaText').find('#slide_1').append(htmlElement)
            $("#slide1_" + i).on("click", clickFunction)
            $("#slide1_" + i).on("mouseover", mouseOverFunc);
            $("#slide1_" + i).on("mouseout", mouseOutFunc);
            $("#domElement_" + i).css("top", btnYPosArr[i] + "px")
            $("#domElement_" + i).css("left", btnXPosArr[i] + "px")
            $("#domElement_" + i).css("cursor", "pointer")
            $("#domElement_" + i).css("z-index", "99")


            var _btn = document.createElement("button");
            _btn.style.cssText = "border: 1px solid rgb(0,0,0,0);padding: 0;background-color: transparent;opacity:1;top:2px;left:2px;width:30px;height:30px;cursor:pointer;visibility:visible;pointer-events:none;";
            _btn.innerHTML = " ";
            _btn.id = "domElement_dummy" + i;
            _btn.tabIndex = 0;
            _btn.name = "moreInfo";
            $("#slide_1").append(_btn);
            $(_btn).insertBefore($('#textBoxDiv_' + fs));
            
            $("#domElement_dummy" + i).on("focus", mouseOverFunc_1);
            $("#domElement_dummy" + i).on("focusout", mouseOutFunc_1);
            $("#domElement_dummy" + i).on("click", clickFunction_1);
            $("#domElement_dummy" + i).css({ "position": "absolute", "margin-top": btnYPosArr[i] + 3 + "px", "margin-left": btnXPosArr[i] + 5 + "px" })

        }



        var domElement = new createjs.DOMElement(htmlElement);
    }

    if (_id == 2) {
        btnXPosArr1 = [635.5, 635.5, 635.5, 635.5, 414.65, 195.5, 635.5];
        btnYPosArr1 = [78.95, 143.2, 210.7, 37.7, 38.7, 38.7, 374.65];
        buttonArr1 = [];
        sampleArray1 = [];
        bubbleArr1 = [];
        var lastBtnClick1;
        bubbleTitleArr1 = ["ID_titleTxt01", "ID_titleTxt02", "ID_titleTxt03", "ID_titleTxt04", "ID_titleTxt05", "ID_titleTxt06", "ID_titleTxt07"];
        bubbleTextArr1 = ["ID_s2_bodyTxt01", "ID_s2_bodyTxt02", "ID_s2_bodyTxt03", "ID_s2_bodyTxt04", "ID_s2_bodyTxt05", "ID_s2_bodyTxt06", "ID_s2_bodyTxt07"];

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
            var btn2 = getCJSElement("TEXTBOX", { x: 14, y: 416.75, width: 640, height: 60, size: 11, bodyId: bubbleTextArr1[i] });

            _container.addChild(btn2);
            bubbleArr1[i] = btn2;
            bubbleArr1[i].visible = false;
                fs2 = i + 6;
                if (fs2 <= btnXPosArr1.length + fs2) {
                    var s = document.getElementById("textBoxDiv_" + fs2);
                    $("#slide_2").append(s);
                }
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

            var _btn = document.createElement("button");
            _btn.style.cssText = "border: 1px solid rgb(0,0,0,0);padding: 0;background-color: transparent;opacity:1;top:2px;left:2px;width:30px;height:30px;cursor:pointer;visibility:visible;pointer-events:none;";
            _btn.innerHTML = " ";
            _btn.id = "domElement_dummy2" + i;
            _btn.tabIndex = 0;
            _btn.name = "moreInfo";
            $("#slide_2").append(_btn);
            $(_btn).insertBefore($('#textBoxDiv_' + fs2));
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
        $("#slide1_" + _id).attr("width", "32");
        $("#slide1_" + _id).attr("height", "32");
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
        $("#slide2_" + _id).attr("width", "32");
        $("#slide2_" + _id).attr("height", "32");
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
