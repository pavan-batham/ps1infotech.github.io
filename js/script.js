$(window).scroll(function () {
  if ($(this).scrollTop() > 150) {
    $('body').addClass('fixed');
  } else {
    $('body').removeClass('fixed');
  }
});

$(document).ready(function () {

  $('.banner-image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  var a = 0;
  $(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        },

          {

            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              // alert('finished');
            }

          });
      });
      a = 1;
    }

  });

  $(".open-menu").click(function () {
    $(".navbar").toggleClass("open-and-close");
  });


  $(function () {
    $('.navbar > ul > li >i').click(function () {
      $(".navbar>ul>li").removeClass('active-drop');
      // $(this).parent().toggleClass('active-drop');
      $(this).parent().addClass('active-drop');
    });
  });




});

$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})

