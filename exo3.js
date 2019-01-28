//full fs module available in the variable fs
var fs = require('fs');
//To read a file => fs.readFileSync('/path/to/file')
var buf = fs.readFileSync(process.argv[2]);
//return a buffer object containing the complete contents of the file
var str = buf.toString(); //convert into a big string
var tab = str.split('\n'); 
console.log(tab.length - 1);