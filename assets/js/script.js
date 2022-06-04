var today = moment();
var jumboDate = $('#currentDay')
var currentHour = today.format('H');
var hourNine = $('#hour-9')
var hourTen = $('#hour-10')
var hourEleven = $('#hour-11')
var hourTwelve = $('#hour-12')
var hourThirteen = $('#hour-13')
var hourFourteen = $('#hour-14')
var hourFifteen = $('#hour-15')
var hourSixteen = $('#hour-16')
var hourSeventeen = $('#hour-17')
var timeBlocks = $(".time-block")
// var = getElementByClassName('')

$(jumboDate).text(today.format('MMMM, Do YYYY, h:mm a'));

// $(hourNine).on('click', saveHourText)

console.log(currentHour)
console.log(hourNine)
// console.log($(".time-block").attr('id'))
console.log(hourNine < currentHour)
console.log(hourNine == currentHour)
console.log(hourNine > currentHour)
// console.log(timeBlocks[1].id.slice(5))

// console.log(typeof timeBlocks)

// $(timeBlocks).addClass('.past')

colorBlock()

// hourArray = $(timeBlocks).attr('id')
// console.log(hourArray)

function colorBlock() {
    $(timeBlocks).removeClass('past', 'present', 'future')
    for (let i = 0; i < timeBlocks.length; i++) {
        // console.log(timeBlocks[i].id.slice(5))
        // var timeBlocksArray = timeBlocks[i].id.slice(5)
        // console.log(timeBlocksArray)
        // console.log(currentHour)
        // timeBlocks[i]
        if (timeBlocks[i].id.slice(5) < currentHour) {
            $(timeBlocks[i]).removeClass('present');
            $(timeBlocks[i]).removeClass('future');
            $(timeBlocks[i]).addClass('past');
        } else if (timeBlocks[i].id.slice(5) == currentHour) {
            $(timeBlocks[i]).removeClass('future');
            $(timeBlocks[i]).removeClass('past');
            $(timeBlocks[i]).addClass('present');
        } else if (timeBlocks[i].id.slice(5) > currentHour) {
            console.log(timeBlocks[i].id.slice(5))
            // console.log(this)
            $(timeBlocks[i]).removeClass('present');
            $(timeBlocks[i]).removeClass('past');
            $(timeBlocks[i]).addClass('future');
        }
}}
    
$(".button").on('click', function() {
    var clickedBtnStr = $(this).parent().attr('id');
    var clickedBtnNum = clickedBtnStr.slice(5);
    alert(clickedBtnNum);
    // alert($(this).parent().attr('id').split(5));

});

// function saveHourText() {
    
// }