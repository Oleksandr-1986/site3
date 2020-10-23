//таби
$(function() {
	let tab = $('.tabs .tabs-items > div'); 
	tab.hide().filter(':first').show(); 	
// кліки по вкладкам
	$('.tabs .tabs-nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('.tabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
// кліки по якорним ссилкам
	$('.tabs-target').click(function(){
		$('.tabs .tabs-nav a[href=' + $(this).data('id')+ ']').click();
	});
});

//slider-slick
$(document).ready(function(){
	$('.slider').slick({
		arrows:false,//наявність стілок
		dots:true,//наявніст кружечків знизу
		adaptiveHeight:true,//адаптивність висоти фото
		slidesToShow:1,//кількість слайдів до показу
		slidesToScroll:1,//кількість слайдів за одну прокрутку
		speed:1000,//швидкіть прокрутки в мс
		easing:'ease',//динаміка прокрутки(наявні приклади в шрарглці урок про анімацію)
		infinite:true,//віповідає за те чи буде слайдер безкінечний/.slick-disable-новий клас для стрілочки при значенні false
		initialSlide:0,//відповідає за номер стартового слайда
		autoplay: true,//авто прокрутка
		autoplaySpeed:1500,//швидкість автопрокрутки
		pauseOnFocus:true,//пауза при наведенні на фото/доти, відновлюється, коли прибрав
		pauseOnHover:false,//пауза при натисканні на фото, відновлюється при перезавантаженні
		pauseOnDotsHover:false,//пауза при натисканні на доти, відновлюється при перезавантаженні
		draggable:true,//відповідає за можливість прокрутки за допомогою протягування мишкою
		swipe:true,// відповідає за переключення протягуванням тачскріном
		touchTreshhold:5,//відповідає за відстань, яку треба протягнути,щоб слайд змінився/більше значення=менша відстань
		touchMove:true,//включає можливіть рухати слайдер, при значенні false буде перемикатись при протягуванні, але не рухатсь за стрілкою
		waitForAnimate:false,//при значенні false слайди перемикаються зі швидкістю клікання по стрілкам
		centerMode:false,//при включеній опції додається новий клас slick-center
		varibleWidth:true,//дає можливість самому контенту всередині слайда займати відповідну ширину, коли потрібний адаптивний слайдер
		rows:1,//кількіт рядів в вслайді
		slidesPerRow:1, //кількість слайдів в ряду
		vertical:false, //вертикальний слайдер, треба в .slider.slick-track - display:block
		verticalSwiping:false,//включає вертикальну прокрутку
		
	});
});


//burger
$(document).ready(function() {
	$('.menu__burger').click(function(event){
		$('.menu__burger,.menu__nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
//testWebP
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}else{
		document.querySelector('body').classList.add('no-webp');
	}
});
//topMenu

const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const menuActive = document.querySelector('.menu__nav');

function changeStyle() {

	menuActive.style.top = (header.offsetHeight + menu.offsetHeight - window.pageYOffset) + 'px'

}
//topMenu resize window
$(function(){
    changeStyle() ;
    $(window).resize(function(){
        changeStyle();
    });
    $(window).scroll(function(){
        changeStyle();
    });
});
