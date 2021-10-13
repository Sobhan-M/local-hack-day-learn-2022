
const CHARACTER = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
'S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0'];
const MORSE = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..',
'--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..','.----',
'..---','...--','....-','.....','-....','--...','---..','----.','-----']
const MORSE_SPACE = "  ";

/** 
 * Takes in a morse code string and returns an equivalent character string. 
 * @param String inputString
 * @returns String
 * */ 
function morseToCharacter(inputString)
{
	if (inputString === "") return "";

	let output = "";
	let inputArray = inputString.split(MORSE_SPACE);

	for (let i = 0; i < inputArray.length; ++i)
	{
		let wordArray = inputArray[i].split(" ");

		for (let j = 0 ; j < wordArray.length; ++j)
		{
			let index = MORSE.findIndex(letter => letter === wordArray[j]); // Find index of the letter.
			output += CHARACTER[index];
		}

		// Add space if not in the last word.
		if (i != inputArray.length - 1)
		{
			output += " ";
		}
	}

	return output;
}

/** 
 * Takes in a character string and returns an equivalent morse code string. 
 * @param String inputString
 * @returns String
 * */ 
function characterToMorse(inputString)
{
	if (inputString === "") return "";

	let output = "";
	let inputArray = inputString.toUpperCase().split(" ");
	
	for (let i = 0 ; i < inputArray.length ; ++i)
	{
		let wordArray = inputArray[i].split("");

		for (let j = 0 ; j < wordArray.length; ++j)
		{
			let index = CHARACTER.findIndex(letter => letter === wordArray[j]);
			output += MORSE[index];
			output += " ";
		}

		if (i != inputArray.length - 1)
		{
			output += MORSE_SPACE;
		}
	}

	return output;
}

let textArea = document.getElementById("text-area-js");
let morseArea = document.getElementById("morse-area-js");
        
textArea.addEventListener("input",function() {
    let text = this.value;
    morseArea.value = characterToMorse(text);
});

morseArea.addEventListener("input",function() {
    let text = this.value;
    textArea.value = morseToCharacter(text);
});