//Michael Son(mson0129@gmail.com)
//Shortcut Keys
//23NOV2015
var addRoutes = document.getElementsByName("addDetailRoute");

var isCtrl = false;
document.addEventListener("keydown", function (event) {
	if(event.which==17) {
		isCtrl = true;
	} else {
		isCtrl = false;
	} 
});

document.addEventListener("keyup", function(event) {
	if(!isCtrl) {
		if(event.which==107) { //+
			fnaddOrderInfo(addRoutes.length.toString(), "insertTotBusOrderInfo");
		}
	}
});