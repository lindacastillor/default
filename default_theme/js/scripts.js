(function ($, root, undefined) {

	$(function () {
	'use strict';
	// DOM ready, take it away

	//CUSTOM SCROLL
		$(".scroll-content").mCustomScrollbar({
			theme: "dark",
			axis: "x"
		});

	// REMOVE
		var start_year = new Date().getFullYear();

		for (var i = start_year; i > start_year - 30; i--) {
			$('.listed_item_' + i + ':not(:first)').remove();
		}

	// BURGER MENU
		$('.first-button').on('click', function () {
			$('.animated-icon1').toggleClass('open');
		});


	// WINDOW SIZE
		var header = $('header').outerHeight();
		$('.hero-nav').css({'padding-top' : header}); // padding-top para el hero-nav
		$('body').css({'top' : header}); // padding-top para el header
		$('#heroImg').css({ 'height': 'calc(100vh - ' + header + 'px)' });
		$('.heroImg50').css({ 'height': 'calc(50vh - ' + header + 'px)' });
		$('.bg-beige.headerHeight').css({'top' : 78}); // Minus header para menu en page Familias
		$('.container-headerHeight').css({'top' : header}); // Minus header para menu en page Familias

		$(window).on('resize', function(){
			var header = $('header').outerHeight();
			var win = $(this); //this = window
			$('.hero-nav').css({'padding-top' : header}); // padding-top para el hero-nav on resize
			$('body').css({'top' : header}); // padding-top para el header
			$('#heroImg').css({ 'height': 'calc(100vh - ' + header + 'px)' });
			$('.heroImg50').css({ 'height': 'calc(50vh - ' + header + 'px)' });
			$('.bg-beige.headerHeight').css({'top' : header}); // Minus header para menu en page Familias
		});

		$('.homesvg').addClass('show');


	// ON SCROLL
		$(window).scroll(function() {
			var top = $(window).scrollTop();
			// SAVE ID'S
			var animation = $('.animation').offset().top - 200;

			if (top > animation) {
				$('.fade-in').addClass('show');
			}
		});



	// HERO MENU
		$(".triggerMenu").click(function(event) {
			event.preventDefault();
			$(this).toggleClass("open");
			$(".hero-nav").toggleClass("show");
			$("body").toggleClass("overflow-active");
			$("html").toggleClass("html-overflow-active");
			$("#aside-menu").toggleClass("aside-overflow-active");
			$("#orange-menu").toggleClass("show");
			$(".blue-nav-mask").toggleClass("hide");
		});

		$(".hero-nav-close").click(function(event) {
			event.preventDefault();
			$(".blue-nav-mask").addClass("hide");
			$(".hero-nav").removeClass("show");
			$("body").removeClass("overflow-active");
			$("html").removeClass("html-overflow-active");
			$("#aside-menu").removeClass("aside-overflow-active");
			$("#orange-menu").removeClass("show");
		});

		$(".blue-nav-mask").click(function(event) {
			event.preventDefault();
			$(".blue-nav-mask").addClass("hide");
			$(".hero-nav").removeClass("show");
			$("body").removeClass("overflow-active");
			$("html").removeClass("html-overflow-active");
			$("#aside-menu").removeClass("aside-overflow-active");
			$("#orange-menu").removeClass("show");
		});


	// IF GET PAGE, PAINT  BLUE MENU
		var pathname = window.location.href;
		var url = pathname.substring(0, pathname.lastIndexOf('/'));

		var inversion = url + '/inversion.php';
		var credito = url + '/credito.php';
		var conocenos = url + '/conocenos.php';
		var blog = url + '/blog.php';

		switch(pathname) {
			case inversion :
				$(".has-menu li:nth-child(1) > a").addClass('c-blue');
				break;
			case credito :
				$(".has-menu li:nth-child(2) > a").addClass('c-blue');
				break;
			case conocenos :
				$(".has-menu li:nth-child(3) > a").addClass('c-blue');
				break;
			case blog :
				$(".has-menu li:nth-child(4) > a").addClass('c-blue');
				break;
		}


	// BOOTSTRAP FORMS
	// Example starter JavaScript for disabling form submissions if there are invalid fields
		(function() {
		'use strict';
		window.addEventListener('load', function() {
			// Fetch all the forms we want to apply custom Bootstrap validation styles to
			var forms = document.getElementsByClassName('needs-validation');
			// Loop over them and prevent submission
			var validation = Array.prototype.filter.call(forms, function(form) {
				form.addEventListener('submit', function(event) {
					if (form.checkValidity() === false) {
						event.preventDefault();
						event.stopPropagation();
					}
					form.classList.add('was-validated');
				}, false);
			});
		}, false);
		})();


	// DYNAMIC BACKGROUND COLOR SCRIPT
	// Credits: https://codepen.io/DevillersJerome/pen/bpLPGe
		var inlineColorscript = $('.inline-color-script');
		if (inlineColorscript.length) {
			adaptColor('.inline-color-script');

			function adaptColor(selector) {
				var rgb = $(selector).css("background-color");

				if (rgb.match(/^rgb/)) {
					var a = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/),
						r = a[1],
						g = a[2],
						b = a[3];
				}
				var hsp = Math.sqrt(
					0.299 * (r * r) +
					0.587 * (g * g) +
					0.114 * (b * b)
				);
				if (hsp > 127.5) {
					$(selector).addClass('dark-color');
				} else {
					$(selector).addClass('light-color');
				}
			};
		}


	// ACCORDION TABS
		$(function() {
			$(".tab-menu li a").click(function(event) {
				event.preventDefault();
				$(this).parent().addClass("active");
				$(this).parent().siblings().removeClass("active");
				var tab = $(this).attr("href");
				$(".tab-content").not(tab).css({"display": "flex", "height": "0", "overflow": "hidden", "opacity" : "0"});
				$(tab).css({"display": "flex", "height": "auto", "overflow": "auto", "opacity" : "1" });
			});
		});

		$(".tab-content:first-child").css({"display": "flex"});
		$(".tab-menu li:first-child").addClass("active");

	// ACCORDION TABS 2
		$(function() {
			$(".tab-menu2 li a").click(function(event) {
				event.preventDefault();
				$(this).parent().addClass("active");
				$(this).parent().siblings().removeClass("active");
			});
		});
		$(".tab-menu2 li:first-child").addClass("active");


	// MODAL RESIZE SLIDER IMG
	$('.modal').on('shown.bs.modal', function (e) {
		$('.slider-img').slick('setPosition');
	});
	$('.slider-img').resize();

	// $('.modal').on('shown.bs.modal', function (e) {
	// 		$('.slider-img').resize();
	// })


	// HOME HERO SLIDER SLIDER
		var hasSlider = $('.has-slider');
		if (hasSlider.length) {
			$('.slider-img').slick({
				autoplay: true,
				autoplaySpeed: 3500,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: true,
				fade: true,
				adaptiveHeight: true
			});
		}

	// POSTS SLIDER
		if (hasSlider.length) {
			var $sliderPosts = $('.slider-posts');
			if ($sliderPosts.length) {
				var currentSlide;
				var slidesCount;
				var sliderCounter = document.createElement('div');
				sliderCounter.classList.add('slider__counter');

				var updateSliderCounter = function(slick, currentIndex) {
					currentSlide = slick.slickCurrentSlide() + 1;
					slidesCount = slick.slideCount;
					$(sliderCounter).html(currentSlide + ' / <span class="c-light-gray">' + slidesCount + '</span>');
				};

				$sliderPosts.on('init', function(event, slick) {
					$sliderPosts.append(sliderCounter);
					updateSliderCounter(slick);
					$(sliderCounter).html('1 / <span class="c-light-gray">1</span>');

				});

				$sliderPosts.on('afterChange', function(event, slick, currentSlide) {
					updateSliderCounter(slick, currentSlide);
				});

				$sliderPosts.slick();
			}
		}

	// POSTS SLIDER
		$('.posts-slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			centerMode: false,
			adaptiveHeight: true,
			autoplay: false,
			autoplaySpeed: 2000,
			responsive: [
			{
				breakpoint: 2000,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true
					}
			},
			{
				breakpoint: 700,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true
					}
			}
			]
		});


	// TARGET
	$('.headerHeight a[href*=#]:not([href=#])').click(function()
	{
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		  || location.hostname == this.hostname)
	  {

		var target = $(this.hash),
		headerHeight = $("header").height() + 81; // Get fixed header height

		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

		if (target.length)
		{
		  $('html,body').animate({
			scrollTop: target.offset().top - headerHeight
		}, 600);
		  return false;
		}
	  }
	});

	}, false );

})(jQuery, this );
