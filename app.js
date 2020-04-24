const secdivision = document.getElementById('sec');
const mindivision = document.getElementById('min');
const hourdivision = document.getElementById('hour');

let sound = document.getElementById("myaudio");

//Date

const d = new Date();
const date = d.getUTCDate() + 1;
const month = d.getUTCMonth() + 1;
const year = d.getUTCFullYear();

var dateStr = date + "/" + month + "/" + year;
document.getElementById("mydate").innerHTML = dateStr;

//Week day
var weekdays = new Array(
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var day = d.getDay();
document.getElementById("myweekday").innerHTML = weekdays[day];


const tick = () => {

    const now = new Date();
    const s = now.getSeconds() / 60;
    const m = (s + now.getMinutes()) / 60;
    const h = (m + now.getHours()) / 12;
    secdivision.style.transform = "rotate(" + (s * 360) + "deg)";
    mindivision.style.transform = "rotate(" + (m * 360) + "deg)";
    hourdivision.style.transform = "rotate(" + (h * 360) + "deg)";

    sound.currentTime = 0;

    sound.play();
};
sound.loop = true;
setInterval(tick, 1000);