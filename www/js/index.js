var app = new kendo.mobile.Application(document.body);
app.initialize = function() {
    this.bindEvents();
};
app.bindEvents = function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
};
app.onDeviceReady = function() {
    alert("API Cordova pronte all'uso");
};
