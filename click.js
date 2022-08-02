chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({ url: 'https://sci-hub.se/' + tab.url })
})
