$(function() {

//Animations
$(".header-content").animated("rotateInUpRight");
$(".s_history h2, .s_choose h2, .s_photoblog h2").animated("fadeInLeft");
$(".s_history p, .s_choose p, .s_portfolio h2").animated("fadeInRight");
$(".s_work h3, .comm-header h3").animated("swing");
$(".work-item").animated("bounceInUp");

/* Equal Heights */
$(".work-item h4").equalHeights();
$(".work-item p").equalHeights();
$(".chs-item").equalHeights();
$(".comment-item p").equalHeights();
/*END Equal Heights */

/* Gallery Carousel (Owl-carousel v.2) */
	$('.gallery-carousel').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: false,
		autoplay: true
	});
/* End Gallery Carousel */

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
