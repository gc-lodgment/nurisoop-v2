$(function () {
    //함수실행
    
    /* 자주 묻는 질문 */
    $('.faq-area a').on('click', function(){
        $(this).parents('.q-box').toggleClass('on');
        $(this).parents('.q-box').next('.a-box').stop().fadeToggle();
    });
    
    /* 비밀번호 창 나타남 */
    $('.popPw').on('click', function(){
        //console.log('password');
        /*$(this).parents('.contact-area').fadeOut();
        $(this).parents('.contact-area').siblings('.pw-area').fadeIn();*/
    });
});