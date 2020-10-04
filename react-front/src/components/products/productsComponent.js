import React, { useState, useEffect } from 'react';
import Product from './productComponent';


const downloadPDF = (event) => {
   // event.preventDefault();
    console.log("event : ", event)
}


const Products = () => {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9007/product/").then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('error on getting products');
        }).then(function (jsonResponse) {
            setProductList(jsonResponse);
        });
    }, []);
    

    return (
        <div>
            <div className="row">
                <div className="col-12 offset-1" style={styles.title}>
                    <h1 style={{ fontSize: 28, fontWeight: 700 }}>Create New Offer</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-10 offset-1" style={styles.titlebox}>
                    <h1 style={{ fontSize: 24, fontWeight: 700, color: "white" }}>Step 1: Select Products</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-10 offset-1" >
                    <div className="row d-flex justify-content-center" >
                        
                        {
                            productList.length ? productList.map(productList => <Product key={productList.id} product= {productList} setProduct={setProductList}/>) : null
                        }
                    </div>
                </div>
            </div>


            <div className="row" style={{ marginTop: 30 }}>
                <div className="col-10 offset-1" style={styles.titlebox}>
                    <h1 style={{ fontSize: 24, fontWeight: 700, color: "white" }}>Step 2: Add Customer Billing Information</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-10 offset-1 justify-content" style={{ marginTop: 30 }}>
                    <div className="row">
                        <div className="col-4">
                            <p>First Name</p>
                        </div>
                        <div className="col-4">
                            <p>Last Name</p>
                        </div>
                        <div className="col-4">
                            <p>Billing Address</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <input type="text" id="firstName" style={styles.billingIput}></input>
                        </div>
                        <div className="col-4">
                            <input type="text" id="lastName" style={styles.billingIput}></input>
                        </div>
                        <div className="col-4">
                            <input type="text" id="billingAddress" style={styles.billingIput}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-10 offset-1 justify-content" style={{ marginTop: 30 }}>
                    <div className="row">
                        <div className="col-4">
                            <p>Postal Code</p>
                        </div>
                        <div className="col-4">
                            <p>Telephone Number</p>
                        </div>
                        <div className="col-4">
                            <p>Email</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <input type="text" id="zipCode" style={styles.billingIput}></input>
                        </div>
                        <div className="col-4">
                            <input type="text" id="phone" style={styles.billingIput}></input>
                        </div>
                        <div className="col-4">
                            <input type="text" id="email" style={styles.billingIput}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ marginTop: 30, marginBottom: 100 }}>
                <div className="col-10 offset-1" style={styles.titlebox}>
                    <div className="row">
                        <div className="col-9">
                            <h1 style={{ fontSize: 24, fontWeight: 700, color: "white" }}>Step 3: Generate Offer</h1>
                        </div>
                        <div className="col-2 text-center">
                            <button className="text-center" onClick={() => downloadPDF()} style={styles.buttonPdf}>Download PDF</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const styles = {
    title: {
        marginTop: 30
    },
    titlebox: {
        marginTop: 10,
        backgroundColor: "#6A6AC4",
        borderRadius: 15,
        paddingTop: 10,
        paddingBottom: 10
    },
    billingIput: {
        borderRadius: 5,
        backgroundColor: "#E1E1E1",
        border: "none",
        width: "100%",
        height: 30
    },
    buttonPdf: {
        backgroundColor: "#00C8AA",
        color: "white",
        width: "200px",
        borderRadius: 5,
        border: "none",
        margin: "auto",
        height: 35
    }
}

export default Products;