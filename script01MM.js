
$(function(){
    $(window).scroll(function(){
        $('.fadein').each(function(){
            let elemPos      = $(this).offset().top;
            let windowHeight = $(window).height(); 
            if (scrollY > elemPos - windowHeight + 200){
                $(this).addClass('eff-scrollin');
            }
            // else{
            //     $(this).removeClass('eff-scrollin');
            // }
        });
    });
});


$(function() {
    $('.inu-img').hover(function() {
        $(this).toggleClass('hidden').toggleClass('img-txt');
        $('.descript-for-inu').toggleClass('hidden').toggleClass('img-txt');
    });
});
$(function() {
    $('.saru-img').hover(function() {
        $(this).toggleClass('hidden').toggleClass('img-txt');
        $('.descript-for-saru').toggleClass('hidden').toggleClass('img-txt');
    });
});
$(function() {
    $('.kiji-img').hover(function() {
        $(this).toggleClass('hidden').toggleClass('img-txt');
        $('.descript-for-kiji').toggleClass('hidden').toggleClass('img-txt');
    });
});

$(function() {
    $('.fa-twitter').click(function(){
        $('.tweet-message').toggleClass('hidden')
    })
});