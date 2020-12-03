
// var currentTime = moment().format("h");
time = moment().hour();
// console.log(currentTime); // want it ot be 
console.log(time);

// want to be able to compare hour with current time
var addedEvent = {
  hour: ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
}

// var saveBtn = $(".saveBtn");
// saveBtn.on("click", function(event) {
//   console.log($(this).prev().val());
//   console.log($(this).parent().attr("id"))
//   localStorage.setItem($(this).parent().attr("id"), $(this).prev().val()); //key value pair 
// })

// color coding 
for (let i = 0; i< addedEvent.hour.length; i++) {
  
  console.log($(`#${addedEvent.hour[i]} textarea`).val() )
  

  if (addedEvent.hour[i] == time) {
    $(`#${addedEvent.hour[i]}`).addClass("present")
    // console.log("present" + $(".present"));
  }  else if (addedEvent.hour[i] < time){
    $(`#${addedEvent.hour[i]}`).addClass("past")
    // console.log("past" + $(".past"));
  } else {
    $(`#${addedEvent.hour[i]}`).addClass("future")
    // console.log("future" + $(".future"));
   
  }
//   // if (event === null) {
//   //   console.log(`You are free at ${addedEvent.hour[i]}!`);
//   // }
//   console.log(localStorage.getItem(addedEvent.hour[i]))

//   //where to display the items in local storage, setting the value
//   $(`#${addedEvent.hour[i]} textarea`).val(localStorage.getItem(addedEvent.hour[i]))
// }




//get data for header date [correct!]
function getHeaderDate() {
  var currentHeaderDate = moment().format('dddd, MMMM Do, YYYY');
  $("#currentDay").text(currentHeaderDate);
}

// load today's date (header date) [correct]
getHeaderDate();









