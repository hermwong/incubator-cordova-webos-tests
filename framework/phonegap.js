document.write('<script type="text/javascript" charset="utf-8" src="../../cordova-1.6.0.js"></script>');
document.write('<script type="text/javascript" charset="utf-8" src="../cordova-1.6.0.js"></script>');
document.write('<script type="text/javascript" charset="utf-8" src="cordova-1.6.0.js"></script>');

function backHome() {
	if (device.platform.toLowerCase() == 'android') {
            navigator.app.backHistory();
	}
	else {
	    document.location = "../index.html";
	}
}
