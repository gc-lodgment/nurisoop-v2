var num;

$(function () {
    $('ul[class*="pop-dt-rv-"] a').on('click', function(){
        num = $(this).attr('data-slide-index');
        //console.log(num);
        return num;
    })
});

function rvSdPopOpen(id){
    //dtPopSlide(id);
    
    $(id).stop().fadeIn(function(){
        //console.log('열림');
        dtPopSlide(id, num);
        //slider.reloadSlider();
    });
    
    popOpen();
}

/* detail pop slide */
function dtPopSlide(id, num){
    //console.log(pager)
    var slider, pager;
    
    pager = String('.')+(id.substr(1, (id.length)))+String('-pager');
    
    if( $(id).find('ul[id*="pop-dt-slide-"] li').length == 1 ){
        //이미지가 1개일 경우
    }else {
        //console.log('add');
        
        slider = $(id).find('ul[id*="pop-dt-slide-"]').bxSlider({
            auto: false,
            autoHover: true,
            autoControls: false,
            controls: true,
            //pager: false,
            pager: true,
            pagerCustom: pager,
            speed: 1000,
            duration: 6000,
            prevText: '<img src="http://static.nurisoop.co.kr/img/renew/common/btn_arw_left_04.png" alt="이전">',
            nextText: '<img src="http://static.nurisoop.co.kr/img/renew/common/btn_arw_right_04.png" alt="다음">'
        });
        slider.goToSlide(num); 
        //slider.reloadSlider();
        
    }
}
