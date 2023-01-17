// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add code to display the current date in the header of the page.

  // This section uses dayjs to set the current date and time. It is then implemented onto the page by setting the text of the <p> element with the id of "currentDay" as the current date and time
  var currentTime = dayjs().format("ddd MMM-D-YYYY H:m");
  $("#currentDay").text(currentTime);

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // This function will take any input that is in the text boxes and put it into local storage but only if the user clicks the save button to the right of the box they want to save
  $(".saveBtn").on("click", function () {
    let boxNum = $(this).parent().attr("id");
    let textValue = $(this).siblings(".description").val();
    localStorage.setItem(boxNum, textValue);
    console.log(localStorage);
    return;
  });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // This function checks to see if the hour in each section is in the past, present, or future. if the section is in the past it will be given the class "past" and will turn grey, if it is in the future it will turn green, and if it is the current hour it will turn red
  const currentHour = dayjs().format("H");
  $(".time-block").each(function () {
    let divId = $(this).attr("id");
    if (divId < currentHour) {
      $(this).addClass("past");
    } else if (divId > currentHour) {
      $(this).addClass("future");
    } else if (divId === currentHour) {
      $(this).addClass("present");
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // need to reference hour number in get item

  // this section grabs the local storage for each input box. This way when the page is loaded any inputs that have been saved will appear in their corresponding box.
  $("#09 .description").val(localStorage.getItem("09"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
});
