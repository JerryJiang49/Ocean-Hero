$(":radio").click(function(){
    var radioName = $(this).attr("name");
    $(":radio[name='"+radioName+"']").attr("disabled", true);
    $(".wrong").css("color", "#FE2E2E");
    $(".incorrect").css("background-color", "#FFD2D2");
    $(".right").css("color", "#4F8A10");
    $(".correct").css("background-color", "#DFF2BF");
})

