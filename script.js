

// COLOR WHEEL
// Grey -- past that time
// Red --- means its the current hour
// Green --- means its the future


// work day hours 9am -5pm

// * on page load, doc is ready 
$(document).ready(function () {
    // * current time
    var time = moment().format("MMM Do, YYYY, hh:mm:ss");
    console.log(time)

    // * current hour
    var hour = moment().format("hh");
    console.log(hour)

    // * current day
    var day = moment().format("MMM Do, YYYY")
    console.log(day)



    $("#currentDay").text(day);
})



