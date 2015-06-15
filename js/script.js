$(document).ready(function() {
	//Trash icon now deletes text bar.//
	$(".trash1").click(function() {
		$('.t1, .trash1, .ticks1').remove();
	});
	$(".trash2").click(function() {
		$('.t2, .trash2, .ticks2').remove();
	});
	$(".trash3").click(function() {
		$('.t3, .trash3, .ticks3').remove();
	});
	$(".trash4").click(function() {
		$('.t4, .trash4, .ticks4').remove();
	});
	//Text is deleted when you click on the bar//
	$(".t1").click(function() {
		$('.t1 > p ').hide();
		$('.i1').show();
	});
	$(".t2").click(function() {
		$('.t2 > p').hide();
		$('i2').show();
	});
	$(".t3").click(function() {
		$('.t3 > p').hide();
		$('i3').show();
	});
	$(".t4").click(function() {
		$('.t4 > p').hide();
		$('i4').show();
	});	
});

//display:none