/*
	Project Euler
	Vadim Brodsky
	Tuesday, September 4 2012
	Problem 06
*/
"use strict";
var timer = require("../timer.js");
timer.startTimer();

function sumOfSquares (range) {
	var sum = 0;
	for (var i = 1; i <= range; i++) {
		sum = sum + Math.pow(i, 2);
	}
	return sum;
}

function squareOfSum (range) {
	var sum = 0;
	for (var i = 1; i <= range; i++) {
		sum = sum + i;
	}
	return Math.pow(sum, 2);
}

function difference (range) {
	return squareOfSum(range) - sumOfSquares(range);
}

console.log(difference(100));
timer.endTimer();