import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  function handleChange(e) {
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    //validate email
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  }

  const [errorMessage, setErrorMessage] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  /*   const { name, email, message } = formState; */

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="format-content">
      <div>
        <h1 data-testid="contact">Let's Talk. </h1>
        <hr />
        <div className="contact-form">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">
                Name:
                <br />
              </label>
              <input
                type="text"
                name="name"
                onBlur={handleChange}
                defaultValue={formState.name}
              />
            </div>
            <div>
              <label htmlFor="email">
                Email address:
                <br />
              </label>
              <input
                type="email"
                name="email"
                onBlur={handleChange}
                defaultValue={formState.email}
              />
            </div>
            <div>
              <label htmlFor="message">
                Message:
                <br />
              </label>
              <textarea
                name="message"
                rows="5"
                onBlur={handleChange}
                defaultValue={formState.message}
              />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button data-testid="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
