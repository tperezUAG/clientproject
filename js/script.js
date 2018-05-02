/* global $ */
// Java script linked to index.html (working) //


// functions
function createUrl(input1, input2) {
    //if (inputOne === "")
    return "https://api.openweathermap.org/data/2.5/forecast?q=" + input1 + "," + input2 + "&APPID=ecd07628b63a19fb3ddd1e660cbefa8f";
}

function callLocationByName(input1, input2) {
    // input one is city name and input 2 is country code. *IMPORTANT*
    var weatherAPI = createUrl(input1, input2);
    console.log(weatherAPI);
    // API search link is provided in weatherAPI variable. 
    $.ajax({
        url: weatherAPI,
        method: "GET",
        success: function(response) {
            /* temperature */
            console.log(convertKelvin(response.list[0].main.temp));
            makeForecast(convertKelvin(response.list[0].main.temp));
        },
    });
}

function convertKelvin(k) {
    return Math.floor((k * (9 / 5)) - 459.67);
}

function makeForecast(weatherInfo) {
    $("#window").html("<p>The temperature will be " + String(weatherInfo) + " degrees Fahrenheit.</p>");
}


// call out functions //
$(document).ready(function() {
    $("#submit").click(function() {
        var one = $("#input1").val();
        var two = $("#input2").val();
        callLocationByName(one,two);
    });
});
