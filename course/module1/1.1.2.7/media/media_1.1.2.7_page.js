//loadScript("../../../common/scripts/templates/slide/InteractiveSlide.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF() {
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad = function(_container, _id) {
    var id = _id.split('_canvas_div_')[0];
    if (id == 1) {
        for (var i = 1; i <= 4; i++) {
            var s = document.getElementById('ID_s1_btn0' + i);
            $(s).insertBefore("#slide_1_" + i)
        }
    }
    if (id == 2) {
        for (var i = 1; i <= 3; i++) {
            var s = document.getElementById('ID_s3_btn0' + i);
            $(s).insertBefore("#slide_2_" + i)
        }
    }
    if (id == 3) {
        for (var i = 1; i <= 3; i++) {
            var s = document.getElementById('ID_s4_btn0' + i);
            $(s).insertBefore("#slide_3_" + i)
        }
    }
});