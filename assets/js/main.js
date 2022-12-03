jQuery(function () {
  // Menu Toggle
  $(".dwawer").click(function () {
    $(".navigation").toggleClass("slow");
    $(this).toggleClass("active");
    $("body").toggleClass("no-scroll");
    $(".logo_Wrapper").toggleClass("d-none");
  });
  //  Header Fix On Scroll
  var viewPortWidth = $(window).width();

  $(window).on("scroll", function () {
    var fromTop = $(window).scrollTop();
    $("header").toggleClass("stickyheader", fromTop > 100);
  });
  //  Animation Init
  AOS.init();

  // Owl carousel
  $(".slider-carousel ul.for-carousel").owlCarousel({
    loop: false,
    margin: 0,
    dots: false,
    nav: true,
    autoWidth: false,
    margin: 60,
    animateIn: true,
    responsive: {
      0: {
        items: 1,
      },
      577: {
        items: 1,
        margin: 0,
      },
      1200: {
        items: 1,
        margin: 60,
      },
    },
    onChanged: function () {
      $(".slider-carousel .owl-item.active").removeClass("extra");
      setTimeout(function () {
        $(".slider-carousel .owl-item.active").addClass("extra");
      }, 1500);
    },
    onDragged: function () {
      document
        .querySelectorAll(".for-journey-line li")
        .forEach(function (syncV, syncIdx, syncArr) {
          if (syncV.classList.contains("active")) {
            var owlIndx = $(
              ".slider-carousel ul.for-carousel .owl-stage .owl-item.active"
            ).index();
            syncV.classList.remove("active");
            document
              .querySelectorAll(".for-journey-line li")
              [owlIndx].classList.add("active");
          }
        });
    },
  });
  $(".slider-carousel ul.for-carousel .owl-nav button").on(
    "click",
    function (event) {
      var dotIndex = $(
        ".slider-carousel ul.for-carousel .owl-stage .owl-item.active"
      ).index();
      $(".for-journey-line li").removeClass("active");
      $(".for-journey-line li").eq(dotIndex).addClass("active");
    }
  );
  $(document).on("click", ".for-journey-line li", function () {
    let n = $(this).index();
    $(".slider-carousel ul.for-carousel").trigger("to.owl.carousel", n);
    $(".for-journey-line li").removeClass("active");
    $(".for-journey-line li").eq(n).addClass("active");
  });

  // parallax Animation //
  var $parallaxElement = $(".parallax-bg");
  var elementHeight = $parallaxElement.outerHeight();
  function parallax() {
    var scrollPos = $(window).scrollTop();
    var transformValue = scrollPos / 40;
    var opacityValue = 1 - scrollPos / 600;
    var blurValue = Math.min(scrollPos / 100, 3);
    if (scrollPos < elementHeight) {
      $parallaxElement.css({
        transform: "translate3d(0, -" + transformValue + "%, 0)",
        opacity: opacityValue,
        "-webkit-filter": "blur(" + blurValue + "px)",
      });
    }
  }
  $(window).scroll(function () {
    parallax();
  });
});
// On Click Scroll
function fnGoToDiv(divId) {
  var offsetTop = $("#" + divId).offset().top;
  $("body,html").animate(
    {
      scrollTop: offsetTop,
    },
    500
  );
  return false;
}

/*===== CO2 Section Animation Starts Here =====
$(document).ready(function(){
	$(window).scroll(function(){
		/*===== Animation for line 1 Starts =====
		var windowScrollPosition = $(window).scrollTop();
		var elementScrollPosition = $('.co2-reduction-map-wrap').offset().top;
		if(windowScrollPosition >= elementScrollPosition - 200){
			$('.transitionLine').addClass("animate-increase");
			$('.drawShortLine').addClass('animate-bill-line');
			$('.drawShortLine-new').addClass('bill-line-new');
		}else{
			$('.transitionLine').removeClass("animate-increase");
			$('.drawShortLine').removeClass('animate-bill-line');
			$('.drawShortLine-new').removeClass('bill-line-new');
		}
		/*===== Animation for line 1 Ends Here =====
	});
});*/
