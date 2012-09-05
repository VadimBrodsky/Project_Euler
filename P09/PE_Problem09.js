/*jslint node: true */
/*
	Project Euler
	Vadim Brodsky
	Wednesday, September 5 2012
	Problem 09
*/
"use strict";
var timer = require("../timer.js");
timer.startTimer();

function isTriplet (numA, numB, numC) {
	var leftSide = Math.pow(numA, 2) + Math.pow(numB, 2);
	var rightSide = Math.pow(numC, 2);
	if (numA < numB && numB < numC && leftSide === rightSide) {
		return true;
	} else {
		return false;
	}
}

function findTriplet (limit) {
	for (var numA = 0; numA < limit; numA++) {
		for (var numB = 0; numB < limit; numB++) {
			for (var numC = 0; numC < limit; numC++) {
				if (isTriplet(numA, numB, numC) && numA + numB + numC === limit) {
					return [numA, numB, numC];
				}
			}
		}
	}
}

function product (triplet) {
	return triplet[0] * triplet[1] * triplet[2];
}

console.log(product(findTriplet(1000)));
timer.endTimer();