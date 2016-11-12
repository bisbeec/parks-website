/*Amenities*/
$(document).ready(function() {
  
  var $checks = $(':checkbox');
  
  $checks.change(function(){
    var $results = $('.parkPointer');
    var $checked = $checks.filter(':checked');

    console.log("$results ");
    console.log($results);
    console.log("$checked ");
    console.log($checked);
    
    if(!$checked.length){
      $results.show();
      return;
    }
    
    var checkedVals = $.map($checked, function(el){
    	console.log("checkedVals "+checkedVals);
      return el.value;
    });
    
    $results.hide().filter(function(){
      var categories = $(this).data('category').split(' ');
      console.log("categories "+categories);
      var checkMatches = $.grep(checkedVals, function(val){ 
      	console.log("checkMatches "+checkMatches);               
        return $.inArray(val, categories) >-1;
      });            
      
      return checkMatches.length === checkedVals.length;          
    }).show();
  });
  
});


/*fancy box*/
$(document).ready(function() {
	$(".fancybox").fancybox();
});

$("#elmorePointer").click(function() {
	$(".parkPointer").removeClass("clickedPointer");
	$(this).addClass("clickedPointer");	
	$(".parkInfo").removeClass("infoShow");
	$("#elmoreInfo").addClass("infoShow");
})
$("#grrPointer").click(function() {
	$(".parkPointer").removeClass("clickedPointer");
	$(this).addClass("clickedPointer");	
	$(".parkInfo").removeClass("infoShow");
	$("#grrInfo").addClass("infoShow");
})
$("#crystallakePointer").click(function() {
	$(".parkPointer").removeClass("clickedPointer");
	$(this).addClass("clickedPointer");	
	$(".parkInfo").removeClass("infoShow");
	$("#crystallakeInfo").addClass("infoShow");
})
$("#brightonPointer").click(function() {
	$(".parkPointer").removeClass("clickedPointer");
	$(this).addClass("clickedPointer");	
	$(".parkInfo").removeClass("infoShow");
	$("#brightonInfo").addClass("infoShow");
})
$("#maidstonePointer").click(function() {
	$(".parkPointer").removeClass("clickedPointer");
	$(this).addClass("clickedPointer");	
	$(".parkInfo").removeClass("infoShow");
	$("#maidstoneInfo").addClass("infoShow");
})
$("#smuggsPointer").click(function() {
	$(".parkPointer").removeClass("clickedPointer");
	$(this).addClass("clickedPointer");	
	$(".parkInfo").removeClass("infoShow");
	$("#smuggsInfo").addClass("infoShow");
})
$("#underhillPointer").click(function() {
	$(".parkPointer").removeClass("clickedPointer");
	$(this).addClass("clickedPointer");	
	$(".parkInfo").removeClass("infoShow");
	$("#underhillInfo").addClass("infoShow");
})
$("#waterburycenterPointer").click(function() {
	$(".parkPointer").removeClass("clickedPointer");
	$(this).addClass("clickedPointer");	
	$(".parkInfo").removeClass("infoShow");
	$("#waterburycenterInfo").addClass("infoShow");
})
$("#littleriverPointer").click(function() {
	$(".parkPointer").removeClass("clickedPointer");
	$(this).addClass("clickedPointer");	
	$(".parkInfo").removeClass("infoShow");
	$("#littleriverInfo").addClass("infoShow");
})




$(".closeBox").click(function() {
	$(".parkInfo").removeClass("infoShow");
	$(".parkPointer").removeClass("clickedPointer");
})


