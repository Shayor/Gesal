$(window).scroll(function(){
    if ($(window).scrollTop() >= 10) {
        $('header').addClass('fix');
    }
    else {
        $('header').removeClass('fix');
    }
});
$(function(){
    $(".contact").click(function(){
        $("html, body").animate({
            scrollTop: $(".form").offset().top
        },"slow");
    })
    $('.menu').on('click',function(){
        $(".nav-show-on-mobile").toggleClass('active')
        // $(".mainContent").toggleClass("active-content")
    });
})