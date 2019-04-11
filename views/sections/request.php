<section class="request" id="id_request">
    <div class="request-wrapper">
        <h2 class="request__header header2">Contact us</h2>
        <p class="request__text">Send us a question or a description of your idea and we will prepare an individual offer for you.</p>
        <form class="request_form" action="index.html" method="post" name="request-form" id="id-request-form">
            <div class="">
                <label class="request_form__edit-title" for="id-request-name">Your Name</label>
                <input class="request_form__edit" type="text" value="11" name="name" id="id-request-name">
                <p class="request_form__edit-error-text" id="id-request-name-error">&nbsp;</p>
            </div>
            <div class="">
                <label class="request_form__edit-title" for="id-request-email">Your Email</label>
                <input class="request_form__edit" type="text" value="2@2.2" name="email" id="id-request-email">
                <p class="request_form__edit-error-text" id="id-request-email-error">&nbsp;</p>
            </div>
            <div class="">
                <label class="request_form__edit-title" for="id-request-message">Message</label>
                <textarea class="request_form__textarea" rows="10" name="comment" form="request-form" id="id-request-message">1@1.1</textarea>
                <p class="request_form__textarea-error-text" id="id-request-message-error">&nbsp;</p>
            </div>
            <button class="request_form__send-request-button button-solid" type="submit">Send Request</button>
        </form>
    </div>
</section>

<section class="request-popup">
    <div class="request-popup-wrapper">
        <button class="request-popup__close-cross"></button>
        <h2 class="request-popup__header" id="id-request-popup-header">Thank you!</h2>
        <p class="request-popup__message" id="id-request-popup-message">Request for implementation will be examined by the Company managers within 48 hours once the request is received.</p>
        <button class="request-popup__close-button button-transparent">Close</button>
    </div>
</section>