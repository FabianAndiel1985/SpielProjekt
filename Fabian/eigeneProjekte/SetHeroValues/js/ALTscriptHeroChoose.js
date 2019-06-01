
var power = "power";
var endurance = "endurance";
var live = "live";

// inital values of the hero

var distributePoints = 40;
var powerStartValue = 0;
var enduranceStartValue = 0;
var liveStartValue = 0			;

// Constructor for hero object

function mainCharacterConstr(name, power, endurance, lives) {
		this.name = name;
  		this.power = power;
		this.endurance = endurance;
		this.lives = lives;
			}

// Adding a function to every + button

			for (i=0;i<4;i++) {
				document.getElementsByClassName("plusButton")[i].addEventListener("click", function (event) {
					var valueToEnhance = event.target.value;
					increaseValue(valueToEnhance);
				});
			}




			// function to increase the value when player presses plus button

		function increaseValue(param) {
			if (param ==  "power" && distributePoints > 0) {
				powerStartValue = powerStartValue + 5;
				// targeting the text spot where the power value is supposed to be
				var increaseAttribute = param +"Value";
				document.getElementById(increaseAttribute).innerHTML=powerStartValue;
				distributePoints = distributePoints-5;
				document.getElementById("distributePoints").innerHTML = distributePoints;
			}

			else if (param ==  "endurance" &&  distributePoints > 0) {
				enduranceStartValue = enduranceStartValue + 5;
				var increaseAttribute = param +"Value";
				document.getElementById(increaseAttribute).innerHTML=enduranceStartValue;
				distributePoints = distributePoints-5;
				document.getElementById("distributePoints").innerHTML = distributePoints;
					
			}
		
			else if (param ==  "live" && distributePoints>0) {
				liveStartValue = liveStartValue + 5;
				var increaseAttribute = param +"Value";
				document.getElementById(increaseAttribute).innerHTML=liveStartValue;	
				distributePoints = distributePoints-5;
				document.getElementById("distributePoints").innerHTML = distributePoints;	
			}


		}



		// function to decrease the values when player presses minus button

		// function decreaseValue(param) {
		// 	if (param ==  "power" && powerStartValue > 0) {
		// 		powerStartValue = powerStartValue - 5;
		// 		var increaseAttribute = param +"Value";
		// 		document.getElementById(increaseAttribute).innerHTML=powerStartValue;
		// 			if(40>distributePoints) {
		// 				distributePoints = distributePoints+5;
		// 				document.getElementById("distributePoints").innerHTML = distributePoints;
		// 			}
		// 	}

		// 	else if (param ==  "endurance" && enduranceStartValue > 0) {
		// 		enduranceStartValue = enduranceStartValue - 5;
		// 		var increaseAttribute = param +"Value";
		// 		document.getElementById(increaseAttribute).innerHTML=enduranceStartValue;
		// 			if(40>distributePoints) {
		// 				distributePoints = distributePoints+5;
		// 				document.getElementById("distributePoints").innerHTML = distributePoints;
		// 			}
		// 	}
		
		// 	else if (param ==  "live" && liveStartValue > 0) {
		// 		liveStartValue = liveStartValue - 5;
		// 		var increaseAttribute = param +"Value";
		// 		document.getElementById(increaseAttribute).innerHTML=liveStartValue;
		// 			if(40>distributePoints) {
		// 				distributePoints = distributePoints+5;
		// 				document.getElementById("distributePoints").innerHTML = distributePoints;
		// 			}
		// 	}

		// }



		// $("#createMainCharacter").click(function(){
 	// 		if (distributePoints > 0 || document.getElementById("heroName").value === "") { 
 	// 			alert("You still got points to distribute or name to fill out");
 	// 		}

 	// 		else if(distributePoints == 0 && document.getElementById("heroName").value !== "") {
 	// 			alert("Everything fine");
 	// 			var mainCharacter = new mainCharacterConstr(document.getElementById("heroName").value,powerStartValue, enduranceStartValue, liveStartValue);
 	// 			alert("Name" + mainCharacter.name + "Power " + mainCharacter.power + " Endurance " + mainCharacter.endurance + " Lives " + mainCharacter.lives );
 	// 		}

		// });

// mainCharacterConstr(power, endurance, lives)

// function mainCharacterConstr(power, endurance, lives) {
//   				this.power = power;
// 				this.endurance = endurance;
// 				this.lives = lives;
// 			}


	// Choice between the heroes
	
	// var heroOfChoice;
	

	// Choice for hero 1 

	$("#hero1").click(function(event){
 		heroOfChoice = 1;
 		OldBase1 = $('#hero1').attr('id');
 		NewBase1 = OldBase1 + "Marked.jpg";
 		// alert(NewBase1);
 		document.getElementById("hero1").src = NewBase1;

 		if(NewBase2 == "hero2Marked.jpg") {
 			document.getElementById("hero2").src = "hero2.jpg";
 		}

 		if(NewBase3 == "hero3Marked.jpg") {
 			document.getElementById("hero3").src = "hero3.jpg";
 		}

	});


	// Choice for hero 2 

	$("#hero2").click(function(){
 		heroOfChoice = 2;
 		OldBase2 = $('#hero2').attr('id');
 		NewBase2 = OldBase2 + "Marked.jpg";
 		// alert(NewBase2);
 		document.getElementById("hero2").src = NewBase2;

 		if(NewBase1 == "hero1Marked.jpg") {
 			document.getElementById("hero1").src = "hero1.jpg";
 		}

 		if(NewBase3 == "hero3Marked.jpg") {
 			document.getElementById("hero3").src = "hero3.jpg";
 		}

	});


	// Choice for hero 3

	$("#hero3").click(function(){
 		heroOfChoice = 3;
 		OldBase3 = $('#hero3').attr('id');
 		NewBase3 = OldBase3 + "Marked.jpg";
 		// alert(NewBase3);
 		document.getElementById("hero3").src = NewBase3;

 		if(NewBase1 == "hero1Marked.jpg") {
 			document.getElementById("hero1").src = "hero1.jpg";
 		}

 		if(NewBase2 == "hero2Marked.jpg") {
 			document.getElementById("hero2").src = "hero2.jpg";
 		}
	});



	
