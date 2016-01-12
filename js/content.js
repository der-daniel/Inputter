chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    sendResponse(focusFirstInput());
});

function focusFirstInput() {
  var inputFields = document.getElementsByTagName('input');

  for (var i = 0; i < inputFields.length; ++i) {
    var element = inputFields[i];
    if (element.style.display != 'none' &&
      element.style.visibility != 'hidden' &&
      element.type == 'text') {
      element.focus();
      // console.log(i);
      break;
    }
  }
}