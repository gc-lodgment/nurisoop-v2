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
        $(this).parents('.contact-area').fadeOut();
        $(this).parents('.contact-area').siblings('.pw-area').fadeIn();
    });
    /* 비밀번호 창 숨김 */
    $('.btnPwList').on('click', function(){
        $(this).parents('.pw-area').fadeOut();
        $(this).parents('.pw-area').siblings('.contact-area').fadeIn();
    });
});
            
        
        /*var files = e.target.files;
        var filesArr = Array.prototype.slice.call(files);  
        fileTxt = $(this)[0].files[0].name;
        //$(this).siblings('.ip-file').val(fileTxt); 
        
        filesArr.forEach(function(f){
            if(!f.type.match('image.*')){
                alert('이미지만 올릴 수 있습니다.');
                return;
            }
            selFile = f;
            

            var reader = new FileReader();
            
            reader.onload = function(e){
                $('#txtFile').append('<p class="row-file"><span class="num-txt ico-file-02"><span></span><em>'+fileTxt+'</em></span><a href="javascript:;" class="btn-file-del ico-file-cls fileTxtDel"><span></span>삭제</a></p>');
                //e.target.result
            }
            
            reader.readAsDataURL(f);
        });*/