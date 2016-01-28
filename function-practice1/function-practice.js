// display "Five!" three times 

var tripleFive = function () {
	for(i=0; i<3; i++) {
		console.log("Five!");
	}
} 

tripleFive()

// display the last character of the string

var lastLetter = function (sleepy) {
	return sleepy.charAt(sleepy.length - 1);
}

console.log (lastLetter("string"))

// display n multiplied by itself

var square = function (n) {
	console.log (n * n);
}

square(3)

// takes a single number as an argument, displays the negative of that number

var negate = function (n) {
	console.log (-(n))
}

negate(-103)

// takes three arguments, returns an array with each argument as items

var toArray = function (a, b, c) {
	var thisIsTheFinalArray = []
	 thisIsTheFinalArray.push(a)
	 thisIsTheFinalArray.push(b)
	 thisIsTheFinalArray.push(c)
	 return thisIsTheFinalArray
}

console.log (toArray('six', 'seven', 'eight'));

// takes one string argument and returns true if the string's first letter is A, false otherwise
var startsWithA = function (oneString) {
	if (oneString.charAt(0) === 'A' || oneString.charAt(0) === 'a') {
		return true
	}
	else return false
}

console.log (startsWithA('aear'));

// takes one string argument and returns the argument with three exclamation points
var excite = function (anotherString) {
	return anotherString + '!!!'
}

console.log (excite('Value for your time'));


// takes one string argument and returns true if the string has the word 'sun' in it
var sun = function (doYouContainSun) {
	var substring = 'sun'
	if (doYouContainSun.indexOf(substring) > -1) {
		return true
	}
	else return false
}

console.log (sun('asunder'));

// takes one number argument and returns true if number is between 0 and 1; false otherwise
var tiny = function (n) {
	if (n > 0 && n < 1) {
		return true
	}
	else return false
}

console.log (tiny(.5));

// takes one string argument in the format MM:SS, and returns the total number of seconds
var getSeconds = function (time) {
	var splitSeconds = getSeconds.split(':');
	if (time.length === 5 && time.charAt(2) === ':') {
		for (i=0; i < splitSeconds.length; i++)
			isFinite(parseInt(splitSeconds[i]))
	}

	if (time.length != 5 && time.charAt(0))
}


