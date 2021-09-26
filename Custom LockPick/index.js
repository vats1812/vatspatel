// Get current rotation angle
(function($) {
    $.fn.rotationDegrees = function() {
        var matrix = this.css("-webkit-transform") ||
            this.css("-moz-transform") ||
            this.css("-ms-transform") ||
            this.css("-o-transform") ||
            this.css("transform");
        if (typeof matrix === "string" && matrix !== "none") {
            var values = matrix.split("(")[1].split(")")[0].split(",");
            var a = values[0];
            var b = values[1];
            var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
        } else {
            var angle = 0;
        }
        return angle;
    };
}(jQuery));
jQuery.fn.rotate = function(degrees) {
    $(this).css({
        "-webkit-transform": "rotate(" + degrees + "deg)",
        "-moz-transform": "rotate(" + degrees + "deg)",
        "-ms-transform": "rotate(" + degrees + "deg)",
        "transform": "rotate(" + degrees + "deg)"
    });
    return $(this);
};

// Initialize random points on the circle, update # of digits
function init($param) {
    var angle = Math.floor((Math.random() * 720) - 360);
    $("#circle2").rotate(angle);
    $("#container > p").text($param + " keys left");
}

$(document).ready(function() {
    // %2 == 0 is clockwise, else counter-clockwise
    var counter = 0;
    // # of digits, reach 0 => win
    var digits = 3;
    // display
    init(digits);
    // store the randomly generated angle of the point
    var angle = $("#circle2").rotationDegrees();
    // Initial circle spin on page load
    $("#circle").rotate(2000);
    $("#circle").click(function() {
        // Current rotation stored in a variable
        var unghi = $(this).rotationDegrees();
        // If current rotation matches the random point rotation by a margin of +- 2digits, the player "hit" it and continues
        if (unghi > angle - 15 && unghi < angle + 15) {
            digits--;
            // If game over, hide the game, display end of game options
            if (!digits) {
                $("#circle").addClass("hidden");
                $("#circle2").addClass("hidden");
                $("#container > p").addClass("hidden");
                $("#retry2").removeClass("hidden");
                $(".key1").addClass("keyhidden");
                $(".key2").addClass("keyhidden");
                $(".key3").addClass("keyhidden");


            }
            // Else, add another point and remember its new angle of rotation
            else {
                init(digits);
                angle = $("#circle2").rotationDegrees();
            }
            if (digits == 3) {
                $(".key1").addClass("keyhidden");
            }
            if (digits == 2) {
                $(".key1").addClass("keyhidden");
            }
            if (digits == 1) {
                $(".key1").addClass("keyhidden");
                $(".key2").addClass("keyhidden");
            }
            if (digits == 0) {
                $(".key1").addClass("keyhidden");
                $(".key2").addClass("keyhidden");
                $(".key3").addClass("keyhidden");
            }

        }
        // Else, the player "missed" and is brought to end of game options
        else {
            $("#circle").addClass("hidden");
            $("#circle2").addClass("hidden");
            $("#container > p").addClass("hidden");
            $("#retry").removeClass("hidden");
            $(".key1").addClass("keyhidden");
            $(".key2").addClass("keyhidden");
            $(".key3").addClass("keyhidden");

        }
        // No of clicks ++
        counter++;
        // spin based on click parity
        if (counter % 2) {
            $(this).rotate(-2000);
        } else $(this).rotate(4100);
    });
    $("#retry").click(function() {
        $("#circle").removeClass("hidden");
        $("#circle2").removeClass("hidden");
        $("#container > p").removeClass("hidden");
        $("#retry").addClass("hidden");
        $(".key1").removeClass("keyhidden");
        $(".key2").removeClass("keyhidden");
        $(".key3").removeClass("keyhidden");

        digits = 3;
        init(digits);
        angle = $("#circle2").rotationDegrees();
        $("#circle").rotate(2440);
        counter = 0;
    });
    $("#retry2").click(function() {
        $("#retry2").addClass("hidden");
        $("#circle").removeClass("hidden");
        $("#circle2").removeClass("hidden");
        $("#container > p").removeClass("hidden");
        $(".key1").removeClass("keyhidden");
        $(".key2").removeClass("keyhidden");
        $(".key3").removeClass("keyhidden");

        digits = 3;
        init(digits);
        angle = $("#circle2").rotationDegrees();
        $("#circle").rotate(2440);
        counter = 0;
    });


});