/*
	Project Euler
	Vadim Brodsky
	Friday - August 31 2012
	Problem 03
*/
"use strict";
var timer = require("../timer.js");
timer.startTimer();

var isPrime = function (number) {
	for (var i=2 ; i < number; i++) {
		if(number % i === 0) {
			return false;
		}
	}
	return true;
}

var isFactor = function (number, factor) {
	if (number % factor === 0) {
		return true;
	} else {
		return false;
	}
}

var largestPrimeFactor = function (number) {
	var found = 0;
	for(var i=1; i <= number; i++) {
		if(isPrime(i)) {
			if(isFactor(number, i) && i > found) {
				found = i;
				console.log(found);
			}
		}
	}
	return found;
}

console.log("Largest Prime Factor:" + largestPrimeFactor(600851475143));
timer.endTimer();
