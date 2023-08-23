import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg header">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            
            <h1><CardGiftcardIcon style={{color:"#F7E987",
        size:"200px"}} />AI-Gift</h1>
          </Link> 
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link className=" nav-link active" aria-current="page" to="/">
                  <h4>Gifts</h4>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className=" nav-link active" aria-current="page" to="/">
                  <h4>About</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <h4>Contact Us</h4>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
