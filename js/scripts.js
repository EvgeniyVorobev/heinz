$(".text-wrap, .product-item, .callback-wrapper, .img-gallery-wrapper, .note-wrap, .scheme-wrap, .bgimg-wrapper, .business-model-wrapper").addClass("wow fadeInDown"); // add Classes to Animation
new WOW().init(); // initialization of animation;
$(document).ready(function(){
	$(".btn-begin").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
});

// ** Modal Windows
function regPopup(){ $('#reg-popup').arcticmodal();}; // Modal for registration
function regDiscontPopup(){$('#reg_discont_popup').arcticmodal();}; // Modal with discont
// ** End Modal Windows.