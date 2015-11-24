//Michael Son(mson0129@gmail.com)
//DoubleClick Scroll
//13NOV2015
var toggle=0;
document.ondblclick = function(event) {
	if(window.event) {
		eventStatus = window.event.srcElement.tagName;
	} else {
		eventStatus = evnt.target.tagName;
	}

	if(eventStatus!="INPUT"&&eventStatus!="TEXTAREA") {
		if(toggle==0) {
			var sc=9999999; toggle=1;
		} else {
			var sc=0; toggle=0;
		}
		window.scrollTo(0,sc);
	}
}
