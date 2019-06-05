$(function(){
    //함수실행
    ftSlideFn();
    tabFn();
    dateFn();
    
    //search 버튼 클릭 시 
    $('a[class*="btn-srch"]').on('click', function(){
        $(this).parents('.srch-box').toggleClass('on');
    });
    
    //메뉴
    $('.btn-menu').on('click', function(){
        var menuArea = $('.menu-area');
        $(this).toggleClass('on');
        if( $('html').hasClass('ie8') ){
            if( $('.btn-menu').hasClass('on') ){
                menuArea.stop().show();
            }else{
                menuArea.stop().hide();
            }
        }else {
            menuArea.stop().fadeToggle();
        }
    });
    
    //btn pop close
    $('.btn-pop-close').on('click', function(){
        //console.log('닫기');
        $(this).parents('div[class*="pop-wrap"]').stop().fadeOut();
        
        $('html').css({'overflow': 'auto', 'height': '100%'});
        $(this).parents('div[class*="pop-wrap"]').off('scroll touchmove mousewheel');
    });
});

/* tab */
function tabFn(){
    $(".tab-list > li").on("click", function() {
        
		$(this).addClass('on').siblings().removeClass('on');
        
        if( $(this).parents('.tab-box').hasClass('prdList') ){
            //상품리스트 - sub
        }else {
            var atr = $(this).find('a').attr('href');
            var ht = $('header').height();
            var offsetTop = $(this).parents('.tab-box').offset().top;
            
           /* if( $(this).parents('.tab-box').hasClass('detail') ) {
                //상품 디테일
                console.log('dt');
                $(this).parents('.tab-box').siblings('div[class*="-area"]').stop().hide();
                $(atr).stop().show();
            }else {
                //ex) 메인 탭 상품 리스트
                $(this).parents('.tab-box').siblings('div[class*="-area"]').stop().delay().fadeOut(500);
                $(atr).stop().delay().fadeIn(1000);
            }*/
            
            $(this).parents('.tab-box').siblings('div[class*="-area"]').stop().delay().fadeOut(500);
            $(atr).stop().delay().fadeIn(1000);
            
            $('html, body').stop().animate({
                scrollTop : (offsetTop-(ht+15)) // 15 - 예쁜여유분공간
            }, 500);
        }
    });
}

/* 달력 */
function dateFn(){
    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        onClose : function(selectedDate){
            var eleId = $(this).attr("id");
            var optionName = "";

            if(eleId.indexOf("StartDate") > 0) {
                eleId = eleId.replace("StartDate", "EndDate");
                optionName = "minDate";
            } else {
                eleId = eleId.replace("EndDate", "StartDate");
                optionName = "maxDate";
            }

            $("#"+eleId).datepicker("option", optionName, selectedDate);		
        }
    });
    
	$('input.date-ui').datepicker({
		dateFormat: 'yy.mm.dd'
	});
    
    $('.ico-cal.date-ui').on('click', function(){
        $(this).siblings('input.date-ui').focus();
    });
}
 
/* footer family list */
var fsite = {
	go_family: function(url){
		window.open(url);
		fsite.click_family();
	}, 

	click_family: function(){
		var hh = $("#family_list").attr("class");
		if(hh == "f_on"){
			$("#family_list").fadeOut();
			$("#family_list").removeClass("f_on");
			$(".family-btn-box").removeClass("on");
		}else{
			$("#family_list").fadeIn();
			$("#family_list").addClass("f_on");
			$(".family-btn-box").addClass("on");
		}
	}
}

/* footer slider */
function ftSlideFn(){
    $('#slideFoot').bxSlider({
        mode: 'fade',
        auto: true,
        autoControls: false,
        autoHover: true,
        controls: false,
        pager: true,
        speed: 1000,
        duration: 6000
    });
}

/* 팝업 */
function rvPopOpen(id){
    $(id).stop().fadeIn();
    
    popOpenRv();
}

//pop open
function popOpen(){
        
    $('html').css({'overflow': 'hidden', 'height': '100%'});
    $('.pop-wrap').on('scroll touchmove mousewheel', function(event) { 
        event.preventDefault();     
        event.stopPropagation();     
        return false; 
    });
}

//pop review open - yes scroll
function popOpenRv(){
    $('html').css({'overflow': 'hidden', 'height': '100%'});
    $('.pop-wrap').on('scroll touchmove', function(event) { 
        event.preventDefault();     
        event.stopPropagation();     
        return false; 
    });
}
