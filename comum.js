// http://blog.mojotech.com/responsive-dynamic-height-sticky-footers/
function redimensionarRodape() {
	$('body').css('margin-bottom', $('.footer').height());
}

var redimensionou = false;

redimensionarRodape();

$(window).resize(function() {
	redimensionou = true;
});

setInterval(function() {
	if (redimensionou) {
		redimensionou = false;
		redimensionarRodape();
	}
}, 250);

$(document).ready(function() {
	//bootlint.showLintReportForCurrentDocument([]);
	$("a[rel^='prettyPhoto']").prettyPhoto({
		deeplinking: false,
		slideshow: false,
		social_tools: false
	});
});
