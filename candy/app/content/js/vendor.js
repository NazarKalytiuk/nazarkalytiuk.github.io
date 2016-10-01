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
$(document).on("click", ".search-button", function () {
    $(".header__search").addClass('active');
});
$(document).on("click", ".search__exit", function () {
    $(".header__search").removeClass('active');
});
$(document).mouseup(function (e) {
    var tw = $(".header"); // тут указываем ID элемента
    if (!tw.is(e.target) // если клик был не по нашему блоку
        && tw.has(e.target).length === 0) {
        $(".header__search").removeClass('active');
    }
});
$(window).scroll(function () {
    var drawer = $('nav-drawer');
    if (drawer.hasClass('opened') || drawer.hasClass('touched') || drawer.css('left') === "0px") {
        $('body').css('overflow-y', 'hidden');
    }
    else {
        $('body').css('overflow-y', 'scroll');
    }
    var sticky = $('.header-wrapper'), scroll = $(window).scrollTop();
    if (scroll >= 1)
        sticky.addClass('header-wrapper--fixed');
    else
        sticky.removeClass('header-wrapper--fixed');
});
$(document).mouseup(function (e) {
    var tw = $(".aside"); // тут указываем ID элемента
    if (!tw.is(e.target) // если клик был не по нашему блоку
        && tw.has(e.target).length === 0) {
        if ($(window).width() < 960) {
            $(".aside").removeClass('opened');
            $(".aside").addClass('closed');
            $(".aside").css('left', -$(".aside").width());
        }
    }
});
$(window).on('resize', function (argument) {
    if ($(window).width() < 960) {
        $(".aside").removeClass('opened');
        $(".aside").addClass('closed');
    }
    else {
        $(".aside").addClass('opened');
        $(".aside").removeClass('closed');
    }
});
$(document).on('touchmove', function (event) {
    var element = $('.nav-drawer');
    console.log(element.offset().left);
    var diff = parseInt(parseInt(element.offset().left) + element.width());
    var posx = parseInt(event.changedTouches[0].clientX);
    console.log("diff - " + diff);
    console.log("posx - " + posx);
    console.log("event - " + event.changedTouches[0].clientX);
    console.log("width - " + element.width());
    if (diff - posx < 50 && diff - posx > -50 && posx < element.width()) {
        element.css('left', (event.changedTouches[0].clientX - element.width()));
    }
});
$(document).on('touchstart', function (event) {
    var element = $('.nav-drawer');
    element.removeClass('opened');
    element.removeClass('closed');
    var diff = parseInt(parseInt(element.offset().left) + element.width());
    var posx = parseInt(event.changedTouches[0].clientX);
    console.log(diff - posx < 50 && diff - posx > -50);
    if (posx < 30) {
        element.addClass('touched');
    }
    if (posx > element.width() + 20) {
        element.removeClass('opened');
        element.removeClass('touched');
        element.addClass('closed');
        element.css('left', -element.width());
    }
});
$(document).on('touchend', function (event) {
    var element = $('.nav-drawer');
    console.log("left = " + element.offset().left);
    if (parseInt(element.offset().left) > (-element.width() / 3)) {
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
});
//# sourceMappingURL=vendor.js.map