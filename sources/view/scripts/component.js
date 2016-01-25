var tempMin = null;
var tempMax = null;
var hours = null;

var format00 = function(number){
    if(number < 10){
        return "0"+number;
    }else{
        return number;
    }
} 

var getHours = function(){
    var hoursDate = new Date();
    hours = format00(hoursDate.getHours()) + ":" + format00(hoursDate.getMinutes());
}

var getMeteo = function(city, postalCode){
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
            
            setMeteo();
        },
        error: function(result, status, xhr){
            alert("Unable to connect to "+meteoURL);
        }

    });
}

var getAllData = function(){
    getHours();
    getMeteo("artolsheim","67390");
}

var setHours = function(){
    if(hours != null){
        $("p#hours").html(hours);
    }
}

var setMeteo = function(){
    if(tempMin != null){
        $("div#meteo p#min").html(tempMin);
    }
    
    if(tempMax != null){
        $("div#meteo p#max").html(tempMax);
    }
}

var autoRefreshHours = function(city,postalCode){
    getMeteo(city, postalCode);
    setHours();
    var refresh = setTimeout(function(){
        setData();
    },1000);
}

var autoRefreshMeteo = function(){
    getMeteo();
    setMeteo();
    var refresh = setTimeout(function(){
        setMeteo();
    },60000);
}

$(document).ready(function(){
    getAllData();
    autoRefreshHours();
    autoRefreshMeteo("artolsheim","67390");
});