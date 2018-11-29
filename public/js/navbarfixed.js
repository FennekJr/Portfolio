$(function () {
    $("fixed-top").css({"top":$("header").height()});
    
        $(window).resize(function (e) {
        $("fixed-top").css({"top":$("header").height()});
        });
    
    $(document).on( 'scroll', function(){
        console.log('scroll top : ' + $(window).scrollTop());
            if($(window).scrollTop()>=$("header").height())
            {
                 $(".nav").addClass("fixed-top");
            }
    
            if($(window).scrollTop()<$("header").height())
            {
                 $(".nav").removeClass("fixed-top");
            }
        });
    });