var gotop = true,
    winH = $(window).height(),
    scroll_in = "",
    scroll_now = "";

$(window).load(function(){
    winH = $(window).height();
});

$(window).scroll(function(){
    winScroll = $(document).scrollTop();
    //console.log(winScroll);
    
    if(winScroll > 100){
        $("header .header_function_nav .function_nav").addClass("scroll");
    }else{
        $("header .header_function_nav .function_nav").removeClass("scroll");
    }

    bias = $("header").height()+$(".dir_nav").height();

    
    $(".dir_nav .nav_item").each(function(){
        this_id = $(this).attr("goto");

        if(this_id!=''){
            this_h = $("#"+this_id).offset().top
            if(winScroll>=this_h-bias-winH/2){
                scroll_now = this_id
            }
        }
        
    })
    //console.log(scroll_now)
    if(scroll_now!=scroll_in){
        scroll_in = scroll_now;
        $(".dir_nav .nav_item").removeClass("active");
        $(".dir_nav .nav_item[goto="+scroll_in+"]").addClass("active")
    }
})

$(document).ready(function(){

    $(".header_main .menu_nav .nav_btn:not(.link)").click(function(){

        $(".header_menu_box").removeClass("active");

        if($(this).hasClass("active")){

            $("header .mask").removeClass("active")
            $(".header_main .menu_nav .nav_btn").removeClass("active")
            
        }else{
            $("header .mask").addClass("active")
            $(".header_main .menu_nav .nav_btn").removeClass("active")
            $(this).addClass("active");
            this_index = $(this).index()+1;
            
            $(".header_menu_box:nth-child("+this_index+")").addClass("active")
        }
        
    })

    $("header .mask").click(function(){
        $(".header_menu_box").removeClass("active");
        $("header .mask").removeClass("active")
        $(".header_main .menu_nav .nav_btn").removeClass("active")
    })

    $(".tablet_menu_btn, .tablet_menu .mask").click(function(){

        $(".tablet_menu_btn").toggleClass("open");

        if($(".tablet_menu_btn").hasClass("open")){
            $(".tablet_menu").addClass("open");
            $("body").addClass("menu_open")
        }else{
            $(".tablet_menu").removeClass("open");
            $("body").removeClass("menu_open")
        }
    })


    $(".tablet_menu .menu_nav .slide_nav dt").click(function(){

        $(this).toggleClass("open").siblings("dd").slideToggle(300);
        
    })

    $(".dir_nav .nav_item").click(function(){
        bias = $("header").height()+$(".dir_nav").height();
        togo = $(this).attr("goto");
        $("body,html").animate({
            scrollTop: $("#"+togo).offset().top - bias
        },600)
    })

    $(".plan .plan_nav .plan_caption").click(function(){
        
        $(".plan .plan_nav .plan_caption").removeClass("active");
        $(this).addClass("active");

        this_index = $(this).index()+1;
        $(".plan .plan_content_list .plan_content").removeClass("active");
        $(".plan .plan_content_list .plan_content:nth-child("+this_index+")").addClass("active");
        
    })

    $(".quick_contact .quick_contact_btn").click(function(){
        $(".quick_contact").toggleClass("open")
    })

    $(".go_top").click(function(){
        $("body,html").animate({
            scrollTop: 0
        },500)
    })

    var swiper = new Swiper('.banner_slider', {
        // Optional parameters
        effect: "coverflow",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        allowTouchMove: true,
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // breakpoints: {
        //     768: {
        //       slidesPerView: 2,
        //       spaceBetween: 20,
        //     },
        //     1024: {
        //       slidesPerView: 5,
        //       spaceBetween: 50,
        //     },
        // },
        
    });

    $(".banner_slider").hover(function(){
        (this).swiper.autoplay.stop();
    },function(){
        (this).swiper.autoplay.start();
    })

    var pd_swiper = new Swiper('.product_slider', {
        // Optional parameters
        //loop: true,
      
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-controler .next',
          prevEl: '.swiper-controler .prev',
        },
      
        breakpoints: {
            768: {
              slidesPerView: 2,
              //spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              //centeredSlides: true,
              //spaceBetween: 50,
            },
        },
        
    });

    var ft_swiper = new Swiper('.feature_slider', {
        // Optional parameters
        //loop: true,
        spaceBetween: 10,
      
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-controler .next',
          prevEl: '.swiper-controler .prev',
        },
      
        breakpoints: {
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1300: {
              slidesPerView: 1,
              //centeredSlides: true,
              spaceBetween: 50,
            },
        },
        
    });

});



function loading() {
    //console.log(gotop);
    $('html,body').animate({
        'scrollTop':0
    },1,function(){
        $('.loading').remove();
        $('.top .bg').addClass('active'); 
    });
}