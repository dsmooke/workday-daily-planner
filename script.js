// CURRENT TIME
var currentTime = moment().format("h");
time = moment().hour();
console.log(currentTime); // want it ot be 
console.log(time);


// want to be able to compare hour with current time
var addedEvent = {
  hour: ["9", "10", "11", "12", "1", "2", "3", "4", "5"],
  event: "" //want this to be linked to html
}
// var eventBlock = $("textarea")
let event = document.getElementById("text");
// var addedEvent = ['event1', 'event2', 'event3']

// at each hour display 'you have ${input/typed event} at ${time}'
for (let i = 0; i<= addedEvent.hour.length; i++) {
  console.log(`You have ${addedEvent.event} at ${time}`)
  if (event === null) {
    console.log(`You are free at ${time}!`);
  }
}

// TIME BLOCK ?
// var time = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
//want typed info to display within input element
// var inputData = $("<input>").text

//want time to be defined as the event hour's indexNumber
// var time = addedEvent.hour[0];





//color code events based on relation to current time
function colorCodeEvent(){
if (addedEvent.hour = currentTime) {
  console.log("present" + $(".present"));
} else if (addedEvent.hour < currentTime){
  console.log("past" + $(".past"));
  } else (addedEvent.hour > currentTime) 
    console.log("future" + $(".future"));
}

// line 19 time("hh:mm A") ?








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

// // const hour = moment().format("h a");
// // // var addedEvent = $()

// // function getTime() {
// //   // var currentTime = moment().hour(9);
// //   for (let hour = 9; hour <= 19; hour++) {
// //   // console.log(currentTime);
// //   console.log(hour);
// // }
// // // let hour = i;

// var time = moment().hour();
// time = moment().format("h A");
// console.log(time);
// // }
// // getTime(9);

// // let container = $(".container");

// // let hour9Div = $(`<div class='row time-block'>
// //   <div class='col-2 hour'>${hour}</div>
// //   <textarea class="col-8 description" placeholder="add event"></textarea> 
// //   <button class="col-2 saveBtn>Save</button>
// //   </div>`);
// // container.append(hour9Div);







