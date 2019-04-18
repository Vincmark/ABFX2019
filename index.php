<?php
    require ('config.php');
    require ('data.php');
    require ('functions.php');

    prepareUrl($uri, $uriParts);
    $currentController = getController($uriParts);


    require("controllers/"."$currentController");
    require("views/"."$currentView");
