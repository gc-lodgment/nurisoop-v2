$(function () {
    //함수실행
    mainSlideFn();
    midSlideFn();
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
        nextText: '<img src="http://static.nurisoop.co.kr/img/renew/common/btn_arw_right_01.png" alt="다음">',
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
        nextText: '<img src="http://static.nurisoop.co.kr/img/renew/common/btn_arw_right_02.png" alt="다음">',
    });
}