$(document).on('ready', function() {
	//Trash icon now deletes text bar.//

$('.list').on('click','.trash', function () {
	$(this).next('.t').remove();
	$(this).next('.ticks').remove();
	$(this).remove()
});
$('.list').on('click','.ticks', function(){
		//$(this).prev().children().first().css("text-decoration", "line-through");
		$(this).prev().children().first().toggleClass('test');

});

	
	$('#new').on('keydown', function(e){
		if(e.which == 13) {
		//$('.empty').show();	
		//$(this).after("<div class='empty'>" +  "</div>");
		var newItem = $('#new').val();
		$('.list').prepend('<button class="trash"> <i class="fa fa-trash fa-2x"></i></button><div class="t"><p>' + newItem + '</p><input class="hidden" type="text" ></div><button class="ticks"><i class="fa fa-check fa-2x"></i></button>');
		return $('#new').val('')
	}
	else {
		return
	}

});
	//$(".t").on('click', function() {
	//	$('p').hide();
	//	$('.hidden').show();
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