$('.medical_carsoule').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 4,
    slidesToscroll: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
        {
            breakpoint: 1250,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 3
            }
          },
        {
            breakpoint: 950,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 2
            }
          },
        {
          breakpoint: 600,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
  });
  // createSlick();
  // $(window).on( 'resize', createSlick );
