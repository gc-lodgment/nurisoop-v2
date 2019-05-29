$(function () {
    //함수실행
    mainSlideFn();
    midSlideFn();
    
    //main pop
    var mainPop = $('.main-pop-wrap');
    if( mainPop.css('display') == 'block' ) {
        var scltop;
        
        mainPopFn();
        
        //scroll
        $(window).scroll(function(){
            scltop = $(window).scrollTop();
            if ( scltop <= 0 ) {
                mainPop.removeClass('on');
            }else {
                mainPop.addClass('on');
            }
        });
        
    }
});


/* main slider */
function mainSlideFn(){
    $('#mainVisual').bxSlider({
        mode: 'fade',
        auto: true,
        autoHover: true,
        autoControls: false,
        controls: true,
        pager: true,
        pagerCustom: '#viualPager',
        speed: 1000,
        duration: 6000,
        prevText: '<img src="http://static.nurisoop.co.kr/img/renew/common/btn_arw_left_01.png" alt="이전">',
        nextText: '<img src="http://static.nurisoop.co.kr/img/renew/common/btn_arw_right_01.png" alt="다음">'
    });
}

/* mid slider */
function midSlideFn(){
    $('#midSilde').bxSlider({
        mode: 'fade',
        auto: true,
        autoHover: true,
        autoControls: false,
        controls: true,
        pager: false,
        speed: 1000,
        duration: 6000,
        prevText: '<img src="http://static.nurisoop.co.kr/img/renew/common/btn_arw_left_02.png" alt="이전">',
        nextText: '<img src="http://static.nurisoop.co.kr/img/renew/common/btn_arw_right_02.png" alt="다음">'
    });
}

/* main slider */
function mainPopFn(){
    $('#mainSlidePop').bxSlider({
        auto: true,
        autoHover: true,
        autoControls: false,
        controls: false,
        pager: true,
        pagerCustom: '#mainSlidePopPager',
        speed: 1000,
        duration: 6000
    });
}