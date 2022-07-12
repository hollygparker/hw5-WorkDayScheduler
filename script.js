

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

    

    $(".saveBTN").on('click', function() {
        var text = $(this).attr('data-value')
        var input = $('#' + text).val()
        console.log("this is the input", input)
        console.log(text)
        localStorage.setItem("#" + text, input);

    });

     let timeArray = ["#9", "#10", "#11", "#12", "#1", "#2", "#3", "#4", "#5"]
     for (let i = 0; i < timeArray.length; i++) {
         if (localStorage.getItem(timeArray[i])) {
             $(timeArray[i]).val(localStorage.getItem(timeArray[i]))
         }
     }





})



