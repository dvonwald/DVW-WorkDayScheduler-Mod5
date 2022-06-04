var today = moment();
var jumboDate = ('#currentDay')
var currentHour = today.format('H');
var hourNine = ('#hour-9')
var hourTen = ('#hour-10')
var hourEleven = ('#hour-11')
var hourTwelve = ('#hour-12')
var hourThirteen = ('#hour-13')
var hourFourteen = ('#hour-14')
var hourFifteen = ('#hour-15')
var hourSixteen = ('#hour-16')
var hourSeventeen = ('#hour-17')
var timeBlocks = $(".time-block")
// var = getElementByClassName('')

$(jumboDate).text(today.format('MMMM, Do YYYY, h:mm a'));

$(hourNine).on('click', saveHourText)

console.log(currentHour)
console.log($(".time-block").attr('id'))

// $(timeBlocks).addClass('present')
colorBlock()

function colorBlock() {
if (hourNine < currentHour) {
    $(timeBlocks).addClass('past');
} else if (hourNine == currentHour) {
    $(timeBlocks).addclass('present')
} else (hourNine > currentHour) 
    $(timeBlocks).addClass('future')
}


function saveHourText() {
    console.log("Hour 9 Clicked")
}