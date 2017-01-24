
var userResponses = [];






/////////UI/////////////
$(document).ready(function() {
  alert("hello");
  $("form#scheduling-survey").submit(function(event){
    event.preventDefault();
    ("#time-responses").show();
    $("input:checkbox[name=scheduling-survey]:checked").each(function(){
      var schedulingTimes = $(this).val();
      alert(schedulingTimes);
      $('#time-responses').append(schedulingTimes + "<br>");
      // $("input:checkbox[name=scheduling-survey]:checked").each(function(){
      //   var chosenTimes = $(this).val();
      //   userResponses.push(chosenTimes);
      //   alert(userResponses);
      });
    });
  });




});
