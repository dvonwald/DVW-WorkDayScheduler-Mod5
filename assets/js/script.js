var today = moment(); // Putting moment.js into a varaible
var jumboDate = $('#currentDay') // This is the ID for the jumbotron
var currentHour = today.format('H'); // Using the current time from moment.js to compare to time blocks
var hourNine = $('#hour-09') // IDs for all time blocks to be able to select and manipulate them, these all return OBJECTS
var hourTen = $('#hour-10')
var hourEleven = $('#hour-11')
var hourTwelve = $('#hour-12')
var hourThirteen = $('#hour-13')
var hourFourteen = $('#hour-14')
var hourFifteen = $('#hour-15')
var hourSixteen = $('#hour-16')
var hourSeventeen = $('#hour-17')
var timeBlocks = $(".time-block") // selecting all rows that have time-block class
var textBlocks = $('textarea') // selects all textarea elements

$(jumboDate).text(today.format('MMMM, Do YYYY, h:mm a')); // insert the current date/time to jumbotron

//Console logs I used to help me troubleshoot and traverse DOM
// console.log(hourNine)
// console.log($(".time-block").attr('id'))
console.log(currentHour)
console.log(hourNine < currentHour)
console.log(hourNine == currentHour)
console.log(hourNine > currentHour)
// console.log(timeBlocks[1].id.slice(5))
// console.log(typeof timeBlocks)

colorBlock() // Calling the colorBlock function
function colorBlock() { // Delcaring/defining the colorBlock function 
    $(timeBlocks).removeClass('past', 'present', 'future') // removing classes from all timeBlocks
    for (let i = 0; i < timeBlocks.length; i++) { // using for loop on the timeBlocks object which is a collection of all time-block objects
        // console.log(timeBlocks[i])
        if (timeBlocks[i].id.slice(5) < currentHour) {
            $(timeBlocks[i]).addClass('past');
        } else if (timeBlocks[i].id.slice(5) == currentHour) {
            $(timeBlocks[i]).addClass('present');
        } else if (timeBlocks[i].id.slice(5) > currentHour) {
            // console.log(timeBlocks[i].id.slice(5))
            // console.log(this)
            $(timeBlocks[i]).addClass('future');
        }
}}
    
$(".button").on('click', function() {
    var clickedBtnStr = $(this).parent().attr('id');
    var clickedBtnNum = clickedBtnStr.slice(5);
    localStorage.setItem("hour-" + clickedBtnNum, $(this).siblings('textarea').val())
    // console.log($(this).siblings('textarea').val())
    // alert(clickedBtnNum);
});

//function to retrieve the string value saved in localStorage and auto show it
showSavedText()
function showSavedText () {
    for (let i = 0; i < textBlocks.length; i++) {
        localStorage.getItem(timeBlocks[i].id)
        console.log(localStorage.getItem(timeBlocks[i].id))
        $(textBlocks[i]).text(localStorage.getItem(timeBlocks[i].id))
    }
}