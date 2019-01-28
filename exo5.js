//Aim :
//we need to created a program that prints a listed of files in a
// directory, filtered by extension.

var fs = require('fs')
var path = require('path')
//console.log(path.extname('myFile.txt')) displays 'txt'

//the folder put in input  
var folder = process.argv[2]
//extention we want in output
var ext = '.' + process.argv[3]

//th fs.readdir() method takes a pathname as its first arg
//a callback as its second and as its second arg
//an array of filename strings (returned by the callback method)
// arraay ici est 'files'
fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
//else
//pour chaque file dans files
  files.forEach(function(file) {
	  //si l'extention fichier[i] == extention input 
      if (path.extname(file) === ext) {
          console.log(file)
      }
  })
})
