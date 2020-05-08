$(document).ready(function(){

   $(window).scroll(function(){
if ($(this).scrollTop() > 600) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});
 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});
	
  $(".owl-carousel2").owlCarousel2({
    margin:10,
    loop:true,
    items:1,
    autoplay:500,
    smartSpeed:300,
    center:true,
    autoplaySpeed:1000,
    autoHeight: true,
    responsiveClass: true,
   navText : ["<img src='./img/left button.png'>","<img src='./img/right button.png'>"],
   navClass: ['owl-prev', 'owl-next'],
   nav: true,

  })
   });


$(".navToggle").on("click", function(){
  $(this).toggleClass("open");
$("#menu").toggleClass("active");

})

$(".nav__item__mob").on("click", function(){
   $(this).toggleClass(".submenu_m");
$(".submenu_m").toggleClass(".submenu__item");
})


$(document).ready(function(){
 $('.card__mobile_title').click(function(){
  $(this).parent().children('.card__mobile_desc').slideToggle();
 
 });
});




       
