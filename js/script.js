/* global $ */
// Java script linked to index.html (working) //


// functions
function createUrl(inputOne,inputTwo){
    //if (inputOne === "")
}

function callLocationByName(input1,input2) {
    // input one is city name and input 2 is country code. *IMPORTANT*
    var weatherAPI = "api.openweathermap.org/data/2.5/weather?q=" + input1 + "," + input2 + "&APPID=ecd07628b63a19fb3ddd1e660cbefa8f";
    // API search link is provided in weatherAPI variable. 
    $.ajax({
        url: weatherAPI,
        method: "GET",
        success: function(response) {
            
        },
    });
}


// call out functions //
$(document).ready(function(){
    //calllocationbyname(Chicago, us);

    
});