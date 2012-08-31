//--------------------- execution timer ----------------------------
var start;

module.exports = {
  startTimer: function () {
	start = new Date().getTime();
  },
  endTimer: function () {
	var diff = new Date().getTime() - start; 
	console.log("Time in ms: " + diff);
  }
};