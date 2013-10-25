function set_new_card(id) {
	if ($('#'+id).hasClass('active')) {
		return;
	}
	var inactive   = $('.card:not(.active):not(#'+id+')');
	var old_active = $('.card.active');
	var new_active = $('#'+id);
	
	if (inactive.css('left') == '0px') {
		old_active.animate({
				left:$(window).width()+10,
				opacity:0
			},250,function(){
				$(this).css('left',-($(this).width()+10));
				$(this).css('top','50%');
				$(this).css('z-index','2');
				$(this).removeClass('active');
			}
		).animate({left:0,opacity:1},250);
		inactive.animate({
			left:'25%',
		},250,function(){
			$(this).css('z-index','3');
		});
		new_active.animate({
				left:'40%',
				width:'60%'
			},250,function() {
				$(this).addClass('active');
				$(this).css('z-index','4');
			}
		).animate({top:0,width:'100%'},250);
	} else {
		old_active.animate({
				left:$(window).width()+10,
				opacity:0
			},250,function(){
				$(this).css('left',-($(this).width()+10));
				$(this).css('top','50%');
				$(this).css('z-index','3');
				$(this).removeClass('active');
			}
		).animate({left:'25%',opacity:1},250);
		inactive.animate({
			left:$(window).width()+50,
			opacity:0
		},250,function(){
			$(this).css('left',-($(this).width()+50)+'px');
			$(this).css('z-index','2');
		}).animate({left:0,opacity:1},250);
		new_active.animate({
				left:'40%',
				width:'60%'
			},250,function() {
				$(this).addClass('active');
				$(this).css('z-index','4');
			}
		).animate({top:0,width:'100%'},250);
	}
}

