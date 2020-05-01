chrome.browserAction.onClicked.addListener(function () {

  chrome.tabs.executeScript({code:"location.href='javascript:passwordValue(); void 0';",runAt:"document_end"},function(){});
});