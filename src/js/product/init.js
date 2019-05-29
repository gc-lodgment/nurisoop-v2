$(function () {
    //함수 실행
    
    if( $('.contents').hasClass('detail') ){
        detailSlideFn();
        selFn();
    }else {
       
    }
    
});


/* detail img slider */
function detailSlideFn(){
    var slider = $('#prdDtailSlide').bxSlider({
        mode: 'fade',
        auto: false,
        autoHover: true,
        autoControls: false,
        controls: true,
        pager: true,
        pagerCustom: '#slidePager',
        speed: 1000,
        duration: 6000,
        prevText: '<img src="http://static.nurisoop.co.kr/img/renew/common/btn_arw_left_03.png" alt="이전">',
        nextText: '<img src="http://static.nurisoop.co.kr/img/renew/common/btn_arw_right_03.png" alt="다음">'
    });
    
    $("#slidePager li").hover(function(){
        var newSlideNo = $($(this).find("a")[0]).attr('data-slide-index');
        
        if(newSlideNo != slider.getCurrentSlide()){
            slider.goToSlide(newSlideNo);
        }
    });
}

/* drop down */
function selFn(){
    $('.sel-txt').on('click', function(){
        if( $(this).siblings().hasClass('on') ){
            $('.sel-txt').siblings().removeClass('on');
        }else {
            $('.sel-txt').siblings().removeClass('on');
            $(this).siblings().addClass('on');
        }
    });
    
    $('.sel-list li').on('click', function(){
        var selBox = $(this).parents('.sel-box');
        var txt = $(this).find('a').text();
        //console.log(txt);
        
        selBox.find('.sel-list').removeClass('on');
        selBox.find('.sel-txt').text(txt);
    });
}