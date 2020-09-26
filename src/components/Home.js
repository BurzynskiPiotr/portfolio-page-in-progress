import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="page-sector home">
        <div className="home-details">
          <div className="home-article slide-from-right-animation">
            {" "}
            <p className="title">Front-end Web Developer</p>
            <article>
              <p> &bull; Tworzenie stron od podstaw.</p>

              <p> &bull; Wsparcie techniczne oraz utrzymywanie stron.</p>

              <p> &bull; Inne pierdoły do wymyślenia na teraz.</p>

              <p> &bull; Interesujący człowiek nagrodzony wieloma nagrodami.</p>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
