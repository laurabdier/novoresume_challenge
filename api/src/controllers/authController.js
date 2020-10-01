const User = require("../models/User.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }
        let User = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPass
        })
        User.save()
            .then(user => {
                res.json({
                    message: "User added successfully"
                })
            })
            .catch(error => {
                res.json({
                    message: "error with the creation of a new user"
                })
            })
    })
}

module.exports = {
    register
}