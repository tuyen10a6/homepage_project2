$(document).ready(function(){
    $('.img_item_flashle').slick({ slidesToShow :4,
         slidesToScroll :1,
         infinite: true,
        
            
       draggable:true,
       arrows: true,
       autoplay: true,
     autoplaySpeed: 3000, 
       prevArrow:`<button type='button' class='slick-prev slick-togetther'><i class="fa-solid fa-arrow-left"></i></i></button>`,
            nextArrow:`<button type='button' class='slick-next slick-togetther'><i class="fa-solid fa-arrow-right"></i></button>`,
       dots:true,
       responsive: [
        {

          breakpoint: 950,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
     //   responsive: [
     //      {
     //        breakpoint: 1024,
     //        settings: {
     //          slidesToShow: 3,
     //          slidesToScroll: 3,
     //          infinite: true,
     //          dots: true
     //        }
     //      },
     //      {
     //        breakpoint: 600,
     //        settings: {
     //          slidesToShow: 2,
     //          slidesToScroll: 2
     //        }
     //      },
     //      {
     //        breakpoint: 480,
     //        settings: {
     //          slidesToShow: 1,
     //          slidesToScroll: 1
     //        }
     //      }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
     //    ]

                   });
                   $('.slide_wrap').slick({
                    slidesToShow :1,
                    slidesToScroll :1,
                    infinite: true,
                    dots: false,
                  speed: 500,
                 fade: true,
                  arrows: false,   
                autoplaySpeed: 4000, 
                autoplay: true,
                cssEase: 'linear',
                
                
                    
                  });
               
  });