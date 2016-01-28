<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

if(isset($_GET["city"]) AND isset($_GET["postalCode"])){
    $city = $_GET["city"];
    $postalCode = $_GET["postalCode"];
    
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => "http://www.meteofrance.com/previsions-meteo-france/" . $city . "/" . $postalCode
    ));
    $result = curl_exec($curl);
    echo($result);
}