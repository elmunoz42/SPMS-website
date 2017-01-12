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


});
