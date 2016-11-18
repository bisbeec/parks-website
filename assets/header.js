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

 $("#hamburger").click(function() {
    $(".bar.one").toggleClass("barOneEffect");
    $(".bar.two").toggleClass("barTwoEffect");
    $(".bar.three").toggleClass("barThreeEffect");
    $("#mobileMenu").toggleClass("mobileMenuSlide");
})