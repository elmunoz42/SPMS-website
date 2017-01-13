
var leftMenuItem = 2

function displayChooser(menuItem) {
	if (menuItem === "option1") {
	alert("option1");
//this picture
	}
	else if (menuItem === "option2") {
	alert("option2");
//that picture
	}
	else {
	alert("choose an instrument");
	}
  }


/////////////////////User interface //////////////////////
$(function() {
  $(".hover-pix").hover(function() {
    $("#index-bottom-pix2").toggle(),
    $("#index-bottom-pix1").toggle();
    // $("img").hide();
    //$("#index-bottom-pix2").toggle();
  });

  //Letter maker
  $("#intake-form-SPMS").submit(function(event) {
    // $(".Family-Name").prepend(input);
    var inputFN=$("input#FN").val();
    var inputPG=$("input#PG").val();
    var inputSN=$("input#SN").val();

    $("p .Parent-Guardian-Name").text(inputPG);
    $("p .Student-Name").text(inputSN);

    event.preventDefault();
  });

  // displayChooser
  $(".left-menu buttons").click(function(event){
    var menuItem = $(".left-menu button").val();
    var result = displayChooser(menuItem);
    alert(result);
    $("#result-label-color").text(result);
    event.preventDefault();
  });



  //Theme changer
  $("#dark-theme-button").click(function() {
    $("body").removeClass("toGrayTheme");
    $("body").addClass("toDarkTheme");

  });

  $("#gray-theme-button").click(function() {
    $("body").removeClass("toDarkTheme");
    $("body").addClass("toGrayTheme");

  });

  $("#normal-theme-button").click(function() {
    $("body").removeClass("toDarkTheme");
    $("body").removeClass("toGrayTheme");
  });

});


  //Menu Item Display Changer
  // var leftMenuItem = LT0


  // $("input#left-item1").click(function() {
  //    var newMenuItem = 3; //$("input#left-menu").val();
  //    return newMenuItem;
  //    alert (newMenuItem);
  //   // alert($("input#left-menu").val());
  // });
    // instrument-picture
  //   var displayChooser = function () {
  //   var menuItem = $("input#left-menu").val()
  //   if (menuItem === electric guitar) {
  //     alert("electric guitar")
  //   }
  //   else if (menuItem === LT2) {
  //     alert("acoustic guitar")
  //
  //   }
  //   else {
  //     alert("choose an instrument")
  //   }
  // }
    // instrument-color
    // var menuItem = $("#color-picker option").val()
