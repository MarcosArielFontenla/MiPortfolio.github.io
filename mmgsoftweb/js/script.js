$(document).ready(function(){ /*cuando el DOCUMENT este LISTO(ready) haceme la FUNCION(function)*/

    $(window).scroll(function(){ /*cuando usen el scroll en toda la ventana*/
    scroll = $(window).scrollTop(); /*una variable SCROLL que tiene como funcion dejar en stop el scroll en la pantalla de arriba hacia abajo*/
    if (scroll > 100) {
      $('.menu').css({"position":"fixed"}); /*posicion fija*/
      $('.menu').css({"width":"100%"}); /*ancho total de la pantalla*/
      $('.menu').css({"top":"0"}); /*le digo que vaya arriba de todo*/
      $('.menu').css({"background":"#ffff"}); /*color de fondo*/
      $('.menu a').css({"color":"#000"}); /*color de letra al menu*/
      $('.logo').css({"color":"#000"}); /*color de letra logo*/
      $('.menu').css({"box-shadow":"rgba(0, 0, 0, 0.22) 6px 1px 1px"}); /*caja bordeado negro con sombreado*/
      $('.menu').css({"z-index":"100"}); /*deja fijo el menu por delante de toda la pagina*/
    } else {
      $('.menu').css({"position":"relative"}); /*rellena el espacio que queda en el header*/
      $('.menu').css({"background":"transparent"}); /*fondo transparente*/
      $('.menu').css({"box-shadow":"0 0 0"});
      $('.menu a').css({"color":"#ffff"});
      $('.logo').css({"color":"#ffff"});
    
    }
    })
    
    $('.menu-icon').click(function(){
    $('header nav').slideToggle();
    })
    })