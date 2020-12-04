
// time variable
time = moment().hour();
console.log(time);

// variable to compare hour with time
var addedEvent = {
  hour: ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
}

// save button
var saveBtn = $(".saveBtn");
saveBtn.on("click", function(event) {
  console.log($(this).prev().val());
  console.log($(this).parent().attr("id"))
  localStorage.setItem($(this).parent().attr("id"), $(this).prev().val()); //key value pair 
})

// color coding time-blocks based on relation to current time
for (let i = 0; i< addedEvent.hour.length; i++) {
  
  console.log($(`#${addedEvent.hour[i]} textarea`).val() )
  
// condition to assign colors to time-blocks
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
  if (event === null) {
    console.log(`You are free at ${addedEvent.hour[i]}!`);
  }
  console.log(localStorage.getItem(addedEvent.hour[i]))

  //where to display the items in local storage, setting the value
  $(`#${addedEvent.hour[i]} textarea`).val(localStorage.getItem(addedEvent.hour[i]))
}

//get data for header date 
function getHeaderDate() {
  var currentHeaderDate = moment().format('dddd, MMMM Do, YYYY');
  $("#currentDay").text(currentHeaderDate);
}

// load today's date (header date) 
getHeaderDate();









