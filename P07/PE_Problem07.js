/*
	Project Euler
	Vadim Brodsky
	Tuesday, September 4 2012
	Problem 07
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

var primeByIndex = function (index) {
	var prime = 0;
	var num = 2;
	while (index > 0) {
		if (isPrime(num)) {
			prime = num;
			index--;
			num++;
		} else {
			num++;
		}
	}
	return prime;
};

console.log(primeByIndex(10001));
timer.endTimer();