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
});


/* 로그인 탭 */
function loginTabFn(){
    $('.login-tab li').on('click', function(){
        var ths = $(this).attr('class');
        
        $(this).parents('.login-tab').siblings('.login-box').hide();
        $(this).parents('.login-tab').siblings('.login-box.'+ths).show();
    });
}
