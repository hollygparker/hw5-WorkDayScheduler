// on page load, doc is ready 
$(document).ready(function () {
    // current time
    var time = moment().format("MMM Do, YYYY, hh:mm:ss");
    console.log(time)

    // current hour
    var hour = moment().format("hh");
    console.log(hour)

    // current day
    var day = moment().format("MMM Do, YYYY")
    console.log(day)


    // query selector for currentDay and updating UI with day format saved into day variable
    $("#currentDay").text(day);

    
    // When save button is clicked, a function runs that sets input to local storage 
    $(".saveBTN").on('click', function() {
        var text = $(this).attr('data-value')
        var input = $('#' + text).val()
        console.log("this is the input", input)
        console.log(text)
        localStorage.setItem("#" + text, input);

    });

    // array for time block ids 
     let timeArray = ["#9", "#10", "#11", "#12", "#1", "#2", "#3", "#4", "#5"]
    //  looping through time block ids
     for (let i = 0; i < timeArray.length; i++) {
        //  displays input to page after refresh, if input was entered
         if (localStorage.getItem(timeArray[i])) {
             $(timeArray[i]).val(localStorage.getItem(timeArray[i]))
         }
     }

    //  added for moment compatibility
     let momentTime = [9, 10, 11, 12, 13, 14, 15, 16, 17]

    // this checks for the current hour and applies color styling based on whether it is past, present, or future. 
     function color () {
        var hour = moment().hour();  
        for (let i = 0; i < timeArray.length; i++) {
            if (momentTime[i] === hour) {
                $(timeArray[i]).addClass("present")
            } else if (momentTime[i] >= hour) {
                $(timeArray[i]).addClass("future")
            } else {
                $(timeArray[i]).addClass("past")
            }
        }
     }

// invoking color function  
color()



})



