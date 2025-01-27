import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import "../../style.scss";
import "./Contact.scss";

function Contact() {

  const { t } = useTranslation();

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <Container fluid className="contact-us-section">
      <div className="contact-inner-container">
        <div className="contact-us-header">
          <h2>{t('contact.contact-header')}</h2>
          <p>{t('contact.contact-body')}</p>
        </div>
        <div className="form-container">
          <form name="contact_form" onSubmit={onSubmit}>
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            <div className="form-field">
              <label>{t('contact.name-label')}:</label>
              <input className="contact-input" type="text" name="name" required/>
            </div>
            <div className="form-field">
              <label>{t('contact.email-label')}:</label>
              <input className="contact-input" type="email" name="email" required/>
            </div>
            <div className="form-field textarea-container">
              <label>{t('contact.message-label')}:</label>
              <textarea className="contact-message" name="message" required cols={68} rows={15} />
            </div>
            <div className="submit-container">
              <button className="ca-btn ca-btn-primary" type="submit">Submit</button>
              <span className="form-submission-text">{result}</span>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
