$(function () {
    //함수 실행
    payTabFn();
});

/* (oder)결제수단 탭 */
function payTabFn(){
    $('.pay-area ul[class*="-tab"] li').on('click', function(){
        var tabCls = $(this).parent('ul[class*="-tab"]').attr('class');
        var tab = tabCls.split('-');
        var ths = $(this).attr('class');
        //console.log(tabCls, tab[0], ths);
        
        if( tab[0] == 'pay' ) {
            $(this).parents('.pay-tab').siblings('.pay-cont').find('.pay-row').hide();
            $(this).parents('.pay-tab').siblings('.pay-cont').find('.pay-row.'+ths).show();
        }else if( tab[0] == 'type' ) {
            $(this).parents('.type-tab').parents('tr').siblings('.type-row').hide();
            $(this).parents('.type-tab').parents('tr').siblings('.type-row.'+ths).show();
        }else {
            $(this).parents('.'+tab[0]+'-tab').siblings('.'+tab[0]+'-row').hide();
            $(this).parents('.'+tab[0]+'-tab').siblings('.'+tab[0]+'-row.'+ths).show();
        }
    });
    
}