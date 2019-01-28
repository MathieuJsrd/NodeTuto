var http = require('http')
var stock1 = "";
var stock2 = "";
var stock3 = "";
var boucle1 = false
var boucle2 = false
var boucle3 = false
http.get(process.argv[2], function(response){
	//convertion en string
	response.setEncoding('utf8');
	response.on('data',function(data){
		stock1 += data
	})
	response.on('end', function(end){
	boucle1 = true;
	})
})

http.get(process.argv[3], function(response){
	//convertion en string
	response.setEncoding('utf8');
	response.on('data',function(data){
		stock2 += data
	})
	response.on('end', function(end){
		boucle2 = true
	})
})

http.get(process.argv[4], function(response){
	//convertion en string
	response.setEncoding('utf8');
	response.on('data',function(data){
		stock3 += data
	})
	response.on('end', function(end){
		boucle3 = true

	})
})

(boucle1 && boucle2 && boucle3)
{
	console.log(stock1)
	console.log(stock2)
	console.log(stock3)
}
