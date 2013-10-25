function init() {
	init_cards();
	$("html *").animate({opacity:1.0},1000);
}
function init_cards() {
	var cards = $(".card"), i, itr = 0, elm;
	for (i = 0; i < cards.length; i++) {
		elm = $(cards[i]);
		if (elm.hasClass('active')) {
			elm.css('left','40%');
			elm.css('top','0%');
			elm.css('z-index','4');
		} else {
			elm.css('left',(itr*25) + '%');
			elm.css('top','50%');
			elm.css('z-index',(2+itr)+'');
			itr++;
		}
	}
}



function init_UI() {
	$('#writing').click(function() {
		set_new_card('writing')
	});
	$('#about').click(function() {
		set_new_card('about')	
	});
	$('#audio').click(function() {
		set_new_card('audio')
	});
}

window.onready=function() {
	init_UI();
	init();
}


