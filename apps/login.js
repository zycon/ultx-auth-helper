chrome.browserAction.onClicked.addListener(function(){
    chrome.tabs.executeScript(null, { file: "1.js" }, function() {
        chrome.tabs.executeScript(null, { file: "test.js" });
      });
})
