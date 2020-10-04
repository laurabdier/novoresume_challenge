import React, {useState} from 'react';
import { Redirect, Route } from "react-router";



const ModalAuth = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("firstName handleSubmit :", firstName)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
             })
        };
        fetch('https://localhost:9007/auth/register', requestOptions)
        .then(response => response.json())
        .then(<Redirect to="/products" />)
    }

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
                                    <input type="text" id="firstName" placeholder="First Name" style={styles.signUpInput} onChange={event => setFirstName(event.target.value)}></input>
                                </div>
                                <div className="row" style={{ marginTop: 10, fontWeight: 500, margin: "none" }}>
                                    <p>Last Name</p>
                                </div>
                                <div className="row" style={{ margin: "none" }} >
                                    <input type="text" id="lastName" style={styles.signUpInput} onChange={event => setLastName(event.target.value)}></input>
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
                                    <input type="password" id="password" style={styles.signUpInput} onChange={event => setPassword(event.target.value)}></input>
                                </div>
                                <div className="row">
                                    <button type="submit" onClick={handleSubmit} style={styles.buttonRegister}>Register</button>
                                </div>
                                <div className="row justify-content-center">
                                    <a data-toggle="modal" href="#exampleModal" data-target="#exampleModal" style={styles.signIn}>Already have an account? Sign In</a>
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
        marginTop: 10,
        fontWeight: 500,
        marginBottom: 10,
        height: 30
    },
    signUpInput: {
        borderRadius: 5,
        backgroundColor: "#E1E1E1",
        border: "none",
        width: "100%",
        height: 30,

    },
    buttonRegister: {
        borderRadius: 5,
        backgroundColor: "#00C8AA",
        border: "none",
        width: "100%",
        height: 30,
        marginTop: 30,
        color: "white"
    },
    signIn: {
        fontSize: 10, 
        textAlign: "center", 
        marginTop: 20,
        marginBottom: 25
    }
}

export default ModalAuth;