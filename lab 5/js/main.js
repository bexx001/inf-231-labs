$(function () {

    $(window).scroll(function(){

        $(".contact").each(function () {

           var window_top = $(window).scrollTop();

           var div_top = $(this).offset().top;

            if (window_top > div_top - 400){

                $(".contact").removeClass('stick_r');

                $(this).addClass('stick_r');}

            else{

                $(this).removeClass('stick_r');};

        });

    });

});

$(function () {

    $(window).scroll(function(){

        $(".icon").each(function () {

           var window_top = $(window).scrollTop();

           var div_top = $(this).offset().top;

            if (window_top > div_top - 400){

                $(".icon").removeClass('stick_i');

                $(this).addClass('stick_i');}

            else{

                $(this).removeClass('stick_i');};

        });

    });

});