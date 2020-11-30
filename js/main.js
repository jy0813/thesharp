$(function() {
    //scroll animation
	$('.animate').scrolla({
		mobile: true,
		once: false
    });
    
    //fixheader
    var scrollvalue = 0;
    scrollvalue = $(document).scrollTop();
    fixHeader();

    $(window).on('scroll resize', function(){
        scrollvalue = $(document).scrollTop();
        fixHeader();
    });

    function fixHeader(){
        if(scrollvalue > 200) {
            $('header').addClass('on');
        }else{
            $('header').removeClass('on');
        }
    }

    //slcik

    $(".visual .slide").slick({
        arrows: false, 
        dots: true, 
        autoplay: true, 
        fade: true,       
        autoplaySpeed: 7000, 
        pauseOnHover: false, 
        pauseOnFocus: false
    });

    //toggle 
    $('header .open').on('click', function() {
        $('body').css({'overflow': 'hidden'});
        $('header .bg').css({'display': 'block'});
        $('header nav').addClass('on');
    });
    $('header .close, header .bg').on('click', function() {
        $('body').css({'overflow': 'auto'});
        $('header .bg').css({'display': 'none'});
        $('header nav').removeClass('on');
    });	
    
    //top
    $('aside').hide();
    $(window).scroll(function () {

        var spos = $(window).scrollTop();
        console.log(spos);
        if (spos >= 1080) {
            $('aside').fadeIn();
        } else {
            $('aside').fadeOut();
        }
    });
    $('aside a').click(function () {
        $('html, body').animate({
            scrollTop: '0px'
        }, 1000);
        return false;
    });
}); 