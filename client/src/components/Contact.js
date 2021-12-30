import React from 'react';

function Contact() {
  return (
    <>
    <div className="contact">
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
        <h3>Prefer another method?</h3>
        <p className="contact-info">
          Email: Zach.imerzel@gmail.com<br/>
          Phone: (303)902-0091<br/>
        </p>
      </div>
      <br />
      <br />
      </>
  );
}

export default Contact;