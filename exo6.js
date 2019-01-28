//Inputs
//The first input is : the directory name
//The second input is : the extention filter
var fs = require('fs')
var path = require('path')
 
var dir = process.argv[2]
var filterStr = process.argv[3]

//Output : print the list of files (one file per line) to the console

//Create a module that exports a single function with 3 arg :

/*
we should encapsulate the previous solution into a function and assign
 the function to the exports property of the module object so that it
 can be called form another file.  To do this, we need to assign a 
 function to the exports property of the module object.

*/




//Inputs :
// the directory name, filename extension(string) and a callback function
//callback function returns data (array of string)
function getFiles(dir, filterStr, callback) {
 
  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)
	//on ajoute le fichier à la liste
    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
	  //return 'myFichier.extention'
    })
	//On rappelle la fonction avec la modification de la liste (avec les ajouts)
	//null car l'erreur a déjà été testée
    callback(null, list)
  })
}
 
 //fonction utilisée pour récupérer dans list les fichiers et les afficher
getFiles(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)
 
  list.forEach(function (file) {
    console.log(file)
  })
})