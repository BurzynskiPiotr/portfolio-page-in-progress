import React, { Component } from "react";
import portret from "../media/portret.jpg";

class About extends Component {
  render() {
    return (
      <div className="page-sector about">
        <div className="about-intro">
          <img src={portret} alt="Portret" />
          <article>
            <p className="title">Witaj, nazywam się Piotr.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat.
            </p>
            <p>
              Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam.
            </p>
            <p>
              I'm always searching for new ways to be creative and I began
              sewing in 2011. I started my own clothing line, Machine Apparel,
              in 2014 which created modern looks for women who desire minimalism
              with edge and attitude. In the Fall of 2017, I completed a
              groundbreaking new program at PENSOLE Design Academy studying
              Functional Apparel and Accessories (FAAS) with Angela Medlin.
            </p>
            <p>
              Currently, I am a color designer working and living in Denver,
              Colorado.
            </p>
          </article>
        </div>

        <div className="arrow">
          <span className="arrow__arrows">
            <span></span>
            <span></span>
          </span>
        </div>

        <div className="about-more">
          <p>more stuff</p>
        </div>
      </div>
    );
  }
}

export default About;
