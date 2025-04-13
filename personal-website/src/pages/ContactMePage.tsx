import React, { useState } from 'react'
import '../App.css'
import emailjs from 'emailjs-com';
import Banner from '../components/Banner';

function ContactMePage() {
  // Define the type of error message
  type ErrorMessages = {
    name?: string;
    email?: string;
    phoneNumber?: string;
    message?: string;
    contactPreference?: string;
  };

  // Define the error message of each field if it is empty
  const errorMessages: ErrorMessages = {
    name: 'Please enter your name',
    email: 'Please enter your email',
    phoneNumber: 'Please enter your phone number',
    message: 'Please enter your message',
  };

  // Define state variable of each field
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')
  const [contactPreference, setContactPreference] = useState('')
  const [errors, setErrors] = useState({
    name: errorMessages.name,
    email: errorMessages.email,
    phoneNumber: errorMessages.phoneNumber,
    message: errorMessages.message,
  } as ErrorMessages);
  const [banner, setBanner] = useState(false)
  const [isBlurred, setIsBlurred] = useState(false);


  const SERVICE_ID = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY;

  // Validate form fields as user fills out fields
  const validateField = (field: string, value: string) => {
    // Create a copy of the errors object to avoid mutating the state directly
    // and to ensure that we can reset the errors after submission
    const newErrors = { ...errors };

    switch (field) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = errorMessages.name;
        } else {
          delete newErrors.name;
        }
        // so we don't check for every single field onChange
        break;

      case 'email':
        if (!value.trim()) {
          newErrors.email = errorMessages.email;
        } else if (!/\S+@\S+\.\S+/.test(email)) 
          {
          newErrors.email = 'Email is invalid.';
        } else {
          delete newErrors.email;
        }
        break;

      case 'phoneNumber':
        if (!value.trim()) {
          newErrors.phoneNumber = errorMessages.phoneNumber;
        } else if (phoneNumber && !/^\d{10}$/.test(phoneNumber)) {
          newErrors.phoneNumber = 'Phone number must be 10 digits.';
        } else {
          delete newErrors.phoneNumber;
        }
        break;

      case 'message':
        if (!value.trim()) {
          newErrors.message = errorMessages.message;
        } else {
          delete newErrors.message;
        }
        break;

      case 'contactPreference':
        if (!value) {
          newErrors.contactPreference = 'Please select a contact preference';
        } else {
          delete newErrors.contactPreference;
        }
        break;

      // if the field can't be recognized, we will ignore it
      default:
        break;
    }
    setErrors(newErrors);
  }

  const isFormValid = () => {
    const newErrors: { name?: string, email?: string, phoneNumber?: string, message?: string, contactPreference?: string } = {};
    if (!name.trim()) {
      newErrors.name = errorMessages.name;
    }
    if (!email.trim()) {
      newErrors.email = errorMessages.email;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = errorMessages.phoneNumber;
    } else if (phoneNumber && !/^\d{10}$/.test(phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits.';
    }
    if (!message.trim()) {
      newErrors.message = errorMessages.message;
    }

    if (contactPreference === '') {
      newErrors.contactPreference = 'Please select a contact preference';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  }


  const handleContactPreferenceChange = (value: string) => {
    if (value === "No I don't want to be contacted") {
      window.confirm(
        "Are you sure you don\'t want to be contacted?"
      );
      // If the user confirms, set the contact preference to the selected value
      setContactPreference(value);
    }
    setContactPreference(value); // Update the state if confirmed or for other options
  };



  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!isFormValid()) {
      return;
    }
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target as HTMLFormElement, PUBLIC_KEY)
      .then(() => {
        alert('Message Sent Successfully')
      }, (error) => {
        console.log(error.text);
        alert('Something went wrong!')
      });

    // Reset all form fields
    setName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
    setContactPreference('');
    // Clear all error messages
    setErrors(errorMessages);


    (event.target as HTMLFormElement).reset()
    setBanner(true)
    setIsBlurred(true);
  };

  const handleBannerClose = () => {
    setBanner(false);
    setIsBlurred(false);
  }
  return (
    <>
      {banner && <Banner onClose={handleBannerClose} />}
      <div className="contact-page" style={{ filter: isBlurred ? 'blur(5px)' : 'none' }}>
        <h1 className="contact-title">Please leave me a message</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          {!validateField && <p style={{ color: 'red' }}>Please see error(s) below</p>}
          <label className="form-label">
            Name:
            <input
              type="text"
              name="name"
              className="form-input"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validateField('name', e.target.value)
              }}
            />
            {errors.name && <p className="form-error" style={{ color: 'red' }}>{errors.name}</p>}
          </label>
          <br />
          <label className="form-label">
            Email:
            <input
              type="email"
              name="email"
              className="form-input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                validateField('email', e.target.value)
              }}
            />
            {errors.email && <p className="form-error" style={{ color: 'red' }}>{errors.email}</p>}
          </label>
          <br />
          <label className="form-label">
            Phone number:
            <input
              type="text"
              name="phoneNumber"
              className="form-input"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value)
                validateField('phoneNumber', e.target.value)
              }}
            />
            {errors.phoneNumber && <p className="form-error" style={{ color: 'red' }}>{errors.phoneNumber}</p>}
          </label>
          <label className="form-label">
            Message:
            <textarea
              name="message"
              className="form-textarea"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
                validateField('message', e.target.value)
              }}
            />
            {errors.message && <p className="form-error" style={{ color: 'red' }}>{errors.message}</p>}
          </label>
          <br />
          <label className="form-label">
            Would you like to be contacted via phone or email?
          </label>
          {errors.contactPreference && <p className="form-error" style={{ color: 'red' }}>{errors.contactPreference}</p>}
          <div className="label-wrapper">
            <label className="form-label">
              <input
                type="radio"
                name="contactPreference"
                value="Phone"
                checked={contactPreference === 'Phone'}
                onChange={(e) => {
                  handleContactPreferenceChange(e.target.value)
                  validateField('contactPreference', e.target.value)
                }}
              />
              Phone
            </label>
            <label className="form-label" style={{ marginLeft: '1rem' }}>
              <input
                type="radio"
                name="contactPreference"
                value="Email"
                checked={contactPreference === 'Email'}
                onChange={(e) => handleContactPreferenceChange(e.target.value)}
              />
              Email
            </label>
            <label className="form-label" style={{ marginLeft: '1rem' }}>
              <input
                type="radio"
                name="contactPreference"
                value="No I don't want to be contacted"
                checked={contactPreference === 'No I don\'t want to be contacted'}
                onChange={(e) => handleContactPreferenceChange(e.target.value)}
              />
              I don't want to be contacted
            </label>
          </div>
          <br />
          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ContactMePage; 