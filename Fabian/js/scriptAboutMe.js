/*Function display current week day in speak bubble*/

window.onload= function () {
	var curWeekDay = new Date().getDay(); 
	

	if (curWeekDay == 0) {
		var curWeekDayString = "sunday";		
		document.getElementById("currentDay").innerHTML= curWeekDayString;
	}

	else if (curWeekDay == 1) {
		var curWeekDayString = "monday";		
		document.getElementById("currentDay").innerHTML= curWeekDayString;
	}

	else if (curWeekDay == 2) {
		var curWeekDayString = "tuesday";		
		document.getElementById("currentDay").innerHTML= curWeekDayString;
	}

	else if (curWeekDay == 3) {
		var curWeekDayString = "wednesday";		
		document.getElementById("currentDay").innerHTML= curWeekDayString;
	}

	else if (curWeekDay == 4) {
		var curWeekDayString = "thursday";		
		document.getElementById("currentDay").innerHTML= curWeekDayString;
	}

	else if (curWeekDay == 5) {
		var curWeekDayString = "friday";		
		document.getElementById("currentDay").innerHTML= curWeekDayString;
	}

	else if (curWeekDay == 6) {
		var curWeekDayString = "saturday";		
		document.getElementById("currentDay").innerHTML= curWeekDayString;
	}

}


// SCREEN MEASURE BUTTON

function screanMeasurer() {
			alert(window.innerWidth);
		}	


// JQUERY TO PLAY IFRAME MUSIC

		// var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
	 //    if(!isChrome){
	 //      $('#iframeAudio').remove()
	 //    }
	 //  else{
	 //     $('#playAudio').remove() 

	     // just to make sure that it will not have 2x audio in the background 
	  // }
		

		// function screanMeasurer() {
		// 	alert(window.innerWidth);
		// }	 -->
		

