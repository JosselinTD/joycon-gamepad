# Joycon-Gamepad

An interface between Gamepad API and Joycons

## How to use

```
// Include the dist script in your html
<script type="text/javascript" src="./node_modules/joycon-gamepad/dist/joycon-gamepad.js"></script>
```

```
// Connect both JoyCons by Bluetooth
// Get the desired interface (one provided or a custom one);
var interface = JoyCons.Interfaces['chrome-ubuntu']; 

// Each time you need it, call the comands function to know current buttons
var joycons = JoyCons.Commands(interface);

// Do something with it !
```
