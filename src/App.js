import React from "react";
import "./style/style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Offer from "./components/Offer";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/offer">
              <Offer />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/polityka-prywatnosci">
              <Cookies />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <footer>All right reserved.</footer>
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header>
      <p className="title">Piotr Burzyński</p>
      <nav>
        <NavLink exact activeClassName="active-link" to="/">
          Strona główna
        </NavLink>
        <NavLink activeClassName="active-link" to="/about">
          O mnie
        </NavLink>
        <NavLink activeClassName="active-link" to="/offer">
          Oferta
        </NavLink>
        <NavLink activeClassName="active-link" to="/contact">
          Kontakt
        </NavLink>
      </nav>
    </header>
  );
}

function Cookies() {
  return <h2>Home</h2>;
}

export default App;
