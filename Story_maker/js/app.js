			// Assignment 1 | COMP1073 Client-Side JavaScript
			// 		Author: <VIVIANI KIPPER>
	// 		Date:   June 22,

			/* Declaring variables
			-------------------------------------------------- */

		var displayText = document.getElementById('storyDisplay')
			// Create a new speechSynthesis object
			var synth = window.speechSynthesis;
			// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
			var textToSpeak = '';
			var speakButton = document.getElementById('clickToSpeak');
			// buttons
			var button1 = document.getElementById('noun1');
			var button2 = document.getElementById('verb2');
			var button3 = document.getElementById('adjective3');
			var button4 = document.getElementById('noun4');
			var button5 = document.getElementById('places5');
		//    Extra button to take this assigment further!
			var buttonRandom = document.getElementById('randomText');
			var buttonReset = document.getElementById('resetButton');

			// arrays
			var noun1 = ["The fox", "The panda", "The owl", "The duck", "The bear"];
			var verb2 = ["Jumped", "roared", "stared", "flew", "looked"];
			var adjective3 = ["ugly", "beautiful", "calm", "angry", "curious"];
			var noun4 = ["the artist", "the apple", "the ant", "the alligator", "the eggs"];
			var places5 = ["over the lake.", "in the forest.", "at the mountain.", "at the beach.", "in the hive."];

			/* Functions
			-------------------------------------------------- */
			function getRandomInt(min, max){
				return Math.floor(Math.random() * (max - min +1)) + min;
			}

			function speakNow(string) {
				// Create a new speech object, attaching the string of text to speak
				var utterThis = new SpeechSynthesisUtterance(string);
				// Actually speak the text
				synth.speak(utterThis);
			}

			/* Event Listeners
			-------------------------------------------------- */
			// Onclick handler for the button that speaks the text contained in the above var textToSpeak
			speakButton.onclick = function() {
				speakNow(textToSpeak);
				console.log(textToSpeak);
				// Display the text speaked within html code (h2). Then the user experience will be better.
				displayText.textContent = (textToSpeak)
				// Displaying a background color to improve the readability of the text.
				displayText.style = "background-color:#F8F03B;";
				
			}
		// Onclick handler for the button that speaks the text contained in the above var textToSpeak
			button1.onclick = function() {
				// Generate the aleatory number from array, from the index range 0 to 4.
				let random = getRandomInt(0,4);
				console.log("Random number: ", random);
				// assign the array value to variable textToSpeak
				textToSpeak += (" "+noun1[random]);
				// calling the function SpeakNow to speak array value
				speakNow(" "+noun1[random]);
				// show the value in the console.
				console.log(" "+noun1[random]);
				}

			button2.onclick = function() {
				let random = getRandomInt(0,4);
				console.log("Random number: ", random);
				textToSpeak += (" "+verb2[random]);
				speakNow(" "+verb2[random]);
				console.log(" "+verb2[random]);
				
			}

			button3.onclick = function() {
				let random = getRandomInt(0,4);
				console.log("Random number: ", random);
				textToSpeak += (" "+adjective3[random]);
				speakNow(" "+adjective3[random]);
				console.log(" "+adjective3[random]);
				
			}

			button4.onclick = function() {
				let random = getRandomInt(0,4);
				console.log("Random number: ", random);
				textToSpeak += (" "+noun4[random]);
				speakNow(" "+noun4[random]);
				console.log(" "+noun4[random]);
			}

			button5.onclick = function() {
				let random = getRandomInt(0,4);
				console.log("Random number: ", random);
				textToSpeak += (" "+places5[random]);
				speakNow(" "+places5[random]);
				console.log(" "+places5[random]);
			}
			// Onclick handler for the button that speaks the text contained in the above var textToSpeak, generating a random Story. 
			buttonRandom.onclick = function() {
				// Redefining textToSpeak before assigning a new value.
				textToSpeak = '';
				// Generate the aleatory number from array, from the index range 0 to 4.
				random = getRandomInt(0,4);
				textToSpeak += (" "+noun1[random]);
				random = getRandomInt(0,4);
				textToSpeak += (" "+verb2[random]);
				random = getRandomInt(0,4);
				textToSpeak += (" "+adjective3[random]);
				random = getRandomInt(0,4);
				textToSpeak += (" "+noun4[random]);
				random = getRandomInt(0,4);
				textToSpeak += (" "+places5[random]);
				console.log(textToSpeak);
				console.log('Story created')

			}
			// Reset the Story
			buttonReset.onclick = function() {
				textToSpeak = '';
				console.log('Reseted');
			}
			