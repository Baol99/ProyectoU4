$(function () {
  $("#slider4").responsiveSlides({
    auto: true,
    pager: false,
    nav: true,
    speed: 500,
    namespace: "callbacks",
    before: function () {
      $(".events").append("<li>before event fired.</li>");
    },
    after: function () {
      $(".events").append("<li>after event fired.</li>");
    },
  });

  $("#btnmenu").click(function () {
    $("#navMenu").toggleClass("abrirmenu");
  });

  $("#subir").click(function () {
    $("html,body").animate(
      {
        scrollTop: "0px",
      },
      1000
    );
  });

  new WOW().init();

  $("#tit1").click(function () {
    $("#inf").slideToggle();
    $("#ico1").toggleClass("rotar");
  });

  var fondomodal = document.getElementById("modal");
  var btn = document.getElementById("prom");
  var cerrar = document.getElementById("cerrar");

  btn.onclick = function () {
    fondomodal.style.display = "flex";
  };

  cerrar.onclick = function () {
    fondomodal.style.display = "none";
  };

  window.onclick = function (e) {
    if (e.target == fondomodal) {
      fondomodal.style.display = "none";
    }
  };

  var fondo = document.getElementById("modal2");
  var btn2 = document.getElementById("prom2");
  var cerrar2 = document.getElementById("cerrar2");

  btn2.onclick = function () {
    fondo.style.display = "flex";
  };

  cerrar2.onclick = function () {
    fondo.style.display = "none";
  };

  window.onclick = function (e) {
    if (e.target == fondo) {
      fondo.style.display = "none";
    }
  };

  var fondo3 = document.getElementById("modal3");
  var btn3 = document.getElementById("prom3");
  var cerrar3 = document.getElementById("cerrar3");

  btn3.onclick = function () {
    fondo3.style.display = "flex";
  };

  cerrar3.onclick = function () {
    fondo3.style.display = "none";
  };

  window.onclick = function (e) {
    if (e.target == fondo3) {
      fondo3.style.display = "none";
    }
  };

  var mapa = document.getElementById("modal4");
  var btn3 = document.getElementById("btnmap");
  var cerrar3 = document.getElementById("cerrar4");

  btn3.onclick = function () {
    mapa.style.display = "flex";
  };

  cerrar3.onclick = function () {
    mapa.style.display = "none";
  };

  window.onclick = function (e) {
    if (e.target == mapa) {
      mapa.style.display = "none";
    }
  };
});
