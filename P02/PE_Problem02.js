/*
	Project Euler
	Vadim Brodsky
	Thursday - August 31 2012
	Problem 02
*/
"use strict";

var evenFib = function (limit){
	var num1 = 0;
	var num2 = 1;
	var sum = 0;
	var evenSum = 0;
	while ((num1 + num2) < limit) {
		sum = num1 + num2;
		if (isEven(sum)) {
			evenSum += sum;
		}
		
		console.log(sum);
		
		num1 = num2;
		num2 = sum;
	}
	return evenSum;
};

var isEven = function (number) {
	if (number % 2 === 0) {
		return true;
	}	
};

console.log("Sum: " + evenFib(4000000));