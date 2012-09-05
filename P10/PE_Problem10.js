/*jslint node: true */
/*
	Project Euler
	Vadim Brodsky
	Wednesday, September 5 2012
	Problem 10
*/
"use strict";
var timer = require("../timer.js");
timer.startTimer();

function isPrime (number) {
	for (var i = 2 ; i < number; i++) {
		if(number % i === 0) {
			return false;
		}
	}
	//console.log(number);
	return true;
}

function sumOfPrimes (limit) {
	var sum = 0;
	for (var i = 2; i < limit; i++) {
		if (isPrime(i)) {
			sum = sum + i;
		}
	}
	return sum;
}

console.log(sumOfPrimes(2000000));
timer.endTimer();