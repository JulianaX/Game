var keys = {
 'W' : 87,
 'S' : 83,
 'A' : 65,
 'D' : 68,
 'LEFT' : 37,
 'RIGHT' : 39
};

var keyDown = {};

var setKey = function (keyCode) {
 if (!keyDown[keyCode])
  keyDown[keyCode] = true;
};

var clearKey = function (keyCode) {
 if (keyDown[keyCode])
  keyDown[keyCode] = false;
};

var isKeyDown = function (keyName) {
	return keyDown[keys[keyName]] == true;
};

var isAnyKeyDown = function () {
 for (var k in keyDown) {
  if (keyDown[k])
   return true;
 }
};

window.onkeydown = function (e) {
 setKey(e.keyCode);
 //console.log(e.keyCode);
};

window.onkeyup = function (e) {
	clearKey(e.keyCode);
};
