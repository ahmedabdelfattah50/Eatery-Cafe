
$(document).ready(function(){
    

        // $(window).preloag(function(){
        //     alert("50");
        // });

    new WOW().init();                   // this for insilize the init of wow.js plugn
    new SmoothScroll('a[href*="#"]');   // this for insilize the smooth scroll to href (a) link

    // $('.owl-carousel').owlCarousel();       // this for insilize owl Carousel 2 plugn
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },

            992:{
                items:3
            }
        }
    })

    // this to declaration the niceScroll plugn
    $(function() {  
        $("body").niceScroll({
            cursorcolor: "#ce3232",
            cursorborder: "none",
            cursorwidth: "10px",
            cursorborderradius: "none",
            horizrailenabled: false,
        });
    });
  
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $("#icon_up").fadeIn();
        } else {
            $("#icon_up").fadeOut();
        }
    });
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 50){            
            $('nav').css("background-color" , "#fff");
            $('nav').css("padding-bottom" , "20px");
            $('.nav-link').css("color" , "#575757");
            $('.navbar-brand').css("color" , "#000");        
            $('.info_right  p').css("color" , "#000");     
            $('.info_right  i').css("color" , "#000");   
        } else {
            $('nav').css("background-color" , "transparent");
            $('.nav-link').css("color" , "#fff");
            $('.navbar-brand').css("color" , "#fff");  
            $('.info_right  p').css("color" , "#fff");  
            $('.info_right  i').css("color" , "#fff");    
        }
    });
    
    // $(window).resize(function() {     
    //     if ($('body').width() < 768 ){ 
    //         $("#icon_up").css("display" , "none");          
    //     } 
    // });     

});




