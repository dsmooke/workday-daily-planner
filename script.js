
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

let hour = moment().format("h a");
for (let hour = 9; hour <= 19; hour++) {
  console.log(hour);
}


// var startDay = hour(9);
var currentTime = moment().hour();

