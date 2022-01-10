import React from 'react';
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
    <div className="contact__info" id="contact">
        <div>
          <h2>Get in Touch<span>.</span></h2>
          <p>I'm ready for challenges and opportunities. Please send me an email if you want to chat with me.</p>
        </div>
        <div className="contact__buttons">
          <button className='button__top-bottom' id="work-btn"><Link to="work" className='work__link'>View Work</Link></button>
        </div>
        <br />
        <div className="container">
          <form target="_blank" action="https://formsubmit.co/zach.jags99@gmail.com" method="POST" className="form">
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input type="text" name="name" className="form-control" placeholder="Full Name" required />
                </div>
                <div className="col">
                  <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
            </div>
            <button type="submit" className="button__left-right">Submit Form</button>
          </form>
        </div>
      </div>
      <br />
      <br />
      </>
  );
}

export default Contact;