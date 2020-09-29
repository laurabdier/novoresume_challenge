import React from 'react';

import useModal from "../auth/useModal";
import Register from "../auth/register/registerComponent";
import Login from "../auth/login/loginComponent";
import '../landing/landingCSS.css'


const NavBar = () => {
  const {isShowing, toggle} = useModal();
  return (
    <div style={styles.shadow}>
      <nav class="navbar navbar-expand-lg shadow p-3 bg-white"  >
        <div class="container" style={styles.navBar}>
          <a class="navbar-brand logo" href="#" ><img src="/images/icons/logo.png" alt="" style={styles.logo}></img></a>
          <form class="form-inline">
            <div className="modal-button">
              <button class="btn btn-outline mr-sm-2 button-modal" type="button" onClick={toggle} style={styles.buttonRegister} >Register</button>
              <Register
                isShowing={isShowing}
                hide={toggle}
              />
            </div>
            <div className="modal-button">
                <button class="btn btn-outline-secondary mr-sm-2 button-modal" onClick={toggle} type="button" style={styles.buttonLogin}>Sign In</button>
                <Login
                  isShowing={isShowing}
                  hide={toggle}
                />
            </div>
          </form>
        </div>
      </nav>
    </div>
  )
}

const styles = {
  navBar: {
    backgroundColor: "white",
    width: "100%",
    margin: "0px !important"
  },
  shadow: {
    backgroundColor: "#6A6AC4",
  },
  logo: {
    height: "75px"
  },
  buttonRegister: {
    backgroundColor: "#00C8AA",
    color: "white",
    width: "125px"
  },
  buttonLogin: {
    backgroundColor: "#E1E1E1",
    color: "black",
    borderColor: "#E1E1E1",
    width: "125px"
  }
}

export default NavBar;
