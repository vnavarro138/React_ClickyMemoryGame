import React from "react";
import "./Navbar.css";

const Navbar = props => (

<div className="inline">

<ul className="nav nav-pills navbar-fixed">
  <li className="title clicky" role="presentation"><a href="index.html">Clicky Game</a></li>
  <li className="title mid" role="presentation"><a href="#">Click an image to begin!</a></li>
  <li className="title score" role="presentation"><a href="#">Score: {props.score} | Top Score: {props.topscore}</a></li>
</ul>

</div>

);

export default Navbar;