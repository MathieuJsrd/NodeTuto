var http = require('http') //module, able to use fonction
 
//http.get method is a shortcut for simple GET requests
//First arg can be the URL you want to GET
//Second, provide a callback as the second arg
http.get(process.argv[2], function (response) {
//response is a Node Stream object
//we convert the node stream object to several STRINGS
  response.setEncoding('utf8')
  //.on est un evenement qui se passe lorsqu'il y a "un gros morceau" de données
  //ici on affiche la data dans la console.log
  response.on('data', function(data){
	console.log(data)
  })
  //response.on('data', console.log)
  //ici on affiche les errors dans l'autre console
  response.on('error', console.error)
}).on('error', console.error)  