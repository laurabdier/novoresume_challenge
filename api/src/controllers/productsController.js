const Product = require("../models/Productmodel");

// CREATE : new product
async function createNewProduct(req, res, next) {
    let product = new Product({
        name: req.body.name,
        slogan: req.body.slogan,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    })
    product.save()
        .then(product => {
            res.status(200).json({
                message: "Product added successfully"
            })
        })
        .catch(error => {
            res.json({
                message: "error with the creation of a new product"
            })
        })
}

// READ : all products
async function getAllProducts(req, res, next) {
    const productsList = await Product.find({});
    res.json(productsList);

}

module.exports = {
    createNewProduct,
    getAllProducts
}