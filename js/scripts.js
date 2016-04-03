$(function(){

   $("#mobile").click(function(){
   		$("#menu ul").toggle();
   })


var img_work = $('#img-work');
var title_work = $('#title-work');


	$(img_work).css({'opacity':'0','margin-left':'-800px'});
	$(img_work).delay(1000).animate({'opacity':'1','margin-left':'-960px'}, 1200);
	$(title_work).css({'opacity':'0', 'margin-top':'120px'});
	$(title_work).delay(1900).animate({'opacity':'1','margin-top':'100px'}, 900);

var img_cv = $('#img-skills');
var title_cv = $('#title-skills');


	$(img_cv).css({'opacity':'0','margin-left':'-1100px'});
	$(img_cv).delay(1300).animate({'opacity':'1','margin-left':'-960px'}, 1200);
	$(title_cv).css({'opacity':'0', 'margin-top':'120px'});
	$(title_cv).delay(2200).animate({'opacity':'1','margin-top':'100px'}, 900);



var img_contact = $('#img-contact');
var title_contact = $('#title-contact');


	$(img_contact).css({'opacity':'0','margin-left':'-800px'});
	$(img_contact).delay(1600).animate({'opacity':'1','margin-left':'-960px'}, 1200);
	$(title_contact).css({'opacity':'0', 'margin-top':'120px'});
	$(title_contact).delay(2500).animate({'opacity':'1','margin-top':'100px'}, 900);


/*var bloc = $('.bloc img');
	$(bloc).mouseenter(function() {
		$(this).fadeTo( "slow" , 0.5);	
	});
	$(bloc).mouseleave(function() {
		$(this).fadeTo( "fast" , 1);
	});
*/

});

