$(document).ready(function() { 
    $("header").load("header.html");

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

    /********THIS ADDS TOOLTIP FUNCTIONALITY********/

    $(".tooltipFunc").tooltip({ content: '<img src="http://icdn.pro/images/fr/a/v/avatar-barbe-brun-homme-utilisateur-icone-9665-128.png" />' }); 
});