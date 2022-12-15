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

$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});

$('.open-popupa').click(function(e) {
    e.preventDefault();
    $('.popup-lg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popupa').click(function() {
    $('.popup-lg').fadeOut(800);
    $('html').removeClass('no-scroll');
});


document.addEventListener('DOMContentLoaded',function(){
let formData={};
const form=document.querySelector('form');
const LS=localStorage;

form.addEventListener('input', function(event){
    formData[event.target.name]=event.target.value;
    LS.setItem('formData',JSON.stringify(formData));
});

if (LS.getItem(formData)){
    formData=JSON.parse(LS.getItem('formData'));
    for(let key in formData){
        if(form.elements[key].type==='checkbox' && formData[key]==='on'){
            form.elements[key].checked=true;
        }
        else{
            form.elements[key].value=formData[key];
        }
    }
}
})

