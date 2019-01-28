var sum = 0;
//The first element of the process.argv array is always 'node'
//the second element is always the path to your program.js file
//that's why we start at the 3rd element (index 2) 
for(i = 2; i < process.argv.length; i++)
{
	sum = sum + Number(process.argv[i]);
}
console.log(sum);
