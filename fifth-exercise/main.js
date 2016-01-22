var intro=alert("Hello, and welcome! This website is going to ask you to enter five different pieces of information: your phone number; your date of birth; your postal code; your state; and your marital status. If you're ready, please press okay.")

var phoneNumber = prompt("Please enter your phone number.");
var splitPhoneNumber = phoneNumber.split('-');
if (phoneNumber.charAt(3) === '-' && phoneNumber.charAt(7) === '-') {
	for (var i=0; i<splitPhoneNumber.length; i++) {
		if (isFinite(parseInt(splitPhoneNumber[i])) {
			var dateOfBirth=prompt("Please enter your date of birth.");

			if (dateOfBirth.charAt(2) != '/' && dateOfBirth.charAt(5) != '/') {
				var dateOfBirth= prompt("Sorry, it seems that your entry is invalid. Please enter your date of birth using only numbers and forward slashes, in the xx/xx/xx format.")
			} else {var postalCode=prompt("Please enter your postal code.")}

			if (postalCode.length != 5 && (postalCode.length != 10 && postalCode.charAt(5) != '-')) {
				var postalCode=prompt("You have entered an invalid postal code. Please enter your postal code using only numbers and dashes. Your postal code must be in either the xxxxx, or the xxxxx-xxxx format.")
			} else {var stateAbbreviation=prompt("Please enter the state that you are from, using its abbreviation.")}

			if (stateAbbreviation.length > 2) {
				var stateAbbreviation = prompt("Sorry! It looks like what you entered is invalid. Please enter a valid two-letter state abbreviation.")
			} else {var finalAnswer = prompt("You're almost done! Here is the final question: Are you married? Please entere yes or no.")}

			if (finalAnswer != 'yes' && finalAnswer != 'no') {
				var finalQuestion = prompt("Sorry, you have entered an invalid answer. Please enter either yes or no.")
			} else {prompt("Thank you! We have saved your information and will be using it to steal your identity. Have a great day!")}
		} else {prompt("Oops! It looks like your entry is invalid. Please enter your phone number using only numbers and dashes, in the xxx-xxx-xxxx format.")}
	} 	
}			
else {prompt("Oops! It looks like your entry is invalid. Please enter your phone number using only numbers and dashes, in the xxx-xxx-xxxx format.")}



// while (dateOfBirth.charAt(2) != '/' && dateOfBirth.charAt(5) != '/') {
// 	var dateOfBirth=prompt("Sorry, it seems that your entry is invalid. Please enter your date of birth using only numbers and forward slashes, in the xx/xx/xx format.")
// }

// var postalCode=prompt("Please enter your postal code.");
// while (postalCode.length != 5 && (postalCode.length != 10 && postalCode.charAt(5) != '-')) {
// 	var postalCode=prompt("You have entered an invalid postal code. Please enter your postal code using only numbers and dashes. Your postal code must be in either the xxxxx, or the xxxxx-xxxx format.")
// }

// // var stateAbbreviation=prompt("Please enter the state that you are from, using its abbreviation.")
// while (stateAbbreviation.length > 2) {
// 	var stateAbbreviation = prompt("Sorry! It looks like what you entered is invalid. Please enter a valid two-letter state abbreviation.")
// }

// var finalAnswer = prompt("You're almost done! Here is the final question: Are you married? Please entere yes or no.")
// 	while (finalAnswer != 'yes' || finalAnswer != 'no') {
// 		var finalQuestion = prompt("Sorry, you have entered an invalid answer. Please enter either yes or no.")
// 	}
// // var enteredNumber = Number;
// // if (!isNan(enteredNumber))
// // 	alert("Thank you! Now please enter your date of birth.")
// // else 
// // 	alert("Oops! It looks like what you entered is invalid. Please enter only numbers and dashes using the xxx-xxx-xxxx format.")

