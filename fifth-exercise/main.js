var phoneNumber=prompt("Please enter your phone number.");
if (phoneNumber.charAt(3) === '-' && phoneNumber.charAt(7) === '-') {
	alert("That is a valid phone number. Thank you!");
}
else {
	alert("Please enter a valid phone number. Your number must have dashes in it.");
}
var birthDate=prompt("Please enter your date of birth following the xx/xx/xx format.")
do {
	alert("You have entered an invalid date of birth. Please use the xx/xx/xx format.");
} 
until (birthDate.charAt(2) === '/' && birthDate.charAt(5) === '/');

