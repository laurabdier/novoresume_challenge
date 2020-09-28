import React from "react";
import ReactDOM from "react-dom";

import './registerCSS.css'
import '../../landing/landingCSS.css'

const Register = ({ isShowing, hide }) => isShowing ? (
    <React.Fragment>
      <div className="overlay">
        <div className="wrapper">
          <div className="modale">
            <button type="button" className="close" onClick={hide}>
              <span>&times;</span>
            </button>
            <h1>Et voici la modale REGISTER</h1>

          </div>
        </div>
      </div>
    </React.Fragment>
) : null;

export default Register;
