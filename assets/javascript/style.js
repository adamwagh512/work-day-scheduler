//If we have no savedText, set it to an empty array
if (!savedText){
    var savedText = [];
}
//between the hours of 8 and 17 execute this function
for (let index = 8; index < 18; index++) {
    if (localStorage.getItem(`${index}`) != null){
        savedText[index - 8] = JSON.parse(localStorage.getItem(`${index}`))
    } else {
        savedText[index - 8] = ""
    }
    console.log(`Number ${index} ${savedText[index - 8]}`)
}

// var savedText = {}
// when document is ready, fire off the following function.
$(document).ready(function (){

// })
//finish var today format (look at class activities )
var today = moment().format('MMMM Do YYYY'); 
var scheduleTime = $('.hour');


// $("#currentDay").text(today.format('MMMM Do YYYY'))
$("#currentDay").append(today)

//sets the current time by hour
var currentTime = moment().hour();
//checking my work on the currentTime variable
console.log(currentTime);

//check the value of each block hour
$('.time-block').each(function () {
        var blockHour = ($(this).attr
        ('value'));
   //logs the block hours to make sure its functioning properly     
        console.log(blockHour);
    //conditional set of instruction to see if the time block is past, present or future
        //if current time < block hour the timeblock should be green
        if (currentTime < blockHour) {
            $(this).attr("style", "background: #77dd77");
        // if the current time is the same as the block hour the block should be red
        } else if (currentTime == blockHour) {
            $(this).attr("style", "background: #ff6961");
        //If neither of these other two conditions are met, it must be in the past, and should be gray
        } else {
            $(this).attr("style", "background: #d3d3d3");
        }
    })
}
)
//When a saved button is clicked, the following function will execute
$('.saveBtn').on('click',function () {
// console.log($(this).prev().val())
//grabs the attribute of data-time and assigns it to the timeBlock var
var timeBlock = this.getAttribute('data-time')
// we have an array of saved text, and the timeblock
console.log(`timeBlock : ${timeBlock}`)
console.log(`savedText : ${savedText}`)
savedText= $(this).prev().val()
console.log(savedText)
//grabs the saved text and saves it to local storage. it has to be a string to be saved to local storage so we stringify it here.
localStorage.setItem(`${timeBlock}`,JSON.stringify(savedText))
})

//Im sure I could make this a loop somehow, but this was the way I could get the code to work. I grabbed the ID hidden in each textarea and assigned it to the coresponding text string. Seems to work well!
var al = document.getElementById('1a')
al.textContent = `${savedText[0]}`

var bl = document.getElementById('1b')
bl.textContent = `${savedText[1]}`

var al = document.getElementById('1c')
al.textContent = `${savedText[2]}`

var al = document.getElementById('1d')
al.textContent = `${savedText[3]}`

var al = document.getElementById('1e')
al.textContent = `${savedText[4]}`

var al = document.getElementById('1f')
al.textContent = `${savedText[5]}`

var al = document.getElementById('1g')
al.textContent = `${savedText[6]}`

var al = document.getElementById('1h')
al.textContent = `${savedText[7]}`

var al = document.getElementById('1i')
al.textContent = `${savedText[8]}`

var al = document.getElementById('1j')
al.textContent = `${savedText[9]}`
