/*-----------------------------------------------------------------------------------*/
/*	responsive menu
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
		var touch = $('#touch-menu');
	    var menu = $('.nav-header-left');
	 
	    $(touch).on('click', function(e) {
	        e.preventDefault();
	        menu.slideToggle();
	    });
	    $(window).resize(function(){
	        var wid = $(window).width();
	        if(wid > 768 && menu.is(':hidden')) {
	            menu.removeAttr('style');
	        }
	    });
	});
/*-----------------------------------------------------------------------------------*/
/*	responsive catalog
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
		var touch = $('#touch-catalog');
	    var menu = $('.mobile-catalog');
	 
	    $(touch).on('click', function(e) {
	        e.preventDefault();
	        menu.slideToggle();
	    });
	    $(window).resize(function(){
	        var wid = $(window).width();
	        if(wid > 768 && menu.is(':hidden')) {
	            menu.removeAttr('style');
	        }
	    });
	});
/*-----------------------------------------------------------------------------------*/
/*  PopUp
/*-----------------------------------------------------------------------------------*/
//Функция отображения PopUp
function PopUpShow(){
    $(".darken").fadeIn();
    $("#popup2").fadeIn();
}
        
    //Функция скрытия PopUp
function PopUpHide(){
    $(".darken").fadeOut(300);
    $("#popup2").fadeOut(300);
}
/*-----------------------------------------------------------------------------------*/
/*	responsive slider
/*-----------------------------------------------------------------------------------*/
// var w = window.screen.Width;
// if (768 < w) {

//     } 
//     else if (w >= 768) {
//        $('#carousel').flexslider({

//     }