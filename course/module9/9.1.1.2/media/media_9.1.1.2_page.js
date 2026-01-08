function registerSWF() {
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container, _id) {


    var currentClkdBtn;

    if (_id == 1) {

        var totalBtns = 5;
        var btnXPosArr = [96, 96, 561.85, 96, 561.85];
        var btnYPosArr = [117.8, 222.8, 215.8, 51.35, 55.8];
        var crossXPosArr = [158.75, 286.35, 457.5, 230.05, 309.55];
        var crossYPosArr = [77.55, 183.05, 180.5, 74.5, 74.5];
        var imageWidth = [394.8, 114.3, 91.3, 116.3, 116.3];
        var imageHeight = [211.95, 125.7, 99.8, 66.15, 70.1];
        var buttonArr = [];
        var buttonClickArr = [];
        var buttonOverArr = [];
        var bubbleArr = [];
        var bubbleTitleArr = ["ID_s01_titleTxt01", "ID_s01_titleTxt02", "ID_s01_titleTxt03", "ID_s01_titleTxt04", "ID_s01_titleTxt05"];
        var bubbleTextArr = ["ID_s01_bodyTxt01", "ID_s01_bodyTxt02", "ID_s01_bodyTxt03", "ID_s01_bodyTxt04", "ID_s01_bodyTxt05"];
        var popupImageArr = ["popup1.png", "popup2.png", "popup3.png", "popup4.png", "popup5.png"];
        var popupArr = [];
        var popupImageBtn = [];
        var crossArr = [];
        var clickBool = false;

        var hit = new createjs.Shape();
        hit.graphics.beginFill("#FFFFFF").drawRect(0, 0, 680, 490);
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
                var connection = getCJSElement("IMAGE", { x: 0, y: 0, width: 680, height: 490, src: "connectlines.png" });
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

            var j= i+1;

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

        var totalBtns = 8;
        var btnXPosArr = [201.55, 255.7, 279.4, 302.9, 337.4, 361.95, 383.25, 407];
        var btnYPosArr = [60.8, 254.8, 60.8, 254.8, 60.8, 254.8, 60.8, 254.8];
        var crossXPosArr = [182.6, 238.65, 265.7, 292.8, 330.35, 357.4, 381.85, 405.45];
        var crossYPosArr = [110.3, 110.3, 111.3, 110.3, 110.3, 110.3, 110.6, 110.3];
        var imageWidth = [86.9, 87.6, 87.6, 87.6, 87.6, 87.6, 87.6, 87.6];
        var imageHeight = [89.7, 90.7, 90.95, 89.7, 89.7, 89.7, 89.7, 89.7];
        var buttonArr = [];
        var buttonClickArr = [];
        var buttonOverArr = [];
        var bubbleArr = [];
        var bubbleTitleArr = ["ID_s02_titleTxt01", "ID_s02_titleTxt02", "ID_s02_titleTxt03", "ID_s02_titleTxt04", "ID_s02_titleTxt05", "ID_s02_titleTxt06", "ID_s02_titleTxt07", "ID_s02_titleTxt08"];
        var bubbleTextArr = ["ID_s02_bodyTxt01", "ID_s02_bodyTxt02", "ID_s02_bodyTxt03", "ID_s02_bodyTxt04", "ID_s02_bodyTxt05", "ID_s02_bodyTxt06", "ID_s02_bodyTxt07", "ID_s02_bodyTxt08"];
        var popupImageArr = ["popup6.png", "popup7.png", "popup8.png", "popup9.png", "popup10.png", "popup11.png", "popup12.png", "popup13.png"];
        var popupArr = [];
        var popupImageBtn = [];
        var crossArr = [];
        var clickBool = false;

        var hit = new createjs.Shape();
        hit.graphics.beginFill("#FFFFFF").drawRect(0, 0, 680, 490);
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
            var j = i+6;
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

            var txtbox = getCJSElement("TEXTBOX", { x: 90, y: 305, width: 500, height: 170, size: 11, titleId: bubbleTitleArr[i], bodyId: bubbleTextArr[i] });
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
                // alert(this.parent.id);
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
            // alert("hi"+ currentClkdBtn.attr("id"));
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

        /*popupArr[event.target.id].visible = true;
        bubbleArr[event.target.id].visible = true;
        buttonOverArr[event.target.id].visible = false;*/
    }

    function handlerMethod2(event) {

        for (var i = 0; i < totalBtns; i++) {
            popupArr[i].visible = false;
            bubbleArr[i].visible = false;
            if (clickBool == false) {
                //hit.visible=true;
                clickBool = true;
            } else {


                clickBool = false;
                //hit.visible=false;
            }

            showButtons(false);
            hit.visible = true;


        }
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