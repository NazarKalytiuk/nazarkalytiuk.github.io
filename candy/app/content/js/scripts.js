$(document).on("click", ".login", function () {
  $('.login-form').addClass('login-form--active');
  $('.login .tooltip').toggle();
});
$(document).on("click", ".hamburger", function () {
  $('.aside').toggleClass('active');
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

