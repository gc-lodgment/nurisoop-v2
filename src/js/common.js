$(function(){
    //함수실행
    ftSlideFn();
    tabFn();
    
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
        $(this).parents('div[class*="pop-wrap"]').fadeOut();
    });
});

/* tab */
function tabFn(){
    $(".tab-list > li").on("click", function() {
        
		$(this).addClass('on').siblings().removeClass('on');
        
        if( $(this).parents('.tab-box').hasClass('prdList') ){
            //상품리스트 - sub
        }else {
            //ex) 메인 탭 상품 리스트
            var atr = $(this).find('a').attr('href');
            var ht = $('header').height();
            var offsetTop = $(this).parents('.tab-box').offset().top;
            
            $(this).parents('.tab-box').siblings('div[class*="-area"]').stop().delay().fadeOut(500);
            $(atr).stop().delay().fadeIn(1000);

            $('html, body').stop().animate({
                scrollTop : (offsetTop-(ht+15)); // 15 - 예쁜여유분공간
            }, 500);
        }
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
