"use strict";

function updateClock() {
  let now = new Date();
  let dayname = now.getDay(),
    month = now.getMonth(),
    date = now.getDate(),
    year = now.getFullYear(),
    hours = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    period = "AM";

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (hours == 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
    period = "PM";
  } else if (hours == 12) {
    period = "PM";
  }

  // Add 0 in the beginning of the number if less than 10
  hours = hours < 10 ? "0" + hours : hours;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  document.querySelector("#dayname").innerHTML = days[dayname];
  document.querySelector("#month").innerHTML = months[month];
  document.querySelector("#daynum").innerHTML = date;
  document.querySelector("#year").innerHTML = year;
  document.querySelector("#hour").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = min;
  document.querySelector("#seconds").innerHTML = sec;
  document.querySelector("#period").innerHTML = period;
}

function initClock() {
  updateClock();
  window.setInterval(updateClock, 1000); // Update every second
}

initClock();
