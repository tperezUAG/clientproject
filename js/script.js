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
            console.log();
            $("#window").html("");
            $("#window").append("<p>Date: " + response.list[12].dt_txt + "</p>");
            $("#window").append("<p> The weather will be \"" + response.list[12].weather[0].main + "\"</p>");
            $("#window").append("<p> It is described as \"" + response.list[12].weather[0].description + "\"</p>");
            makeForecast(convertKelvin(response.list[12].main.temp));
        },
        error: function(a,b,c) {
            $("#window").html("<p>Error 404. Location not found.</p>");
            
        },
    });
}


function convertKelvin(k) {
    return Math.floor((k * (9 / 5)) - 459.67);
}

function makeForecast(weatherInfo) {
    $("#window").append("<p>The temperature will be " + String(weatherInfo) + " degrees Fahrenheit.</p>");
}


// call out functions //
$(document).ready(function() {
    $("#submit").click(function() {
        var one = $("#input1").val();
        var two = $("#input2").val();
        callLocationByName(one, two);
    });
});

