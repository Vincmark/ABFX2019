<?php

$cssPath='views/css/';
$jsPath='views/js/';
$imgPath='views/img/';
$uri = $_SERVER['REQUEST_URI'];
$host = $_SERVER['HTTP_HOST'];
$innerPage = true;
$breadCrumbs = [
    [   'title' => 'Home',
        'url' => '/',
        'type' => 'link']
];

if ($uri == '/user') {
echo 'GOOD request: ' . $uri;
echo '<pre>';
print_r(get_defined_vars());
echo '</pre>';
} else if ($uri == '/') {
    $pageTitle='ABFX';
    $innerPage = false;
    $pageDescription='';
    require("views/home.php");
} else if ($uri == '/privacy-policy') {
    $pageTitle='Privacy policy — ABFX';
    $pageDescription='';
    $breadCrumbs[] = ['title' => 'Privacy policy', 'url' => '', 'type' => 'last'];
    require("views/privacy_policy.php");
} else if ($uri == '/terms-of-use') {
    $pageTitle='Terms of use — ABFX';
    $pageDescription='';
    $breadCrumbs[] = ['title' => 'Terms of use', 'url' => '', 'type' => 'last'];
    require("views/terms_of_use.php");
} else if ($uri == '/contact-request') {
    require("views/contact-request.php");
} else {
//    header("HTTP/1.0 404 Not Found");
    http_response_code(404);
    require("views/404.php");
    die;
}