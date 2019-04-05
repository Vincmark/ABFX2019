<?php

$cssPath='views/css/';
$imgPath='views/img/';
$pageTitle='ABFX';
$uri = $_SERVER['REQUEST_URI'];
$host = $_SERVER['HTTP_HOST'];
if ($uri == '/user') {
echo 'GOOD request: ' . $uri;
echo '<pre>';
print_r(get_defined_vars());
echo '</pre>';
} else if ($uri == '/home') {
    require("views/home.php");
} else if ($uri == '/login') {
require("controllers/login.php");
} else {
echo "404";
}