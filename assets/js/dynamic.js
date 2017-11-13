$(document).ready(function(){
     var estadoSidebar = false;
	
		var _name = "Mia";
		var _apell = "Khalifa"
		var _password = "garabato";
		var _email = "garabato@unmsm.edu.pe"
	
    $(".examen-option").on("click", function(){
        window.location="../index.html";
    });
    $(".video-option").on("click", function(){
        window.location="videotutoriales.html";
    });
    $(".content-main button").on("click",function(){
        
    });
    $(".btn-volver").on("click", function(){
        window.location="home.html";
    });
    $(".btn-empezar").on("click", function(){
        window.location="views/login.html";
    });
	$("#btn-register").on("click", function(){
		 if($(".register-name").val()=="" ||
			 $(".register-apell").val()=="" ||
			$(".register-email").val()=="" ||
			$(".register-pass").val()==""){
			 myFunction("Complete todos los campos");
		 }else{
			 _name= $(".register-name").val();
			 _apell = $(".register-apell").val();
			_email = $(".register-email").val();
			_password = $(".register-pass").val();
			 myFunction("Registrado con exito");
		 }
        
    });
    $("#btn-login").on("click", function(){
		 if($(".login-email").val() == _email &&
				$(".login-pass").val() == _password){
			 window.location="home.html";
		 }else{
			 myFunction("Usuario no registrado");
		 }
        
    });
    $(".btn-sidebar").on("click", function(){
        estadoSidebar=!estadoSidebar;
        if(estadoSidebar){
            
            $("#sidebar").fadeOut();
        }else{
            $("#sidebar").fadeIn();
        }
        
    })
	
	$(".item-course").on("click",()=>{
	});
    
});



function myFunction(message) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
	x.innerHTML=""+message;
    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
