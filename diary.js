var userHide, isCtrl;
userHide = false;
function toggleTableOfContents() {
    "use strict";
    $("#table").toggle("blind");
    userHide = !userHide;
    if ($("#show-hide").html() === "<h5>Show</h5>") {
        $("#show-hide").html("<h5>Hide</h5>");
        $("#show-hide").animate({ right: "300px" }, 500);
    } else {
        $("#show-hide").html("<h5>Show</h5>");
        $("#show-hide").animate({ right: "50px" }, 500);
    }
}

function changeGroup(direction) {
    "use strict";
    var i = 0;
    $('.listgroup').each(function () {
        if ($(this).is(":visible")) {
            return false;
        }
        i += 1;
    });
    $("#group" + i).hide("clip");
    if (direction) {
        i += 1;
        if (i >= $('.listgroup').length) {
            i = 0;
        }
    } else {
        i -= 1;
        if (i < 0) {
            i = $('.listgroup').length - 1;
        }
    }
    $("#group" + i).show("clip");
    $("#gnum").text(i);
}

function checkWidthAndHeight() {
    "use strict";
    var windowwidth, windowheight;
    windowwidth = $(window).width();
    windowheight = window.innerHeight;
    if (windowwidth < 900) {
        $("#table").hide("blind");
        $("#show-hide").html("<h5>Show</h5>");
        $("#show-hide").animate({ right: "50px" }, 500);
    } else if (windowwidth >= 900 && !userHide) {
        $("#table").show("blind");
        $("#show-hide").html("<h5>Hide</h5>");
        $("#show-hide").animate({ right: "300px" }, 500);
    }
    if (windowwidth < 600) {
        $("#show-hide").hide("blind");
    } else {
        $("#show-hide").show("blind");
    }
    //@ h = 550px we start to lose entries
    if (windowheight < 550) {
        $("#table").animate({ top: "0px" }, 500);
    } else {
        $("#table").animate({ top: "50px" }, 500);
    }
}

$(document).keyup(function (e) {
    "use strict";
    if (e.which === 17) {
        isCtrl = false;
    }
}).keydown(function (e) {
    "use strict";
    if (e.which === 17) {
        isCtrl = true;
    }
    if (e.which === 72 && isCtrl === true) {
        toggleTableOfContents();
        return false;
    }
    if (e.which === 37 && isCtrl === true) {
        changeGroup(false);
        return false;
    }
    if (e.which === 39 && isCtrl === true) {
        changeGroup(true);
        return false;
    }
});

$(document).ready(function () {
    "use strict";
    checkWidthAndHeight();
    $(window).resize(checkWidthAndHeight);
});