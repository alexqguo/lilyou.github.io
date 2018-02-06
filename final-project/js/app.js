// Open and close menu 
$(function() {
  $("#menuImport").load("menu.html", function() {
    $(".menucontainer").hide();
    $("#hideMenu").click(function() {
      if ($(".menucontainer").css("display") === "none") {
        $(".menucontainer").show();
        $("#hideMenu").html("X");
      }
      else {
        $(".menucontainer").hide();
        $("#hideMenu").html("☰");
      }
    });

    /*
1) click handler on ALL images
  - save src as a variable
  - set that src as the src of the image within the modal (.img-modal img)
  - show the modal

2) click handler on the modal itself
  - should just hide the modal

*/
    $('.img-modal').click(function(event){  
      $(event.currentTarget).hide();
    });
  });
});

$('img').click(function(event){
  var imgSource = event.target.getAttribute('src');
  $('.img-modal img').attr('src', imgSource); 
  $('.img-modal').show();
});

