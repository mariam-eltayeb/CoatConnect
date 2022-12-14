// featured organizer slider
$('.recorded_carsoul').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToscroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
        {
            breakpoint:1600,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 3
            }
          },
        {
            breakpoint:1290,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 3
            }
          },
        {
            breakpoint: 980,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 2
            }
          },
        {
          breakpoint: 735,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 565,
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
