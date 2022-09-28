$(document).ready(function () {
  /**
   * Portfolio projects
   */
  var animating = false;
  var callback = function () {
    animating = false;
  };

  $("div.img-container").hover(
    function () {
      if (animating) return;
      animating = true;

      $(this).addClass("active");
      $(this).next().removeClass("overlay-shine");

      //set small delay
      setTimeout(callback, 200);
    },
    function () {
      if (animating) return;
      animating = true;

      $(this).removeClass("active");

      //set small delay
      setTimeout(callback, 200);
    }
  );

});
