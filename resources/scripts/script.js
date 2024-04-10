/*-----This is my function for shrinking the navbar in scroll to resize it and give the content of the page more space.*/

window.onscroll = function () { navBarScroll() };
/*As you can see the function changes several CSS values, there are surely more efficient ways to achieve the same. As I said feedback is always appreciated. :-)*/
function navBarScroll() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("main").style.marginTop = "265px";
    document.getElementById("portrait").style.height = "0rem";
    document.getElementById("portrait").style.width = "0rem";
    document.getElementById("portrait").style.opacity = "0";
    document.getElementById("navBar").style.opacity = "0";
    document.getElementById("navBar").style.display = "none";
    document.getElementById("name").style.fontSize = "1.5rem";
    document.getElementById("navDropBtn").style.transform = "rotate(90deg)";
    document.getElementById("navDropBtn").style.opacity = "1";
    document.getElementById("navDropBtn").style.visibility = "visible";
  } else {
    document.getElementById("main").style.marginTop = "350px";
    document.getElementById("portrait").style.height = "15rem";
    document.getElementById("portrait").style.width = "15rem";
    document.getElementById("portrait").style.opacity = "1";
    document.getElementById("navBar").style.opacity = "1";
    document.getElementById("navBar").style.display = "flex";
    document.getElementById("name").style.fontSize = "2.125rem";
    document.getElementById("navDropBtn").style.transform = "rotate(45deg)";
    document.getElementById("navDropBtn").style.opacity = "0";
    document.getElementById("navDropBtn").style.visibility = "hidden";
  }
}


/*-----This is a function for the navicon dropdown menu-----*/

/* When the user clicks on the button,
it toggles between hiding and showing the dropdown content */
function navDropFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//This function closes the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*-----This is my funciton for a timecalculator.
This is used to calculate the seconds since I've started to code again.-----*/

/*Here I retrieve the element in my DOM with the id "timeCalculator"*/
const timeCal = document.getElementById("timeCalculator");

/*This function has a set start date and calculates the time which has passed since then, in seconds.
Next the function implements itself as text in the DOM-element*/
function dateClock() {
  const dateStart = new Date("2023-06-27T10:00:00")
  const dateNow = new Date;
  const diff = dateNow - dateStart;
  const secondsPassed = (Math.floor(diff / 1000));
  /*Separating the the thousands with seperators*/
  const formattedNumber = secondsPassed.toLocaleString();
  timeCal.textContent = `${formattedNumber} seconds`;
}

/*This is the interval in which the "dateClock"-function is supposed to run (in milliseconds)*/
const interval = setInterval(dateClock, 1000);

/*-----This is a function for the CV-Dropdown button-----*/
/*Since this function gets triggered when the button is pushed, it's handing
the function itself as an attribute and gets the "data-target". After that I defined another variable which carries
the according id of the divs which are supposed to appear or disappear as a valu.This variable is then considered by 
the logical conditionals.*/

function dropButtonCV(button) {
  const targetDivId = button.getAttribute("data-target");
  const targetDiv = document.getElementById(targetDivId);


  if (targetDiv.style.display === "none") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }

}

/*----This function brings the user back to the top by either clicking on my name in the header or 
the button on the bottom of the page.-----*/

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}