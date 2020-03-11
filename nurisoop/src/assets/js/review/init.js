$(function () {
    //함수실행
        
    //일반 리뷰 자세히보기
    $('.normal-list-box .review-list .view-mid .view-tit, .normal-list-box .review-list .view-bot .desc').on('click', function(){
        $('.review-list').find('li .list-box').removeClass('on');
        $(this).parents('.list-box').addClass('on');

        var ht = $('header').height();
        var offsetTop = $(this).parents('li').offset().top;

        $('html, body').stop().animate({
            scrollTop : (offsetTop-(ht+20))
        }, 500);
    });
    
});
