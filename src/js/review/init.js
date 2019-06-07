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

    $(document).on('click', '.fileImgDel', function(){
        //console.log('click');
        $(this).remove();
    });
    
});

/* 이미지 파일 */
function imgfileFn(){
    var fileName = $('.pop-wrap.pop-review .file-box .ip-file-none');
    var fileTxt, selFile;
    
    fileName.on('change', function(e){
        
        var files = e.target.files;
        var filesArr = Array.prototype.slice.call(files);
        
        fileTxt = $(this)[0].files[0].name;

        filesArr.forEach(function(f){
            if(!f.type.match('image.*')){
                alert('이미지만 올릴 수 있습니다.');
                return;
            }
            selFile = f;

            var reader = new FileReader();
            reader.onload = function(e){
                $('#imgFile').append('<a href="javascript:;" class="btn-pop-file-cls fileImgDel"><p class="img-row"><span><img src="'+e.target.result+'" alt="'+fileTxt+'"></span></p></a>');
            }
            reader.readAsDataURL(f); 
        });
    });
}
