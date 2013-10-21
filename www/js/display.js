(function () {
	console.log("[exe-begin] app.updaters.updateInfoDisplay()");
	$("#height").text(window.screen.height);
	$("#width").text(window.screen.width);
	$("#u-height").text(window.screen.availHeight);
	$("#u-width").text(window.screen.availWidth);
	console.log("[exe-end] app.updaters.updateInfoDisplay()");
})();
console.log("[js/display.js] creato 'app.updaters.updateInfoDisplay()'");