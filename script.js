// CURRENT TIME
var currentTime = moment().format("h");
time = moment().hour();
console.log(currentTime); // want it ot be 
console.log(time);


// want to be able to compare hour with current time
var addedEvent = {
  hour: ["9", "10", "11", "12", "1", "2", "3", "4", "5"],
  event: [$("#9am textarea"), ]   //document.querySelector("text") //want this to be linked to html
}
// var eventBlock = $("textarea")
let event = document.getElementById("text");
// var addedEvent = ['event1', 'event2', 'event3']

// at each hour display 'you have ${input/typed event} at ${time}'
for (let i = 0; i<= addedEvent.hour.length; i++) {
  console.log(`You have ${addedEvent.event} at ${addedEvent.hour[i]}`)
  if (addedEvent.hour[i] === currentTime) {
    $(`#${addedEvent.hour[i]}`).addClass("present")
    console.log("present" + $(".present"));
  }


  if (event === null) {
    console.log(`You are free at ${addedEvent.hour[i]}!`);
  }
}

//want mySchedule to be all of the html inputs with their corresponding hours
var mySchedule = addedEvent;
console.log(mySchedule);


//color code events based on relation to current time
// function colorCodeEvent(){

//   console.log(JSON.stringify(addedEvent.hour[i]))
//   console.log(currentTime);

// if (addedEvent.hour === currentTime) {
//   console.log("present" + $(".present"));
// } else if (addedEvent.hour < currentTime){
//   console.log("past" + $(".past"));
//   } else (addedEvent.hour > currentTime) 
//     console.log("future" + $(".future"));
// }
// colorCodeEvent();

var saveBtn = $(".saveBtn");
// var saveEvent = $(".saveBtn");

// // function to save newest schedule and store it
// function saveSchedule() {
//   localStorage.setItem("savedSchedule");JSON.stringify(savedSchedule)

// // on save button want to save event
//   saveEvent.on("click", function(event) {
//   event.preventDefault();
//   localStorage.setItem(hour, addedEvent)
//   console.log(saveSchedule);
//   }
//   )
// }


// // condition to display past, present, future color-code for events
// // if (time < moment()) {
// //   addedEvent === $(`<div class="past"></div>`),
// // } else if (time === moment()) {
// //   addedEvent === $(".present")
  
// // } else if (time === moment()) {
// //   addedEvent === $(".future")
// // }




// // function displaySchedule() {}


// //   //mySchedule refers to the current day's schedule
// // var Event1 = [];
// // var eventData = $("input")
// // $("input").text(`${Event1}`)

// // console.log(eventData);


// // var currentTime = moment().hour();
// // function displayAddedEvents(){};
// // for (i = 9; i <=19; i++)

// //   $(".container").append(Event1)

// //   let schedule = JSON.parse(localStorage.getItem("schedule"));





//get data for header date [correct!]
function getHeaderDate() {
  var currentHeaderDate = moment().format('dddd, MMMM Do, YYYY');
  $("#currentDay").text(currentHeaderDate);
}

// load today's date (header date) [correct]
getHeaderDate();









