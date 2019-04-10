var learnMoreButton = document.querySelector('.about__learn-more-button');
var showMoreButton = document.querySelector('.portfolio__show-more-button');
var sendRequestButton = document.querySelector('.request_form__send-request-button');

var popupCrossButton = document.querySelector('.request-popup__close-cross');
var popupCloseButton = document.querySelector('.request-popup__close-button');

var requestPopup = document.querySelector('.request-popup');
var overlay = document.querySelector('.overlay');

if (learnMoreButton!==null) {
    learnMoreButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        console.log("Learn More Button");
    });
}

if (showMoreButton!==null) {
    showMoreButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        console.log("Show More Button");
    });
}

if (sendRequestButton!==null) {
    sendRequestButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        requestPopup.classList.add("request-popup_show");
        overlay.classList.add("show");
        console.log("Send Request Button");
    });
}

if (popupCrossButton!==null) {
    popupCrossButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        requestPopup.classList.remove("request-popup_show");
        overlay.classList.remove("show");
        console.log("Popup Cross Button");
    });
}

if (popupCloseButton!==null) {
    popupCloseButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        requestPopup.classList.remove("request-popup_show");
        overlay.classList.remove("show");
        console.log("Popup Close Button");
    });
}

