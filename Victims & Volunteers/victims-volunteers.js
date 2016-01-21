var victimName = ['Victim Names: '];
var victimPhoneNumber = ['Victim Phone Numbers: '];
var victimStreet = ['Victim Street Names: '];
var volunteerName = ['Volunteer Names: '];
var volunteerPhoneNumber = ['Volunteer Phone Numbers: '];
var volunteerStreet = ['Volunteer Street Names: '];


var numberDisasterVictims = prompt("How many disaster victims will you be entering?")
for (i=0; i<numberDisasterVictims; i++) {
	var vName = prompt("Please enter a name for the victim.");
	var vNumber = prompt("Please enter a phone number for the victim.");
	var vStreet = prompt("Please enter a street name for the victim.");
	victimName.push(vName);
	victimPhoneNumber.push(vNumber);
	victimStreet.push(vStreet);
}

console.log(victimName);
console.log(victimPhoneNumber);
console.log(victimStreet);

var numberDisasterVolunteers = prompt("How many volunteers will you be entereing?")
for (i=0; i<numberDisasterVolunteers; i++) {
	var voName = prompt("Please enter a name for the volunteer.");
	var voNumber = prompt("Please enter a number for the volunteer.");
	var voStreet = prompt("Please enter a street name for the volunteer.");
	volunteerName.push(voName);
	volunteerPhoneNumber.push(voNumber);
	volunteerStreet.push(voStreet);
}

console.log(volunteerName);
console.log(volunteerPhoneNumber);
console.log(volunteerStreet);

alert(victimName.join("\n") + ("\n") + victimPhoneNumber.join("\n") + ("\n") + victimStreet.join("\n") + ("\n") + volunteerName.join("\n") + ("\n") + volunteerPhoneNumber.join("\n") + ("\n") + volunteerStreet.join);

