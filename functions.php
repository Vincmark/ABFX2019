<?php
    function prepareUrl($uri, &$uriParts) {

        $s = trim($uri,"/");
        $uriParts = explode('/',$s);
    }

    function getController($uriParts){
        $controller = '';

        if (($uriParts[0] === '')&&(count($uriParts) === 1)){
            $controller = 'home-controller.php';
        } elseif (($uriParts[0] === 'terms-of-use')&&(count($uriParts) === 1)) {
            $controller = 'terms-of-use-controller.php';
        }
        elseif (($uriParts[0] === 'privacy-policy')&&(count($uriParts) === 1)) {
            $controller = 'privacy-policy-controller.php';
        }
        elseif (($uriParts[0] === 'portfolio')&&(count($uriParts) === 2)) {
            $controller = 'portfolio-controller.php';
        }
        return $controller;
    }

