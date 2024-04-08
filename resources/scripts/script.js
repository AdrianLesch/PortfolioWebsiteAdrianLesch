/*-----This is my funciton for a timecalculator.
This is used to calculate the seconds since I've started to code again.-----*/

/*Here I retrieve the element in my DOM with the id "timeCalculator"*/
const timeCal = document.getElementById("timeCalculator");

/*This function has a set start date and calculates the time which has passed since then, in seconds.
Next the function implements itself as text in the DOM-element*/
const dateClock = () => {
    const dateStart = new Date("2023-06-27T10:00:00")
    const dateNow = new Date;
    const diff = dateNow - dateStart;
    const secondsPassed = (Math.floor(diff / 1000));
    /*Separating the the thousands with seperators*/
    const formattedNumber = secondsPassed.toLocaleString();
    timeCal.textContent = `${formattedNumber}`;
}

/*This is the interval in which the "dateClock"-function is supposed to run (in milliseconds)*/
const interval = setInterval(dateClock, 1000);



