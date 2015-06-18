$(document).ready(function() {
	//Trash icon now deletes text bar.//
$('.ticks').on('click' ,function(){
		$('p').next(this).css("text-decoration", "line-through");
		
	});

$(".trash").on('click', function() {
	$(this).next('.t,.t1').remove();
$(this).next('.ticks').remove();
$(this).remove()

	});
	$('body').on('keydown', function(e){
		if(e.which == 13) {
		$('.empty').show();	
		$(this).after("<div class='empty'>" +  "</div>");
	}
	else {
		return
	}

});
	$(".t").click(function() {
		$('p').hide();
		$('.hidden').show();

});
});


	


//$(".ticks").on('click',function() {
		//console.log(this)
		//console.log($(this).previous('.t'))
	//});
	
	
	//$(".t").click(function() {
		//$('.t > p ').hide();
		//$('.t').show();
		//$('.t').removeClass('hidden').focus();


		//Text is deleted when you click on the bar//
		//.on('click', class with .completed)

//display:none
//,.trash2 ,.trash3 ,.trash4 

//.prev('.hidden')