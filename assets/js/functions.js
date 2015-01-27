

// HEADER RESIZING (fittextjs.com)

$(function() {
	$(".header-class h1").fitText(1, { minFontSize: '10px', maxFontSize: '70px' });
});


(function( $ ){
	$.fn.fitText = function( kompressor, options ) {

		// Setup options
		var compressor = kompressor || 1,
			settings = $.extend({
			'minFontSize' : Number.NEGATIVE_INFINITY,
			'maxFontSize' : Number.POSITIVE_INFINITY
			}, options);
			return this.each(function(){

			// Store the object
			var $this = $(this);

			// Resizer() resizes items based on the object width divided by the compressor * 10
			var resizer = function () {
			$this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
			};

			// Call once to set.
			resizer();

			// Call on resize. Opera debounces their resize by default.
			$(window).on('resize.fittext orientationchange.fittext', resizer);
		});
	};
})( jQuery );




// PROJECTS SECTION CODE

var imgCount = 1;
var total = 9;

function slide(x) {
	var Image = document.getElementById('img');
	imgCount = imgCount + x;
	if(imgCount > total){ imgCount = 1; }
	if(imgCount < 1){ imgCount = total; }
	Image.src = "../assets/img/projects/proj" + imgCount + ".jpg";
}


window.setInterval(function slideA() {
	var Image = document.getElementById('img');
	imgCount = imgCount + 1;
	if(imgCount > total){ imgCount = 1; }
	if(imgCount < 1){ imgCount = total; }
	Image.src = "../assets/img/projects/proj" + imgCount + ".jpg";
}, 7000);





// CLIENT SECTION CODE

function clientRelated() {
	$('.cl-section').first().addClass('active-section');
	$('.cl-logo').first().addClass('active-section');
	$('.cl-mob-nav span').first().addClass('active-section');

	$('.cl-logo, .cl-mob-nav span').click(function() {
		var $this = $(this),
			$siblingss = $this.parent().children(),
			position = $siblingss.index($this);

		$('.cl-section').removeClass('active-section').eq(position).addClass('active-section');
		$siblingss.removeClass('active-section');
		$this.addClass('active-section');
	});

	$('#next, #prev').click(function() {

		var $this = $(this),
			activeClient = $('.clients-carousel').find('.active-section'),
			position = $('.clients-carousel').children().index(activeClient),
			clientNum = $('.cl-section').length;


			if($this.hasClass('next1')) {

				if(position < clientNum -1){
					$('.active-section').removeClass('active-section').next().addClass('active-section');
				} else {
					$('.cl-section').removeClass('active-section').first().addClass('active-section');
					$('.cl-logo').removeClass('active-section').first().addClass('active-section');
				}
			} else {

				if (position === 0) {

					$('.cl-section').removeClass('active-section').last().addClass('active-section');
					$('.cl-logo').removeClass('active-section').last().addClass('active-section');

				} else {

				$('.active-section').removeClass('active-section').prev().addClass('active-section');
				}
			}
	});
}

clientRelated();





