/*
	Project Euler
	Vadim Brodsky
	Sunday, September 2 2012
	Problem 04
*/
"use strict";
var timer = require("../timer.js");
timer.startTimer();

var isPal = function (number) {
	var numStr = number.toString();
	var length = numStr.length;
	var result = true;
	for (var i=0; i < length; i++) {
		if (result !== false && numStr.charAt(i) === numStr.charAt(length - i - 1)) {
			result = true;
		} else {
			result = false;
		}
	}
	return result;
};

var largestPal = function () {
	var minLimit = 100;
	var maxLimit = 999;
	var palindrome = 0;
	for (var i = minLimit; i <= maxLimit; i++) {
		for (var j = minLimit; j <= maxLimit; j++) {
			if(isPal(i * j) && i * j > palindrome) {
				palindrome = i * j;
			}
		}
	}
	return palindrome;
};

console.log(largestPal());
timer.endTimer();