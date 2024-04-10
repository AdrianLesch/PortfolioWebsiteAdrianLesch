/*-----This is my function for shrinking the navbar in scroll to resize it and give the content of the page more space.*/

window.onscroll = function () { navBarScroll() };

function navBarScroll() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("main").style.marginTop = "265px";
        document.getElementById("portrait").style.height = "0rem";
        document.getElementById("portrait").style.width = "0rem";
        document.getElementById("navBar").style.display = "none";
        document.getElementById("name").style.fontSize = "1.5rem";
        document.getElementById("navDropBtn").style.transform = "rotate(90deg)";
        document.getElementById("navDropBtn").style.visibility = "visible";
    } else {
        document.getElementById("main").style.marginTop = "350px";
        document.getElementById("portrait").style.height = "15rem";
        document.getElementById("portrait").style.width = "15rem";
        document.getElementById("navBar").style.display = "flex";
        document.getElementById("name").style.fontSize = "2.125rem";
        document.getElementById("navDropBtn").style.visibility = "hidden";
        document.getElementById("navDropBtn").style.transform = "rotate(50deg)";
    }
}


/*-----This is a function for the navicon dropdown menu-----*/

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function navDropFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
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



