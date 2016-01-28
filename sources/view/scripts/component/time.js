/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var hours = null;
var date = null;

var day = true;
var backgroundDay = "/view/ressources/image/background/sky.png";
var backgroundNight = "/view/ressources/image/background/sky_night.png";


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

var setTime = function(){
    if(hours != null){
        $("p#hours").html(hours);
    }
    
    if(parseInt(hours.match("^[0-9]+")) < 7 || parseInt(hours.match("^[0-9]+")) > 17){
        $("body").css("background-image","url('"+ backgroundNight +"')");
        day = false;
        $("input[name=day]").val("1");
    }else{
        $("body").css("background-image","url('"+ backgroundDay +"')");
        day = true;
        $("input[name=day]").val("0");
    }
    
    if(date != null){
        $("p#date").html(date);
    }
}

var autoRefreshTime = function(){
    getTime();
    setTime();
    var refresh = setTimeout(function(){
        autoRefreshTime();
    },1000);
}

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

var isDay = function(){
    if($("input[name=day]").val()=="1"){
        return false;
    }else{
        return true;
    }   
}