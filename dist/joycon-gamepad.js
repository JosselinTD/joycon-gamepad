(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.JoyCons = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = {
  Interfaces: require('./interfaces'),
  Commands: require('./lib')
};

},{"./interfaces":3,"./lib":4}],2:[function(require,module,exports){
module.exports={
	"name": "chrome-ubuntu",
	"right": {
		"axes-5": "RH",
		"axes-4": "RV",
		"buttons-0": "A",
		"buttons-1": "X",
		"buttons-2": "B",
		"buttons-3": "Y",
		"buttons-4": "RSL",
		"buttons-5": "RSR",
		"buttons-9": "PLUS",
		"buttons-11": "R0",
		"buttons-12": "HOME",
		"buttons-14": "R",
		"buttons-15": "ZR"
	},
	"left": {
		"axes-5": "LH",
		"axes-4": "LV",
		"buttons-0": "RIGHT",
		"buttons-1": "BOTTOM",
		"buttons-2": "TOP",
		"buttons-3": "LEFT",
		"buttons-4": "LSL",
		"buttons-5": "LSR",
		"buttons-8": "MINUS",
		"buttons-10": "L0",
		"buttons-13": "SELECT",
		"buttons-14": "L",
		"buttons-15": "ZL"
	}
}

},{}],3:[function(require,module,exports){
var Interfaces = {
	'chrome-ubuntu': require('./chrome-ubuntu.json')
};

module.exports = Interfaces;

},{"./chrome-ubuntu.json":2}],4:[function(require,module,exports){
/*
- Gamepads: object of type {right: JoyconRight, left: JoyconLeft} where joycons are directly from the gamepad api
- Interface: object of type {name, right, left}, examples are available in the interfaces folder
*/

function JoyCons(interface, intervalTime = 50) {

  if (!interface) {
    throw new Error('Interface is missing');
  }

  var commands = {
    "RH": 0,
    "RV": 0,
    "A": 0,
    "X": 0,
    "B": 0,
    "Y": 0,
    "RSL": 0,
    "RSR": 0,
    "PLUS": 0,
    "R0": 0,
    "HOME": 0,
    "R": 0,
    "ZR": 0,
    "LH": 0,
    "LV": 0,
    "RIGHT": 0,
    "BOTTOM": 0,
    "TOP": 0,
    "LEFT": 0,
    "LSL": 0,
    "LSR": 0,
    "MINUS": 0,
    "L0": 0,
    "SELECT": 0,
    "L": 0,
    "ZL": 0
  }

  let interval = setInterval(function() {
    var gamepads = navigator.getGamepads();
    if (!Array.isArray(gamepads)) {
      gamepads = Object.keys(gamepads).map(index => gamepads[index]);
    }
    var joys = {
      left: gamepads.find(pad => pad && pad.id && pad.id.indexOf('Joy-Con (L)') === 0),
      right: gamepads.find(pad => pad && pad.id && pad.id.indexOf('Joy-Con (R)') === 0)
    };

    ['right', 'left'].forEach(function(joy) {
      Object.keys(interface[joy]).forEach(function(i) {
        let [obj, index] = i.split('-');
        if (obj === 'axes') {
          commands[interface[joy][i]] = joys[joy].axes[index];
        } else {
          commands[interface[joy][i]] = joys[joy].buttons[index].value;
        }
      });
    });
  }, intervalTime);

  return commands;
}

module.exports = JoyCons;

},{}]},{},[1])(1)
});
