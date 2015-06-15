$(document).ready(function() {
	$(".trash1").click(function() {
		$('.t1, .trash1').remove();
	});
	$(".trash2").click(function() {
		$('.t2, .trash2').remove();
	});
	$(".trash3").click(function() {
		$('.t3, .trash3').remove();
	});
	$(".trash4").click(function() {
		$('.t4, .trash4').remove();
	});
	$(".t1").click(function() {
		$('.t1 > p').hide();
		$('input').show();
	
	});
});