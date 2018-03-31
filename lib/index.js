/*
- Gamepads: object of type {right: JoyconRight, left: JoyconLeft} where joycons are directly from the gamepad api
- Interface: object of type {name, right, left}, examples are available in the interfaces folder
*/

function JoyCons(gamepads, interface, intervalTime = 50) {
  if (!gamepads || !gamepads.right || !gamepads.left) {
    throw new Error('Gamepads left or right is missing');
  }
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
    ['right', 'left'].forEach(function(joy) {
      Object.keys(interface[joy]).forEach(function(i) {
        let [obj, index] = i.split('-');
        if (obj === 'axes') {
          commands[interface[joy][i]] = gamepads[joy].axes[index];
        } else {
          commands[interface[joy][i]] = gamepads[joy].buttons[index].value;
        }
      });
    });
  }, intervalTime);

  return commands;
}

module.exports = JoyCons;
