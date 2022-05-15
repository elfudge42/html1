
// JavaScript for nav bar to stick to the top of the screen after scrolling
window.onscroll = function() {navStickyFunction()};

// Get the navbar
var navbar = document.getElementById("myTopnav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// JavaScript for sticking
function navStickyFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else{
		navbar.classList.remove("sticky");
	}
}

// Javascript for mobile hamburger - from changeimagescroll
function navBurgerFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
    x.className += " responsive";
    }
    else {
    x.className = "navbar";
    }
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
