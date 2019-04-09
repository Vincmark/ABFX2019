<section class="request">
    <div class="request-wrapper">
        <h2 class="request__header header2" id="id_request">Contact us</h2>
        <p class="request__text">Send us a question or a description of your idea and we will prepare an individual offer for you.</p>
        <form class="request_form" action="index.html" method="post" name="request-form" id="id-request-form">
            <div class="">
                <label class="request_form__edit-title" for="id-request-name">Your Name</label>
                <input class="request_form__edit" type="text" value="" name="name" id="id-request-name">
                <p class="request_form__edit-error-text">&nbsp;</p>
            </div>
            <div class="">
                <label class="request_form__edit-title" for="id-request-email">Your Email</label>
                <input class="request_form__edit" type="text" value="" name="email" id="id-request-email">
                <p class="request_form__edit-error-text">&nbsp;</p>
            </div>
            <div class="">
                <label class="request_form__edit-title" for="id-request-message">Message</label>
                <textarea class="request_form__textarea" rows="10" name="comment" form="request-form" id="id-request-message">ddd</textarea>
                <p class="request_form__textarea-error-text">&nbsp;</p>
            </div>
            <button class="request_form__send-request-button button-solid" type="submit">Send Request</button>
        </form>
    </div>
</section>