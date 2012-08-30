/*
	Project Euler
	Vadim Brodsky
	Thursday - August 30 2012
	Problem 01 
*/
	
var naturalSum = function(limit) {
	var sum = 0;
	for(var i = 1; i < limit; i++) {
		if(i % 3 === 0 || i % 5 === 0) {
			//console.log(i);
			sum = sum + i;
		}
	}
	return sum;
};

console.log(naturalSum(1000));