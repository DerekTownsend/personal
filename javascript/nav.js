//Making these variables available to all functions 
//creating these here as a place holder
var section;
var sections = {};

//scrollspy navigation
(function() {
  "use strict";
  //selecting all elements that have class section
  var section = document.querySelectorAll(".section");
  //we are using this as a placeholder
  var i = 0;
  //this will gather all of the relevant html elemets that have section as a class and store their ids and positions  from the top of the page
  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
    
    
  });
})();
console.log(sections);
//creating a function that will run anytime the window scrolls
window.onscroll = function() {
  //creating a variable that finds out your scroll postion
  var scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  //creating a variable that with find the html element that has the id of nav
  var nav = document.getElementById("nav");
  //taking the items in the object and checking them against the rulseset
  for (i in sections) {
    //if statement that will compare your location within a section with your scroll position
    if (sections[i] <= scrollPosition) {
      //this will find the html elment currently using the active class and remove the class from that html element
      document.querySelector(".active").setAttribute("class", " ");
      document
      //finds the section that matches your scroll position  
        .querySelector("a[href*=" + i + "]")
      //adds the class active to the next nav item that matches scroll position and section      
        .setAttribute("class", "active");
    }
  }
  
  if (window.pageYOffset > 100) {
    nav.classList.add("stickynav");
  } else {
    nav.classList.remove("stickynav");
  }
};


//responsive navigation
function myFunction() {
  //   sets x as the variable for future shortcuts regarding the myTopNav id
  var x = document.getElementById("myTopnav");

  //   with the x.className and if else statement  we are now saying that if the variable x equals the requirements set by the nav css it will will gain the new class of responsive and remove the old one. If it doesnt equal it it then it will gain a new ruleset that is seen in the @media query.

  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
//sticky navigation at a point
// window.onscroll = function() {
//     var nav = document.getElementById('nav');
//     if ( window.pageYOffset > 65 ) {
//         nav.classList.add("stickynav");
//     } else {
//         nav.classList.remove("stickynav");
//     }
// }