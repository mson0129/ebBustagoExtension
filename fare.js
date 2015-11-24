var $ = jQuery.noConflict();
$(document).ready(function() {});

var btn = document.createElement("button");
btn.setAttribute("id", "showAll");
btn.setAttribute("type", "button");
var btnText = document.createTextNode("Show All");
btn.appendChild(btnText);

var p = document.getElementsByTagName("P");
p[0].appendChild(btn);

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
