$.router.add('/this/', function(data) {
    console.log(data.item);
});
$("#this,#that").click(function(){ 

	$.router.go('/this/', 'Service');
	$(".service-item").show(1000);
	$("#this-that").hide();
		});