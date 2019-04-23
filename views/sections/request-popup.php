<section class="request-form-popup" id="id-request-form-popup">
    <div class="request-form-popup__overlay">
        <div class="request-form-popup__overlay-wrapper">
            <div class="request-form-popup__content-wrapper">
                <div class="request-form-popup__X3">
                    <div class="request-form-popup__content">
                        <button class="request-form-popup__close-cross" id="id-request-form-popup__close-cross"></button>
                        <h2 class="request__header header2">Contact us</h2>
                        <p class="request__text">Send us a question or a description of your idea and we will prepare an individual offer for you.</p>
                        <form class="request_form" action="/" method="post" name="request-form" id="id-request-form">
                            <div class="">
                                <label class="request_form__edit-title" for="id-request-name">Your Name</label>
                                <input class="request_form__edit" type="text" value="" name="name" id="id-request-name">
                                <p class="request_form__edit-error-text" id="id-request-name-error">&nbsp;</p>
                            </div>
                            <div class="">
                                <label class="request_form__edit-title" for="id-request-email">Your Email</label>
                                <input class="request_form__edit" type="text" value="" name="email" id="id-request-email">
                                <p class="request_form__edit-error-text" id="id-request-email-error">&nbsp;</p>
                            </div>
                            <div class="">
                                <label class="request_form__edit-title" for="id-request-message">Message</label>
                                <textarea class="request_form__textarea" rows="10" name="comment" form="request-form" id="id-request-message"></textarea>
                                <p class="request_form__textarea-error-text" id="id-request-message-error">&nbsp;</p>
                            </div>
                            <button class="request_form__send-request-button button-solid" id="id-send-request-button-popup" type="submit">Send Request</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
