/// <reference path="jquery.d.ts" />
$(document).on("click", ".login", function () {
	$('.login-form').addClass('login-form--active');
	$('.login .tooltip').toggle();
});
$(document).on("click", ".hamburger", function () {
	$('.nav-drawer').css('left', 0);
	$('.nav-drawer').addClass('opened');
	$('.nav-drawer').removeClass('closed');
});
$(document).on("click", ".aside__header", function () {
	$('.user-menu').toggleClass('hidden');
});
$(document).on("click", ".aside__menu a", function () {
	$(".aside").removeClass('active');
});
$(document).on("click", ".switch", function () {
	if ($(".switch input").is(":checked")) {
		$('.aside').addClass('active-fixed');
		$('.content').addClass('active-fixed');
		$('footer').addClass('active-fixed');
	}
	else {
		$('.aside').removeClass('active-fixed');
		$('.content').removeClass('active-fixed');
		$('footer').removeClass('active-fixed');
	}
});

$(window).scroll(function () {
	var sticky = $('.header-wrapper'),
	scroll = $(window).scrollTop();

	if (scroll >= 1) sticky.addClass('header-wrapper--fixed');
	else sticky.removeClass('header-wrapper--fixed');
});
$(document).mouseup(function (e) { // событие клика по веб-документу
  var tw = $(".aside"); // тут указываем ID элемента
  if (!tw.is(e.target) // если клик был не по нашему блоку
    && tw.has(e.target).length === 0) { // и не по его дочерним элементам
  	$(".aside").removeClass('active');
}
});
$(document).mouseup(function (e) { // событие клика по веб-документу
  var tw = $(".login-form"); // тут указываем ID элемента
  if (!tw.is(e.target) // если клик был не по нашему блоку
    && tw.has(e.target).length === 0) { // и не по его дочерним элементам
  	$(".login-form").removeClass('login-form--active');
}
});
$(document).on('touchmove', function(event) {
	let element = $('.nav-drawer');
	console.log(element.offset().left)
	let diff = parseInt(element.offset().left) + 300;
	let posx = parseInt(event.changedTouches[0].clientX);
	console.log(`diff - ${diff}`);
	console.log(`posx - ${posx}`);
	console.log(`event ${event.changedTouches[0].clientX}`)
	console.log(`width ${element.width()}`)
	if(diff - posx < 50 && diff - posx > -50 && posx < 300) {
		element.css('left', (event.changedTouches[0].clientX - element.width()));
	}
})
$(document).on('touchstart', function(event) {
	let element = $('.nav-drawer');
	element.removeClass('opened');
	element.removeClass('closed');
	let diff = parseInt(element.offset().left) + 300;
	let posx = parseInt(event.changedTouches[0].clientX);
	console.log(diff - posx < 50 && diff - posx > -50)
	if(posx < 30) {
		element.addClass('touched');
	}
	if(posx > 320) {
		element.removeClass('opened');
		element.removeClass('touched');
		element.addClass('closed');
		element.css('left', -300);
	}
})
$(document).on('touchend', function(event) {
	let element = $('.nav-drawer');
	console.log(`left = ${element.offset().left}`)
	if(parseInt(element.offset().left) > -100) {
		element.css('left', 0);
		element.addClass('opened');
		element.removeClass('closed');
	}
	else {
		element.css('left', -element.width());
		element.removeClass('opened');
		element.addClass('closed');
		element.removeClass('touched');
	}
})