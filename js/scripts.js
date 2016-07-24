$(function() {
	var animatescroll = true;
	
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			$('.topbar a').removeClass('current');
			$(this).addClass('current');
			
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			
			var topbar = $('.topbar').height();
			var scrollpos = target.offset().top - topbar + 15;
			if (scrollpos < 0) scrollpos = 0;
			
			var currentpos = $(window).scrollTop();
			var delay = Math.abs(currentpos - scrollpos) * 0.5;
			
			if (target.length) {
				animatescroll = false;
				$('html,body').animate({
					scrollTop: scrollpos
				}, delay, 'swing', function() {animatescroll = true;});
				return false;
			}
		}
	});
	
	$(window).scroll(function() {
		if (!animatescroll) return true;
		
		var name = 'home';
		var highestpos = 0;
		var currentpos = $(window).scrollTop();
		var topbar = $('.topbar').height();
		$('a.anchor').each(function() {
			var pos = $(this).offset().top - topbar + 15;
			if ((currentpos >= pos) && (pos >= highestpos)) {
				highestpost = pos;
				name = $(this).attr('name');
			}
		});
		$('.topbar a').removeClass('current');
		$('.topbar a[href="#'+name+'"]').addClass('current');
	});
});



