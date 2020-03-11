$(function(){
    //함수실행
    menuFn();
    ftSlideFn();
    tabFn();
    dateFn();
    fileFn();
    
    $(document).ready(function(){
        quickFn();
    });
    
    //search 버튼 클릭 시 
    $('a[class*="btn-srch"]').on('click', function(){
        $(this).parents('.srch-box').toggleClass('on');
    });
    
    //btn pop close
    $('.popClose').on('click', function(){
        //console.log('닫기');
        $(this).parents('div[class*="pop-wrap"]').stop().fadeOut();
        
        var num = 0;
        
        if( $(this).parents('div[class*="pop-wrap"]').hasClass('fixed') ){
            $('div[class*="pop-wrap"].fixed').each(function(i) {
                if( $('div[class*="pop-wrap"].fixed:eq('+i+')').is(':visible') ){
                    //block일 경우 num에 숫자 더함
                    num += 1;
                }else {

                }
            });

            //console.log(num);

            if( num !== 1 ) {
                //num이 1이 아닐경우
            }else {
                $('html').css({'overflow': 'auto', 'height': '100%'});
                $(this).parents('div[class*="pop-wrap"]').off('scroll touchmove mousewheel');
            }
        }else {
            
            $('html').css({'overflow': 'auto', 'height': '100%'});
            $(this).parents('div[class*="pop-wrap"]').off('scroll touchmove mousewheel');
        }
        
    });

    //txt, img file del
    $(document).on('click', '.fileTxtDel', function(){
        //console.log('click');
        $(this).parent('.row-file').remove();
    });
    $(document).on('click', '.fileImgDel', function(){
        //console.log('click');
        $(this).remove();
    });
    
    //상품 detail
    if( $('.contents').hasClass('prd-detail') ){
        detailSlideFn();
        selFn();
        
        //리뷰 자세히보기
        $('.rv-list-box .view-box .view-mid .txt, .rv-list-box .view-box .view-bot .desc').on('click', function(){
            $('.rv-box').parent('li').removeClass('on');
            $(this).parents('.rv-box').parent('li').addClass('on');
            
            var ht = $('header').height();
            var offsetTop = $(this).parents('.rv-box').parent('li').offset().top;

            $('html, body').stop().animate({
                scrollTop : (offsetTop-(ht+10)) // 10 - 예쁜여유분공간
            }, 500);
        })
    }else {
       
    }
    
    //글쓰기 팝업
    $('.writePop').on('click', function(){
        $('.pop-wrap.pop-review.write').stop().fadeIn();
        popOpenRv();
    
        //리뷰 별
        $('.pop-wrap.pop-review .rv-star-box .ico-star span').on('click', function(){
            var idx = $(this).index();
            //console.log(idx);
            $('.rv-star-box .ico-star span').removeClass('on');
            for( var i = 0 ; i <= idx ; i++ ){
                $('.rv-star-box .ico-star span:eq('+i+')').addClass('on');
            }
        });
        
        //텍스트 글자 카운트
        $('.pop-wrap.pop-review .rv-view-box .txtCount').keyup(function (e){
            var count = $(this).val();
            $(this).siblings('.countNum em').html(count.len); 
        });
        
        //img file
        imgfileFn();
    });
    
    /* 비밀번호 창 나타남 */
    $('.popPw').on('click', function(){
        //console.log('password');
        comPopOpen('#popPW');
    });
    
    //우편번호팝업 - 탭 클릭 시 
    $('#popAdr .top-area .tab-list > li').on('click', function(){
        var idx = $(this).index();
        
        if( idx == 1 ) {
            $(this).parents('.top-area').siblings('.sub-tab-area').addClass('on');
        }else{
            $(this).parents('.top-area').siblings('.sub-tab-area').removeClass('on');
        }
    });
});

/* menu */
function menuFn(){
    $('.header .btn-menu').on('click', function(){
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
    
    //sub menu over
    $('.header').find('.until-list > li > a, .gnb-list > li > a').on('mouseover', function(){
        $('.header').find('.sub-menu').stop().fadeOut();
        $(this).siblings('.sub-menu').stop().fadeIn();
    });


    //sub menu leave
    $('.header .until-list, .header .gnb-list, .header .sub-menu').on('mouseleave', function(){
        $(this).find('.sub-menu').stop().fadeOut();
    });
}

/* tab */
function tabFn(){
    $(".tab-list > li").on("click", function() {
        var atr = $(this).find('a').attr('href');
        var ht = $('header').height();
        var mg = ht+15;
        var offsetTop;
        
        //console.log(atr);
        
        /* a 태그 변화 */
        if( $(this).hasClass('bnk') ){
            //공백일 경우 클래스 작동 안하게
        }else {
		  $(this).addClass('on').siblings().removeClass('on');
        }
        
        /* 탭 function */
        if( $(this).parents('.tab-box').hasClass('prdList') ){
            //상품리스트 - sub
        }else if( $(this).parents('.tab-box').hasClass('poptab') ){
                //popup tab일 경우 scrolltop 상호작용 없음
                var pop = $(this).parents('.pop-container');
                var popHt = pop.height();
                
                pop.css({'margin-top' : -(popHt/2)+'px'});
        }else if( $(this).parents('.tab-box').hasClass('pageMove') ){
            //이용약관 등 페이지 내 이동
            offsetTop = $(atr).offset().top;
            
            $('html, body').stop().animate({
                scrollTop : (offsetTop-mg) 
            }, 1000);
        }else {
            //fade in, out
            offsetTop = $(this).parents('.tab-box').offset().top;
            
            //$(this).parents('.tab-box').siblings('div[class*="-area"]').stop().delay().fadeOut(500);
            $(this).parents('.contents').find('.tabListArea').stop().delay().fadeOut(500);
            $(atr).stop().delay().fadeIn(1000);
            
            if( $(this).parents('.tab-list').hasClass('nuripick') ){
                //누리숲 PICK의 경우
                var atrLen = atr.length;
                var nuripickBn = atr.substring(1, atrLen);
                
                //console.log(atrLen, nuripickBn)
                $('.sub-top-sect .top-bn img').attr('src', 'http://static.nurisoop.co.kr/img/renew/nuripick/bn_top_'+nuripickBn+'.jpg')
                
                $('html, body').stop().animate({
                    scrollTop : 0
                }, 500);
            }else {
                $('html, body').stop().animate({
                    scrollTop : (offsetTop-mg) 
                }, 500);
            }
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
        },
        //beforeShow: customDateIng,
        //onSelect: customDateIng
    });
    
	$('input.date-ui').datepicker({
		dateFormat: 'yy.mm.dd'
	});
    
    $('.ico-cal.date-ui').on('click', function(){
        $(this).siblings('input.date-ui').focus();
    });
}

//달력 ing
/*function customDateIng(input){
    var cal = $('#ui-datepicker-div');
    $(document).on('mousemove', 'input, #ui-datepicker-div', function(){
        cal.find('td').removeClass('ing');
        if(input.id == 'searchStartDate'){
            //console.log('fir'); 
            //console.log($('td .ui-state-active').text());
            cal.find('td.ui-datepicker-current-day').nextUntil('td.ui-state-disabled', 'td').addClass('ing');
            cal.find('td.ui-state-disabled').prev('td.ing').find('a').addClass('ui-state-active');
        }else{
            //console.log('lst');
            //console.log($('td .ui-state-active').text());
            cal.find('td.ui-datepicker-current-day').prevUntil('td.ui-state-disabled', 'td').addClass('ing');
            cal.find('td.ui-state-disabled').next('td.ing').find('a').addClass('ui-state-active');
        }
    });
}*/


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

/* quick function */
function quickFn(){
    var time = 500;
    var slider = $('#quickSlide').bxSlider({
        mode: 'fade',
        auto: true,
        autoHover: true,
        autoControls: false,
        controls: true,
        pager: true,
        pagerType: 'short',
        speed: 1000,
        duration: 6000,
        prevText: '<img src="http://static.nurisoop.co.kr/img/renew/common/btn_arw_left_05.png" alt="이전">',
        nextText: '<img src="http://static.nurisoop.co.kr/img/renew/common/btn_arw_right_05.png" alt="다음">'
    });
    
    $('.quick .quick-list .menu').on('click', function(){
        $(this).find('.btn-menu').toggleClass('on');
        if( $(this).find('.btn-menu').hasClass('on') ){
            $(this).parents('.quick').stop().animate({right: 0}, time);
            slider.reloadSlider();
        }else {
            $(this).parents('.quick').stop().animate({right: '-170px'}, time);
        }
    });
    
    $('.quick .quick-list .top').on('click', function(){
        $('html, body').stop().animate({
            scrollTop : 0
        }, 1000);
    });
}

/* 팝업 */
function comPopOpen(id){
    $(id).stop().fadeIn();
    
    popOpenRv();
}

function comPopOpen2(id){
    $(id).stop().fadeIn();
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

/* 텍스트 파일 */
function fileFn(){
    var fileName = $('#ipFiles');
    var fileTxt, selFile, reader, ths;
    
    fileName.on('change', function(e){
        
        if(window.FileReader){ 
            reader = new FileReader();
            ths = $(this).get(0).files[0];
            fileTxt = ths.name;
            
            reader.onload = function (e) {
                $('#txtFile').append('<p class="row-file"><span class="num-txt ico-file-02"><span></span><em>'+fileTxt+'</em></span><a href="javascript:;" class="btn-file-del ico-file-cls fileTxtDel"><span></span>삭제</a></p>');
            }
            
            reader.readAsDataURL(ths);
        } 
        else {// old IE
            fileTxt = $(this).val().split('/').pop().split('\\').pop(); 
            
            $('#txtFile').append('<p class="row-file"><span class="num-txt ico-file-02"><span></span><em>'+fileTxt+'</em></span><a href="javascript:;" class="btn-file-del ico-file-cls fileTxtDel"><span></span>삭제</a></p>');
        }
    });
}

/* 이미지 파일 */
function imgfileFn(){
    var fileName = $('#ipImgFiles');
    var fileTxt, fileImg, selFile, reader, ths;
    var i = 0;
    
    fileName.on('change', function(e){
        if(window.FileReader){ 
            reader = new FileReader();
            ths = $(this).get(0).files[0];
            fileTxt = ths.name;
            reader.onload = function (e) {
                $('#imgFile').append('<a href="javascript:;" class="btn-pop-file-cls fileImgDel"><p class="img-row"><span><img src="'+e.target.result+'" alt="'+fileTxt+'"></span></p></a>');
            }

            reader.readAsDataURL(ths);
        }else {// old IE 
            i = i+1;
            var imgNum = 'img'+i;
            
            $(this).select();
            //fileImg = $(this).val();
            //fileImg = document.selection.createRange().text.toString();
            fileImg = document.selection.createRangeCollection()[0].text.toString();
            
            //console.log(fileImg)
            
            $('#imgFile').append('<a href="javascript:;" class="btn-pop-file-cls fileImgDel"><p class="img-row"><span><img id="'+imgNum+'"></span></p></a>');//alt="'+fileTxt+'"
            
            $('#imgFile').find('.fileImgDel').find('#'+imgNum).css({
                'max-width' : '100%',
                'background' : '#fff',
                '-ms-filter' : "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='file://"+fileImg+"', sizingMethod='scale')",
                'filter' : "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='file://"+fileImg+"', sizingMethod='scale')"
            });

            return i;
            
        }
        
    });
}