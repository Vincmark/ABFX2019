<?php

$currentPortfolioSection = '';

foreach ($portfolioList as $portfolio) {
    if ($portfolio['uri'] === $uriParts[1]){
        $pageTitle = $portfolio['pageTitle'];
        $pageDescription = $portfolio['pageDescription'];
        $currentView = 'portfolio.php';
        $currentPortfolioSection = $portfolio['section'];
        $breadCrumbs[] = ['title' => $portfolio['title'], 'url' => '', 'type' => 'last'];
    }
}

if ($currentPortfolioSection === ''){
    $currentController = '404-controller.php';
    require ('404-controller.php');
}