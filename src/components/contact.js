
import React from 'react';
import './contact.css';

export const Contact = () => {
    return (
      <div className="page-container">
      <header>
          <h1>Contact Us</h1>
      </header>
        <div className="form-container">
            <h2>Send us a message</h2>
            <form>
                <div className="form-group">
                  {/*In React, because for is a reserved keyword in JavaScript, JSX uses htmlFor*/}
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" placeholder="Enter your full name" />
               
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" placeholder="Enter your full name" />
                
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" id="phone" placeholder="Enter your full name" />
                
                    <label htmlFor="company">Company name</label>
                    <input type="text" id="company" placeholder="Enter your full name" />
               
                    <label htmlFor="message">Message</label>
                    <textarea id="message"  placeholder="Enter your message"></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
        </div>
    );
}

;

