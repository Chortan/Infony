/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var tempMin = null;
var tempMax = null;
var meteo = null;
var date = null;
var load = true;


var getWeather = function(city, postalCode){
    var meteoURL = "/controller/meteo/get.php";
    $.ajax({
        type:"GET", 
        url:meteoURL,
        data: "city=" + city + "&postalCode=" + postalCode,
        dataType: "text",
        success: function(data){
            if(data == ""){
                setTimeout(function(){
                  getWeather(city, postalCode);  
                },10000);                
            }else{
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
            }
            
        },
        error: function(result, status, xhr){
            getWeather(city,postalCode);
        }

    });
}

var setMeteo = function(){
    if(meteo != null){
        $("p#meteo").html(meteo);
    }
}

var setTemperature = function(){
    if(tempMin != null){
        $("div#weather p#min").html(tempMin + "<span id='unity'>°C</span>");
    }
    
    if(tempMax != null){
        $("div#weather p#max").html(tempMax + "<span id='unity'>°C</span>");
    }
}

var autoRefreshWeather = function(city,postalCode){
    getWeather(city, postalCode);
    setTemperature();
    var refresh = setTimeout(function(){
        autoRefreshWeather();
    },60000);
}

var isDay = function(){
    if($("input[name=day]").val()=="1"){
        return false;
    }else{
        return true;
    }   
}

var getNumberWeather = function(string){
    switch(string){
        case "Ensoleillé":
            return 0; break;
        case "Nuageux":
            return 1; break;
        case "Très nuageux":
            return 2; break;
        case "Pluies éparses":
            return 3; break;
        default:
            return -1;
    }
}