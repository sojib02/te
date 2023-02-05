//dark mode

//navbar sticky
let navber = document.querySelector("nav");
let top_up = document.querySelector(".top_up");
  window.addEventListener("scroll", function(){
    let scroll_valu=window.scrollY;
    if (scroll_valu > 120) {
      navber.classList.add("sticky"),
      top_up.classList.add("top_show")
    } else {
      navber.classList.remove("sticky"),
      top_up.classList.remove("top_show")
    }
  });
$('.screenshots-03-wrap').slick({
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


$('.reviews-slide-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.reviews-nav'
  });
  $('.reviews-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.reviews-slide-2',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
  });
  //Plugin
  AOS.init();