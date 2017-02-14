		<script>

		//create variables
		var wins = 0;
		var playerSelection;
		var remainingGuesses = 10;
		var lettersGuessed = [];
		var wordBank = ["tent", "bear", "fire", "woods", "cabin", "mountain", "lantern", "backpack", "hatchet", "forest", "hike", "camp", "trail", "fox", "river", "outside", "campsite", "campfire", "stars", "compass", "whistle", "trek", "trees", "switchback", "appalachian", "backcountry", "gaiters", "gap", "junction", "trailhead", "boots"];
		var randomWord = [];
		var randomArray;
		var placeHolderArray = [];
		var placeHolderString = placeHolderArray.join("");
		var lettersGuessedString;
		var alphabet = "abcdefghijklmnopqrstuvwxyz";
		var alphabetArr = (alphabet.split("")); 

		//player starts game

		//computer pick random word
			function setGame() {
				//get random word
				var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
				var randomArray = (randomWord.split(""));
				console.log(randomWord);
				console.log(randomArray);
				console.log(randomWord.length);
				//document.getElementById("losses").innerHTML = losses;
				//document.getElementById("wins").innerHTML = wins;


				//create mystery placeholder array for screen view
				placeHolderArray = [];

					for (i=0; i<randomWord.length; i++) {
					
					placeHolderArray.push ("__");		
					}
				
				console.log(placeHolderArray);
				var placeHolderString = placeHolderArray.join("  ");
				document.getElementById("mysteryWord").innerHTML = placeHolderString;
				document.getElementById("guessesRemaining").innerHTML = remainingGuesses;
			

				//get the player selection set
				document.onkeyup = function addToPlayerSelection(event) {
					
					//define player selection and set to lowercase
					playerSelection = event.key.toLowerCase();
					console.log (playerSelection);



					//is selection in word?
					if (randomArray.indexOf(playerSelection) == -1 && lettersGuessed.indexOf(playerSelection) == -1 && alphabetArr.indexOf(playerSelection) != -1) {
						lettersGuessed.push(playerSelection);
						remainingGuesses = remainingGuesses - 1;
						 //add check for guessing letter already in array and reducing number of guesses by 1
						console.log(lettersGuessed);
						console.log(remainingGuesses);
						lettersGuessedString = lettersGuessed.join("");
						document.getElementById("lettersGuessed").innerHTML = lettersGuessedString;
						document.getElementById("guessesRemaining").innerHTML = remainingGuesses;
					}

						//else, where in the word is it?
						else {
								
							//get indexes where selection exists in randomArray
							function getAllIndexes(arr, val) { 
							var indexes = [];
							for (i = 0; i < arr.length; i++)
									if (arr[i]===val)
									indexes.push(i);
							 return(indexes);
							}
							var indexes = getAllIndexes(randomArray, playerSelection);
							console.log(indexes);

							//replace "__" in placeHolderArray with playerSelection at indexes
							for (i=0; i<indexes.length; i++) {
								placeHolderArray.splice(indexes[i], 1, playerSelection);

							} console.log(placeHolderArray);
							  placeHolderString = placeHolderArray.join("");
							  document.getElementById("mysteryWord").innerHTML = placeHolderString;
						}
						if (placeHolderString.indexOf("_") == -1 && remainingGuesses > 0)  {

							alert("You guessed it!  The word was "+ randomWord + ".");
							wins = (wins + 1);
							document.getElementById("winText").innerHTML = wins;
						}

							else if (placeHolderString.indexOf("_") != -1 && remainingGuesses ==0) {

							alert("You lost! Click start to get another word!");
							losses = (losses + 1);
							document.getElementById("losses").innerHTML = losses;
						}

								else {

								}


						}

				} 
