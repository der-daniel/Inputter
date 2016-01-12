chrome.commands.onCommand.addListener(function (command) {
  if (command === "focus") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {}, function (response) {
        // console.log(response.farewell);
      });
    });
  }
});

