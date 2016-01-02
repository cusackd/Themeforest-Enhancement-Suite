chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    console.log('Tab Updated');
    if (changeInfo.status == "complete") {
      console.log('Load Completed');
      chrome.tabs.executeScript(tabId, {file: "script.js"} );
    }


});
