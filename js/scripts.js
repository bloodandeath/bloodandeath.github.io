$(document).ready(function(){
  
  var mobileWidth = 600
  
  var menuList = document.getElementById("menuList");
  var checkboxElem = document.getElementById("checkboxElem");

  
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  // Parallax Background Scrolling
  var parallax = document.querySelectorAll("body"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  }; // End Parallax
  
  window.onresize = function() {
    if (window.innerWidth >= mobileWidth) {
      menuList.style.display = "block";
    } else {
      menuList.style.display = "none";
    }
  }
  
  window.onclick = function(event) {
    if (window.innerWidth <= mobileWidth && checkboxElem.checked && event.target != checkboxElem) {
      menuList.style.display = "none";
      checkboxElem.checked = false;
    }
    
  }
  
});


// Menu Button Actions (Show/Hide Menu)
function menuClick(checkboxElem) {
  var menuList = document.getElementById("menuList");
  if (checkboxElem.checked) {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }
}