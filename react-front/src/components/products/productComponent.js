import React, { useState } from 'react';

const decreaseQuantity = (product, setProduct) => {
    if (product.quantity > 0){
        setProduct(product.quantity - 1);
    }
}

const Product = ( {product, setProduct} ) => {
    

    return (
        <div className="col-3 text-left" style={{ marginTop: 50 }}>
            <div className="row">
                <div className="col-7" style={styles.img2}>
                    <img className="rounded" src={product.image} style={{ width: 150, height: "auto" }} />
                </div>
                <div className="col-3 content-justify-left" style={styles.price}>
                    <div className="row">
                        <div className="col-12 " >
                            <h1 style={{ fontSize: 20, fontWeight: 650 }}>{product.price} $</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 " >
                            <button onClick={() => decreaseQuantity(product, setProduct)} style={styles.buttonQuantity, {borderRadius: 5, border: "none"}} >-</button>
                        </div>
                        <div className="col-4 " >
                            <p>  {product.quantity} </p>
                        </div>
                        <div className="col-4 " >
                            <button onClick={() => setProduct(product.quantity + 1)} style={styles.buttonQuantity, {borderRadius: 5, border: "none"}}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ marginTop: 20 }}>
                <div className="col-12 text-left">
                    <h1 style={{ fontSize: 20, fontWeight: 650 }}>{product.name}</h1>
                </div>
            </div>
            <div className="row" >
                <div className="col-12 text-left">
                    <h1 style={{ fontSize: 14, color: "#6A6AC4" }}>{product.slogan}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-left">
                    <h1 style={{ fontSize: 12}}>{product.description}</h1>
                </div>
            </div>
        </div>
    )
};

const styles = {
    img2: {
        height: 150,
        width: 150,
        overflow: "hidden"
    },
    price: {
        margin: "auto"
    },
    buttonQuantity: {
        backgroundColor: "#E1E1E1",
        border: "#none",
        bordrRadius: 25
    }
};

export default Product;