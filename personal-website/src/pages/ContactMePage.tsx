import React from 'react'

function ContactMePage() {
  return (
    <div>
      <h1 style={{ fontSize: '40px' }}>Please leave me a message</h1>
      <form className="contact-form">
        <label className="form-label">
          Name:
          <input type="text" name="name" className="form-input" />
        </label>
        <br />
        <label className="form-label">
          Email:
          <input type="email" name="email" className="form-input" />
        </label>
        <br />
        <label className="form-label">
          Message:
          <textarea name="message" className="form-textarea" />
        </label>
        <br />
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  )
}

export default ContactMePage
