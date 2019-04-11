var learnMoreButton = document.querySelector('.about__learn-more-button');
var showMoreButton = document.querySelector('.portfolio__show-more-button');
var sendRequestButton = document.querySelector('.request_form__send-request-button');

var popupCrossButton = document.querySelector('.request-popup__close-cross');
var popupCloseButton = document.querySelector('.request-popup__close-button');

var requestPopup = document.querySelector('.request-popup');
var overlay = document.querySelector('.overlay');

var nameInput = document.getElementById("id-request-name");
var emailInput = document.getElementById("id-request-email");
var messageInput = document.getElementById("id-request-message");

var nameInputError = document.getElementById("id-request-name-error");
var emailInputError = document.getElementById("id-request-email-error");
var messageInputError = document.getElementById("id-request-message-error");

var popupHeader = document.getElementById("id-request-popup-header");
var popupMessage = document.getElementById("id-request-popup-message");

if (nameInput!==null) {
    nameInput.addEventListener('focus', function (evt) {
        evt.preventDefault();
        nameInputError.innerHTML="&nbsp";
        nameInput.classList.remove("request_form__edit_error");
    });
}
if (emailInput!==null) {
    emailInput.addEventListener('focus', function (evt) {
        evt.preventDefault();
        emailInputError.innerHTML="&nbsp";
        emailInput.classList.remove("request_form__edit_error");
    });
}

if (messageInput!==null) {
    messageInput.addEventListener('focus', function (evt) {
        evt.preventDefault();
        messageInputError.innerHTML="&nbsp";
        messageInput.classList.remove("request_form__textarea_error");
    });
}

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
        var name = document.getElementById("id-request-name").value;
        var email = document.getElementById("id-request-email").value;
        var message = document.getElementById("id-request-message").value;
        name=name.trim();
        email=email.trim();
        email=email.toLowerCase();
        message=message.trim();

        var error=false;

        // Validating name
        if (name.length === 0){
            error=true;
            nameInputError.innerHTML="Name is required";
            nameInput.classList.add("request_form__edit_error");
        }
        if (name.length === 1){
            error=true;
            nameInputError.innerHTML="Name should be at least 2 characters";
            nameInput.classList.add("request_form__edit_error");
        }

        // Validating email
        if (email.length === 0){
            error=true;
            emailInputError.innerHTML="Email is required";
            emailInput.classList.add("request_form__edit_error");
        } else if (!isEmail(email)){
            error=true;
            emailInputError.innerHTML="Email is not valid";
            emailInput.classList.add("request_form__edit_error");
        }

        // Validating message
        if (message.length === 0){
            error=true;
            messageInputError.innerHTML="Message is required";
            messageInput.classList.add("request_form__textarea_error");
        }

        if (error === true)
            return;
        sendRequest("name="+name+"&email="+email+"&message="+message);
    });
}

function isEmail(email){
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    return re.test(email);
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

function sendRequest(params){
    var request = new XMLHttpRequest();
    if (!request) {
        return false;
    }
    request.onreadystatechange = function() {requestState(request);}
    request.open("post","contact-request",true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(params);
}

function requestState(r) {
    console.log(r.readyState);
    if (r.readyState === 4) {
        if (r.status === 200) {
            console.log(r.responseText);
            if(r.responseText === "OK"){
                overlay.classList.add("show");
                popupHeader.innerHTML="Thank you!";
                popupMessage.innerHTML="Your request will be processed soon.";
                requestPopup.classList.add("request-popup_show");
            }
        } else {
            alert('С запросом возникла проблема.');
        }
    }
}