$(function(){

   $("#mobile").click(function(){
   		$("#menu ul").toggle();
   });


	$('.bkgd-work').css({'opacity':'0','margin-left':'-160px'});
	$('.bkgd-work').delay(1000).animate({'opacity':'1','margin-left':'0'}, 1200);
	$('#title-work').css({'opacity':'0', 'margin-top':'120px'});
	$('#title-work').delay(1900).animate({'opacity':'1','margin-top':'100px'}, 900);

	$('.bkgd-cv').css({'opacity':'0','margin-left':'-160'});
	$('.bkgd-cv').delay(1300).animate({'opacity':'1','margin-left':'0'}, 1200);
	$('#title-skills').css({'opacity':'0', 'margin-top':'120px'});
	$('#title-skills').delay(2200).animate({'opacity':'1','margin-top':'100px'}, 900);

	$('.bkgd-contact').css({'opacity':'0','margin-left':'-160'});
	$('.bkgd-contact').delay(1600).animate({'opacity':'1','margin-left':'0'}, 1200);
	$('#title-contact').css({'opacity':'0', 'margin-top':'120px'});
	$('#title-contact').delay(2500).animate({'opacity':'1','margin-top':'100px'}, 900);


/*var bloc = $('.bloc img');
	$(bloc).mouseenter(function() {
		$(this).fadeTo( "slow" , 0.5);	
	});
	$(bloc).mouseleave(function() {
		$(this).fadeTo( "fast" , 1);
	});
*/

});

