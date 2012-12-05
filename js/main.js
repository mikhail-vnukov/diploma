$(document).ready(resize);
$(window).resize(resize);


function resize(load) {
	console.log("document ready");
	var siteHeight = $(".site").height();
	var footerHeight = $(".footer").height();
	var headerHeight = $(".header").height();
	var autoheight = $(".container").data("height");
	if(!autoheight) {
		autoheight = $(".container").height();
		$(".container").data("height", autoheight);
	}

	var newHeight = siteHeight - footerHeight - headerHeight;
	
	newHeight = (newHeight > autoheight) ? newHeight : autoheight;
	console.log(newHeight);


	$(".content").height(newHeight);
	$(".sidebar").height(newHeight);


}