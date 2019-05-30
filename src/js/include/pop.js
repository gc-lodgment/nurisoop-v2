var slider, pager; 

$(function () {
    //console.log('pop js');
    //dtPopSlide();
    
});

function rvPopOpen(id){
    //dtPopSlide(id);
    
    pager = String('.')+(id.substr(1, (id.length)))+String('-pager');
    
    //dtPopSlide(id, pager);
    $(id).stop().fadeIn(function(){
        //console.log('열림');
        dtPopSlide(id, pager);
        
    });
    $('html').css({'overflow': 'hidden', 'height': '100%'});
    $(id).on('scroll touchmove mousewheel', function(event) { 
        event.preventDefault();     
        event.stopPropagation();     
        return false; 
    });
}

/* detail pop slide */
function dtPopSlide(id, pager){
    //console.log(pager)
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
        
        /*
            slider.destroySlider();
            $(id).slider.reloadSlider()*/
    }
}
