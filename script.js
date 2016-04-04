/*When the DOM is ready, allow the user to change the 
  column text to red by a single click or double click to make it hide slowly. */ 
$(document).ready(function(){
	$('.col-sm-4').on('click', function(){		
		$(this).css('color', 'red');
	});
	
	$('.col-sm-4').on('dblclick', function(){
		$(this).hide('slow');
	});

});