
function obtenerRuta() {
  console.log("ruta es :" + localStorage.setItem("root", window.location.href.split("/index")[0]));
}


$(document).ready(function () {
  var estadoSidebar = false;
  var _name = "Israel";
  var _apell = "Ruiz";
  var _password = "israel";
  var _email = "israel@gmail.com";


  var curso_selecc = "Algebra";

  var view_tutor = false;

  var temas_alg = [
    "Binomio de Newton",
    "Conjuntos",
    "Ecuaciones",
    "Ecuaciones e inecuaciones",
    "Funciones",
    "Funciones: Nociones básicas",
    "Funciones polinomiales",
    "Funciones exponenciales y logaritmica",
    "Geometria analitica"
  ];

  /*RUTAS DE MENU PRINCIPAL*/
  $(".examen-option").on("click", function () {
    window.location = "examenes/modo.html";
  });
  $(".ranking-option").on("click", function () {
    window.location = "ranking/ranking.html"
  });
  $(".tutoria-option").on("click", function () {
    window.location = "tutorias/tutorias.html";
  });
  $(".video-option").on("click", function () {
    window.location = "videotutoriales/videotutoriales.html";
  });

  /**	RUTAS DEL MENU LATERAL 	**/
  $(".item-sidebar").click(function (e) {
    var _root = localStorage.getItem("root");
    switch (e.target.id) {
      case "ini": window.location = _root + "/views/home.html";; break;
      case "exa": window.location = _root + "/views/examenes/modo.html";; break;
      case "rank": window.location = _root + "/views/ranking/ranking.html";; break;
      case "tut": window.location = _root + "/views/tutorias/tutorias.html";; break;
      case "vid": window.location = _root + "/views/videotutoriales/cargarVideo.html";; break;
      case "nos": window.location = _root + "/views/home.html";; break;
      case "cerr": window.location = _root + "/views/registrar/login.html";; break;
    }
  })

  /*	RUTA VIDEOTUTORIALES*/
  $(".item-course").click(function (e) {
    switch (e.target.id) {
      case "1":
        curso_selecc = "Algebra";
        break;
      case "2":
        curso_selecc = "Aritmética";
        break;
      case "3":
        curso_selecc = "Economía";
        break;
      case "4":
        curso_selecc = "Física";
        break;
      case "5":
        curso_selecc = "Raz. Matemático";
        break;
      case "6":
        curso_selecc = "Química";
        break;
      case "7":
        curso_selecc = "Lenguaje";
        break;
      case "8":
        curso_selecc = "Literatura";
        break;
      default:
        myFunction("No hay información del curso");
        break;
    }
    window.location = "temasxCurso.html";
  });

  /*acciones para tutoria*/

  $(".ranking-tutor").on("click", function () {
    atras_ranking = true;
    window.location = "ranking_tutores.html";
  });
  $(".mis-pedidos").on("click", function () {
    window.location = "list_pedidos.html";
  });

  $("#tutor-ricardo").on("click", function () {
    view_tutor = true;
    $(".ranking-lista-body").fadeOut();
    $(".info-tutor").fadeIn();
  });
  $(".btn-ranking-tutor").on("click", function () {
    if (view_tutor) {
      view_tutor = false;

      $(".info-tutor").fadeOut();
      $(".ranking-lista-body").fadeIn();
    } else {
      window.location = "tutorias.html";
    }
  });

  $(".like").on("click", function () {
    $(this).attr("src", "../../img/like-yes.png");
  });
  $(".comment").on("click", function () {
    $(".content-comment").fadeIn();
  });

  $(".btn-comment").on("click", function () {
    $(".modal").fadeOut();
  });


  /**lista Temas x curso**/
  $(".btn-cursos").on("click", function () {
    window.location = "videotutoriales.html";
  });
  $(".btn-temas").on("click", function () {
    window.location = "temasxCurso.html";
  });
  $(".tema-1").on("click", function () {
    window.location = "cargarVideo.html";
  });

  /**Otras acciones de israel creo :V */

  $(".content-main button").on("click", function () { });

  $(".btn-volver").on("click", function () {
    window.location = "../home.html";
  });
  $(".btn-empezar").on("click", function () {
    console.log("Estamas precionando");
    window.location = "views/registrar/login.html";
  });
  $("#btn-register").on("click", function () {
    if (
      $(".register-name").val() == "" ||
      $(".register-apell").val() == "" ||
      $(".register-email").val() == "" ||
      $(".register-pass").val() == ""
    ) {
      myFunction("Complete todos los campos");
    } else {
      _name = $(".register-name").val();
      _apell = $(".register-apell").val();
      _email = $(".register-email").val();
      _password = $(".register-pass").val();
      myFunction("Registrado con exito");
    }
  });
  $("#btn-login").on("click", function () {
    if (
      $(".login-email").val() == _email &&
      $(".login-pass").val() == _password
    ) {
      window.location = "../home.html";
    } else {
      myFunction("Usuario no registrado");
    }
  });


  $("#u-sm").on("click", function () {
    window.location = "listaExamenesSM.html";
  });
  $("#u-uni").on("click", function () {
    window.location = "listaExamenesUNI.html";
  });
  $("#u-pucp").on("click", function () {
    window.location = "listaExamenesPucp.html";
  });
  $("#modo-option").on("click", function () {
    window.location = "universidades.html";
  });

  $(".btn-sidebar").on("click", function () {

    if (estadoSidebar) {
      $("#sidebar").fadeOut();
      estadoSidebar = !estadoSidebar;
    } else {
      $("#sidebar").fadeIn();
      estadoSidebar = !estadoSidebar;
    }
  });

  $(".container-examenes").on("click", function () {
    $("#sidebar").fadeOut();
  });
  $("#empezarExamen-sm").on("click", function () {
    window.location = "mapaSM.html";
  });
  $("#empezarExamen-uni").on("click", function () {
    window.location = "mapaUni.html";
  });
  $("#empezarExamen-pucp").on("click", function () {
    window.location = "mapaPucp.html";
  });

  $(".contenedor").on("click", function () {
    $("#sidebar").fadeOut();
  });
  $("#empezarExamen").on("click", function () {
    window.location = "mapaUniversidad.html";
  });
  $(".resolver-area").on("click", function () {
    window.location = "pregunta.html";
  });
  $(".btn-siguiente").on("click", function () {
    window.location = "terminado.html";
  });

  $(".btn-secondary").on("click", function () {
    window.location = "../home.html";
  });
  $(".btn-back").on("click", function () {
    window.location = "mapaSM.html";
  });
  $(".volver-home").on("click", function () {
    window.location = "../home.html";
  });
  $(".volver-mapa").on("click", function () {
    window.location = "mapaSM.html";
  });
	
	$("#fst-fecha").datepicker();
	

$('#basicExample').timepicker();
	
	
	$(".btn-solicitar-tutoria").click(function(){
		$(".list-pedidos .alert").fadeIn();
	})
});

function myFunction(message) {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");
  x.innerHTML = "" + message;
  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}


