
//mySchedule refers to the current day's schedule


// var mySchedule = 


//get data for header date [correct!]
function getHeaderDate() {
  var currentHeaderDate = moment().format('dddd, MMMM Do, YYYY');
  $("#currentDay").text(currentHeaderDate);
}

// load today's date (header date) [correct]
getHeaderDate();

const hour = moment().format("h a");

function getTime() {
  // var currentTime = moment().hour(9);
  for (let hour = 9; hour <= 19; hour++) {
  // console.log(currentTime);
  console.log(hour);
}
// let hour = i;

// var hour = moment().hour();
// let time = moment().format("h A");
}
getTime();

let container = $(".container");

let hour9Div = $(`<div class='row time-block'>
  <div class='col-2 hour'>${hour}</div>
  <textarea class="col-8 description" placeholder="add event"></textarea> 
  <button class="col-2 saveBtn>Save</button>
  </div>`);
container.append(hour9Div);

// var hourBlock = $("#hour-9")
// //use bootstrap class names in js - id that relates to current hour 
// $("div").html(`<div ${hourBlock} class="row time-block"></div>`);

// $("div").attr("class="axy"")





// var startDay = hour(9);
// var currentTime = moment().hour();

