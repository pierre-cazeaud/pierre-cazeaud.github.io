// Mobile menu 
$(function(){
   $("#navburger").click(function(){
   		$("#menu ul li").toggleClass("active-item");
   		$(this).toggleClass("toggled-nav");
   });
});

// GSAP animations
var homeArrow = document.getElementById("arrow-nav");

homeArrow.onclick = function() {
	TweenLite.to(window, 1, {scrollTo:{y:"#my-works", offsetY:70}});
}
