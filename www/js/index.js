var app = new kendo.mobile.Application(document.body);

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
	$("#platform").text(device.platform);
	
	$("#cordova-status img:first").attr("src", "img/logo-cordova_ok.png");
    $("#cordova-status span:first").text("caricate");
    $("#cordova-status span:first").css("color", "rgb(0,200,0)");
	$("#device-name").text(device.name);
	$("#device-cordova").text(device.cordova);
	$("#device-platform").text(device.platform);
	$("#device-uuid").text(device.uuid);
	$("#device-version").text(device.version);
	$("#device-model").text(device.model);
	
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
    console.log("[exe-end] app.onDeviceReady()");
	};
console.log("[js/index.js] creato 'app.onDeviceReady()'");







