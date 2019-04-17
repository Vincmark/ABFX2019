<?php

$cssPath = 'http://'.$_SERVER['HTTP_HOST'].'/views/css/';
$jsPath = 'http://'.$_SERVER['HTTP_HOST'].'/views/js/';
$imgPath = 'http://'.$_SERVER['HTTP_HOST'].'/views/img/';
$uri = $_SERVER['REQUEST_URI'];
$host = $_SERVER['HTTP_HOST'];
$innerPage = true;
//$arr = get_defined_vars();
//echo "<pre>";
//print_r($arr);
//echo "</pre>";


echo "<pre>";
print_r($uri);
echo "</pre>";

$s = trim($uri,"/");

echo "<pre>";
print_r($s);
echo "</pre>";


$urlParts = explode('/',$s);
echo "<pre>";
print_r($urlParts);
echo "</pre>";


$breadCrumbs = [
    [   'title' => 'Home',
        'url' => '/',
        'type' => 'link']
];

$portfolioList = [
    ['id' => '1',
    'url' => 'monfex-trade-platform',
    'pageTitle' => 'Monfex Trade Platform — ABFX',
    'pageDescription' => 'Monfex Trade Platform design made by ABFX web development company.',
    'section' => 'p1.php']
];

if ($uri == '/user') {

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
    require("views/api/contact-request.php");
} else if ($uri == '/portfolio') {
    require("views/api/contact-request.php");
} else {
    http_response_code(404);
    require("views/404.php");
    die;
}