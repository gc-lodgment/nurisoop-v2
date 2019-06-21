$(function () {
    $(document).ready(function(){
        var noWriteEmail = $("#email_3").val();
        if (noWriteEmail != "etc") {
            $("input[name='email_2']").attr('readonly', true);
        }
        $("#email_3").change(function(){
            var email_3 = $(this).val();
            if(email_3 == "etc") {
                $("input[name='email_2']").val('');
                $("input[name='email_2']").attr('readonly', false);
            }
            else {
                $("input[name='email_2']").val(email_3);
                $("input[name='email_2']").attr('readonly', true);
            }
        });
    });
});
