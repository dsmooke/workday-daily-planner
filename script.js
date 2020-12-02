
//mySchedule refers to the current day's schedule


// var mySchedule = 


//get data for header date [correct!]
function getHeaderDate() {
  var currentHeaderDate = moment().format('dddd, MMMM Do, YYYY');
  $("#currentDay").text(currentHeaderDate);
}

// load today's date (header date) [correct]
getHeaderDate();

// var hourBlock = $("#hour-9")
// //use bootstrap class names in js - id that relates to current hour 
// $("div").html(`<div ${hourBlock} class="row time-block"></div>`);

// $("div").attr("class="axy"")

function getTime() {
  // var currentTime = moment().hour(9);
  for (let i = 9; i <= 19; i++) {
  // console.log(currentTime);
  console.log(i);
}
let i = hour;
var hour = moment().format("h a");
var hour = moment().hour();
let time = moment().format("h A");
}
getTime();


// var startDay = hour(9);
// var currentTime = moment().hour();

