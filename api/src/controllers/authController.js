const User = require("../models/Usermodel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//CREATE : new user
async function register (req, res, next){
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    })
    user.save()
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
}

// READ : all users
async function getAllUsers(req, res){
    const usersList = await User.find({});
    res.json(usersList);
}

module.exports = {
    register,
    getAllUsers
}