<?php
    require ('config.php');
    require ('data.php');
    require ('functions.php');

    prepareUrl($uri, $uriParts);
    $currentController = getController($uriParts);


    require("controllers/"."$currentController");
//    echo "<pre>";
//    var_dump($uriParts);
//    var_dump($currentController);
//    var_dump($currentView);
//    echo "<pre>";
//    echo $hey;

    require("views/"."$currentView");
