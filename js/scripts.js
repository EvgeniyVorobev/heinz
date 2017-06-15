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
	$('footer').before(`<div style="display: none;">
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
		<p class="termsofuse">Оставляя свои контактные данные, вы даете <a target="_blank" href="http://school.locallocal.ru/terms">согласие</a> на обработку персональных данных</p>
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
		<button type="submit">КУПИТЬ КУРС</button>
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
		</div>

		<div style="display: none;">
		<div class="box-modal pad-size" id="burger_popup">
		<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
		<div class="popup">
		<div class="popup-wrapper large">
		<div class="header-text">
		<p class="ext-bold main fz-large">Получите бизнес-модель бургерной</p>
		<p class="pt15">Ответьте на наши вопросы, это поможет нам стать лучше для вас</p>
		</div>
		<div class="subscribe-form pt15">
		<form action="">
		<input type="text" placeholder="Введите ваш email">
		<input type="text" placeholder="Как вас зовут?">
		<input type="text" placeholder="В каком городе вы живёте?">
		<input type="text" placeholder="Как вы связаны с ресторанной индустрией?">
		<textarea name="description" id="" cols="30" rows="10" placeholder="Какую информацию о ресторанном бизнесе вы ищете?"></textarea>
		<button type="submit">ПОДПИСАТЬСЯ</button>
		</form>
		</div>
		<p class="termsofuse">Оставляя свои контактные данные, вы даете <a target="_blank" href="http://school.locallocal.ru/terms">согласие</a> на обработку персональных данных</p>
		</div>
		</div>
		</div>
		</div>

		<div style="display: none;">
		<div class="box-modal pad-size" id="subscribe_popup">
		<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
		<div class="popup">
		<div class="popup-wrapper large">
		<div class="header-text">
		<p class="ext-bold main fz-large">Подпишитесь на рассылку полезных материалов</p>
		<p style="display:none" class="pt15">Ответьте на наши вопросы, это поможет нам стать лучше для вас</p>
		</div>
		<div class="subscribe-form pt15">
		<form action="">
		<input type="text" placeholder="Введите ваш email">
		<input type="text" placeholder="Как вас зовут?">
		<button type="submit">ПОДПИСАТЬСЯ</button>
		</form>
		</div>
		<p class="termsofuse">Оставляя свои контактные данные, вы даете <a target="_blank" href="http://school.locallocal.ru/terms">согласие</a> на обработку персональных данных</p>
		</div>
		</div>
		</div>
		
		<div style="display: none;">
		<div class="box-modal pad-size" id="opencofee_popup">
		<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
		<div class="popup">
		<div class="popup-wrapper">
		<div class="header-text">
		<p class="ext-bold main fz-large fz">Хочу узнать о курсе «Как открыть свою кофеню»</p>
		<p style="font-family: 'Playfair-Bold-Italic'" class="pt15 f-size">Заполните форму ниже:</p>
		</div>
		<div class="subscribe-form pt20">
		<form action="">
		<input type="text" placeholder="Ваш email">
		<input type="text" placeholder="Ваше имя">
		<input type="text" placeholder="Ваш телефон (по желанию)">
		<button type="submit">ОТПРАВИТЬ</button>
		</form>
		</div>
		<p style="font-family: 'Playfair-Bold-Italic'" class="pt5 text-center">Оставляя свои контактные данные, вы даете <a style="font-family: 'Playfair-Bold-Italic'" class="underscoring_url" href="http://school.locallocal.ru/terms">согласие</a> на обработку персональных данных</p>
		</div>
		</div>
		</div>
		</div>`);
})

function regPopup(){ $('#reg-popup').arcticmodal();}; // Modal for registration
function regDiscontPopup(){$('#reg_discont_popup').arcticmodal();}; // Modal for auth users - discont
function burgerPopup(){$('#burger_popup').arcticmodal();}; // Modal for Burger (2module)
function subscribePopup(){$('#subscribe_popup').arcticmodal();}; // Modal for subscribe footer-popup
function subscribeCofePopup(){$('#opencofee_popup').arcticmodal();}; // Modal for cofee Subscribe
// ** End Modal Windows.

// Resize-click-image script
$(document).ready(function() { // Ждём загрузки страницы
	$(".image").click(function(){	// Событие клика на маленькое изображение
	  var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup-img-wrapper'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
						 "</div>"); 
		$(".popup-img-wrapper").fadeIn(800); // Медленно выводим изображение
		$(".popup-img-wrapper").click(function(){	// Событие клика на затемненный фон	   
			$(".popup-img-wrapper").fadeOut(800);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup-img-wrapper").remove(); // Удаляем разметку всплывающего окна
			}, 800);
		});
	});
});
// End Resize script