<?php

$cssPath='views/css/';
$jsPath='views/js/';
$imgPath='views/img/';
$pageTitle='ABFX';
$uri = $_SERVER['REQUEST_URI'];
$host = $_SERVER['HTTP_HOST'];
$innerPage = true;
if ($uri == '/user') {
echo 'GOOD request: ' . $uri;
echo '<pre>';
print_r(get_defined_vars());
echo '</pre>';
} else if ($uri == '/') {
    $innerPage = false;
    require("views/home.php");
} else if ($uri == '/privacy-policy') {
    require("views/privacy_policy.php");
} else if ($uri == '/terms-of-use') {
    require("views/terms_of_use.php");
} else if ($uri == '/contact-request') {
    require("views/contact-request.php");
} else {
echo "404";
}