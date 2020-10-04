const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/productsController");
const Product = require("../models/Productmodel");

router.post("/create", ProductController.createNewProduct);
router.get("/", ProductController.getAllProducts);

module.exports = router;