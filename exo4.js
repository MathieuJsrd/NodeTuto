var fs = require('fs')
//the third index of the process object property is passed to a variable
var file = process.argv[2]
//the fs.readFile() receives 2 arg, file and a callback function()
//the callback function has 2 arg, err and data
//Inside of callback function, data (stirng) are passed to the variable lines
//and converted to a string with the toString()
fs.readFile(file, function(err, data){
	var lines = data.toString().split('\n').length - 1
	console.log(lines)
})
