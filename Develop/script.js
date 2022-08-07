//Current Date displayed at the top of page
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//Variables for Time Containers Where Text is Stored
var saveBtn = $('.saveBtn');


//Changing Class based on Time


//Saving To-Do Planned Item
saveBtn.on('click', function () {
    console.log(saveBtn);

    //Checking to See what button I'm selecting
    console.log($(this).parent().index())

    //updating the text from the text box
    var h8 = $('#8').val();
    var h8 = $('#8').val();
    var h9 = $('#9').val();
    var h10 = $('#10').val();
    var h11 = $('#11').val();
    var h12 = $('#12').val();
    var h13 = $('#13').val();
    var h14 = $('#14').val();
    var h15 = $('#15').val();
    var h16 = $('#16').val();
    var h17 = $('#17').val();

    //saving the planned task text to the local storage 
    localStorage.setItem('text8', h8);
    localStorage.setItem('text9', h9);
    localStorage.setItem('text10', h10);
    localStorage.setItem('text11', h11);
    localStorage.setItem('text12', h12);
    localStorage.setItem('text13', h13);
    localStorage.setItem('text14', h14);
    localStorage.setItem('text15', h15);
    localStorage.setItem('text16', h16);
    localStorage.setItem('text17', h17);
})

//Displaying Planned Tasks from Local Storage
var planner8 = localStorage.getItem('text8');
$('#8').val(planner8);
var planner9 = localStorage.getItem('text9');
$('#9').val(planner8);
var planner10 = localStorage.getItem('text10');
$('#10').val(planner10);
var planner11 = localStorage.getItem('text11');
$('#11').val(planner11);
var planner12 = localStorage.getItem('text12');
$('#12').val(planner12);
var planner12 = localStorage.getItem('text13');
$('#13').val(planner13);
var planner12 = localStorage.getItem('text14');
$('#14').val(planner14);
var planner12 = localStorage.getItem('text15');
$('#15').val(planner15);
var planner12 = localStorage.getItem('text16');
$('#16').val(planner16);
var planner12 = localStorage.getItem('text17');
$('#17').val(planner17);

