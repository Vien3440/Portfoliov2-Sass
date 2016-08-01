/*******Agrendisement clike*****/
$('.sectionCont').on('click', function(){
  $(this).toggleClass('expanded');
  });
  
 
/******Mesure******/
$( window ).scroll(function() {
   if (window.matchMedia("(min-width: 600px)").matches) { /****Vetion animation*****/
   $(window).on('resize',function() { 
 }); 
 
//window.innerWidth
//window.innerHeight
//window.outerWidth
//window.outerHeight

$(".boite").css("height", window.innerHeight );
$(".section").css("height", window.innerHeight - 50 );
 }
 else{/*....Laise une hauteur libre / Pour la vertion sans animatin ......*/
 $(".boite").css("height","");
 } 
});
