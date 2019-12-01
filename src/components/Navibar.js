import React from "react";
import {Link} from "react-router-dom"
import '../assets/css/navibar.css'

export default function Navibar() {
  return (
<nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
      <div className="container"><Link to="/" className="navbar-brand">Travel</Link>
      <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav mr-auto">
                  <li className="nav-item" role="presentation"></li>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/destinations" className="nav-link">Destinations</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                 
              </ul>
              <span className="navbar-text actions"> 
                <Link className="login" to="/login">Log In</Link>
                <Link to="/register" className="btn btn-light action-button" role="button">Sign Up</Link>
              </span>
            </div>
      </div>
</nav>
  );
}
