
var leftMenuItem = 2


$(function() {
  $(".hover-pix").hover(function() {
    $("#index-bottom-pix2").toggle(),
    $("#index-bottom-pix1").toggle();
    // $("img").hide();
    //$("#index-bottom-pix2").toggle();

  });
  //
  // //Theme changer
  // $("#dark-theme-button").click(function() {
  //   $("body").removeClass("toGrayTheme");
  //   $("body").addClass("toDarkTheme");
  //
  // });
  // $("#gray-theme-button").click(function() {
  //   $("body").removeClass("toDarkTheme");
  //   $("body").addClass("toGrayTheme");
  //
  // });
  // $("#normal-theme-button").click(function() {
  //   $("body").removeClass("toDarkTheme");
  //   $("body").removeClass("toGrayTheme");
  // });

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

// $("#color-picker button").submit(function() {

// })
// alert(colorMenuItem = function($("#color-picker option").val()));

});
