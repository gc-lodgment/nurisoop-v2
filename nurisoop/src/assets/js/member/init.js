$(function () {
    //함수 실행
    loginTabFn();
    
    /* 회원가입 이메일 체크박스여부 */
    $(document).ready(function() {
        $('.chk-like-radio input[type="checkbox"][name="check"]').on('click', function(){
            if ($(this).prop('checked')) {
                $('.chk-like-radio input[type="checkbox"][name="check"]').prop('checked', false);
                $(this).prop('checked', true);
            }
        });
    });
    
    
    /* 비회원으로 구매 over/out */
    if( $('.login-sect').hasClass('login-buy') ){
        $('.login-sect .btn-box .btn-buy').on('mouseover', function(){
            $(this).siblings('.non-info-txt').fadeIn();
        });
        $('.login-sect .btn-box').on('mouseleave', function(){
            $(this).find('.non-info-txt').fadeOut();
        });
        
    }
    
    /* 주문조회내역 */
    if( $('.inquire-area').css('display') == 'block' ){
        //day btn click
        $(this).find('.top-box .day-box .btn-day').on('click', function(){
            $(this).siblings().removeClass('on').end().addClass('on');
        });
    }
});

/* 주문취소 */
function removeCheck(){
    if( confirm('주문취소하시겠습니까?') == true ){
        alert('주문이 취소되었습니다.');
    }else {
        return false;
    }
}


/* 로그인 탭 */
function loginTabFn(){
    $('.login-tab li').on('click', function(){
        var ths = $(this).attr('class');
        
        $(this).parents('.login-tab').siblings('.login-box').hide();
        $(this).parents('.login-tab').siblings('.login-box.'+ths).show();
    });
}
