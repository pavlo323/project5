$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function(){
	$('.slider').slick({
		dots:true,
		adaptiveHeight:true,
		slidesToShow: 4,
		infinite:false,
		responsive:[
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},{
				breakpoint: 767,
				settings: {
					arrows:false
				}
			},{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows:false
				}
			}
		]
	});
});
$(document).ready(function(){
	$('.slider__coments').slick({
		dots:true,
		adaptiveHeight:true,
		infinite:false,
		responsive:[
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows:false
				}
			}
		]
	});
});