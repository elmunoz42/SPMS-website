/////////BE/////////

var noteNames = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

var noteNamesClone = noteNames.slice();
var startingNumber = prompt("starting note number(C=0): ");
var endingNumber = 12 - startingNumber;
shortenedNamesClone = noteNamesClone.splice(0,startingNumber);
shortenedNamesClone = noteNamesClone.splice(12,endingNumber);
var notScaleNotes = [];

/// these are the indexes where a note gets taken away keep in mind when you take one away the index changes for the next incision!!! /// That's why its not 1,3,6,8,10 ///

var notScaleNumbersMajor = [1,2,4,5,6];

notScaleNotes = [noteNamesClone.splice(1,1), noteNamesClone.splice(2,1), noteNamesClone.splice(4,1), noteNamesClone.splice(5,1), noteNamesClone.splice(6,1)];

var scaleNotesMajor = noteNamesClone.slice();
var notScaleNumbersMinor = [1,3,4,6,7];

noteNamesClone = noteNames.slice();
shortenedNamesClone = noteNamesClone.splice(0,startingNumber);
shortenedNamesClone = noteNamesClone.splice(12,endingNumber);

notScaleNotes = [noteNamesClone.splice(1,1), noteNamesClone.splice(3,1), noteNamesClone.splice(4,1), noteNamesClone.splice(6,1), noteNamesClone.splice(7,1)];

var scaleNotesMinor = noteNamesClone.slice();

$(function(){
  alert("major scale: " + scaleNotesMajor);
  alert("minor scale: " + scaleNotesMinor);
  noteNamesClone = noteNames.slice();
});


/////////tried .forEach program NOT WORKING ??? ////////

  // notScaleNumbersMajor.forEach(formula(noteNamesInside) {
  //   var notScaleNumbersMajor = [1,2,4,5,6];
  //   console.log("notScaleNumbersMajor: " + notScaleNumbersMajor);
  //   var noteNamesInside = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
  //   console.log("noteNamesInside: " + noteNamesInside);
  //   diatonicNotes = noteNamesInside.splice(notScaleNumbersMajor + ",1),");
  //   return diatonicNotes;
  //
  // });
  // alert(diatonicNotes);
