//To Add another Timeblock update HTML
//Add a new variable within the on click function & define it to local storage
//Add a new variable to retrieve from local storage & print it back to the text field.

//Current Date displayed at the top of page
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//Setting the Timer for the Planner
//Current time based on seconds
var rightNow = moment().format('HH');

function currentTime() {
    rightNow = moment().format('HH');
    $('#currentTime').text(rightNow);
}
setInterval(currentTime, 1000);
//checking the time
console.log(rightNow);


//Change Class based on the Timer
function setTimeStlyes() {
    //looking through every class with "col-8" & changing the id to an interger -- the color class will only apply to the col-8 class in the HTML
    $(".col-8").each(function () {
        //changing the timeblock id to an interger
        var timeBlock = parseInt($(this).attr('id'));
        console.log(timeBlock);
        //changing the time to an interger
        thisTime = parseInt(rightNow);
        console.log(thisTime)

        //comparing time in the timeblock to the current hour
        if (thisTime > timeBlock) {
            $(this).addClass("past");
        } else if (thisTime < timeBlock) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present")
        }
    })

}
//running the funtion to apply the syles based on the timer
setTimeStlyes();

//Saving text to local Storage
$(document).ready(function () {
    $(".saveBtn").on('click', function () {
        //Defining the saved button text per the save button that was just clicked
       var toDoText = $(this).siblings(".toDoText").val();
       //Defining the HTML text area id per the save button that was just clicked
       var toDoTime = $(this).siblings(".toDoText").attr("id");

       //Saving the text to local storage using the id 
       localStorage.setItem(toDoTime, toDoText);
    })
})

//Retriving the Planned Tasks from Local Storage & displaying it in the text box
$("#8").val(localStorage.getItem("8"));
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));


