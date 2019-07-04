$(function () {
    
    
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
