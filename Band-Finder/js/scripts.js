function bandFinder(Q1,Q2,Q3) {
  var Answer1 = parseInt(Q1);
  var Answer2 = parseInt(Q2);
  var Answer3 = parseInt(Q3);
  if (Answer1 === 1 && Answer2 === 1 || Answer2 === 1 && Answer3 === 1 || Answer1 === 1 && Answer2 === 1) {
    alert("join metal band 'alphaKids'");

  } else {
    alert("join another band");
  }
}

function bandCompatibility(Q1,Q2,Q3) {
  var Answer1 = parseInt(Q1);
  var Answer2 = parseInt(Q2);
  var Answer3 = parseInt(Q3);
  var result = (Answer1 / Answer2) * (Answer2 / Answer3) * (Answer1 / Answer3);

  /// Improve on this equation think of Answer1, Answer2, Answer3 as coordinates... ///
  
  alert(result);
  if (result === 1) {
    alert("perfect match")
  }
  else if (result >= 0.7 && result != 1) {
    alert("great match");
  }
  else if (result >= 0.1111 && result <= 0.7) {
    alert("ok match");
  } else {
    alert("not a great match");
  }
}

///////////UI/////////////


$(document).ready(function(){
  var QA1 = prompt("How long have you been playing?");
  var QA2 = prompt("What Style do you like to listen to?");
  var QA3 = prompt("What neighbourhood do you live in?")


bandFinder(QA1,QA2,QA3);
bandCompatibility(QA1,QA2,QA3);






























});
