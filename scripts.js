$(document).ready(function(){
    $('body').click(function(){
        $('.step1').fadeIn();
    });
    $('.step1').click(function(){
        $('.step2').fadeIn();
        $('html, body').animate({
            scrollTop: $(".step2").offset().top
        }, 500);  
        });
        $('.step2').click(function(){
            $('.step3').fadeIn();
            $('html, body').animate({
                scrollTop: $(".step3").offset().top
            }, 500);                    
            });

            $('.step3').click(function(){
                $('.step4').fadeIn();
                $('html, body').animate({
                    scrollTop: $(".step4").offset().top
                }, 500);                    
                });
                $('.step4').click(function(){
                    $('.step5').fadeIn();
                    $('html, body').animate({
                        scrollTop: $(".step5").offset().top
                    }, 500);                   
                 });



                 $('.step5').click(function(){
                    $('.step6').fadeIn();
                    $('html, body').animate({
                        scrollTop: $(".heart").offset().top
                    }, 500);                   
                 });


                                  
                 $('.step6').click(function(){
                    $('.step7').fadeIn();
                    $('html, body').animate({
                        scrollTop: $(".step7").offset().top
                    }, 500);                   
                 });

                 $('.step7').click(function(){
                    $('.step8').fadeIn();
                    $('html, body').animate({
                        scrollTop: $(".step8").offset().top
                    }, 500);                   
                 });


                 $('.step8').click(function(){
                    $('.step9').fadeIn();
                    $('html, body').animate({
                        scrollTop: $(".step9").offset().top
                    }, 500);                   
                 });

                 $('.step9').click(function(){
                    $('.step10').fadeIn();
                    $('html, body').animate({
                        scrollTop: $(".step10").offset().top
                    }, 500);                   
                 });

                 $('.step10').click(function(){
                    $('.step11').fadeIn();
                    $('html, body').animate({
                        scrollTop: $(".step11").offset().top
                    }, 500);                   
                 });
});

    