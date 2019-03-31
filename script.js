const timezoneSelector = document.getElementById("timezone-selector");
let timeZone = 0;

// Change timezone event handler
timezoneSelector.addEventListener("change", changeTimezone);

function changeTimezone(e) {
  timeZone = parseInt(e.target.value);
}

setInterval(function () {
  let date = new Date();
  // updateTime(date);
  updateClock(date);
}, 1000);

function updateClock(date) {
  const secondHand = document.getElementById("second-hand");
  const minuteHand = document.getElementById("minute-hand");
  const hourHand = document.getElementById("hour-hand");
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  let hours = date.getHours() + timeZone;

  secondHand.style.transform = `rotate(${seconds * 6}deg)`;
  minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
  hourHand.style.transform = `rotate(${hours * 30 +
    date.getMinutes() * 0.5}deg`;
}

// function updateTime(date) {
//   let timeDiv = document.getElementById("time");
//   let time = `Time for reference: ${date.getHours()}.${date.getMinutes()}:${date.getSeconds()}`;
//   console.log(time);
// }
