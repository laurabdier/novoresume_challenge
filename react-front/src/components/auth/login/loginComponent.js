import React, { useState } from "react";



const ModalLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getLonginInfo = (event) => {
    console.log("email : ", email);
    console.log("password :", password)
  }

  return (
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true" >
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content" style={{ borderRadius: 20 }}>
          <div className="body">
            <div className="container-fluid">
              <div className="col-10 offset-1">
                <div className="row">
                  <div class="modal-body text-center">
                    <h1 style={{ fontSize: 18, fontWeight: "bold" }}>Sign In</h1>
                  </div>
                </div>
                <div className="row">
                  <p>Email</p>
                </div>
                <div className="row">
                  <input type="text" id="email" style={styles.signUpInput} onChange={event => setEmail(event.target.value)}></input>
                </div>
                <div className="row">
                  <p>Password</p>
                </div>
                <div className="row">
                  <input type="text" id="password" style={styles.signUpInput} onChange={event => setPassword(event.target.value)}></input>
                </div>
                <div className="row">
                  <button type="button" onClick={getLonginInfo} style={styles.buttonLogin}>Login</button>
                </div>
                <div className="row justify-content-center">
                  <a data-toggle="modal" href="#exampleModal" data-target="#exampleModal" style={styles.signUp}>Already have an account? Sign In</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const styles = {
  modalBox: {
    borderRadius: 75,
    width: 300
  },
  signUpLabel: {
    marginBottom: "none",
    height: 30
  },
  signUpInput: {
    borderRadius: 5,
    backgroundColor: "#E1E1E1",
    border: "none",
    width: "100%",
    height: 30
  },
  buttonLogin: {
    borderRadius: 5,
    backgroundColor: "#00C8AA",
    border: "none",
    width: "100%",
    height: 30,
    marginTop: 30,
    color: "white"
},
signUp: {
    fontSize: 10, 
    textAlign: "center", 
    marginTop: 20,
    marginBottom: 25
}
}

export default ModalLogin;
