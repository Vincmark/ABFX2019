// --------------------------------------------------------
// Header
// --------------------------------------------------------
var headerRequestButton = document.getElementById("id-small-header-button");


// --------------------------------------------------------
// Footer
// --------------------------------------------------------
var footerRequestButton = document.getElementById("id-footer-upper__send-message-button");

// --------------------------------------------------------
// Common
// --------------------------------------------------------
var toTopButton = document.getElementById("id-to-top-button");

// --------------------------------------------------------
// Home About
// --------------------------------------------------------

var learnMoreButton = document.querySelector('.about__learn-more-button');

// --------------------------------------------------------
// Home Portfolio
// --------------------------------------------------------
var showMoreButton = document.querySelector('.portfolio__show-more-button');

// --------------------------------------------------------
// Request form
// --------------------------------------------------------
var nameInput = document.getElementById("id-request-name");
var emailInput = document.getElementById("id-request-email");
var messageInput = document.getElementById("id-request-message");

var nameInputValue;
var emailInputValue;
var messageInputValue;


var nameInputError = document.getElementById("id-request-name-error");
var emailInputError = document.getElementById("id-request-email-error");
var messageInputError = document.getElementById("id-request-message-error");

var sendRequestButton = document.getElementById('id-send-request-button');
var sendRequestButtonPopup = document.getElementById('id-send-request-button-popup');
//
var requestFormPopup = document.getElementById("id-request-form-popup");
var requestFormPopupCloseCross = document.getElementById("id-request-form-popup__close-cross");


// --------------------------------------------------------
// Message popup
// --------------------------------------------------------
var popupCrossButton = document.querySelector('.message-popup__close-cross');
var popupCloseButton = document.querySelector('.message-popup__close-button');
var messagePopup = document.querySelector('.message-popup');
var popupHeader = document.getElementById("id-message-popup-header");
var popupMessage = document.getElementById("id-message-popup-message");

// --------------------------------------------------------
// Spinner popup
// --------------------------------------------------------
var spinnerPopup = document.getElementById("id-spinner-popup");

// --------------------------------------------------------
// To Top Button
// --------------------------------------------------------
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        if (toTopButton!==null) {
            toTopButton.style.display = "block";
        }

    } else {
        if (toTopButton!==null) {
            toTopButton.style.display = "none";
        }
    }
}

if (toTopButton!==null) {
    toTopButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
}
// --------------------------------------------------------



// --------------------------------------------------------
// Request
// --------------------------------------------------------

// Show Request Popup Form from Header
if (headerRequestButton!==null) {
    headerRequestButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        showRequestPopupForm();
    });
}

// Show Request Popup Form from Footer
if (footerRequestButton!==null) {
    footerRequestButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        showRequestPopupForm();
    });
}

// Close Request Popup Form by Cross
if (requestFormPopupCloseCross!==null) {
    requestFormPopupCloseCross.addEventListener('click', function (evt) {
        evt.preventDefault();
        hideRequestPopupForm();
    });
}

// Send Request Button push
if (sendRequestButton!==null) {
    sendRequestButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        showSpinnerPopup();
        // if (validateRequestForm()){
        //     sendRequestToServer("name="+nameInputValue+"&email="+emailInputValue+"&message="+messageInputValue);
        // }
    });
}

// Send Request Button Popup push
if (sendRequestButtonPopup!==null) {
    sendRequestButtonPopup.addEventListener('click', function (evt) {
        evt.preventDefault();
        showSpinnerPopup();
        // if (validateRequestForm()){
        //     sendRequestToServer("name="+nameInputValue+"&email="+emailInputValue+"&message="+messageInputValue);
        // }
    });
}

// Show Request Popup Form
function showRequestPopupForm() {
    requestFormPopup.classList.add("show");
}

// Hide Request Popup Form
function hideRequestPopupForm() {
    requestFormPopup.classList.remove("show");
}

// Show Input Error
function showInputError(message){
    nameInputError.innerHTML=message;
    nameInput.classList.add("request_form__edit_error");
}

// Hide Input Error by focus
if (nameInput!==null) {
    nameInput.addEventListener('focus', function (evt) {
        evt.preventDefault();
        nameInputError.innerHTML="&nbsp";
        nameInput.classList.remove("request_form__edit_error");
    });
}

// Show Email Error
function showEmailError(message){
    emailInputError.innerHTML=message;
    emailInput.classList.add("request_form__edit_error");
}

// Hide Email Error
if (emailInput!==null) {
    emailInput.addEventListener('focus', function (evt) {
        evt.preventDefault();
        emailInputError.innerHTML="&nbsp";
        emailInput.classList.remove("request_form__edit_error");
    });
}

// Show Message Error
function showMessageError(message){
    messageInputError.innerHTML=message;
    messageInput.classList.add("request_form__textarea_error");
}

// Hide Message Error
if (messageInput!==null) {
    messageInput.addEventListener('focus', function (evt) {
        evt.preventDefault();
        messageInputError.innerHTML="&nbsp";
        messageInput.classList.remove("request_form__textarea_error");
    });
}

// Validate Request Form
function validateRequestForm(){
    nameInputValue = nameInput.value;
    emailInputValue = emailInput.value;;
    messageInputValue = messageInput.value;;

    nameInputValue = nameInputValue.trim();
    emailInputValue = emailInputValue.trim();
    emailInputValue = emailInputValue.toLowerCase();
    messageInputValue = messageInputValue.trim();

    var isValid=true;

    // Validating name
    if (nameInputValue.length === 0){
        isValid=false;
        showInputError("Name is required");
    }
    if (nameInputValue.length === 1){
        isValid=false;
        showInputError("Name should be at least 2 characters");
    }

    // Validating email
    if (emailInputValue.length === 0){
        isValid=false;
        showEmailError("Email is required");
    } else if (!isEmail(emailInputValue)){
        isValid=false;
        showEmailError("Email is not valid");
    }

    // Validating message
    if (messageInputValue.length === 0){
        isValid=false;
        showMessageError("Message is required");
    }

    return isValid;
}

// Check string for Email format
function isEmail(email){
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    return re.test(email);
}

// Send Request To Server
function sendRequestToServer(params){
    var request = new XMLHttpRequest();
    if (!request) {
        return false;
    }
    request.onreadystatechange = function() {requestState(request);}
    request.open("post","contact-request",true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(params);
}

// Callback for AJAX
function requestState(r) {
    console.log(r.readyState);
    if (r.readyState === 4) {
        if (r.status === 200) {
            console.log(r.responseText);
            if(r.responseText === "OK"){
                showMessage("Thank you!", "Your request will be processed soon. Your request will be processed soon. Your request will be processed soon.");
            }
        } else {
            alert('С запросом возникла проблема.');
        }
    }
}


// --------------------------------------------------------
// Portfolio
// --------------------------------------------------------



// --------------------------------------------------------
// Message
// --------------------------------------------------------

// Show Message
function showMessage(header, message){
    popupHeader.innerHTML=header;
    popupMessage.innerHTML=message;
    messagePopup.classList.add("message-popup_show");
}

// Hide Message by Cross Button
if (popupCrossButton!==null) {
    popupCrossButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        messagePopup.classList.remove("message-popup_show");
        console.log("Popup Cross Button");
    });
}

// Hide Message by Close Button
if (popupCloseButton!==null) {
    popupCloseButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        messagePopup.classList.remove("message-popup_show");
        console.log("Popup Close Button");
    });
}

// --------------------------------------------------------
// Spinner
// --------------------------------------------------------
// // Show Spinner
// if (spinnerPopup!==null) {
//     spinnerPopup.addEventListener('click', function (evt) {
//         evt.preventDefault();
//         showRequestPopupForm();
//     });
// }
//
// // Hide Spinner
// if (requestFormPopupCloseCross!==null) {
//     requestFormPopupCloseCross.addEventListener('click', function (evt) {
//         evt.preventDefault();
//         hideRequestPopupForm();
//     });
// }

// Show Request Popup Form
function showSpinnerPopup() {
    spinnerPopup.classList.add("show");
}

// Hide Request Popup Form
function hideSpinnerPopup() {
    spinnerPopup.classList.remove("show");
}






// Show Request Popup Message
// Hide Request Popup Message
// Show Spinner
// Hide Spinner




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





