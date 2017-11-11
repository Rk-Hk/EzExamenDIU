$(document).ready(function(){
     
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
    $(".btn-login").on("click", function(){
        alert("asdas");
        window.location="/home.html";
    });
    
    
    
});