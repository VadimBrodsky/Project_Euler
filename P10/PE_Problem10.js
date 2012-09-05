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
	if (number === 2) {
		return true;
	} else if (number % 2 === 0) {
		return false;
	}
	for (var i = 3 ; i*i <= number; i+=2) {
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