var app = new kendo.mobile.Application(document.body);
app.initialize = function() {
    this.bindEvents();
};
app.bindEvents = function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
};
app.platform = undefined;
app.onDeviceReady = function() {
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
};
app.updaters = {};
