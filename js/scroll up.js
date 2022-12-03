
jQuery( document ).ready(function( $ ) {
    $(window).scroll(function(){
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.up').removeClass("showup");
           
        }else{
            $('.up').addClass("showup");
        }
    });

     // slide-up script
     $('.up').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
});
