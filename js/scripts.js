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
$(document).ready(function(){ // Add Modal Windows.
	$('body').append(`<div style="display: none;">
				<div class="box-modal" id="reg-popup">
					<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
					<div class="popup">
						<div class="popup-wrapper">
							<div class="logo">
								<img src="img/school-gust-txt.png" alt="">
							</div>
							<p class="pt10">СТОИМОСТЬ КУРСА "КАК ОТКРЫТЬ ГАСТРОНОМИЧЕСКИЙ БИЗНЕС" <strong class="ext-bold">2 000 Р</strong></p>
							<p class="autorization-txt ext-bold">АВТОРИЗУЙТЕСЬ ЧЕРЕЗ ОДНУ ИЗ СОЦСЕТЕЙ, ЧТОБЫ ПЕРЕЙТИ К ОПЛАТЕ</p>
							<div class="socialnet-reg">
								<a class="facebook"><img src="img/fb-modal.png" alt="">Войти через Facebook</a>
								<a class="vk"><img src="img/vk-modal.png" alt="">Войти через Вконтакте</a>
								<a class="google"><img src="img/googleplus-modal.png" alt="">Войти через Google +</a>
								<a class="twitter"><img src="img/twitterlogosilhouette-modal.png" alt="">Войти через Twitter</a>
							</div>
							<p class="termsofuse">Авторизуясь, вы принимаете условия <a href="">Пользовательского соглашения</a> и <a href="">Политики конфиденциальности.</a></p>
						</div>
					</div>
				</div>
			</div>

			<div style="display: none;">
				<div class="box-modal" id="reg_discont_popup">
					<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
					<div class="popup">
						<div class="popup-wrapper">
							<div class="logo">
								<img src="img/school-gust-txt.png" alt="">
							</div>
							<p class="pt10">СТОИМОСТЬ КУРСА "КАК ОТКРЫТЬ ГАСТРОНОМИЧЕСКИЙ БИЗНЕС" <strong class="ext-bold">2 000 Р</strong></p>
							<div class="form-wrap pt15">
								<form action="">
									<input type="text" placeholder="ВВЕДИТЕ ПРОМОКОД">
									<button type="submit">АКТИВИРОВАТЬ</button>
								</form>
								<div class="auth-wrapper">
									<p class="ext-bold">ВЫ АВТОРИЗОВАНЫ</p>
									<div class="login-form">		
										<div class="user_img"></div>
										<a href="#"><a href="#"><img id="logout" class="logout_img" src="img/log-out.png" alt=""></a></a>
									</div>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>`);
})

function regPopup(){ $('#reg-popup').arcticmodal();}; // Modal for registration
function regDiscontPopup(){$('#reg_discont_popup').arcticmodal();}; // Modal with discont
// ** End Modal Windows.