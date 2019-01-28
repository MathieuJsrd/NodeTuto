//il faut faire une requête HTTP GET
var http = require('http');

http.get(process.argv[2],function (response){
	//convertir en string
	var stock ="";
	response.setEncoding('utf8');
	//des qu'il recoit une data, il enclenche ça
	response.on('data',function(data){
		stock+=data;

	})
		//Une fois que la lecture est finie, on affiche nos résultats
	response.on('end',function(end){
		console.log(stock.length);
		console.log(stock);
	})
})


