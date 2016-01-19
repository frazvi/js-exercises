var userWord=prompt("Please enter a word");
alert('You entered the word ' + userWord + '.' + '\n' +
	userWord +  ' is ' + userWord.length + ' letters long.' + '\n' +
	'The third letter of your word is ' + userWord.charAt(2) + '.' + '\n' +
	'This is what your word looks like in lower case: ' + userWord.toLowerCase() + '\n' +
	'This is what your word looks like in upper case: ' + userWord.toUpperCase() + '\n' +
	'Here is an example sentence using your word: \"' + userWord + ''  + ' is a very cool word.\"' + '\n' +
	'This is what a subword created from your word looks like: ' + userWord.substr(2, 4));



