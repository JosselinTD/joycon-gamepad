# Joycon-Gamepad

An interface between Gamepad API and Joycons

## How to use

```
// Include the dist script in your html
<script type="text/javascript" src="./node_modules/joycon-gamepad/dist/joycon-gamepad.js"></script>
```

```
// Connect both JoyCons by Bluetooth
// Store them in a variable
var gamepads = navigator.getGamepads();
if (!Array.isArray(gamepads)) {
  gamepads = Object.keys(gamepads).map(index => gamepads[index]);
}
var joys = {
	left: gamepads.find(pad => pad && pad.id && pad.id.indexOf('Joy-Con (L)') === 0),
	right: gamepads.find(pad => pad && pad.id && pad.id.indexOf('Joy-Con (R)') === 0)
};

// Get the desired interface (one provided or a custom one);
var interface = JoyCons.Interfaces['chrome-ubuntu']; 

// Get the Joycon object
var joycons = JoyCons.Commands(joys, interface);

// Each time you push a button or play with an axes, the joycons object is updated
```
