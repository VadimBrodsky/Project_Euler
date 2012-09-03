/*
	Project Euler
	Vadim Brodsky
	Monday, September 3 2012
	Problem 05
*/
"use strict";
var timer = require("../timer.js");
timer.startTimer();

var isDivisable = function (min, max, number) {
	var flag = true;
	for (min; min <= max; min++) {
		if (flag === true && number % min === 0) {
			flag = true;
		} else {
			flag = false;
		}
	}
	return flag;
};

var smallestDivisable = function (min, max) {
	var number = 1, flag = false;
	while (!flag) {
		if (isDivisable(min, max, number)) {
			flag = true;
		} else {
			number++;
		}
	}
	return number;
};


console.log(smallestDivisable(1, 20));
timer.endTimer();