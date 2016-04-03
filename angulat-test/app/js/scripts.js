$(document).ready(function(){
	$(".list__add-btn").on('click', function(){
		$(".list.add").toggleClass("active");
		$(this).toggleClass("active");
	})
});