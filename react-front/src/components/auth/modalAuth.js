import React from 'react';

const ModalAuth = () => {
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
                <div class="modal-content" style={{ borderRadius: 20 }}>
                    <div className="body">
                        <div className="container-fluid">
                            <div className="col-10 offset-1">
                                <div className="row">
                                    <div class="modal-body text-center">
                                        <h1 style={{ fontSize: 18, fontWeight: "bold" }}>Register</h1>
                                    </div>
                                </div>
                                <div className="row" style={styles.signUpLabel}>
                                    <p style={styles.signUpLabel}>First Name</p>
                                </div>
                                <div className="row">
                                    <input type="text" id="firstName" placeholder="First Name" style={styles.signUpInput}></input>
                                </div>
                                <div className="row" style={{ marginTop: 10, fontWeight: 500, margin: "none" }}>
                                    <p>Last Name</p>
                                </div>
                                <div className="row" style={{ margin: "none" }} >
                                    <input type="text" id="lastName" style={styles.signUpInput}></input>
                                </div>
                                <div className="row">
                                    <p>Email</p>
                                </div>
                                <div className="row">
                                    <input type="text" id="email" style={styles.signUpInput}></input>
                                </div>
                                <div className="row">
                                    <p>Password</p>
                                </div>
                                <div className="row">
                                    <input type="text" id="password" style={styles.signUpInput}></input>
                                </div>
                                <div className="row">
                                    <button>Register</button>
                                </div>
                                <div className="row">
                                    <a data-toggle="modal" href="#exampleModal" data-target="#exampleModal">Already have an account? Sign In</a>
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
        height: 30,

    }
}

export default ModalAuth;