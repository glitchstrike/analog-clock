var hourhand = document.querySelector(".hours")
var minutehand = document.querySelector(".minutes")
var secondhand = document.querySelector(".seconds")

function rotateMyClock(){
    var currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const secondsFraction = seconds/60;
    const minutesFraction = (secondsFraction+minutes)/60;
    const hoursFraction = (minutesFraction+hours)/12;

    const secondsAngle = secondsFraction*360;
    const minutesAngle = minutesFraction*360;
    const hoursAngle = hoursFraction*360;

secondhand.style.transform = `rotate(${secondsAngle}deg)`
minutehand.style.transform = `rotate(${minutesAngle}deg)`
hourhand.style.transform = `rotate(${hoursAngle}deg)`

}

setInterval(rotateMyClock,500)

