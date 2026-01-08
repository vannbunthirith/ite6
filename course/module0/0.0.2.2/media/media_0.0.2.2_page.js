function registerSWF() {
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container, _id) {
    if (_id == 1) {
        clickBool = false;
        btnXPos = 5;
        btnYPos = 25;

        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000000").drawRect(0, 0, 680, 490);
        hit.alpha = 0.4;
        _container.addChild(hit);
        hit.visible = false;

        var container = new createjs.Container()
        _container.addChild(container);
        container.cursor = "pointer";




        btn = getCJSElement("IMAGE", { x: btnXPos, y: btnYPos, width: 50, height: 50, src: "trans_btn.png", });
        container.addChild(btn);


        btn1 = getCJSElement("IMAGE", { x: btnXPos, y: btnYPos, width: 50, height: 50, src: "trans_btn_over.png", });
        container.addChild(btn1);
        btn1.visible = false;


        btn2 = getCJSElement("IMAGE", { x: btnXPos, y: btnYPos, width: 50, height: 50, src: "cross.png", });
        container.addChild(btn2);
        btn2.visible = false;



        ID_s1_trans01 = getCJSElement("TEXT", { x: 50, y: 55.50, compId: "ID_s1_trans01", width: 346, height: 139, color: "#ffffff", class: "blackText", align: "center", expand: "down", bgWithoutBorder: "true", corner: 3 });
        _container.addChild(ID_s1_trans01);
        ID_s1_trans01.visible = false;

        ID_s1_trans02 = getCJSElement("TEXT", { x: 55, y: 197.50, compId: "ID_s1_trans02", width: 345, height: 52, color: "#ffffff", bgColor: "#000000", align: "left", expand: "down", bgWithoutBorder: "true", corner: 3 });
        _container.addChild(ID_s1_trans02);
        ID_s1_trans02.visible = false;

        ID_s1_trans03 = getCJSElement("TEXT", { x: 50, y: 272.45, compId: "ID_s1_trans03", width: 299, height: 33, color: "#ffffff", bgColor: "#000000", align: "center", expand: "down", bgWithoutBorder: "true", corner: 3 });
        _container.addChild(ID_s1_trans03);
        ID_s1_trans03.visible = false;

        ID_s1_trans04 = getCJSElement("TEXT", { x: 45, y: 309.5, compId: "ID_s1_trans04", width: 136.5, height: 19.5, color: "#ffffff", class: "blackText", align: "center", expand: "down", bgWithoutBorder: "true", corner: 3 });
        _container.addChild(ID_s1_trans04);
        ID_s1_trans04.visible = false;

        ID_s1_trans05 = getCJSElement("TEXT", { x: 45, y: 342.5, compId: "ID_s1_trans05", width: 135.5, height: 82, color: "#ffffff", bgColor: "#000000", align: "center", expand: "down", bgWithoutBorder: "true", corner: 3 });
        _container.addChild(ID_s1_trans05);
        ID_s1_trans05.visible = false;

        ID_s1_trans06 = getCJSElement("TEXT", { x: 199, y: 309.5, compId: "ID_s1_trans06", width: 136.5, height: 19.5, color: "#ffffff", class: "blackText", align: "center", expand: "down", bgWithoutBorder: "true", corner: 3 });
        _container.addChild(ID_s1_trans06);
        ID_s1_trans06.visible = false;

        ID_s1_trans07 = getCJSElement("TEXT", { x: 199, y: 342.5, compId: "ID_s1_trans07", width: 135.5, height: 82, color: "#ffffff", bgColor: "#000000", align: "center", expand: "down", bgWithoutBorder: "true", corner: 3 });
        _container.addChild(ID_s1_trans07);
        ID_s1_trans07.visible = false;

        ID_s1_trans08 = getCJSElement("TEXT", { x: 348, y: 309.5, compId: "ID_s1_trans08", width: 139.5, height: 19.4, color: "#ffffff", class: "blackText", align: "center", expand: "down", bgWithoutBorder: "true", corner: 3 });
        _container.addChild(ID_s1_trans08);
        ID_s1_trans08.visible = false;

        ID_s1_trans09 = getCJSElement("TEXT", { x: 348, y: 337.5, compId: "ID_s1_trans09", width: 139.5, height: 82, color: "#ffffff", class: "blackText", align: "center", expand: "down", bgWithoutBorder: "true", corner: 3 });
        _container.addChild(ID_s1_trans09);
        ID_s1_trans09.visible = false;

        ID_s1_trans10 = getCJSElement("TEXT", { x: 498, y: 309.5, compId: "ID_s1_trans10", width: 141.5, height: 19.5, color: "#ffffff", class: "blackText", align: "center", expand: "down", bgWithoutBorder: "true", corner: 3 });
        _container.addChild(ID_s1_trans10);
        ID_s1_trans10.visible = false;

        ID_s1_trans11 = getCJSElement("TEXT", { x: 498, y: 342.5, compId: "ID_s1_trans11", width: 140.5, height: 82, color: "#ffffff", bgColor: "#000000", align: "center", expand: "down", bgWithoutBorder: "true", corner: 3 });
        _container.addChild(ID_s1_trans11);
        ID_s1_trans11.visible = false;




        container.addEventListener("click", handlerMethod);
        container.addEventListener("mouseover", handlerOverMethod);
        container.addEventListener("mouseout", handlerOutMethod);
        //var btn2 = getCJSElement("TEXTBOX",{x:405.95,y:96,width:234.75,height:287,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
        //_container.addChild(btn2);

        //accessbility fix
        var label = new ButtonLabelComp({ x: 5, y: 4, width: 40, height: 40, compId: "text_id_0" + 1, align: "center", color: "#343434", bold: "obj.bold", style: "pointer-events:all;cursor:pointer;" + "line-height:" + "1.1" });
        $("#text_id_01").attr("name", "moreInfo");
        btn.addChild(label);
        for (i = 1; i < 10; i++) {
            $("#slide_1").append($("#ID_s2_trans0" + i));
        }
        $("#slide_1").append($("#ID_s2_trans10"));
        $("#slide_1").append($("#ID_s2_trans11"));

        $("#text_id_01").insertBefore("#ID_s1_trans01");

        btn.mouseOver = function(event) {
            btn1.visible = true;
        }
        //Mouse out function
        btn.mouseOut = function() {
            btn1.visible = false;
        }

        //Mouse click function
        btn.mouseClick = function(event) {
            if (clickBool == false) {


                ID_s1_trans01.visible = true;
                ID_s1_trans02.visible = true;
                ID_s1_trans03.visible = true;
                ID_s1_trans04.visible = true;
                ID_s1_trans05.visible = true;
                ID_s1_trans06.visible = true;
                ID_s1_trans07.visible = true;
                ID_s1_trans08.visible = true;
                ID_s1_trans09.visible = true;
                ID_s1_trans10.visible = true;
                ID_s1_trans11.visible = true;

                btn2.visible = true;

                hit.visible = true;
                clickBool = true;
                $("#text_id_01").attr("name", "close");

            } else {


                ID_s1_trans01.visible = false;
                ID_s1_trans02.visible = false;
                ID_s1_trans03.visible = false;
                ID_s1_trans04.visible = false;
                ID_s1_trans05.visible = false;
                ID_s1_trans06.visible = false;
                ID_s1_trans07.visible = false;
                ID_s1_trans08.visible = false;
                ID_s1_trans09.visible = false;
                ID_s1_trans10.visible = false;
                ID_s1_trans11.visible = false;



                clickBool = false;

                btn2.visible = false;
                $("#text_id_01").attr("name", "moreInfo");

                hit.visible = false;
            }




        }


    }

    if (_id == 2) {
        clickBool1 = false;
        btnXPos = 5;
        btnYPos = 25;

        var hit1 = new createjs.Shape();
        hit1.graphics.beginFill("#000000").drawRect(0, 0, 680, 490);
        hit1.alpha = 0.4;
        _container.addChild(hit1);
        hit1.visible = false;

        var container1 = new createjs.Container();
        _container.addChild(container1);
        container1.cursor = "pointer";




        btn3 = getCJSElement("IMAGE", { x: btnXPos, y: btnYPos, width: 50, height: 50, src: "trans_btn.png", });
        container1.addChild(btn3);


        btn4 = getCJSElement("IMAGE", { x: btnXPos, y: btnYPos, width: 50, height: 50, src: "trans_btn_over.png", });
        container1.addChild(btn4);
        btn4.visible = false;


        btn5 = getCJSElement("IMAGE", { x: btnXPos, y: btnYPos, width: 50, height: 50, src: "cross.png", });
        container1.addChild(btn5);
        btn5.visible = false;



        ID_s2_trans01 = getCJSElement("TEXT", { x: 111, y: 74.50, compId: "ID_s2_trans01", width: 100.50, height: 33, color: "#ffffff", class: "blackText", align: "center", expand: "down", bgWithoutBorder: "true", corner: 3 });
        _container.addChild(ID_s2_trans01);
        ID_s2_trans01.visible = false;

        ID_s2_trans02 = getCJSElement("TEXT", { x: 36.55, y: 132.55, compId: "ID_s2_trans02", width: 180.45, height: 216.35, color: "#ffffff", bgColor: "#000000", align: "left", expand: "down", bgWithoutBorder: "true", corner: 3 });
        _container.addChild(ID_s2_trans02);
        ID_s2_trans02.visible = false;

        ID_s2_trans03 = getCJSElement("TEXT", { x: 305, y: 80.50, compId: "ID_s2_trans03", width: 100.5, height: 33, color: "#ffffff", bgColor: "#000000", align: "center", expand: "down", bgWithoutBorder: "true", corner: 3 });
        _container.addChild(ID_s2_trans03);
        ID_s2_trans03.visible = false;

        ID_s2_trans04 = getCJSElement("TEXT", { x: 228.5, y: 127.55, compId: "ID_s2_trans04", width: 200.45, height: 216.35, color: "#ffffff", class: "blackText", align: "left", expand: "down", bgWithoutBorder: "true", corner: 3 });
        _container.addChild(ID_s2_trans04);
        ID_s2_trans04.visible = false;

        ID_s2_trans05 = getCJSElement("TEXT", { x: 526, y: 80.5, compId: "ID_s2_trans05", width: 100.5, height: 33, color: "#ffffff", bgColor: "#000000", align: "center", expand: "down", bgWithoutBorder: "true", corner: 3 });
        _container.addChild(ID_s2_trans05);
        ID_s2_trans05.visible = false;

        ID_s2_trans06 = getCJSElement("TEXT", { x: 443.50, y: 127.55, compId: "ID_s2_trans06", width: 200.5, height: 216.35, color: "#ffffff", class: "blackText", align: "left", expand: "down", bgWithoutBorder: "true", corner: 3 });
        _container.addChild(ID_s2_trans06);
        ID_s2_trans06.visible = false;

        ID_s2_trans07 = getCJSElement("TEXT", { x: 36.90, y: 344.5, compId: "ID_s2_trans07", width: 608.55, height: 19, color: "#ffffff", bgColor: "#000000", align: "center", expand: "down", bgWithoutBorder: "true", corner: 3 });
        _container.addChild(ID_s2_trans07);
        ID_s2_trans07.visible = false;



        container1.addEventListener("click", handlerMethod);
        container1.addEventListener("mouseover", handlerOverMethod);
        container1.addEventListener("mouseout", handlerOutMethod);
        //var btn2 = getCJSElement("TEXTBOX",{x:405.95,y:96,width:234.75,height:287,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
        //_container.addChild(btn2);

        //accessbility fix
        var label = new ButtonLabelComp({ x: 5, y: 4, width: 40, height: 40, compId: "text_id_0" + 2, align: "center", color: "#343434", bold: "obj.bold", style: "pointer-events:all;cursor:pointer;" + "line-height:" + "1.1" });
        $("#text_id_02").attr("name", "moreInfo");
        btn3.addChild(label);
        for (i = 1; i < 8; i++) {
            $("#slide_2").append($("#ID_s2_trans0" + i));
        }
        $("#text_id_02").insertBefore("#ID_s2_trans01");

        btn3.mouseOver = function(event) {
            btn4.visible = true;
        }
        //Mouse out function
        btn3.mouseOut = function() {
            btn4.visible = false;
        }

        //Mouse click function
        btn3.mouseClick = function(event) {
            if (clickBool1 == false) {

                ID_s2_trans01.visible = true;
                ID_s2_trans02.visible = true;
                ID_s2_trans03.visible = true;
                ID_s2_trans04.visible = true;
                ID_s2_trans05.visible = true;
                ID_s2_trans06.visible = true;
                ID_s2_trans07.visible = true;




                btn5.visible = true;

                hit1.visible = true;
                clickBool1 = true;
                $("#text_id_02").attr("name", "close");

            } else {


                ID_s2_trans01.visible = false;
                ID_s2_trans02.visible = false;
                ID_s2_trans03.visible = false;
                ID_s2_trans04.visible = false;
                ID_s2_trans05.visible = false;
                ID_s2_trans06.visible = false;
                ID_s2_trans07.visible = false;




                clickBool1 = false;

                btn5.visible = false;
                $("#text_id_02").attr("name", "moreInfo");

                hit1.visible = false;
            }




        }



    }


    function handlerMethod(event) {
        if (_id == 1) {

            if (clickBool == false) {

                ID_s1_trans01.visible = true;
                ID_s1_trans02.visible = true;
                ID_s1_trans03.visible = true;
                ID_s1_trans04.visible = true;
                ID_s1_trans05.visible = true;
                ID_s1_trans06.visible = true;
                ID_s1_trans07.visible = true;
                ID_s1_trans08.visible = true;
                ID_s1_trans09.visible = true;
                ID_s1_trans10.visible = true;
                ID_s1_trans11.visible = true;

                btn2.visible = true;

                hit.visible = true;
                clickBool = true;
            } else {

                ID_s1_trans01.visible = false;
                ID_s1_trans02.visible = false;
                ID_s1_trans03.visible = false;
                ID_s1_trans04.visible = false;
                ID_s1_trans05.visible = false;
                ID_s1_trans06.visible = false;
                ID_s1_trans07.visible = false;
                ID_s1_trans08.visible = false;
                ID_s1_trans09.visible = false;
                ID_s1_trans10.visible = false;
                ID_s1_trans11.visible = false;
                clickBool = false;
                btn2.visible = false;
                hit.visible = false;

            }
        }

        if (_id == 2) {

            if (clickBool1 == false) {

                ID_s2_trans01.visible = true;
                ID_s2_trans02.visible = true;
                ID_s2_trans03.visible = true;
                ID_s2_trans04.visible = true;
                ID_s2_trans05.visible = true;
                ID_s2_trans06.visible = true;
                ID_s2_trans07.visible = true;

                btn5.visible = true;

                hit1.visible = true;
                clickBool1 = true;
            } else {

                ID_s2_trans01.visible = false;
                ID_s2_trans02.visible = false;
                ID_s2_trans03.visible = false;
                ID_s2_trans04.visible = false;
                ID_s2_trans05.visible = false;
                ID_s2_trans06.visible = false;
                ID_s2_trans07.visible = false;

                clickBool1 = false;
                btn5.visible = false;
                hit1.visible = false;

            }
        }

    }

    function handlerOverMethod(event) {
        if (_id == 1) {

            btn1.visible = true;
        }
        if (_id == 2) {
            btn4.visible = true;

        }


    }

    function handlerOutMethod(event) {

        if (_id == 1) {

            btn1.visible = false;
        }
        if (_id == 2) {
            btn4.visible = false;

        }
    }

});