$(window).scroll(function(){
    if ($(window).scrollTop() >= 10) {
        $('.header-container').addClass('fix');
    }
    else {
        $('.header-container').removeClass('fix');
    }
});
$(function(){
    $(".contact,.footer-contact, .banner-contact").click(function(){
        $("html, body").animate({
            scrollTop: $(".form").offset().top
        },"slow");
    })
    $('header .menu').on('click',function(){
        console.log("Yea")
        $(".nav-show-on-mobile").toggleClass('active')
        // $(".mainContent").toggleClass("active-content")
    });
})