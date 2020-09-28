import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="page-sector contact">
        <div className="contact-details">
          <div className="contact-text slide-from-right-animation">
            <article>
              <p className="title">Napisz do mnie</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat.
              </p>
            </article>
          </div>
          <div className="contact-border" />
          <form className="slide-from-left-animation">
            <input type="text" placeholder="imię" />
            <br />
            <input type="mail" placeholder="adres e-mail" />
            <br />
            <input type="text" placeholder="wiadomość" />
            <br />
            <button>wyślij</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
