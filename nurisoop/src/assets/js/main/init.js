var hotSlider;

$(function () {
    //함수실행
    $(window).load(function(){
        mainSlideFn();
        midSlideFn();
        hotSlideFn();
    });
    
    //main pop
    var mainPop = $('.main-pop-wrap');
    if( mainPop.css('display') == 'block' ) {
        
        mainPopFn();
        
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

/* hotdeal slider */
function hotSlideFn(){
    var current = 0;
    hotSlider = $('#hotSlide').bxSlider({
        auto: false,
        autoHover: true,
        autoControls: false,
        controls: true,
        pager: false,
        slideWidth: 620,
        minSlides: 2,
        maxnSlides: 2,
        moveSlides: 1,
        slideMargin: 20,
        infiniteLoop: false,
        speed: 1000,
        duration: 6000,
        prevText: '<img src="http://static.nurisoop.co.kr/img/renew/common/btn_arw_left_04.png" alt="이전">',
        nextText: '<img src="http://static.nurisoop.co.kr/img/renew/common/btn_arw_right_04.png" alt="다음">',
        onSliderLoad: function(currentIndex){
            if( currentIndex == 0 ){
                //console.log('fir');
                $('.hotdeal-area').find('.bx-controls .bx-prev').css({cursor: 'auto'}).addClass('on');
            } 
        },
        onSlideAfter: function($slideElement, oldIndex, newIndex){
            //console.log(newIndex, current);
            var num = Number(current)/2;
            
            if( newIndex == num ){
                //console.log('lst');
                $('.hotdeal-area').find('.bx-controls .bx-next').addClass('on').end().find('.lst-box').addClass('on')
            }else if(  newIndex == 0 ) {
                //console.log('fir');
                $('.hotdeal-area').find('.bx-controls .bx-prev').css({cursor: 'auto'}).addClass('on');
            }else {
                $('.hotdeal-area').find('.bx-controls .bx-prev').css({cursor: 'pointer'}).removeClass('on');
                $('.hotdeal-area').find('.bx-controls .bx-next').removeClass('on').end().find('.lst-box').removeClass('on');
            }
        }
    });
    
    current = hotSlider.getSlideCount();
}

