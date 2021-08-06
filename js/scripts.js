$(document).ready(function(){
  
  var mobileWidth = 600
  
  var menuList = document.getElementById("menuList");
  var checkboxWrapper = document.getElementById("checkboxWrapper");
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
    };
  };
  
  //Event Listener?
  
  $(document).mouseup(function (event) {
    
    if (window.innerWidth <= mobileWidth) {
      if (checkboxElem.checked && event.target != checkboxElem) {
        checkboxElem.click();
      };
    };
  });
  
  
  
});


// Menu Button Actions (Show/Hide Menu)

function menuClick(event) {
  if (checkboxElem.checked) {
    checkboxWrapper.style.display = "none";
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
    checkboxWrapper.style.display = "block";
  };
};
