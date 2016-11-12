$(window).scroll(function() {    
                var scrollDown = $(window).scrollTop();

                if (scrollDown >= 250) {
                    $("header").addClass("stickyHeader");
                    $(".headerLogoWrap").addClass("stickyHeaderLogo");
                    $(".navLi").addClass("navLiSticky");
                    $(".dropdown").addClass("stickydropdown");
                    $(".reserveButtonHeader").addClass("sticky");
                }
            });

            $(window).scroll(function() {    
                var scrollUp = $(window).scrollTop();

                if (scrollUp <= 250) {
                    $("header").removeClass("stickyHeader");
                    $(".headerLogoWrap").removeClass("stickyHeaderLogo");
                    $(".navLi").removeClass("navLiSticky");
                    $(".dropdown").removeClass("stickydropdown");
                    $(".reserveButtonHeader").removeClass("sticky");
                }
            });

$("#hamburger").click(function() {
    $(".bar.one").toggleClass("barOneEffect");
    $(".bar.two").toggleClass("barTwoEffect");
    $(".bar.three").toggleClass("barThreeEffect");
    $("#mobileMenu").toggleClass("mobileMenuSlide");
})

/********** Nav Dropdowns***************/
$("#visitToggle").click(function() {
    $("#visitDropdown").toggleClass("show");
    $("#activitiesDropdown").removeClass("show");
    $("#aboutUsDropdown").removeClass("show");
})
$("#activitiesToggle").click(function() {
    $("#activitiesDropdown").toggleClass("show");
    $("#visitDropdown").removeClass("show");
    $("#aboutUsDropdown").removeClass("show");
})
$("#aboutUsToggle").click(function() {
    $("#aboutUsDropdown").toggleClass("show");
    $("#visitDropdown").removeClass("show");
    $("#activitiesDropdown").removeClass("show");
})
$("#main").click(function() {
    $(".dropdown").removeClass("show");
})

/*****************park page tabs*****************************/
$("#parkInfoTab").click(function() {
    $(".tab").removeClass("active");
    $(this).addClass("active");
    $("#gettingHereDesc").removeClass("activeDesc");
    $("#mapsDesc").removeClass("activeDesc");
    $("#activitiesDesc").removeClass("activeDesc");
    $("#parkInfoDesc").addClass("activeDesc");

    $("#parkInfoArrow").addClass("arrowRotateDown");
    $("#gettingHereArrow").removeClass("arrowRotateDown");
    $("#mapsArrow").removeClass("arrowRotateDown");
    $("#activitiesArrow").removeClass("arrowRotateDown");
})
$("#gettingHereTab").click(function() {
    $(".tab").removeClass("active");
    $(this).addClass("active");
    $("#parkInfoDesc").removeClass("activeDesc");
    $("#mapsDesc").removeClass("activeDesc");
    $("#activitiesDesc").removeClass("activeDesc");
    $("#gettingHereDesc").addClass("activeDesc");

    $("#parkInfoArrow").removeClass("arrowRotateDown");
    $("#gettingHereArrow").addClass("arrowRotateDown");
    $("#mapsArrow").removeClass("arrowRotateDown");
    $("#activitiesArrow").removeClass("arrowRotateDown");
})

$("#mapsTab").click(function() {
    $(".tab").removeClass("active");
    $(this).addClass("active");
    $("#parkInfoDesc").removeClass("activeDesc");
    $("#gettingHereDesc").removeClass("activeDesc");
    $("#activitiesDesc").removeClass("activeDesc");
    $("#mapsDesc").addClass("activeDesc");

    $("#parkInfoArrow").removeClass("arrowRotateDown");
    $("#gettingHereArrow").removeClass("arrowRotateDown");
    $("#mapsArrow").addClass("arrowRotateDown");
    $("#activitiesArrow").removeClass("arrowRotateDown");
})

$("#activitiesTab").click(function() {
    $(".tab").removeClass("active");
    $(this).addClass("active");
    $("#parkInfoDesc").removeClass("activeDesc");
    $("#gettingHereDesc").removeClass("activeDesc");
    $("#mapsDesc").removeClass("activeDesc");
    $("#activitiesDesc").addClass("activeDesc");

    $("#parkInfoArrow").removeClass("arrowRotateDown");
    $("#gettingHereArrow").removeClass("arrowRotateDown");
    $("#mapsArrow").removeClass("arrowRotateDown");
    $("#activitiesArrow").addClass("arrowRotateDown");
})

/********THIS ADDS TOOLTIP FUNCTIONALITY TO ICONS********/
$(document).ready(function() { 
         $(".iconImgTitle").tooltip({ content: '<img src="http://icdn.pro/images/fr/a/v/avatar-barbe-brun-homme-utilisateur-icone-9665-128.png" />' }); });