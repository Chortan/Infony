var format00 = function(number){
	if(number < 10){
		return "0"+number;
	}else{
		return number;
	}
} 

var displayDate = function(){
	var date = new Date();
	
	$("p#hours").html(format00(date.getHours())+":"+format00(date.getMinutes()));
}

var getMeteo = function(city, postalcode){
	var urlMeteoFrance = "http://www.meteofrance.com/previsions-meteo-france/" + city + "/" + postalcode;
	$.ajax({
		type:"GET", 
		url:urlMeteoFrance,
		dataType: "text",
		success: function(html){
			alert(html);
		},
		error: function(result, status, xhr){
			alert("Unable to connect to "+urlMeteoFrance);
		}
	
	});
}

$(document).ready(function(){
	displayDate();
	getMeteo("artolsheim","67390");
});