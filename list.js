var $ = jQuery.noConflict();
$(document).ready(function() {});

var flag = false;
document.addEventListener('DOMNodeInserted', function (event) {
	if($("#v_search_text").length) {
		$(function() {
			$('#v_search_text').quicksearch('table#mainTable tbody tr');
		});

		if(flag==false) {
			flag = true;
			var s = document.createElement('script');
			s.src = chrome.extension.getURL('list-injected.js');
			s.onload = function() {
			    this.parentNode.removeChild(this);
			};
			(document.head || document.documentElement).appendChild(s);
		}
	}
});
