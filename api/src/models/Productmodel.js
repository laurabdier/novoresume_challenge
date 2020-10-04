// Product.model.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    slogan: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model("Product", productSchema);