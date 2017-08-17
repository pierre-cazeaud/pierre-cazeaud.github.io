/*===============
   Mobile menu
===============*/
$(function(){
   $("#navburger").click(function(){
   		$("#menu ul li").toggleClass("active-item");
   		$(this).toggleClass("toggled-nav");
   });
});

/*===============
 GSAP animations
===============*/

// Home header arrow scrolling animation
var homeArrow = document.getElementById("arrow-nav");

homeArrow.onclick = function() {
	TweenLite.to(window, 1, {scrollTo:{y:"#my-works", offsetY:30}});
}


// Home header text writting animation 
var cursor = document.getElementById("banner-cursor");
var letters = document.getElementsByClassName("banner-letters");
var letters_2 = document.getElementsByClassName("banner-letters-2");

var tl_main = new TimelineMax({ repeat: -1 });

tl_main
  // Animate first word
  .to(cursor, 0.5, { opacity: 1, repeat: 1, repeatDelay: 0.7 })
  .to(cursor, 0, { opacity: 1 }, "start_writting")
  .staggerTo(letters, 0.2, { display: 'inline' }, 0.2, "start_writting")
  .to(cursor, 0, { opacity: 0 })
  .to(cursor, 0.5, { opacity: 1, repeat: 1, repeatDelay: 0.7 })
  .to(cursor, 0, { opacity: 0 }, "+=1", "select_text")
  .to(letters, 0, { background: 'lightblue' }, "select_text")
  .to(letters, 0, { display: 'none' }, "+=1")

  // Animate second word
  .to(cursor, 0.5, { opacity: 1, repeat: 1, repeatDelay: 0.7 })
  .to(cursor, 0, { opacity: 1 }, "start_writting_2")
  .staggerTo(letters_2, 0.2, { display: 'inline' }, 0.2, "start_writting_2")
  .to(cursor, 0, { opacity: 0 })
  .to(cursor, 0.5, { opacity: 1, repeat: 1, repeatDelay: 0.7 })
  .to(cursor, 0, { opacity: 0 }, "+=1", "select_text_2")
  .to(letters_2, 0, { background: 'lightblue' }, "select_text_2")
  .to(letters_2, 0, { display: 'none' }, "+=1")
  .to(cursor, 0.5, { opacity: 1, repeat: 5, repeatDelay: 0.7 })
  .to(cursor, 0.5, { opacity: 0 })