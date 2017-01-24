

function FamilyInfo (familyName, parentGuardianName, address, phoneNumber, cellNumber, email, signOff, students) {
  this.familyName = familyName;
  this.parentGuardianName = parentGuardianName;
  this.addres = address;
  this.phoneNumber = phoneNumber;
  this.cellNumber = cellNumber;
  this.email = email;
  this.signOff = signOff;
  this.students = students;
}

function StudentInfo (studentName, studentAge, instrumentOfInterest, musicalExperience, assignedTeacher,  firstTimeAvailabilities) {
  this.studentName = studentName;
  this.studentAge = studentAge;
  this.instrumentOfInterest = instrumentOfInterest;
  this.musicalExperience = musicalExperience;
  this.assignedTeacher = assignedTeacher;
  this.firstTimeAvailabilities = firstTimeAvailabilities;
}




$(document).ready(function(){
  alert("hello! I'm signupscript!")

  $("form#intake-form-SPMS").submit(function(event){
    event.preventDefault();
    alert("you've submitted");

    ////FamilyInfo /////
    var nFamilyName = $("#FN").val();
    var nParentGuardianName = $("#PG").val();
    var nAddress = $("#AD").val();
    var nPhoneNumber = $("#PN").val();
    var nCellNumber = $("#CN").val();
    var nEmail = $("#EM").val();
    var nSignOff = $("#SO").val();

    alert(nFamilyName, nParentGuardianName, nAddress, nPhoneNumber, nCellNumber, nEmail, nSignOff);
    // var nFamilyInfo = new FamilyInfo(nFamilyName, nParentGuardianName, nAddress, nPhoneNumber, nCellNumber, nEmail, nSignOff){
    //
    // }

    //// StudentInfo ////
    var nStudentName = $("#SN").val();
    var nStudentAge = $("#SA").val();
    var nInstrumentOfInterest = $("#IOI").val();
    var nMusicalExperience = $("#ME").val();
    var nAssignedTeacher = $("#AT").val();
    var nFirstTimeAvailabilities = [$("#TI1").val(), $("#TI2").val(), $("#TI3").val()];
    var nStartDate = $("#SD").val();

  });
});
