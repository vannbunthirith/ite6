function registerSWF() {
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container, _id) {
    var currentClkdBtn;
    if (_id == 1) {
        var totalBtns = 3;
        var btnXPosArr = [413.2, 439.2, 465.1];
        var btnYPosArr = [220.6, 173.8, 220.6];
        var crossXPosArr = [428.45, 428.45, 428.45, 230.05, 309.55];
        var crossYPosArr = [97.75, 97.75, 97.75, 74.5, 74.5];
        var imageWidth = [96.70, 96.70, 96.70, 116.3, 116.3];
        var imageHeight = [99.40, 99.40, 99.40, 66.15, 70.1];

        var buttonArr = [];
        var buttonClickArr = [];
        var buttonOverArr = [];
        var bubbleArr = [];
        var bubbleTitleArr = ["ID_s01_titleTxt01", "ID_s01_titleTxt02", "ID_s01_titleTxt03"];
        var bubbleTextArr = ["ID_s01_bodyTxt01", "ID_s01_bodyTxt02", "ID_s01_bodyTxt03"];
        var popupImageArr = ["popup1.png", "popup2.png", "popup3.png"];
        var popupArr = [];
        var popupImageBtn = [];
        //var crossArr=[];
        var clickBool = false;

        var hit = new createjs.Shape();
        hit.graphics.beginFill("#FFFFFF").drawRect(198, 47.55, 350, 233);
        hit.alpha = 0.4;
        _container.addChild(hit);
        hit.visible = false;

        for (var i = 0; i < 3; i++) {
            var container = new createjs.Container()
            var container2 = new createjs.Container()
            _container.addChild(container);
            _container.addChild(container2);
            container.cursor = "pointer";
            container2.cursor = "pointer";
            container.id = i;

            if (i == 0) {
                var connection = getCJSElement("IMAGE", { x: 434.45, y: 141.9, width: 55, height: 95, src: "connectlines.png" });
                container.addChild(connection);
            }
            btn = getCJSElement("IMAGE", { x: btnXPosArr[i], y: btnYPosArr[i], width: 48, height: 58.70, src: "plus_btn.png" });
            buttonArr.push(btn);
            container.addChild(btn);

            btn1 = getCJSElement("IMAGE", { x: btnXPosArr[i], y: btnYPosArr[i], width: 48, height: 58.70, src: "plus_btn_over.png" });
            buttonOverArr.push(btn1);
            container.addChild(btn1);
            btn1.visible = false;

            popupimage = getCJSElement("IMAGE", { x: 0, y: 0, width: 680, height: 490, src: popupImageArr[i] });
            container2.addChild(popupimage);
            popupArr[i] = popupimage;
            popupArr[i].visible = false;


            container2.addEventListener("click", handlerMethod);
            container.addEventListener("click", handlerMethod2);
            container.addEventListener("mouseover", handlerOverMethod);
            container.addEventListener("mouseout", handlerOutMethod);

            var j=i+1;
            var _btn = document.createElement("button");
            _btn.style.cssText = "border: 1px solid rgb(0,0,0,0);padding: 0;background-color: transparent;opacity:0;top:2px;left:2px;width:30px;height:30px;cursor:pointer;visibility:visible;pointer-events:none;";
            _btn.innerHTML = "";
            _btn.id = "domElement_dummy" + i;
            _btn.tabIndex = 0;
            _btn.name = "close";
            $("#mediaContainer").append(_btn);
            $(_btn).insertBefore($('#textBoxDiv_' + j));
            $("#domElement_dummy" + i).on("click", handlerMethod);
            $("#domElement_dummy" + i).css({ "position": "absolute", "margin-top": crossYPosArr[i] - 30 + "px", "margin-left": crossXPosArr[i] - 10 + "px", "width": imageWidth[i] + 10 + "px", "height": imageHeight[i] + 10 + "px" })
            var domElement = new createjs.DOMElement(_btn);
            container.addChild(domElement);
            popupImageBtn[i] = domElement;
            popupImageBtn[i].visible = false;


            var txtbox = getCJSElement("TEXTBOX", { x: 90, y: 315, width: 500, height: 170, size: 11, titleId: bubbleTitleArr[i], bodyId: bubbleTextArr[i] });
            _container.addChild(txtbox);

            bubbleArr[i] = txtbox;
            bubbleArr[i].visible = false;

            //accessibility fix -------------------------------------
            var label = new ButtonLabelComp({ x: 5, y: 4, width: 35, height: 35, compId: "text_id_0" + (i), align: "center", color: "#343434", bold: "obj.bold", style: "pointer-events:all;cursor:pointer;" + "line-height:" + "1.1" });
            btn.addChild(label);
            $("#text_id_0"+i).attr("name","moreInfo");
            btn.mouseOver = function(event) {
                buttonOverArr[this.parent.id].visible = true;
            }
            //Mouse out function
            btn.mouseOut = function() {
                buttonOverArr[this.parent.id].visible = false;
            }
            //Mouse click function
            btn.mouseClick = function(event) {

                currentClkdBtn = $("#text_id_0" + this.parent.id);

                for (var i = 0; i < totalBtns; i++) {
                    popupArr[i].visible = false;
                    bubbleArr[i].visible = false;
                    popupImageBtn[i].visible = false;

                    if (clickBool == false) {
                        showButtons(false);
                        popupArr[this.parent.id].visible = true;
                        bubbleArr[this.parent.id].visible = true;
                        buttonOverArr[this.parent.id].visible = false;
                        popupImageBtn[this.parent.id].visible = true;
                        hit.visible = true;
                        clickBool = true;

                        
                    } else {


                        showButtons(true);
                        clickBool = false;

                        hit.visible = false;
                    }

                }

            }

        }
    } else if (_id == 2) {
        var totalBtns = 3;
        var btnXPosArr = [268, 424, 467.5];
        var btnYPosArr = [203.8, 203.8, 203.8];
        var crossXPosArr = [131.10, 414.95, 351.50, 230.05, 309.55];
        var crossYPosArr = [124.45, 118.90, 121.45, 74.5, 74.5];
        var imageWidth = [374.15, 87, 214.3, 208.95, 116.3];
        var imageHeight = [71.25, 94.80, 81.05, 66.15, 70.1];

        var buttonArr = [];
        var buttonClickArr = [];
        var buttonOverArr = [];
        var bubbleArr = [];
        var sampleArray = [];
        var lastBtnClick;
        var bubbleTitleArr = ["ID_s02_titleTxt01", "ID_s02_titleTxt02", "ID_s02_titleTxt03"];
        var bubbleTextArr = ["ID_s02_bodyTxt01", "ID_s02_bodyTxt02", "ID_s02_bodyTxt03"];
        var popupImageArr = ["popup_s2_1.png", "popup_s2_2.png", "popup_s2_3.png"];
        var popupArr = [];
        var popupImageBtn = [];
        //var crossArr=[];
        var clickBool = false;
        var btnXPos = 45
        var btnYPos = 60;
        var textContainer;

        var hit = new createjs.Shape();
        hit.graphics.beginFill("#FFFFFF").drawRect(128, 143.9, 420.6, 45.7);
        hit.alpha = 0.4;
        _container.addChild(hit);
        hit.visible = false;

        for (var i = 0; i < totalBtns; i++) {
            var container = new createjs.Container()
            var container2 = new createjs.Container()
            _container.addChild(container);
            _container.addChild(container2);
            container.cursor = "pointer";
            container2.cursor = "pointer";
            container.id = i;

            if (i == 0) {
                var connection = getCJSElement("IMAGE", { x: 0, y: 0, width: 680, height: 490, src: "connectinglines2.png" });
                container.addChild(connection);
            }
            btn = getCJSElement("IMAGE", { x: btnXPosArr[i], y: btnYPosArr[i], width: 48, height: 58.70, src: "plus_btn.png" });
            buttonArr.push(btn);
            container.addChild(btn);

            btn1 = getCJSElement("IMAGE", { x: btnXPosArr[i], y: btnYPosArr[i], width: 48, height: 58.70, src: "plus_btn_over.png" });
            buttonOverArr.push(btn1);
            container.addChild(btn1);
            btn1.visible = false;

            popupimage = getCJSElement("IMAGE", { x: 0, y: 0, width: 680, height: 490, src: popupImageArr[i] });
            container2.addChild(popupimage);
            popupArr[i] = popupimage;
            popupArr[i].visible = false;

            container2.addEventListener("click", handlerMethod);
            container.addEventListener("click", handlerMethod2);
            container.addEventListener("mouseover", handlerOverMethod);
            container.addEventListener("mouseout", handlerOutMethod);
            var j = i+4;
            var _btn = document.createElement("button");
            _btn.style.cssText = "border: 1px solid rgb(0,0,0,0);padding: 0;background-color: transparent;opacity:0;top:2px;left:2px;width:30px;height:30px;cursor:pointer;visibility:visible;pointer-events:none;";
            _btn.innerHTML = "";
            _btn.id = "domElement_dummy2" + i;
            _btn.tabIndex = 0;
            _btn.name = "close";
            $("#mediaContainer").append(_btn);
            $(_btn).insertBefore($('#textBoxDiv_' + j));
            $("#domElement_dummy2" + i).on("click", handlerMethod);
            $("#domElement_dummy2" + i).css({ "position": "absolute", "margin-top": crossYPosArr[i] - 30 + "px", "margin-left": crossXPosArr[i] - 10 + "px", "width": imageWidth[i] + 10 + "px", "height": imageHeight[i] + 10 + "px" })
            var domElement = new createjs.DOMElement(_btn);
            container.addChild(domElement);
            popupImageBtn[i] = domElement;
            popupImageBtn[i].visible = false;


            var txtbox = getCJSElement("TEXTBOX", { x: 90, y: 315, width: 500, height: 170, size: 11, titleId: bubbleTitleArr[i], bodyId: bubbleTextArr[i] });
            _container.addChild(txtbox);

            bubbleArr[i] = txtbox;
            bubbleArr[i].visible = false;

            //accessibility fix -------------------------------------
            var label = new ButtonLabelComp({ x: 5, y: 4, width: 35, height: 35, compId: "s2_text_id_0" + (i), align: "center", color: "#343434", bold: "obj.bold", style: "pointer-events:all;cursor:pointer;" + "line-height:" + "1.1" });
            btn.addChild(label);
            $("#s2_text_id_0"+i).attr("name","moreInfo");

            btn.mouseOver = function(event) {
                buttonOverArr[this.parent.id].visible = true;
            }
            //Mouse out function
            btn.mouseOut = function() {
                buttonOverArr[this.parent.id].visible = false;
            }
            //Mouse click function
            btn.mouseClick = function(event) {

                currentClkdBtn = $("#s2_text_id_0" + this.parent.id);

                for (var i = 0; i < totalBtns; i++) {
                    popupArr[i].visible = false;
                    bubbleArr[i].visible = false;
                    popupImageBtn[i].visible = false;

                    if (clickBool == false) {
                        showButtons(false);
                        popupArr[this.parent.id].visible = true;
                        bubbleArr[this.parent.id].visible = true;
                        buttonOverArr[this.parent.id].visible = false;
                        popupImageBtn[this.parent.id].visible = true;
                        hit.visible = true;
                        clickBool = true;

                    } else {


                        showButtons(true);
                        clickBool = false;

                        hit.visible = false;
                    }

                }

            }

        }

    } else if (_id == 4) {
        var totalBtns = 10;
        var btnXPosArr = [118, 151.6, 187.2, 212.8, 232.9, 252.25, 270.1, 291.7, 342.8, 452.9];
        var btnYPosArr = [84.8, 213.8, 84.8, 213.8, 84.8, 213.8, 84.8, 213.8, 84.8, 213.8];

        var crossXPosArr = [139.85, 164.10, 185.85, 224.35, 240.85, 260, 275, 298.35, 332, 389];
        var crossYPosArr = [107.60, 107.70, 107.10, 107.10, 107.70, 107, 135, 135, 120.35, 122];
        var imageWidth = [70.20, 86.40, 86.40, 68.40, 70.40, 73.40, 70, 70, 185, 183];
        var imageHeight = [93.65, 93.55, 94.15, 94.15, 93.55, 94.35, 66.25, 66.25, 81, 80];


        var buttonArr = [];
        var buttonClickArr = [];
        var buttonOverArr = [];
        var bubbleArr = [];
        var sampleArray = [];
        var lastBtnClick;
        var bubbleTitleArr = ["ID_s04_titleTxt01", "ID_s04_titleTxt02", "ID_s04_titleTxt03", "ID_s04_titleTxt04", "ID_s04_titleTxt05", "ID_s04_titleTxt06", "ID_s04_titleTxt07", "ID_s04_titleTxt08", "ID_s04_titleTxt09", "ID_s04_titleTxt10"];
        var bubbleTextArr = ["ID_s04_bodyTxt01", "ID_s04_bodyTxt02", "ID_s04_bodyTxt03", "ID_s04_bodyTxt04", "ID_s04_bodyTxt05", "ID_s04_bodyTxt06", "ID_s04_bodyTxt07", "ID_s04_bodyTxt08", "ID_s04_bodyTxt09", "ID_s04_bodyTxt10"];
        var popupImageArr = ["popup_s4_1.png", "popup_s4_2.png", "popup_s4_3.png", "popup_s4_4.png", "popup_s4_5.png", "popup_s4_6.png", "popup_s4_7.png", "popup_s4_8.png", "popup_s4_9.png", "popup_s4_10.png"];
        var popupArr = [];
        var popupImageBtn = [];

        //var crossArr=[];
        var clickBool = false;
        var btnXPos = 45
        var btnYPos = 60;
        var textContainer;

        var hit = new createjs.Shape();
        hit.graphics.beginFill("#FFFFFF").drawRect(131.5, 140.6, 420.65, 54.65);
        hit.alpha = 0.4;
        _container.addChild(hit);
        hit.visible = false;

        for (var i = 0; i < totalBtns; i++) {
            var container = new createjs.Container()
            var container2 = new createjs.Container()
            _container.addChild(container);
            _container.addChild(container2);
            container.cursor = "pointer";
            container2.cursor = "pointer";
            container.id = i;

            if (i == 0) {
                var connection = getCJSElement("IMAGE", { x: 0, y: 0, width: 680, height: 490, src: "connectinglines4.png" });
                container.addChild(connection);
            }
            btn = getCJSElement("IMAGE", { x: btnXPosArr[i], y: btnYPosArr[i], width: 48, height: 58.70, src: "plus_btn.png" });
            buttonArr.push(btn);
            container.addChild(btn);

            btn1 = getCJSElement("IMAGE", { x: btnXPosArr[i], y: btnYPosArr[i], width: 48, height: 58.70, src: "plus_btn_over.png" });
            buttonOverArr.push(btn1);
            container.addChild(btn1);
            btn1.visible = false;

            popupimage = getCJSElement("IMAGE", { x: 0, y: 0, width: 680, height: 490, src: popupImageArr[i] });
            container2.addChild(popupimage);
            popupArr[i] = popupimage;
            popupArr[i].visible = false;

            container2.addEventListener("click", handlerMethod);
            container.addEventListener("click", handlerMethod2);
            container.addEventListener("mouseover", handlerOverMethod);
            container.addEventListener("mouseout", handlerOutMethod);

            var j = i + 7;
            var _btn = document.createElement("button");
            _btn.style.cssText = "border: 1px solid rgb(0,0,0,0);padding: 0;background-color: transparent;opacity:0;top:2px;left:2px;width:30px;height:30px;cursor:pointer;visibility:visible;pointer-events:none;";
            _btn.innerHTML = "";
            _btn.id = "domElement_dummy4" + i;
            _btn.tabIndex = 0;
            _btn.name = "close";
            $("#mediaContainer").append(_btn);
            $(_btn).insertBefore($('#textBoxDiv_' + j));
            $("#domElement_dummy4" + i).on("click", handlerMethod);
            $("#domElement_dummy4" + i).css({ "position": "absolute", "margin-top": crossYPosArr[i] - 30 + "px", "margin-left": crossXPosArr[i] - 10 + "px", "width": imageWidth[i] + 10 + "px", "height": imageHeight[i] + 10 + "px" })
            var domElement = new createjs.DOMElement(_btn);
            container.addChild(domElement);
            popupImageBtn[i] = domElement;
            popupImageBtn[i].visible = false;


            var txtbox = getCJSElement("TEXTBOX", { x: 90, y: 315, width: 500, height: 170, size: 11, titleId: bubbleTitleArr[i], bodyId: bubbleTextArr[i] });
            _container.addChild(txtbox);

            bubbleArr[i] = txtbox;
            bubbleArr[i].visible = false;

            //accessibility fix -------------------------------------
            var label = new ButtonLabelComp({ x: 5, y: 4, width: 35, height: 35, compId: "s_text_id_0" + (i), align: "center", color: "#343434", bold: "obj.bold", style: "pointer-events:all;cursor:pointer;" + "line-height:" + "1.1" });
            btn.addChild(label);
            $("#s_text_id_0"+i).attr("name","moreInfo");
            btn.mouseOver = function(event) {
                buttonOverArr[this.parent.id].visible = true;
            }
            //Mouse out function
            btn.mouseOut = function() {
                buttonOverArr[this.parent.id].visible = false;
            }
            //Mouse click function
            btn.mouseClick = function(event) {

                currentClkdBtn = $("#s_text_id_0" + this.parent.id);
                for (var i = 0; i < totalBtns; i++) {
                    popupArr[i].visible = false;
                    bubbleArr[i].visible = false;
                    popupImageBtn[i].visible = false;

                    if (clickBool == false) {
                        showButtons(false);
                        popupArr[this.parent.id].visible = true;
                        bubbleArr[this.parent.id].visible = true;
                        buttonOverArr[this.parent.id].visible = false;
                        popupImageBtn[this.parent.id].visible = true;
                        hit.visible = true;
                        //clickBool = true;

                    } else {


                        showButtons(true);
                        clickBool = false;

                        hit.visible = false;
                    }

                }

            }
        }

    } else if (_id == 5) {
        var totalBtns = 4;
        var btnXPosArr = [137, 316.1, 445.2, 505.3];
        var btnYPosArr = [214.3, 214.3, 214.3, 214.3];
        var crossXPosArr = [120, 289, 411, 495];
        var crossYPosArr = [120, 124, 115, 133];
        var imageWidth = [115, 109, 110.25, 96.25];
        var imageHeight = [77, 74, 65, 66.30];

        var buttonArr = [];
        var buttonClickArr = [];
        var buttonOverArr = [];
        var bubbleArr = [];
        var sampleArray = [];
        var lastBtnClick;
        var bubbleTitleArr = ["ID_s05_titleTxt01", "ID_s05_titleTxt02", "ID_s05_titleTxt03", "ID_s05_titleTxt04"];
        var bubbleTextArr = ["ID_s05_bodyTxt01", "ID_s05_bodyTxt02", "ID_s05_bodyTxt03", "ID_s05_bodyTxt04"];
        var popupImageArr = ["popup_s5_1.png", "popup_s5_2.png", "popup_s5_3.png", "popup_s5_4.png"];
        var popupArr = [];
        var popupImageBtn = [];
        //var crossArr=[];
        var clickBool = false;
        var popupImageBtn = [];

        var btnXPos = 45
        var btnYPos = 60;
        var textContainer;

        var hit = new createjs.Shape();
        hit.graphics.beginFill("#FFFFFF").drawRect(128, 143.9, 420.6, 45.7);
        hit.alpha = 0.4;
        _container.addChild(hit);
        hit.visible = false;

        for (var i = 0; i < totalBtns; i++) {
            var container = new createjs.Container()
            var container2 = new createjs.Container()
            _container.addChild(container);
            _container.addChild(container2);
            container.cursor = "pointer";
            container2.cursor = "pointer";
            container.id = i;

            if (i == 0) {
                var connection = getCJSElement("IMAGE", { x: 0, y: 0, width: 680, height: 490, src: "connectinglines5.png" });
                container.addChild(connection);
            }
            btn = getCJSElement("IMAGE", { x: btnXPosArr[i], y: btnYPosArr[i], width: 48, height: 58.70, src: "plus_btn.png" });
            buttonArr.push(btn);
            container.addChild(btn);

            btn1 = getCJSElement("IMAGE", { x: btnXPosArr[i], y: btnYPosArr[i], width: 48, height: 58.70, src: "plus_btn_over.png" });
            buttonOverArr.push(btn1);
            container.addChild(btn1);
            btn1.visible = false;

            popupimage = getCJSElement("IMAGE", { x: 0, y: 0, width: 680, height: 490, src: popupImageArr[i] });
            container2.addChild(popupimage);
            popupArr[i] = popupimage;
            popupArr[i].visible = false;

            container2.addEventListener("click", handlerMethod);
            container.addEventListener("click", handlerMethod2);
            container.addEventListener("mouseover", handlerOverMethod);
            container.addEventListener("mouseout", handlerOutMethod);
            var j = i +17;
            var _btn = document.createElement("button");
            _btn.style.cssText = "border: 1px solid rgb(0,0,0,0);padding: 0;background-color: transparent;opacity:0;top:2px;left:2px;width:30px;height:30px;cursor:pointer;visibility:visible;pointer-events:none;";
            _btn.innerHTML = "";
            _btn.id = "domElement_dummy5" + i;
            _btn.tabIndex = 0;
            _btn.name = "close";
            $("#mediaContainer").append(_btn);
            $(_btn).insertBefore($('#textBoxDiv_' + j));
            $("#domElement_dummy5" + i).on("click", handlerMethod);
            $("#domElement_dummy5" + i).css({ "position": "absolute", "margin-top": crossYPosArr[i] - 30 + "px", "margin-left": crossXPosArr[i] - 10 + "px", "width": imageWidth[i] + 10 + "px", "height": imageHeight[i] + 10 + "px" })
            var domElement = new createjs.DOMElement(_btn);
            container.addChild(domElement);
            popupImageBtn[i] = domElement;
            popupImageBtn[i].visible = false;


            var txtbox = getCJSElement("TEXTBOX", { x: 90, y: 315, width: 500, height: 170, size: 11, titleId: bubbleTitleArr[i], bodyId: bubbleTextArr[i] });
            _container.addChild(txtbox);

            bubbleArr[i] = txtbox;
            bubbleArr[i].visible = false;


            //accessibility fix -------------------------------------
            var label = new ButtonLabelComp({ x: 5, y: 4, width: 35, height: 35, compId: "s5_text_id_0" + (i), align: "center", color: "#343434", bold: "obj.bold", style: "pointer-events:all;cursor:pointer;" + "line-height:" + "1.1" });
            btn.addChild(label);
            $("#s5_text_id_0"+i).attr("name","moreInfo");
            btn.mouseOver = function(event) {
                buttonOverArr[this.parent.id].visible = true;
            }
            //Mouse out function
            btn.mouseOut = function() {
                buttonOverArr[this.parent.id].visible = false;
            }
            //Mouse click function
            btn.mouseClick = function(event) {
                currentClkdBtn = $("#s5_text_id_0" + this.parent.id);


                for (var i = 0; i < totalBtns; i++) {
                    popupArr[i].visible = false;
                    bubbleArr[i].visible = false;
                    popupImageBtn[i].visible = false;

                    if (clickBool == false) {
                        showButtons(false);
                        popupArr[this.parent.id].visible = true;
                        bubbleArr[this.parent.id].visible = true;
                        buttonOverArr[this.parent.id].visible = false;
                        popupImageBtn[this.parent.id].visible = true;
                        hit.visible = true;
                        //clickBool = true;

                    } else {


                        showButtons(true);
                        clickBool = false;

                        hit.visible = false;
                    }

                }

            }

        }

    } else if (_id == 6) {
        var totalBtns = 4;
        var btnXPosArr = [312, 368.1, 442.2, 488.3];
        var btnYPosArr = [214.3, 214.3, 214.3, 214.3];
        var crossXPosArr = [230, 361, 431, 460, 309.55];
        var crossYPosArr = [139, 137.40, 146, 122, 74.5];
        var imageWidth = [309, 81, 91.3, 115, 116.3];
        var imageHeight = [58, 59, 99.8, 78, 70.1];

        var buttonArr = [];
        var buttonClickArr = [];
        var buttonOverArr = [];
        var bubbleArr = [];
        var sampleArray = [];
        var popupImageBtn = [];

        var lastBtnClick;
        var bubbleTitleArr = ["ID_s06_titleTxt01", "ID_s06_titleTxt02", "ID_s06_titleTxt03", "ID_s06_titleTxt04"];
        var bubbleTextArr = ["ID_s06_bodyTxt01", "ID_s06_bodyTxt02", "ID_s06_bodyTxt03", "ID_s06_bodyTxt04"];
        var popupImageArr = ["popup_s6_1.png", "popup_s6_2.png", "popup_s6_3.png", "popup_s6_4.png"];
        var popupArr = [];
        var popupImageBtn = [];
        //var crossArr=[];
        var clickBool = false;
        var btnXPos = 45
        var btnYPos = 60;
        var textContainer;

        var hit = new createjs.Shape();
        hit.graphics.beginFill("#FFFFFF").drawRect(128.3, 140.6, 419.5, 55.8);
        hit.alpha = 0.4;
        _container.addChild(hit);
        hit.visible = false;

        for (var i = 0; i < totalBtns; i++) {
            var container = new createjs.Container()
            var container2 = new createjs.Container()
            _container.addChild(container);
            _container.addChild(container2);
            container.cursor = "pointer";
            container2.cursor = "pointer";
            container.id = i;

            if (i == 0) {
                var connection = getCJSElement("IMAGE", { x: 0, y: 0, width: 680, height: 490, src: "connectinglines6.png" });
                container.addChild(connection);
            }
            btn = getCJSElement("IMAGE", { x: btnXPosArr[i], y: btnYPosArr[i], width: 48, height: 58.70, src: "plus_btn.png" });
            buttonArr.push(btn);
            container.addChild(btn);

            btn1 = getCJSElement("IMAGE", { x: btnXPosArr[i], y: btnYPosArr[i], width: 48, height: 58.70, src: "plus_btn_over.png" });
            buttonOverArr.push(btn1);
            container.addChild(btn1);
            btn1.visible = false;

            popupimage = getCJSElement("IMAGE", { x: 0, y: 0, width: 680, height: 490, src: popupImageArr[i] });
            container2.addChild(popupimage);
            popupArr[i] = popupimage;
            popupArr[i].visible = false;

            container2.addEventListener("click", handlerMethod);
            container.addEventListener("click", handlerMethod2);
            container.addEventListener("mouseover", handlerOverMethod);
            container.addEventListener("mouseout", handlerOutMethod);
            var j= i+21;
            var _btn = document.createElement("button");
            _btn.style.cssText = "border: 1px solid rgb(0,0,0,0);padding: 0;background-color: transparent;opacity:0;top:2px;left:2px;width:30px;height:30px;cursor:pointer;visibility:visible;pointer-events:none;";
            _btn.innerHTML = "";
            _btn.id = "domElement_dummy6" + i;
            _btn.tabIndex = 0;
            _btn.name = "close";
            $("#mediaContainer").append(_btn);
            $(_btn).insertBefore($('#textBoxDiv_' + j));
            $("#domElement_dummy6" + i).on("click", handlerMethod);
            $("#domElement_dummy6" + i).css({ "position": "absolute", "margin-top": crossYPosArr[i] - 30 + "px", "margin-left": crossXPosArr[i] - 10 + "px", "width": imageWidth[i] + 10 + "px", "height": imageHeight[i] + 10 + "px" })
            var domElement = new createjs.DOMElement(_btn);
            container.addChild(domElement);
            popupImageBtn[i] = domElement;
            popupImageBtn[i].visible = false;


            var txtbox = getCJSElement("TEXTBOX", { x: 90, y: 315, width: 500, height: 170, size: 11, titleId: bubbleTitleArr[i], bodyId: bubbleTextArr[i] });
            _container.addChild(txtbox);

            bubbleArr[i] = txtbox;
            bubbleArr[i].visible = false;

            //accessibility fix -------------------------------------
            var label = new ButtonLabelComp({ x: 5, y: 4, width: 35, height: 35, compId: "s6_text_id_0" + (i), align: "center", color: "#343434", bold: "obj.bold", style: "pointer-events:all;cursor:pointer;" + "line-height:" + "1.1" });
            btn.addChild(label);
            $("#s6_text_id_0"+i).attr("name","moreInfo");
            btn.mouseOver = function(event) {
                buttonOverArr[this.parent.id].visible = true;
            }
            //Mouse out function
            btn.mouseOut = function() {
                buttonOverArr[this.parent.id].visible = false;
            }
            //Mouse click function
            btn.mouseClick = function(event) {
                currentClkdBtn = $("#s6_text_id_0" + this.parent.id);


                for (var i = 0; i < totalBtns; i++) {
                    popupArr[i].visible = false;
                    bubbleArr[i].visible = false;
                    popupImageBtn[i].visible = false;

                    if (clickBool == false) {
                        showButtons(false);
                        popupArr[this.parent.id].visible = true;
                        bubbleArr[this.parent.id].visible = true;
                        buttonOverArr[this.parent.id].visible = false;
                        popupImageBtn[this.parent.id].visible = true;
                        hit.visible = true;
                        //clickBool = true;

                    } else {


                        showButtons(true);
                        clickBool = false;

                        hit.visible = false;
                    }

                }

            }

        }

    } else if (_id == 7) {
        var totalBtns = 4;
        var btnXPosArr = [134.15, 134.15, 504.15, 134.15];
        var btnYPosArr = [214.3, 65.3, 70.3, 111.3];
        var crossXPosArr = [202.6, 250, 276.05, 309];
        var crossYPosArr = [152.3, 50, 64.5, 77];
        var imageWidth = [61, 230, 165.3, 167];
        var imageHeight = [140, 72, 63.15, 96];


        var buttonArr = [];
        var buttonClickArr = [];
        var buttonOverArr = [];
        var bubbleArr = [];
        var sampleArray = [];
        var lastBtnClick;
        var bubbleTitleArr = ["ID_s07_titleTxt01", "ID_s07_titleTxt02", "ID_s07_titleTxt03", "ID_s07_titleTxt04"];
        var bubbleTextArr = ["ID_s07_bodyTxt01", "ID_s07_bodyTxt02", "ID_s07_bodyTxt03", "ID_s07_bodyTxt04"];
        var popupImageArr = ["popup_s7_1.png", "popup_s7_2.png", "popup_s7_3.png", "popup_s7_4.png"];
        var popupArr = [];
        var popupImageBtn = [];
        //var crossArr=[];
        var clickBool = false;
        var btnXPos = 45
        var btnYPos = 60;
        var textContainer;

        var hit = new createjs.Shape();
        hit.graphics.beginFill("#FFFFFF").drawRect(198.55, 46.85, 278.95, 228.75);
        hit.alpha = 0.4;
        _container.addChild(hit);
        hit.visible = false;

        for (var i = 0; i < totalBtns; i++) {
            var container = new createjs.Container()
            var container2 = new createjs.Container()
            _container.addChild(container);
            _container.addChild(container2);
            container.cursor = "pointer";
            container2.cursor = "pointer";
            container.id = i;

            if (i == 0) {
                var connection = getCJSElement("IMAGE", { x: 0, y: 0, width: 680, height: 490, src: "connectinglines7.png" });
                container.addChild(connection);
            }
            btn = getCJSElement("IMAGE", { x: btnXPosArr[i], y: btnYPosArr[i], width: 48, height: 58.70, src: "plus_btn.png" });
            buttonArr.push(btn);
            container.addChild(btn);

            btn1 = getCJSElement("IMAGE", { x: btnXPosArr[i], y: btnYPosArr[i], width: 48, height: 58.70, src: "plus_btn_over.png" });
            buttonOverArr.push(btn1);
            container.addChild(btn1);
            btn1.visible = false;

            popupimage = getCJSElement("IMAGE", { x: 0, y: 0, width: 680, height: 490, src: popupImageArr[i] });
            container2.addChild(popupimage);
            popupArr[i] = popupimage;
            popupArr[i].visible = false;

            container2.addEventListener("click", handlerMethod);
            container.addEventListener("click", handlerMethod2);
            container.addEventListener("mouseover", handlerOverMethod);
            container.addEventListener("mouseout", handlerOutMethod);
            var j = i+25;
            var _btn = document.createElement("button");
            _btn.style.cssText = "border: 1px solid rgb(0,0,0,0);padding: 0;background-color: transparent;opacity:0;top:2px;left:2px;width:30px;height:30px;cursor:pointer;visibility:visible;pointer-events:none;";
            _btn.innerHTML = "";
            _btn.id = "domElement_dummy7" + i;
            _btn.tabIndex = 0;
            _btn.name = "close";
            $("#mediaContainer").append(_btn);
            $(_btn).insertBefore($('#textBoxDiv_' + j));
            $("#domElement_dummy7" + i).on("click", handlerMethod);
            $("#domElement_dummy7" + i).css({ "position": "absolute", "margin-top": crossYPosArr[i] - 30 + "px", "margin-left": crossXPosArr[i] - 10 + "px", "width": imageWidth[i] + 10 + "px", "height": imageHeight[i] + 10 + "px" })
            var domElement = new createjs.DOMElement(_btn);
            container.addChild(domElement);
            popupImageBtn[i] = domElement;
            popupImageBtn[i].visible = false;


            var txtbox = getCJSElement("TEXTBOX", { x: 90, y: 315, width: 500, height: 170, size: 11, titleId: bubbleTitleArr[i], bodyId: bubbleTextArr[i] });
            _container.addChild(txtbox);

            bubbleArr[i] = txtbox;
            bubbleArr[i].visible = false;

            //accessibility fix -------------------------------------
            var label = new ButtonLabelComp({ x: 5, y: 4, width: 35, height: 35, compId: "s7_text_id_0" + (i), align: "center", color: "#343434", bold: "obj.bold", style: "pointer-events:all;cursor:pointer;" + "line-height:" + "1.1" });
            btn.addChild(label);
            $("#s7_text_id_0"+i).attr("name","moreInfo");
            btn.mouseOver = function(event) {
                buttonOverArr[this.parent.id].visible = true;
            }
            //Mouse out function
            btn.mouseOut = function() {
                buttonOverArr[this.parent.id].visible = false;
            }
            //Mouse click function
            btn.mouseClick = function(event) {
                currentClkdBtn = $("#s7_text_id_0" + this.parent.id);

                for (var i = 0; i < totalBtns; i++) {
                    popupArr[i].visible = false;
                    bubbleArr[i].visible = false;
                    popupImageBtn[i].visible = false;

                    if (clickBool == false) {
                        showButtons(false);
                        popupArr[this.parent.id].visible = true;
                        bubbleArr[this.parent.id].visible = true;
                        buttonOverArr[this.parent.id].visible = false;
                        popupImageBtn[this.parent.id].visible = true;
                        hit.visible = true;
                        //clickBool = true;

                    } else {


                        showButtons(true);
                        clickBool = false;

                        hit.visible = false;
                    }

                }

            }

        }

    }





    function showButtons(val) {
        for (var i = 0; i < totalBtns; i++) {
            buttonArr[i].visible = val;

        }
        connection.visible = val;
    }

    function handlerMethod(event) {

        setTimeout(function() {
            //alert("hi"+ currentClkdBtn.attr("id"));
            currentClkdBtn.focus();
        }, 100);

        for (var i = 0; i < totalBtns; i++) {
            popupArr[i].visible = false;
            bubbleArr[i].visible = false;
            popupImageBtn[i].visible = false;
            if (clickBool == false) {
                showButtons(false);

                hit.visible = true;
                clickBool = true;
            } else {

                showButtons(true);
                clickBool = false;

                hit.visible = false;
            }

        }
    }

    function handlerMethod2(event) {

        for (var i = 0; i < totalBtns; i++) {
            popupArr[i].visible = false;
            bubbleArr[i].visible = false;
            //crossArr[i].visible=false;
            if (clickBool == false) {

                clickBool = true;
            } else {

                clickBool = false;

            }
            showButtons(false);
            hit.visible = true;
        }
        //crossArr[event.target.id].visible=true;
        popupArr[event.target.id].visible = true;
        bubbleArr[event.target.id].visible = true;
        buttonOverArr[event.target.id].visible = false;
    }

    function handlerOverMethod(event) {
        buttonOverArr[event.target.id].visible = true;
    }

    function handlerOutMethod(event) {
        buttonOverArr[event.target.id].visible = false;
    }


});