<?php
function prepareUrl($uri) {
    $s = trim($uri,"/");
    $urlParts = explode('/',$s);
    return $
}

function Router(){
//    if ($uri == '/') {
//        require("views/home.php");
//    } else if ($uri == '/privacy-policy') {
//        require("views/privacy_policy.php");
//    } else if ($uri == '/terms-of-use') {
//        require("views/terms_of_use.php");
//    } else if ($uri == '/contact-request') {
//        require("views/api/contact-request.php");
//    } else if ($uri == '/portfolio') {
//        require("views/api/contact-request.php");
//    } else {

}

function throw404(){
    http_response_code(404);
    require("views/404.php");
    die;
}
