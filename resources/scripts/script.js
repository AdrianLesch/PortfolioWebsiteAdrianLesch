/*-----This is my function for shrinking the navbar in scroll to resize it and give the content of the page more space.*/

window.onscroll = function () { navBarScroll() };

function navBarScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("headerWrapper").style.transition = "0.5s";
        document.getElementById("main").style.marginTop = "480px";
        document.getElementById("portrait").style.display = "none";
        document.getElementById("navBar").style.display = "none";
        document.getElementById("name").style.fontSize = "2rem"
        document.getElementById("navbarIcon").style.display = "inline-block";
        document.getElementById("navbarIcon").style.right = "1rem";
    } else {
        document.getElementById("headerWrapper").style.transition = "0.5s";
        document.getElementById("main").style.marginTop = "350px";
        document.getElementById("portrait").style.display = "flex";
        document.getElementById("navBar").style.display = "flex";
        document.getElementById("navbarIcon").style.display = "none";
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



