/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var astre = $("<img class='astre' id='sun' src='/view/ressources/image/background/sun.png'/>");

var upDown = true
var day=true;

var generateCloud = function(name){
    var newCloud = $("<img class='cloud' id='" + name + "' src='/view/ressources/image/background/cloud.png'/>");
    return newCloud;
}

var checkDayNight = function(date){
    if(date.getUTCHours() > 21 || date.getUTCHours() < 7){
        day = false;
    }else{
        day = true;
    }
}


var moveCloudLeft = function(name){
    var cloud = $("img.cloud#"+name);
    
    cloud.animate({
        "margin-left": "+=5"
        
    }, 100,"linear", function() {
        if(parseInt(cloud.css("margin-left").match("[0-9]+")) > parseInt($(document).width())){
            cloud.css("margin-left","-300px");
        }
        moveCloudLeft(name);
    });
}

var toogleAstre = function(name){
    $("img.astre").remove();
    astre = $("<img class='astre' id='" + name + "' src='/view/ressources/image/background/" + name + ".png'/>");
    $("body").children().before(astre);
}

$(document).ready(function(){
    autoRefreshTime();
    autoRefreshWeather("artolsheim","67390");
    checkDayNight(new Date());
    $("body").children().first().before(generateCloud("cloud1"));
    setTimeout(function(){
        $("body").children().first().before(generateCloud("cloud2"));
    },8000);
    setTimeout(function(){
        $("body").children().first().before(generateCloud("cloud3"));
    },16000);
    
    if(isDay()){
        toogleAstre("sun");
        $("div#time").removeClass("night");
        $("div#time").addClass("day");
    }else{
        toogleAstre("moon");
        $("body").children().first().before(moon);
        $("div#time").removeClass("day");
        $("div#time").addClass("night");
    }
    
    moveCloudLeft("cloud1");
    moveCloudLeft("cloud2");
    moveCloudLeft("cloud3");
});