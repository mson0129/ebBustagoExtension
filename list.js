var $ = jQuery.noConflict();
$(document).ready(function() {});

var flag = false;

//Michael Son(mson0129@gamil.com)
//23NOV2015
//Top fix
function controllMenu() {
	currentScrollTop = $(window).scrollTop();
	if(currentScrollTop < 200) {
		if ($("form#gridForm01").hasClass("fixed")) {
			$("form#gridForm01").removeClass("fixed");
		}
	} else {
		if (!$("form#gridForm01").hasClass("fixed")) {
			$("form#gridForm01").addClass("fixed");
		}
	}
}

$(window).on("scroll", function() {
	controllMenu();
});

//Move button
document.addEventListener("DOMNodeInserted", function (event) {
	if($("#v_search_text").length) {
		$(function() {
			$("#v_search_text").quicksearch("table#mainTable tbody tr");
		});
		
		document.getElementById("v_terminal_nm").readOnly = true;
		document.getElementById("v_arr_ter_nm").readOnly = true;

		if(flag==false) {
			flag = true;
			$("#gridForm01 p span.buttonSave").prependTo("#gridForm01 table tr td");
			$("#gridForm01 p").remove();
			
			//Injecting script
			var s = document.createElement("script");
			s.src = chrome.extension.getURL("list-injected.js");
			s.onload = function() {
			    this.parentNode.removeChild(this);
			};
			(document.head || document.documentElement).appendChild(s);
		}
	}
});