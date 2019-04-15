var serialPort = require("serialport");
//var serial = new serialPort('COM3',{parser: serialPort.parsers.readline('\n')});
var serial = new serialPort('COM4', {
	parser: serialPort.parsers.readline("\n")
  });

serial.on("data",function(data){
	
	console.log(data.toString());
	
	
});