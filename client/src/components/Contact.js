import React from 'react';

function Contact() {
  return (
    <>
    <div className="contact__info" id="contact">
      <h2>Contact Me</h2>
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
            <button type="submit" className="form-group-btn">Submit Form</button>
          </form>
        </div>
      </div>
      <br />
      <br />
      </>
  );
}

export default Contact;