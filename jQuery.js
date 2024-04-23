$(document).ready(function(){
    $(".hover").mouseleave(
        function() {
          //removes the hover class when the mouse leaves the hover area
          $(this).removeClass("hover");
        }
      );
});
