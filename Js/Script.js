//displaying current time on top
var currentDayEl = document.querySelector("#currentDay");
currentDayEl.textContent = moment().format("dddd MMM Do YY");

//create buttone to save vaule to the local storage
$(".saveBtn").on("click", function () {
  // get the the value once click
  var getValue = $(this).siblings(".description").val();
  var getTime = $(this).parent().attr("id");

  // saves the value in the local storage
  localStorage.setItem(getTime, getValue);
});

