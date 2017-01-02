$.router.add('/this/', function(data) {
    console.log(data.item);
});
$("#this,#that").click(function(){ 

	$.router.go('/this/', 'Service');
	$(".service-item").show(1000);
	$("#this-that").hide();
		});
$("#feed-service").click(function(){
	$.router.go('/feed/', 'Service');
	$("#service").addClass("hidden");
	$("#feed").removeClass("hidden");
})
$("#feed-new").click(function(){
	$("#feed").addClass("hidden");
	$("#feed-trigger").removeClass("hidden");
})
$( "#url" ).keyup(function() {
	console.log($(this).val());
  a = validate({website: $(this).val()}, {website: {url: true}});
  if(a === undefined){
  	$("#url-error").addClass("hidden");
  	$("#create-button").removeClass("disabled");
  }
  else{
  	$("#url-error, #create-button").removeClass("hidden");
  	$("#create-button").addClass("disabled");
  }
});
