$(function() {
	var scroll_links = true;
	
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			$('.topbar a').removeClass('current');
			
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			
			var topbar = $('.topbar').height();
			var scrollpos = target.offset().top - topbar + 20;
			if (scrollpos < 0) scrollpos = 0;
			
			var currentpos = $(window).scrollTop();
			var delay = Math.abs(currentpos - scrollpos) * 0.5;
			
			if (target.length) {
				scroll_links = false;
				$('html,body').animate({
					scrollTop: scrollpos
				}, delay, 'swing', function() {scroll_links = true; animateScroll();});
				return false;
			}
		}
	});
	
	var animateScroll = function() {
		var currentpos = $(window).scrollTop();
		var topbar = $('.topbar').height();
		var windowheight = window.innerHeight - topbar;
		
		var opacity = 1;
		if (currentpos < windowheight) {
			opacity = (currentpos+0.0) / (windowheight+0.0);
		}
		
		$('.topbar .background').css('opacity', opacity);
			
		if (scroll_links) {
			var name = 'home';
			var highestpos = 0;
			$('a.anchor').each(function() {
				var pos = $(this).offset().top - topbar + 15;
				if ((currentpos >= pos) && (pos >= highestpos)) {
					highestpost = pos;
					name = $(this).attr('name');
				}
			});
			$('.topbar a').removeClass('current');
			$('.topbar a[href="#'+name+'"]').addClass('current');
		}
	};
	
	$(window).scroll(animateScroll);
	
	animateScroll();
});



