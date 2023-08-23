import React from "react";
import {Link} from "react-router-dom"

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="my-5 pt-5 text-body-secondary text-center text-small">
      <p className="mb-1">&copy; {year} AI-Gift_Demo</p>
      <ul className="list-inline">
        <li className="list-inline-item">
          <Link to="#">Privacy</Link>
        </li>
        <li className="list-inline-item">
          <Link to="#">Terms</Link>
        </li>
        <li className="list-inline-item">
          <Link to="#">Support</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
