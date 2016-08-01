



/*******Barnav*****/


$(window).scroll(function(){  /****Fonction ecoute le scroll***/
  var scrollTop = $(this).scrollTop();

    if($(window).scrollTop() > 10){ /****Nombre de pixcel pour condition ok***/
    
          $('.navbar').addClass("opaque");/******Aplique l'opasité****/
  }
  else{$('.navbar').removeClass("opaque");}

    if($(window).scrollTop() >580){
      $('#loisir').addClass('animated bounceInUp');
      $('#loisir').css('visibility','visible');
    }
		if($(window).scrollTop() > 900){
		      $(".graphe").css("visibility","visible");
		        $('.graphe').addClass('animated zoomInRight');}
});
/*******Nav Reponsivie*****/



  $('#menu').click(function(){
    $(this).toggleClass("open");
    });

    $('a[href="#bouton1"],a[href="#Section1"],a[href="#xpDev"]').click(function(){
    	var the_id = $(this).attr("href");

    	$('html, body').animate({
    		scrollTop:$(the_id).offset().top
    	}, 'slow');
    	return false;
    });




