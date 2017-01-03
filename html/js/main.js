var url = "", email = "";

$.router.add('/this/', function(data) {
    console.log(data.item);
});
$("#this,#that").click(function(){ 

	$.router.go('/this/', 'Service');
	$(".service-item").show(1000);
	$("#service").removeClass("hidden");
	$("#this-that").hide();
		});
$("#feed-service").click(function(){
	$.router.go('/feed/', 'Service');
	$("#service").addClass("hidden");
	$("#feed").removeClass("hidden");
});
$("#feed-new").click(function(){
	$("#feed").addClass("hidden");
	$("#feed-trigger").removeClass("hidden");
});
$( "#url" ).keyup(function() {
  a = validate({website: $(this).val()}, {website: {url: true}});
  if(a === undefined){
  	url = $(this).val();
  	$("#url-error").addClass("hidden");
  	$("#create-button").removeClass("disabled");
  }
  else{
  	$("#url-error, #create-button").removeClass("hidden");
  	$("#create-button").addClass("disabled");
  }
});
$("#create-button").click(function(){
	$("#feed-trigger").addClass("hidden");
	$("#this").html("Feed");
	$("#that").html("+ that");
	$("#this-that").show();
});
$("#email-service").click(function(){
	$.router.go('/email/', 'Service');
	$("#service").addClass("hidden");
	$("#email").removeClass("hidden");
});
$("#email-new").click(function(){
	$("#email").addClass("hidden");
	$("#email-fill").removeClass("hidden");
});

$( "#email-box" ).keyup(function() {
  a = validate({email_check: $(this).val()}, {email_check: {email: true}});
  console.log(a);
  if(a === undefined){
  	email = $(this).val();
  	$("#email-error").addClass("hidden");
  	$("#create-action").removeClass("disabled");
  }
  else{
  	$("#email-error, #create-action").removeClass("hidden");
  	$("#create-action").addClass("disabled");
  }
});
$("#create-action").click(function(){
	$("#email-fill").addClass("hidden");
	$("#feed_url").html(url);
	$("#email_address").html(email);
	$("#summary").removeClass("hidden");
})