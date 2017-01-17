
/////////////// business logic ////////////////////////
var noteNames = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];


function add (number1, number2) {
	return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function rootNumber(startingNote) {
  var noteNumber = parseInt(startingNote) % 12;
	return noteNumber;
}
function majorThirdNumber(startingNote) {
	var noteNumber = parseInt(startingNote) % 12;
	var majorThirdNumber = noteNumber + 4;
	return majorThirdNumber;
}
function minorThirdNumber(startingNote) {
	var noteNumber = parseInt(startingNote) % 12;
	var minorThirdNumber = noteNumber + 3;
	return minorThirdNumber;
}
function perfectFifthNumber(startingNote) {
	var noteNumber = parseInt(startingNote) % 12;
	var perfectFifthNumber = noteNumber + 7;
	return perfectFifthNumber;
}

function displayChooser(menuItem) {
	if (menuItem === "color1") {
	alert("color1");
//this picture
	}
	else if (menuItem === "color2") {
	alert("color2");
//that picture
	}
	else {
	alert("choose an instrument");
	}
}
////////////////user interface ///////////////

$(document).ready(function() {

	//calculator

	$(".numberInput").submit(function(event){
		event.preventDefault ();
		var number1 = parseInt($("#input1").val());
		var number2 = parseInt($("#input2").val());
		var operator = $("input:radio[name=operator]:checked").val();
		console.log("1st number:" + number1);  /// for debugging
		console.log("2nd number:" + number2); /// for debugging
		console.log("operator:" + operator); /// for debugging
		var result;
		if (operator === "add") {
			result = add(number1, number2);
			console.log("add:" + result); /// for debugging
		}
		else if (operator === "subtract") {
			result = subtract(number1, number2);
			console.log("subtract:" + result); /// for debugging
		}
		else if (operator === "multiply") {
			result = multiply(number1, number2);
			console.log("multiply:" + result); /// for debugging
		}
		else if (operator === "divide"){
			console.log("divide:" + result); /// for debugging
			result = divide(number1, number2);
		} else { alert("somethings wrong!")}
		$("#result-label-add").text(result);

	}); // calculator

	// chords
	//
	// $(".numberInput").submit(function(event){
	// 	event.preventDefault ();
	// 	var startingNote = parseInt($("#startingNote").val());
	// 	var result = [rootNumber(startinNote), majorThirdNumber(startingNote), perfectFifthNumber(startinNote)];
	// 	//ERROR WITH 59//
	// 	$("#result-label-chords").text(result);
	// });

  // displayChooser for SimpleFormInput
	// $(".simpleInput").submit(function(event){
	// 	var menuItem = $("#simpleInput").val();
	// 	var result = displayChooser(menuItem);
	// 	// debugger;
	// 	alert(result);
	// 	$("#result-label-color").text(result);
	// 	event.preventDefault ();
	// 	});

		// $(".menuButtons").submit(function(event){
		// 	var menuItem = $(".menuButtons button").val();
		// 	var result = displayChooser(menuItem);
		// 	// debugger;
		// 	alert(result);
		// 	$("#result-label-color").text(result);
		// 	event.preventDefault ();
		// 	});

	});



// alert(add(number1, number2));
//alert(majorChord(number1));
// alert(subtract(number1, number2));
// alert(multiply(number1, number2));
// alert(divide(number1, number2));
