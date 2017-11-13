$(document).ready(function() {
  var estadoSidebar = false;
  $(".examen-option").on("click", function() {
    window.location = "modo.html";
  });
  $(".video-option").on("click", function() {
    window.location = "videotutoriales.html";
  });
  $(".content-main button").on("click", function() {});
  $(".btn-volver").on("click", function() {
    window.location = "home.html";
  });
  $(".btn-empezar").on("click", function() {
    window.location = "views/login.html";
  });
  $("#btn-login").on("click", function() {
    window.location = "home.html";
  });
  $(".item-university").on("click", function() {
    window.location = "listaExamenes.html";
  });
  $(".modo-option").on("click", function() {
    window.location = "universidades.html";
  });
  $(".btn-sidebar").on("click", function() {
    estadoSidebar = !estadoSidebar;
    if (estadoSidebar) {
      $("#sidebar").fadeOut();
    } else {
      $("#sidebar").fadeIn();
    }
  });
  $(".container-examenes").on("click", function() {
    $("#sidebar").fadeOut();
  });
  $("#empezarExamen").on("click", function() {
    window.location = "mapaUniversidad.html";
  });
  
});
