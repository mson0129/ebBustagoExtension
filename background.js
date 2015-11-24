chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.create({
		url: "https://manager.bustago.or.kr:446/"
	});
});
