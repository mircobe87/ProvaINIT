var app = new kendo.mobile.Application(document.body);
console.log("[js/index.js] creto oggetto 'app' come applicazione kendo");

app.initialize = function() {
	console.log("[exe-begin] app.initialize()");
    this.bindEvents();
    console.log("[exe-end] app.initialize()");
};
console.log("[js/index.js] creato 'app.initialize()'");

app.bindEvents = function() {
	console.log("[exe-begin] app.bindEvents()");
    document.addEventListener('deviceready', this.onDeviceReady, false);
    console.log("[exe-end] app.bindEvents()");
};
console.log("[js/index.js] creato 'app.bindEvents()'");

app.onDeviceReady = function() {
	console.log("[exe-begin] app.onDeviceReady()");
	// da commentare prima del building!!!
	/*
	window.device = {
		name:     "fake device name",
		cordova:  "fake cordova version",
		platform: "fake platform",
		uuid:     "fake UUID",
		version:  "fake platform version",
		model:    "fake device model"
	};
	*/
	// fino a qui!
	
    for(updater in this.updaters) (this.updaters[updater])();
    console.log("[exe-end] app.onDeviceReady()");
};
console.log("[js/index.js] creato 'app.onDeviceReady()'");

app.updaters = {};
console.log("[js/index.js] creato 'app.updaters'");
