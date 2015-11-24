var $ = jQuery.noConflict();

document.addEventListener('DOMNodeInserted', function (event) {
	console.log(event.path[0]);
	$(function() {
		$('#v_search_text').quicksearch('table#mainTable tbody tr');
	});
});

$(document).ready(function() {
});
