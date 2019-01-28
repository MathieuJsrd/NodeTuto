 
   
 // ─────────────────────────────────────────────────────────────────────────────  
 //  _/usr/lib/node_modules/learnyounode/exercises/make_it_modular/solution/sol  
 //  ution_filter.js_ :  
   
   var fs = require('fs')  
   var path = require('path')  
       
//use exports to make properties and methods available outside the module file
   module.exports = function (dir, filterStr, callback) {  
       
     fs.readdir(dir, function (err, list) {  
         if (err)  
           return callback(err)  
       
	   //list est une variable globale //accessible dans l'autre .js
	   //.filter récupère tous les noms de fichiers
         list = list.filter(function (file) {  
           return path.extname(file) === '.' + filterStr  
         })  
       
         callback(null, list)  
       })  
    }  //return une list
   
//  Read my blog post for an explanation and breakdown of this challenge:
//  https://medium.com/coding-and-web-development/learnyounode-exercise-6-a9079f4e7dac#.un8yevyej
