$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHieght: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		speed: 800,
		easing: '_linear_',
		infinite: true,
		initialSlide: 0,
		autoplay: false,
		autoplaySpeed: 1500,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swiper: true,
		touchThreshould: 10,
		touchMove: true,
		waitForAnimate: true,
		centerMode: false,
		variableWidth: true,
		rows: 1,
		slidesPerRow: 1,
		responsive: [
			{
				breakpoint: 650,
				settings: {
					arrows:false
				}
			}
		]
	});
})
$(document).ready(function () {
	$('.slider-2').slick({
		arrows: false,
		dots: false,
		adaptiveHieght: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		speed: 800,
		easing: '_linear_',
		infinite: false,
		initialSlide: 0,
		autoplay: false,
		autoplaySpeed: 1500,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: false,
		swiper: true,
		touchThreshould: 10,
		touchMove: true,
		waitForAnimate: true,
		centerMode: false,
		variableWidth: true,
		rows: 1,
		slidesPerRow: 1,
		responsive: [
			{
				breakpoint: 925,
				settings: {
					draggable: true,
				},
				breakpoint: 425,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
})
$(document).ready(function () {
	$('.slider-3').slick({
		arrows: true,
		dots: false,
		adaptiveHieght: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 800,
		easing: '_linear_',
		infinite: false,
		initialSlide: 0,
		autoplay: false,
		autoplaySpeed: 1500,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swiper: true,
		touchThreshould: 10,
		touchMove: true,
		waitForAnimate: true,
		centerMode: false,
		variableWidth: true,
		rows: 1,
		slidesPerRow: 1,
		responsive: [
			{
				breakpoint: 925,
				settings: {
					arrows:false
				}
			}
		]
	});
})

$(document).ready(function () {
	$('.slider-4').slick({
		arrows: false,
		dots: false,
		adaptiveHieght: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 800,
		easing: '_linear_',
		infinite: true,
		initialSlide: 0,
		autoplay: false,
		autoplaySpeed: 1500,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swiper: true,
		touchThreshould: 10,
		touchMove: true,
		waitForAnimate: true,
		centerMode: false,
		variableWidth: true,
		rows: 1,
		slidesPerRow: 1,
	});
})