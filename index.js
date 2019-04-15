/*var serialPort = require("serialport");
//var serial = new serialPort('COM3',{parser: serialPort.parsers.readline('\n')});
var serial = new serialPort('COM4', {
	parser: serialPort.parsers.readline("\n")
  });
*/
var SerialPort = require('serialport');
var serialPort = new SerialPort('COM4', {
    baudRate: 9600
});
// Open the port
var port = new SerialPort("/dev/ttyACM0", {
    baudrate: 9600,
    parser: SerialPort.parsers.readline("\n")
});
// Read the port data
port.on("open", function () {
    console.log('open');
    port.on('data', function(data) {
        console.log(data);
    });
});
// Switches the port into "flowing mode"
serialPort.on('data', function (data) {
    console.log('Data:', data);
});
// Read data that is available but keep the stream from entering //"flowing mode"
serialPort.on('readable', function () {
    console.log('Data:', port.read());
});
/*serial.on("data",function(data){
	
	console.log(data.toString());
	
	
});*/ 