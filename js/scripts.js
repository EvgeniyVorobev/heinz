$(".text-wrap, .product-item, .callback-wrapper, .img-gallery-wrapper, .note-wrap, .scheme-wrap, .bgimg-wrapper, .business-model-wrapper").addClass("wow fadeInDown");
new WOW().init(); // initialization of animation;
$(document).ready(function(){
	$(".btn-begin").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
});
