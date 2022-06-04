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

// console.log(typeof timeBlocks)

// $(timeBlocks).addClass('.past')

colorBlock()


function colorBlock() {
    
    // for (let i = 0; i < hourArray.length; i++) {
    //     const hourObj = hourArray[i];
    
    // }
    hourArray = $(timeBlocks).attr('id')
    console.log(hourArray)
    $(timeBlocks).removeClass('past', 'present', 'future')

if (hourNine < currentHour) {
    // $(timeBlocks).removeClass('present');
    // $(timeBlocks).removeClass('future');
    $(timeBlocks).addClass('past');

} else if (hourNine == currentHour) {
    // $(timeBlocks).removeClass('future');
    // $(timeBlocks).removeClass('past');
    $(timeBlocks).addClass('present')

} else if (hourNine > currentHour) {
    // $(timeBlocks).removeClass('present');
    // $(timeBlocks).removeClass('past');
    $(timeBlocks).addClass('future');
}
}
console.log(hourNine.parentNode)

$(".button").on('click', function() {
    alert($(this).parent().attr('id'));
});

// function saveHourText() {
    
// }