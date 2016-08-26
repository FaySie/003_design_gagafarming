$(document).ready(function(){
	var page = $('.page');
	page.find('li').on('click', function(){
		page.find('li').removeClass('active');
		$(this).addClass('active');	
	});
});

