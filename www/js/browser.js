app.updaters.updateInfoBrowser = function(){
	console.log("[exe-begin] app.updaters.updateInfoBrowser()");
	//Browser
	$("#b-codeName").text(navigator.appCodeName);
	$("#b-name").text(navigator.appName);
	$("#b-version").text(navigator.appVersion);

	// Cookie
	$("#b-cookie").text((navigator.cookieEnabled)?"Abilitati":"Disabilitati");

	// Piattaforma
	$("#b-platform").text(navigator.platform);

	// User-Agent
	$("#b-useragent-h").text(navigator.userAgent);
	$("#b-useragent-l").text(navigator.systemLanguage);
	console.log("[exe-end] app.updaters.updateInfoBrowser()");
};
console.log("[js/browser.js] creato 'app.updaters.updateInfoBrowser()'");