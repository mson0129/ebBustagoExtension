var $ = jQuery.noConflict();
$(document).ready(function() {});

//Michael Son(mson0129@gmail.com)
//TabIndex Adder
//12NOV2015
var tabindex = 1;

var dep_times = document.getElementsByName("dep_time");
for(i=0; i<dep_times.length; i++) {
	//console.log(tabindex);
	dep_times[i].setAttribute("tabindex", tabindex);
	tabindex++;
}

var distances = document.getElementsByName("distance");
for(i=0; i<distances.length; i++) {
	distances[i].setAttribute("tabindex", tabindex);
	tabindex++;
}

var dist_times = document.getElementsByName("dist_time");
for(i=0; i<dist_times.length; i++) {
	dist_times[i].setAttribute("tabindex", tabindex);
	tabindex++;
}

document.getElementById("updateBtn2").setAttribute("tabindex", tabindex);

//Michael Son(mson0129@gmail.com)
//OneClick CarSetting
//12NOV2015
var layer = document.getElementById("updateBtnList");
var newLayer1 = document.createElement("div");

var updateBtn = document.getElementById("updateBtn");
var updateBtn2 = document.getElementById("updateBtn2");

newLayer1.appendChild(updateBtn);
newLayer1.appendChild(updateBtn2);

var newLayer2 = document.createElement("div");
newLayer2.setAttribute("id", "changeAllLayer");

var newLayer2Description = document.createTextNode("Change at Once: ");
newLayer2.appendChild(newLayer2Description);

var div_cd = document.getElementById("div_cd").cloneNode(true);
div_cd.setAttribute("onChange", "var tempStatus = document.getElementsByName('div_cd'); for(i=0;i<tempStatus.length;i++){tempStatus[i].value = this.value;}");
newLayer2.appendChild(div_cd);

var bus_type = document.getElementById("bus_type").cloneNode(true);
bus_type.setAttribute("onChange", "var tempStatus = document.getElementsByName('bus_type'); for(i=0;i<tempStatus.length;i++){tempStatus[i].value = this.value;}");
newLayer2.appendChild(bus_type);

var the_status = document.getElementById("status").cloneNode(true);
the_status.setAttribute("onChange", "var tempStatus = document.getElementsByName('status'); for(i=0;i<tempStatus.length;i++){tempStatus[i].value = this.value;}");
newLayer2.appendChild(the_status);

var tot_seat_cnt = document.getElementById("tot_seat_cnt").cloneNode(true);
tot_seat_cnt.setAttribute("id", "tot_seat_cnt_all");
//tot_seat_cnt.setAttribute("onFocus", "var tempStatus = document.getElementsByName('tot_seat_cnt'); for(i=0;i<tempStatus.length;i++){tempStatus[i].value = this.value;}");
newLayer2.appendChild(tot_seat_cnt);

var bus_seat_type = document.getElementById("bus_seat_type").cloneNode(true);
bus_seat_type.setAttribute("onChange", "var tempStatus = document.getElementsByName('bus_seat_type'); for(i=0;i<tempStatus.length;i++){tempStatus[i].value = this.value;}");
newLayer2.appendChild(bus_seat_type);

layer.appendChild(newLayer1);
layer.appendChild(newLayer2);

$('input#tot_seat_cnt_all').on('input', function () {
	var tempStatus = document.getElementsByName('tot_seat_cnt');
	for(i=0; i<tempStatus.length; i++) {
		tempStatus[i].value = $(this).val();
	}
});

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
