$(function(){
	
	$('#menu-tabs li').click(function(){
		var abc = this.className.slice(0,5);
		$('div.tab-1').hide();
		$('div.tab-2').hide();
		$('div.tab-3').hide();
		$('div.tab-4').hide();
		$('div.tab-5').hide();
		$('div.' + abc).fadeIn(100);
		$('#menu-tabs li').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('li.tab-1').click();


	$('.dl-trigger').click(function() {
		var dropdown = $('div.menu');
		if(dropdown.hasClass('active')) {
			dropdown.hide();
			dropdown.removeClass('active');
		} else {
			dropdown.show();
			dropdown.addClass('active');
		}
	});
});
