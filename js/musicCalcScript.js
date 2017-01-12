
/////////////// business logic ////////////////////////
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

	//adding
	//
	// $(".numberInput").submit(function(event){
	// 	event.preventDefault ();
	// 	var number1 = parseInt($("#add1").val());
	// 	var number2 = parseInt($("#add2").val());
	// 	var result = add(number1, number2);
	// 	// debugger;
	// 	// alert(add(number1, number2));
	// 	$("#result-label-add").text(result)
	//
	// });

	// chords
	// $(".numberInput").submit(function(event){
	// 	event.preventDefault ();
	// 	var startingNote = parseInt($("#startingNote").val());
	// 	var result = [rootNumber(startinNote), majorThirdNumber(startingNote), perfectFifthNumber(startinNote)];
	// 	//ERROR WITH 59//
	// 	$("#result-label-chords").text(result);
	// });

  // displayChooser
	$(".simpleInput").submit(function(event){
		event.preventDefault ();
		var menuItem = $("#simpleInput input").val();
		var result = displayChooser(menuItem);
		// debugger;
		alert(result);
		$("#result-label-color").text(result);
		});

	});



// alert(add(number1, number2));
//alert(majorChord(number1));
// alert(subtract(number1, number2));
// alert(multiply(number1, number2));
// alert(divide(number1, number2));
