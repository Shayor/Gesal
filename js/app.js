$(function(){
    $(".contact").click(function(){
        $("html, body").animate({
            scrollTop: $(".form").offset().top
        },"slow");
    })
})