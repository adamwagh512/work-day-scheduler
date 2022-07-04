var today = moment();
var scheduleTime = $('.hour');

$("#currentDay").text(today.format('MMMM Do YYYY'))

var currentTime = moment().hour()
console.log(currentTime)

console.log(scheduleTime[0])
let result = scheduleTime[0].slice(0,1);

// if scheduleTime > currentTime {
//     .addclass('future');
// }else if scheduleTime == currentTime {
//     .addclass('present')
// }else {
//     .addclass('future')
// }

$(".hour").each(function () {
    console.log(this)})