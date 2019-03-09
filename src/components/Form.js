import React from "react";

function Form() {
  return (
    <form class="contact100-form validate-form" name="askQuetion" netlify>
      <span class="contact100-form-title">Ask a Question</span>

      <div class="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Name is required">
        <span class="label-input100">Your Name</span>
        <input class="input100" type="text" name="name" placeholder="Enter your name" />
        <span class="focus-input100" />
      </div>

      <div class="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
        <span class="label-input100">Email</span>
        <input class="input100" type="text" name="email" placeholder="Enter your email addess" />
        <span class="focus-input100" />
      </div>

      <div class="wrap-input100 validate-input" data-validate="Question is required">
        <span class="label-input100">Question</span>
        <textarea class="input100" name="question" placeholder="Your Question here..." />
        <span class="focus-input100" />
      </div>
      <div data-netlify-recaptcha="true" />
      <div class="container-contact100-form-btn">
        <button class="contact100-form-btn">
          <span>
            Submit
            <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true" />
          </span>
        </button>
      </div>
    </form>
  );
}

export default Form;
