var tempMin = null;
var tempMax = null;
var hours = null;
var meteo = null;
var date = null;

var load = true;


var format00 = function(number){
    if(number < 10){
        return "0"+number;
    }else{
        return number;
    }
} 

var getTime = function(){
    var dateDate = new Date(); 
    hours = format00(dateDate.getHours()) + ":" + format00(dateDate.getMinutes());       
    date = getTextDay(dateDate.getUTCDay()) + ", le " + dateDate.getUTCDate() + " " + getTextMouth(dateDate.getUTCMonth()) + " " + dateDate.getUTCFullYear();
}

var getDate = function(){
    
}

var getWeather = function(city, postalCode){
    var meteoURL = "/controller/meteo/get.php";
    $.ajax({
        type:"GET", 
        url:meteoURL,
        data: "city=" + city + "&postalCode=" + postalCode,
        dataType: "text",
        success: function(data){
            var html = $(data);
            var today = html.find(".bloc-day-summary.active"); 
                
            tempMin = today.find(".min-temp").html().match("^[0-9\-]+");
            tempMax = today.find(".max-temp").html().match("^[0-9\-]+");
            meteo = today.find(".day-summary-image").html();
            
            setMeteo();
            setTemperature();
            if(load==true){
                $("div#load").fadeOut(2000);
            }
        },
        error: function(result, status, xhr){
            alert("Unable to connect to "+meteoURL);
            getWeather();
        }

    });
}

var setTime = function(){
    if(hours != null){
        $("p#hours").html(hours);
    }
    
    if(date != null){
        $("p#date").html(date);
    }
}

var setMeteo = function(){
    if(meteo != null){
        $("p#meteo").html(meteo);
    }
}

var setTemperature = function(){
    if(tempMin != null){
        $("div#wheather p#min").html(tempMin + "<span id='unity'>°C</span>");
    }
    
    if(tempMax != null){
        $("div#wheather p#max").html(tempMax + "<span id='unity'>°C</span>");
    }
}

var autoRefreshTime = function(){
    getTime();
    setTime();
    var refresh = setTimeout(function(){
        autoRefreshTime();
    },1000);
}

var autoRefreshWheather = function(city,postalCode){
    getWeather(city, postalCode);
    setTemperature();
    var refresh = setTimeout(function(){
        autoRefreshWheather();
    },60000);
}

$(document).ready(function(){
    autoRefreshTime();
    autoRefreshWheather("artolsheim","67390");
});



var getTextDay = function(numberDay){
    switch(numberDay) {
    case 0:
        return "Lundi"; break;
    case 1:
        return "Mardi"; break;
    case 2:
        return "Mercredi"; break;
    case 3:
        return "Jeudi"; break;
    case 4:
        return "Vendredi"; break;
    case 5:
        return "Samedi"; break;
    case 6:
        return "Dimanche"; break;
    default: return "?";
    }    
}

var getTextMouth = function(numberMounth){
    switch(numberMounth) {
    case 0:
        return "Janvier"; break;
    case 1:
        return "Fevrier"; break;
    case 2:
        return "Mars"; break;
    case 3:
        return "Avril"; break;
    case 4:
        return "Mai"; break;
    case 5:
        return "Juin"; break;
    case 6:
        return "Juillet"; break;
    case 7:
        return "Aout"; break;
    case 8:
        return "Septembre"; break;
    case 9:
        return "Octobre"; break;
    case 10:
        return "Novembre"; break;
    case 11:
        return "Décembre"; break;
        
    default: return "?";
    }    
}