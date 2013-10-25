function initSlideShow(i) {
	var next_i;
	if (i >= 4) {
		next_i = 1;
	} else {
		next_i = i + 1;
	}
	$("#img"+i).animate({opacity:0},1000);
	$("#img"+next_i).animate({opacity:1},1000);
	setTimeout(function() {initSlideShow(next_i);},3000);
}


$(".slideshow-image").css("opacity","0")
$("#img1").css("opacity","1");
initSlideShow(1);

