// Official solution:

 // ─────────────────────────────────────────────────────────────────────────────  
 //  _/usr/lib/node_modules/learnyounode/exercises/make_it_modular/solution/sol  
 //  ution.js_ :  
   
   //Include our own module 
     var filterFn = require('./exo6_official_solution.js')  
     var dir = process.argv[2]  
     var filterStr = process.argv[3]  
       
	 //Au début de l'execution de filterFn
	 //Go direct dans require('...')
	 //Ainsi le require on récupère dans list tous les noms de fichiers
     filterFn(dir, filterStr, function (err, list) {  
       if (err)  
         return console.error('There was an error:', err)  
       
       list.forEach(function (file) {  
         console.log(file)  
       })  
     }) 
