var today = moment();
var scheduleTime = '';
var descriptiontest = document.querySelector('description')

$("#currentDay").text(today.format('MMMM Do YYYY'))

var currentTime = moment().hour()
console.log(currentTime)

console.log(descriptiontest)
// if scheduleTime > currentTime {
//     .addclass('future');
// }else if scheduleTime == currentTime {
//     .addclass('present')
// }else {
//     .addclass('future')
// }
