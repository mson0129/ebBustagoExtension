var $ = jQuery.noConflict();
$(document).ready(function() {});

var btn = document.createElement("button");
btn.setAttribute("id", "showAll");
btn.setAttribute("type", "button");
var btnText = document.createTextNode("전체 보기");
btn.appendChild(btnText);

var cleanBtn = document.createElement("button");
cleanBtn.setAttribute("id", "cleanAll");
cleanBtn.setAttribute("type", "button");
var cleanBtnText = document.createTextNode("비우기");
cleanBtn.appendChild(cleanBtnText);

var baseBtn = document.createElement("button");
baseBtn.setAttribute("id", "thirteenAll");
baseBtn.setAttribute("type", "button");
var baseBtnText = document.createTextNode("1300");
baseBtn.appendChild(baseBtnText);

var multiplyBtn = document.createElement("button");
multiplyBtn.setAttribute("id", "multiplyAll");
multiplyBtn.setAttribute("type", "button");
var multiplyBtnText = document.createTextNode("X100");
multiplyBtn.appendChild(multiplyBtnText);

var pullBtn = document.createElement("button");
pullBtn.setAttribute("id", "pull");
pullBtn.setAttribute("type", "button");
var pullBtnText = document.createTextNode("△");
pullBtn.appendChild(pullBtnText);

var pushBtn = document.createElement("button");
pushBtn.setAttribute("id", "push");
pushBtn.setAttribute("type", "button");
var pushBtnText = document.createTextNode("▽");
pushBtn.appendChild(pushBtnText);

var p = document.getElementsByTagName("P");
p[0].appendChild(btn);
p[0].appendChild(cleanBtn);
p[0].appendChild(baseBtn);
p[0].appendChild(multiplyBtn);
p[0].appendChild(pullBtn);
p[0].appendChild(pushBtn);

$("button#showAll").on("click", function() {
	var tableHeaders = document.getElementsByTagName("TH");
	for(i=0; i<tableHeaders.length; i++) {
		tableHeaders[i].style.display = "table-cell";
	}
	var tableCells = document.getElementsByTagName("TD");
	for(i=0; i<tableCells.length; i++) {
		tableCells[i].style.display = "table-cell";
	}
});

var fares = document.getElementsByName("fare_type_00");

$("button#cleanAll").on("click", function() {
	for(i=0; i<7; i++) {
		var target = document.getElementsByName("fare_type_"+i+"0");
		for(j=0; j<target.length; j++) {
			target[j].value = null;
		}
	}
});
$("button#thirteenAll").on("click", function() {
	for(i=0; i<6; i++) {
		var target = document.getElementsByName("fare_type_"+i+"0");
		for(j=0; j<target.length; j++) {
			switch(i) {
				case 0:
					target[j].value = 1300;
					break;
				case 1:
					target[j].value = 1200;
					break;
				case 2:
					target[j].value = 1000;
					break;
				case 3:
					target[j].value = 900;
					break;
				case 4:
					target[j].value = 800;
					break;
				case 5:
					target[j].value = 700;
					break;
			}
		}
	}
});
$("button#multiplyAll").on("click", function() {
	for(i=0; i<fares.length; i++) {
		if(fares[i].value < 1000) {
			for(j=1; j<6; j++) {
				var target = document.getElementsByName("fare_type_"+j+"0");
				target[i].value = Math.round(fares[i].value*((10-j)/10))*100;
			}
			fares[i].value = fares[i].value*100;
		}
	}
});
$("button#pull").on("click", function() {
	for(i=1; i<fares.length; i++) {
		fares[i-1].value = fares[i].value;
	}
	fares[fares.length-1].value = null;
});
$("button#push").on("click", function() {
	for(i=fares.length-1; i>0; i--) {
		fares[i].value = fares[i-1].value;
	}
	fares[0].value = null;
});

document.getElementById('fare_type_00').select();
