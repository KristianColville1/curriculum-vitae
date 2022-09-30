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
/**
 * Nav - set to show on medium to small screens at certain scroll positions
 */

var nav = $('nav');
var navHTML = `
<a class="navbar-brand" href="index.html"><i class="fa-solid fa-id-card font-weight-bold"></i> Kristian C.</a>
<div class="btn navbar-togger" data="hamburger-menu" type="button" data-toggle="collapse"
    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
    aria-label="Toggle navigation">
    <svg class="ham hamRotate ham1" viewBox="0 0 100 100" width="60" onclick="this.classList.toggle('active')">
        <path
              class="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
        <path
              class="line middle"
              d="m 30,50 h 40" />
        <path
              class="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
      </svg>
    </div>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul class="navbar-nav">
        <li class="nav-link">
            <a href="index.html"><i class="fa fa-home"
                    aria-hidden="true"></i><span> Home</span> <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-link">
            <a href="resume.html"><i class="fa fa-graduation-cap"
                    aria-hidden="true"></i><span> Resume</span></a>
        </li>
        <li class="nav-link">
            <a href="contact.html"><i class="fa fa-comment-o"
                    aria-hidden="true"></i><span> Contact</span></a>
        </li>
        <li class="nav-link">
            <a href="interests.html"><i class="fa fa-users"
                    aria-hidden="true"></i><span> Interests</span></a>
        </li>
        <li class="nav-link">
            <a href="github.html"><i class="fa fa-github"
                    aria-hidden="true"></i><span> GitHub</span></a>
        </li>
        <li class="nav-link">
            <a href="assets/cv/sample-cv.pdf" target="_blank"><i
                    class="fa fa-download" aria-hidden="true"></i><span> Download CV</span></a>
        </li>
    </ul>
</div>
`

window.addEventListener("scroll", function() {
  if($(window).width() < 769){

  }
  if($(window).width() < 769){
    if(this.window.scrollY > 1000) {
      nav.html(navHTML);
      nav.addClass('bg-color-work-history nav-shadow');
    }
    if(this.window.scrollY < 1000){
      nav.html('');
      nav.removeClass('bg-color-work-history nav-shadow');
    }
  }


})