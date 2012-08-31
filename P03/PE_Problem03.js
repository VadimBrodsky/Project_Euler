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
};

var isFactor = function (number, factor) {
	if (number % factor === 0) {
		return true;
	} else {
		return false;
	}
};

var largestPrimeFactor = function (number) {
	var found = 0;
	var simplifiedNum = number;
	for(var i=1; i <= simplifiedNum; i++) {
		if(isFactor(number, i)) {
			simplifiedNum = number / i;
			if (isPrime(i) && i > found) {
				found = i;
			}
			console.log("Factor: " + i + ", Simplified Number: " + simplifiedNum);
		}
	}
	return found;
};

console.log("Largest Prime Factor: s" + largestPrimeFactor(600851475143));
timer.endTimer();
