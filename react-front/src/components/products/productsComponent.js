import React from 'react';
import Product from './productComponent';

const products = [{
    id: 1,
    name: "Dark Almond & Orange",
    slogan: "DARK, CRUNCHY & SWEET",
    description: "Crunchy roasted pieces of Californian almonds and sweet orange peel, coated in 100% sustainably sourced cocoa. The perfect balance between dark and sweet chocolate. Enjoy!",
    price: "4.99$",
    quantity: 5
},
{
    id: 2,
    name: "Alpine Milk Chocolate",
    slogan: "A TRUE PEAK OF TASTE.",
    description: "The name gives it away: this is a chocolate that reaches loy  heights. A special conching process gives this mixture of Alpine milk and cocoa its characteristic caramel and honey a vour. No wonder that some people abseil ohome with this bar. ",
    price: "3.99$",
    quantity: 4
},
{
    id: 3,
    name: "Cocoa Mousse",
    slogan: "FAMOUSSELY TASTY",
    description: "f you can’t believe your eyes when you see the extra large pieces of our Cocoa Mousse bar, you’ll just have to trust in your taste. The lightly whipped cocoa mousse blends harmoniously with the hints of honey and caramel in our Alpine milk chocolate.",
    price: "3.49$",
    quantity: 0
},
{
    id: 4,
    name: "Cornflakes",
    slogan: "THE CHOCOLATY OF CORNFLAKES. ",
    description: "RITTER SPORT Cornakes gives you breakfast around the clock with crispy cornakes in creamy chocolate. The akes are produced and selected according to strict quality standards: aer all, breakfast is the most important meal of the day.",
    price: "3.99$",
    quantity: 0
},
{
    id: 1,
    name: "Dark Almond & Orange",
    slogan: "DARK, CRUNCHY & SWEET",
    description: "Crunchy roasted pieces of Californian almonds and sweet orange peel, coated in 100% sustainably sourced cocoa. The perfect balance between dark and sweet chocolate. Enjoy!",
    price: "4.99$",
    quantity: 5
},
{
    id: 2,
    name: "Alpine Milk Chocolate",
    slogan: "A TRUE PEAK OF TASTE.",
    description: "The name gives it away: this is a chocolate that reaches loy  heights. A special conching process gives this mixture of Alpine milk and cocoa its characteristic caramel and honey a vour. No wonder that some people abseil ohome with this bar. ",
    price: "3.99$",
    quantity: 4
},
{
    id: 3,
    name: "Cocoa Mousse",
    slogan: "FAMOUSSELY TASTY",
    description: "f you can’t believe your eyes when you see the extra large pieces of our Cocoa Mousse bar, you’ll just have to trust in your taste. The lightly whipped cocoa mousse blends harmoniously with the hints of honey and caramel in our Alpine milk chocolate.",
    price: "3.49$",
    quantity: 0
},
{
    id: 4,
    name: "Cornflakes",
    slogan: "THE CHOCOLATY OF CORNFLAKES. ",
    description: "RITTER SPORT Cornakes gives you breakfast around the clock with crispy cornakes in creamy chocolate. The akes are produced and selected according to strict quality standards: aer all, breakfast is the most important meal of the day.",
    price: "3.99$",
    quantity: 0
}
]


const Products = () => {
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
                    {products.map(Product)}
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
                            <button className="text-center" style={styles.buttonPdf}>Download PDF</button>
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