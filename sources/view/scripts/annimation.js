/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var cloud = $("<img id='cloud' src='/view/ressources/image/background/cloud.png'/>");
var sun = $("<img id='sun' src='/view/ressources/image/background/sun.png'/>");
var upDown = true

var moveCloudLeft = function(){
    if(parseInt(cloud.css("margin-left").match("[0-9]+")) > parseInt($(document).width())){
        cloud.css("margin-left","-300px");
    }
    cloud.animate({
        "margin-left": "+=10"
        
    }, 100,"linear", function() {
        moveCloudLeft();
    });
}

$(document).ready(function(){
    $("body").children().first().before(cloud);
    $("body").children().first().before(sun);
    cloud.css("up","0px");
    
    moveCloudLeft();
    
});