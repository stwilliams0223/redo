jQuery(document).ready(function($){
	//open-close submenu on mobile
	$('nav').on('click', function(event){
		if($(event.target).is('nav')) $(this).children('ul').toggleClass('is-visible');
	});
});
