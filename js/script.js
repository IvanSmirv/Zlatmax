$(document).ready(function () {
    //  Открытие/закрытие мод. окна
    $('.popup-link').click(function () {
        $('.popup__overlay').fadeIn();
    })
    $('.popup-close').click(function () {
        $('body').removeClass('popup-active');
        $('.popup__overlay').fadeOut();
    })
    // Ленивая загрузка
    var blazy = new Blazy()
    // Кнопка вверх
    $('.btn-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 300)
    })
    // Табы
    $('.tabs__trigger').click(function (e) {
        e.preventDefault();
        $('.tabs__trigger').removeClass('tabs__trigger--active');
        $('.tabs__content-item').removeClass('tabs__content-item--active');
        $(this).addClass('tabs__trigger--active');
        $($(this).attr('href')).addClass('tabs__content-item--active');
    })
    $('.tabs__trigger:first').click();
    // Меню
    $(".header__burger").click(function () {
        $(".header__burger, .header__menu").toggleClass("active");
        $("body").toggleClass('lock')
    })
})
