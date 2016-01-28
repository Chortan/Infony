<!doctype html>

<html>
    <head lang="en">
        <title>Infony</title>
        <script src="/view/scripts/jquery.js"></script>
        <meta charset="utf-8"/>
        <script src="/view/scripts/component/time.js"></script>
        <script src="/view/scripts/component/weather.js"></script>
        <script src="/view/scripts/annimation.js"></script>
        
        <link rel="stylesheet" href="/view/style/main.css"/>
        <link rel="stylesheet" href="/view/style/data.css"/>
        <link rel="stylesheet" href="/view/scripts/bootstrap/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/view/scripts/bootstrap/css/bootstrap-theme.min.css">
    </head>

    <body>
        <input type="hidden" name="day" value="1"/>
        <div id="load"><img src="/view/ressources/image/load.gif"/><p>Chargement ...</p></div>
        
        <div id="time">
            <p id="hours"></p>
            <p id="date"></p>
        </div>
        <div id="weather">
            <p id="min"><span id="unity">°C</span></p>
            <p id="max"><span id="unity">°C</span></p>
            <p id="city"></p>
        </div>        
        
        <p id="meteo"></p>
        
        
    </body>
</html>