var map = { 17: false, 16: false, 76: false };

document.addEventListener("keydown", function (e) {
  if (e.keyCode in map) {
    map[e.keyCode] = true;
    if (map[16] && map[17] && map[76]) {
      focusFirstInput();
    }
  }

});

document.addEventListener("keyup", function (e) {
  if (e.keyCode in map) {
    map[e.keyCode] = false;
  }
});

function focusFirstInput() {
  var inputFields = document.getElementsByTagName('input');

  for (var i = 0; i < inputFields.length; ++i) {
    var element = inputFields[i];
    if (element.style.display != 'none' &&
      element.style.visibility != 'hidden' &&
      element.type == 'text') {
      element.focus();
      console.log(i)
      break;
    }
  }
}