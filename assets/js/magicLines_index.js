$(function () {
  var controller = new ScrollMagic.Controller();

  var owl = $(".for-carousel");
  owl.owlCarousel({
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
    onChanged: function (event) {
      $(
        ".slide-icon svg path, .slide-icon svg rect, .slide-icon svg circle"
      ).removeAttr("style");
      var item = event.item.index;

      $(".for-journey-line li").removeClass("active");
      if (item == 0) {
        $(".for-journey-line li:nth-child(1)").addClass("active");
      } else if (item == 1) {
        $(".for-journey-line li:nth-child(2)").addClass("active");
      } else if (item == 2) {
        $(".for-journey-line li:nth-child(3)").addClass("active");
      } else if (item == 3) {
        $(".for-journey-line li:nth-child(4)").addClass("active");
      }

      setTimeout(function () {
        var vcsc_0 = new TimelineLite();

        vcsc_0
          .from(
            ".owl-item.active svg path,.owl-item.active svg circle,.owl-item.active svg rect",
            0.5,
            { strokeDashoffset: 650 }
          )
          .to(
            ".owl-item.active svg path,.owl-item.active svg circle,.owl-item.active svg rect",
            3,
            { strokeDashoffset: 0 }
          )

          .fromTo(
            ".owl-item.active .color_72D0C6",
            0.5,
            { fill: "none" },
            { delay: -1.4, fill: "#72D0C6" }
          )
          .fromTo(
            ".owl-item.active .color_5A807F",
            0.5,
            { fill: "none" },
            { delay: -1.4, fill: "#5a807f" }
          )
          .fromTo(
            ".owl-item.active .color_72D0C6",
            0.5,
            { fill: "none" },
            { delay: -1.4, fill: "#72d0c6" }
          )
          .fromTo(
            ".owl-item.active .color_C0EDE3",
            0.5,
            { fill: "none" },
            { delay: -1.4, fill: "#C0EDE3" }
          )
          .fromTo(
            ".owl-item.active .color_C2EEE4",
            0.5,
            { fill: "none" },
            { delay: -1.4, fill: "#C2EEE4" }
          );

        vcsc_0.timeScale(1);

        var scene_0 = new ScrollMagic.Scene({
          triggerElement: ".start-journey-section",
        })
          .setTween(vcsc_0)

          //.addIndicators()
          .addTo(controller);
      }, 100);
    },
  });
  owl.on("mousewheel", ".owl-stage", function (e) {
    if (e.originalEvent.wheelDelta > 0) {
      owl.trigger("next.owl");
    } else {
      owl.trigger("prev.owl");
    }
    e.preventDefault();
  });

  var vcsc1 = new TimelineLite();

  vcsc1
    .from(".reduction-block-1 ul li:nth-child(1)", 0.2, {
      opacity: 0,
      autoAlpha: 1,
      y: -130,
    })
    .from(".reduction-block-1 ul li:nth-child(1) .lineOffset", 0.2, {
      opacity: 0,
      autoAlpha: 1,
    })
    .from(".reduction-block-1 ul li:nth-child(2)", 0.2, {
      opacity: 0,
      autoAlpha: 1,
      y: -130,
    })
    .from(".reduction-block-1 ul li:nth-child(3)", 0.2, {
      opacity: 0,
      autoAlpha: 1,
      y: -130,
    })
    .from(".reduction-block-1 ul li:nth-child(3) .lineOffset", 0.2, {
      opacity: 0,
      autoAlpha: 1,
    })
    .from(".reduction-block-1 ul li:nth-child(4)", 0.2, {
      opacity: 0,
      autoAlpha: 1,
      y: 130,
    })
    .from(".reduction-block-1 ul li:nth-child(5)", 0.2, {
      opacity: 0,
      autoAlpha: 1,
      y: 130,
    })
    .from(".reduction-block-1 ul li:nth-child(5) .lineOffset", 0.2, {
      opacity: 0,
      autoAlpha: 1,
    })
    .from(".reduction-block-1 ul li:nth-child(6)", 0.2, {
      opacity: 0,
      autoAlpha: 1,
      y: 130,
    })

    .from(".line-1-wrap svg mask path", 0.5, {
      strokeDashoffset: 800,
      delay: -1,
    })
    .to(".line-1-wrap svg mask path", 0.5, { strokeDashoffset: 0 })

    .from(".line-1-wrap p", 0.5, {
      opacity: 0,
      autoAlpha: 0,
      scale: 0,
      delay: -0.3,
    })
    .from(".analysis-part", 0.4, {
      opacity: 0,
      autoAlpha: 0,
      x: 100,
    })
    .from(".analysis-anim-wrap", 0, { opacity: 0, autoAlpha: 0 });

  vcsc1.timeScale(1);

  var scene1 = new ScrollMagic.Scene({
    triggerElement: ".co2-reduction-section",
  })
    .setTween(vcsc1)

    //.addIndicators()
    .addTo(controller);

  // end scene

  var vcsc2 = new TimelineLite();

  vcsc2
    .from(".co2-reduction-part-3 .desktop-line div:nth-child(1) mask path", 1, {
      strokeDashoffset: 800,
    })
    .to(".co2-reduction-part-3 .desktop-line div:nth-child(1) mask path", 1, {
      strokeDashoffset: 0,
    })

    .from(".co2-reduction-part-3 .desktop-line div:nth-child(2) mask path", 1, {
      strokeDashoffset: 800,
      delay: -1,
    })
    .to(".co2-reduction-part-3 .desktop-line div:nth-child(2) mask path", 1, {
      strokeDashoffset: 0,
      delay: -0.5,
    })

    .from(
      ".systam-info ul li:nth-child(1),.systam-info ul li:nth-child(2),.systam-info ul li:nth-child(3)",
      0.3,
      { opacity: 0, scale: 0, y: 0, delay: -0.5 }
    )

    .from(".line-3-wrap mask path", 1, { strokeDashoffset: -300, delay: -0.5 })
    .to(".line-3-wrap mask path", 1, { strokeDashoffset: 0, delay: -1 })

    // .from('.confidence-score h3', 0.3, { opacity: 0, scale: 0, y: 0 })

    .from(".confidence-score h3", 0.3, { y: 0, opacity: 0 })
    .from(
      ".systam-info ul li:nth-child(1),.systam-info ul li:nth-child(2),.systam-info ul li:nth-child(3)",
      0.4,
      { y: 0 }
    )

    .to(".confidence-score h3", 0.3, { y: -130, opacity: 1, delay: -0.3 })
    .to(
      ".systam-info ul li:nth-child(1),.systam-info ul li:nth-child(2),.systam-info ul li:nth-child(3)",
      0.4,
      { y: 165, delay: -0.4 }
    )

    .to(".systam-info ul li svg:last-child", 0.4, { opacity: 1, delay: -0.3 })
    .to(".systam-data", 0.4, { opacity: 1, x: 0 });

  vcsc2.timeScale(1);

  var scene2 = new ScrollMagic.Scene({
    triggerElement: ".co2-reduction-part-3",
    triggerHook: 0.8,
  })
    .setTween(vcsc2)

    //.addIndicators()
    .addTo(controller);

  // end scene

  var vcsc3 = new TimelineLite();

  vcsc3
    .from(".line-4 svg mask path ", 1, {
      strokeDashoffset: 800,
      delay: -0.9,
    })
    .to(".line-4 svg mask path", 1, { strokeDashoffset: 0, delay: -0.5 })

    .from(".co2-reduction-part-4-wrap .ledger-data ul li:nth-child(2) ", 0.5, {
      opacity: 1,
      autoAlpha: 0,
      y: 100,
    })
    .from(".plus-icon ", 0.5, { opacity: 1, autoAlpha: 0, scale: 3 })
    .from(".co2-reduction-part-4-wrap .ledger-data ul li:nth-child(3) ", 0.5, {
      opacity: 1,
      autoAlpha: 0,
      y: 100,
    })

    .from(".lineDrops2 svg mask path ", 1, {
      strokeDashoffset: -850,
      delay: -0.9,
    })
    .to(".lineDrops2 svg mask path", 1, {
      strokeDashoffset: 0,
      delay: -0.1,
    })

    .from(".lineDrops2 >div:last-child svg mask path ", 1, {
      strokeDashoffset: -850,
      delay: -0.9,
    })
    .to(".lineDrops2 >div:last-child  svg mask path", 1, {
      strokeDashoffset: 0,
      delay: -0.1,
    });

  vcsc3.timeScale(1);

  var scene3 = new ScrollMagic.Scene({
    triggerElement: ".co2-reduction-part-4-wrap",
    triggerHook: 0.8,
  })
    .setTween(vcsc3)

    //.addIndicators()
    .addTo(controller);

  // end scene

  var vcsc5 = new TimelineLite();

  vcsc5
    .from(".co2-reduction-part-5 .ledger-data", 0.4, { x: 100, opacity: 0 })

    .from(".horseLine svg mask path ", 1, {
      strokeDashoffset: -850,
      delay: -0.9,
    })
    .to(".horseLine  svg mask path", 1, { strokeDashoffset: 0, delay: -0.1 })
    .from(".reduction-block-6 .ledger-data", 0.4, { x: -100, opacity: 0 });

  vcsc5.timeScale(1);

  var scene4 = new ScrollMagic.Scene({
    triggerElement: ".co2-reduction-part-5",
  })
    .setTween(vcsc5)

    //.addIndicators()
    .addTo(controller);

  // end scene

  vcsc7.timeScale(1);

  var scene7 = new ScrollMagic.Scene({
    triggerElement: ".co2-reduction-part-1",
  })
    .setTween(vcsc7)

    //.addIndicators()
    .addTo(controller);

  // end scene

  var vcsc8 = new TimelineLite();

  vcsc8
    .from(".reduction-block-4 .ledger-data", 0.4, {
      opacity: 0,
      autoAlpha: 0,
      y: -100,
    })
    .from(".line-4 svg ", 0, { opacity: 0, autoAlpha: 0 });

  vcsc8.timeScale(1);

  var scene8 = new ScrollMagic.Scene({
    triggerElement: ".co2-reduction-part-4-wrap",
    triggerHook: 1,
  })
    .setTween(vcsc8)

    //.addIndicators()
    .addTo(controller);

  // end scene

  vcsc9.timeScale(1);

  var scene9 = new ScrollMagic.Scene({
    triggerElement: ".co2-reduction-part-4-wrap",
  })
    .setTween(vcsc9)
    //.addIndicators()
    .addTo(controller);

  // end scene

  vcsc10.timeScale(1);

  var scene10 = new ScrollMagic.Scene({
    triggerElement: ".co2-reduction-part-5",
  })
    .setTween(vcsc10)

    //.addIndicators()
    .addTo(controller);

  // end scene
});
