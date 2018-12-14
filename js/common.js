//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp");
//Author URL: http://webdesign-master.ru
(function($) {
  $.fn.animated = function(inEffect) {
    $(this).each(function() {
      var ths = $(this);
      ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
        if (dir === "down") {
          ths.addClass(inEffect).css("opacity", "1");
        };
      }, {
        offset: "90%"
      });

    });
  };
})(jQuery);

$(document).ready(function(){

  $(".loader_inner").fadeOut();
  $(".loader").delay(10).fadeOut("slow");


  $('.toggle_mnu').on("click", function(e) {
    $(this).toggleClass("active_burder");
    $(".sandwich").toggleClass("active");
    $("html").toggleClass("fixed");
    $(".menu_wrap").slideToggle();
    $("body").toggleClass("menu_active");
    if ($(".mobile_menu").is(":visible")) {
      $(".mobile_menu").fadeOut(600);
    } else {
      $(".mobile_menu").fadeIn(600);
    };
    return false;
  });

 change_menu_class();
  $(window).resize(function() {
    change_menu_class();
  });

  function change_menu_class() {
    if ( $(window).width() < 768 ) {
      $(".menu").removeClass("head_menu");
      $(".menu").addClass("mobile_menu");
      $(".menu").hide();
      $(".sandwich").removeClass("active");
    } else {
      $(".menu").removeClass("mobile_menu");
      $(".menu").addClass("head_menu");
      $(".menu").show();
      $(".sandwich").removeClass("active");
    }
  }


  $(".mobile_menu ul a").click(function() {
    $(".mobile_menu").fadeOut(600);
    $("html").toggleClass("fixed");
    $("body").toggleClass("menu_active");
    $(".sandwich").toggleClass("active");
  });
  
  $(".mobile_menu a").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
  });

  $(".head_menu a").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - $('header').height();
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
  });

  //$(".pmask").mask("+38 (999)-999-99-99");

  // $('.js-lazyYT').lazyYT('AIzaSyCawA87g_pgTbSNPhiWAemy-mFKszJGl4M', {
  //   display_title: false,
  //   loading_text: '',
  //   default_ratio: '16:9'
  // });

  $(".show_teem").click(function () {
    $(this).toggleClass("active");
    $('.team').slideToggle();
    return false;
  });


  $(".show_plan").click(function () {
    $(this).toggleClass("active");
    $('.plan_content').slideToggle();
    return false;
  });

  var photo_gallery_items = $('.photo_gallery_items');
  photo_gallery_items.slick({
    slideToShow: 1,
    infinite: true,
    pauseOnFocus: true,
    draggable: true,
    centerMode: false,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true
  });

  var center_plan_slider = $('.center_plan_slider');
  center_plan_slider.slick({
    infinite: true,
    pauseOnFocus: true,
    draggable: true,
    centerMode: false,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false
  });
  

  var reviews_items = $('.reviews_items');
  reviews_items.slick({
    infinite: true,
    pauseOnFocus: true,
    draggable: true,
    centerMode: false,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true
  });
  
  $menu_slider = $('.menu_slider');
  $image_slider = $('.image_slider');
  $image_thubn_slider = $('.image_thubn_slider');
  $menu_bottom_slider = $('.menu_bottom_slider');


  $(".modal_menu_btn").click(function() {
    setTimeout(function() {
      if (!$menu_slider.hasClass('slick-initialized')) {
        $menu_slider.slick({
          slideToShow: 1,
          draggable: false,
          autoplay: false,
          arrows: false,
          dots: false,
          fade: true,
          asNavFor: '.menu_bottom_slider'
        });
      }
      if (!$image_slider.hasClass('slick-initialized')) {
        $image_slider.slick({
          slide: 'img',
          slideToShow: 1,
          draggable: true,
          autoplay: false,
          arrows: true,
          dots: false,
          fade: true,
          asNavFor: '.image_thubn_slider'
        });
      }
      if (!$image_thubn_slider.hasClass('slick-initialized')) {
        $image_thubn_slider.slick({
          slidesToShow: 4,
          draggable: true,
          autoplay: false,
          vertical: true,
          verticalSwiping: true,
          arrows: false,
          dots: false,
          focusOnSelect: true,
          asNavFor: '.image_slider',
          responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false,
              }
            }
          ]
        });
      }
      if (!$menu_bottom_slider.hasClass('slick-initialized')) {
        $menu_bottom_slider.slick({
          slidesToShow: 5,
          draggable: true,
          autoplay: false,
          arrows: true,
          dots: false,
          focusOnSelect: true,
          asNavFor: '.menu_slider',
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false,
              }
            }
          ]
        });
      }
    }, 300);
  });


  $(".show_menu_slider").click(function() {
    var el_id = $(this).parents('.menu_item').index();
    $("#modal_menu").remodal().open();
    setTimeout(function() {
      if (!$menu_slider.hasClass('slick-initialized')) {
        $menu_slider.slick({
          slideToShow: 1,
          draggable: false,
          autoplay: false,
          arrows: false,
          dots: false,
          fade: true,
          asNavFor: '.menu_bottom_slider'
        });
      }
      if (!$image_slider.hasClass('slick-initialized')) {
        $image_slider.slick({
          slide: 'img',
          slideToShow: 1,
          draggable: true,
          autoplay: false,
          arrows: true,
          dots: false,
          fade: true,
          asNavFor: '.image_thubn_slider'
        });
      }
      if (!$image_thubn_slider.hasClass('slick-initialized')) {
        $image_thubn_slider.slick({
          slidesToShow: 4,
          draggable: true,
          autoplay: false,
          vertical: true,
          verticalSwiping: true,
          arrows: false,
          dots: false,
          focusOnSelect: true,
          asNavFor: '.image_slider',
          responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false,
              }
            }
          ]
        });
      }
      if (!$menu_bottom_slider.hasClass('slick-initialized')) {
        $menu_bottom_slider.slick({
          slidesToShow: 5,
          draggable: true,
          autoplay: false,
          arrows: true,
          dots: false,
          focusOnSelect: true,
          asNavFor: '.menu_slider',
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false,
              }
            }
          ]
        });
      }
        $menu_slider.slick('slickGoTo', el_id);
    }, 300);
  });
  
  var win_height = $(window).height();
  $(window).resize(function() {
    win_height = $(window).height();
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > win_height ) {
      $('.go_to_top').fadeIn();
    } else {
      $('.go_to_top').fadeOut();
    }
  });

  $('.go_to_top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  $(".question").click(function() {
    $(this).parent().siblings().find(".answer").slideUp();
    $(this).parent().siblings().removeClass("active");
    $(this).parent().toggleClass("active");
    $(this).next().slideToggle();
  });

  var items = 3;
  $(".faq_item:not(:lt("+items+"))").hide();

  $(".show_more_faq").click(function (e){
    e.preventDefault();
    $(".faq_item:hidden").show();
    $(this).parent().hide();
  });


  $('.custom_select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
    $listItems.click(function(e) {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });
  });

  $('.cur .select-options li').on("click", function(e) {
    var span_id = $(this).attr('rel');
    $(this).parents('.price').find(".val span").removeClass('active');
    $(this).parents('.price').find(".val span").eq(span_id-1).addClass('active');
    return false;
  });

  $(function() {
    $('input[name=daterange]').datepicker();
  });

    function e() {
      4 === document.querySelector("#atm-player video").readyState ? (console.info("TEST - Video is loaded !!!"),
      $(".video-loader").fadeOut("fast"),
      t.play()) : (console.log("TEST - Loading video..."),
      setTimeout(e, 100))
    }
    $("#atm-player").find("source").each(function() {
      if ( $(window).width() > 767 ) {
        $(this).attr("src", $(this).attr("data-src")),
        $(this).attr("data-src", !1)
      } else {
        $(this).attr("src", $(this).attr("data-src-mob")),
        $(this).attr("data-src-mob", !1)
      }
    });
    if($('#atm-player').length > 0) {
      var t = videojs("atm-player", {
        controls: !1,
        autoplay: !1,
        loop: !0,
        preload: "auto"
      });
      t.ready(function() {
        console.log("Player ready for video"),
        e()
      });
      setTimeout(function() {
        t.play();
      }, 1000);
    }


  $('.additional_link').on("click", function(e) {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    var id = $(this).index();
    $(".additional_tab").removeClass('active');
    $(".additional_tab").eq(id).addClass('active');
    return false;
  });

  $(".animation_1").animated("fadeIn");
  $(".animation_2").animated("fadeInLeft");
  $(".animation_3").animated("fadeInRight");
  $(".animation_4").animated("zoomIn");
  $(".animation_5").animated("fadeInUp");
  $(".animation_6").animated("tada");
  $(".animation_7").animated("flash");
  $(".animation_8").animated("zoomInDown");

});