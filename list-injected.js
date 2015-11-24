//Michael Son(mson0129@gmail.com)
//Shortcut Keys
//13NOV2015
var isCtrl = false;
document.addEventListener('keydown', function (event) {
	if(event.which==17) {
		isCtrl = true;
	} else {
		isCtrl = false;
	} 
});

document.addEventListener('keyup', function(event) {
	if(!isCtrl) {
		if(event.which==219) { //[
			fnPopTerminalCd('1');
		} else if(event.which==221) { //]
			fnPopTerminalCd('2');
		} else if(event.which==13) { //enter or return
			fnGetList('');
		} else if(event.which==107) { //+
			fnInsertRouteInfo('');
		}
	}
});
