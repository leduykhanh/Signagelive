$.router.add('/items/:item', function(data) {
    console.log(data.item);
});
$("#this-that").click(function(){ 

	$.router.go('/items/mycoolitem', 'My cool item');
	$(".portfolio-item").show(1000);
		});