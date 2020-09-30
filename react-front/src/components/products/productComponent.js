import React from 'react';

const Product = ({ price, quantity, name, slogan, description }, index) => {
    return (
        <div className="col-3 text-left" style={{ marginTop: 50 }}>
            <div className="row">
                <div className="col-7" style={styles.img2}>
                    <img className="rounded" src="/images/items/1.png" style={{ width: 150, height: "auto" }} />
                </div>
                <div className="col-3 content-justify-left" style={styles.price}>
                    <div className="row">
                        <div className="col-12 " >
                            <h1 style={{ fontSize: 20, fontWeight: 650 }}>{price}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 " >
                            <p> - {quantity} +</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ marginTop: 20 }}>
                <div className="col-12 text-left">
                    <h1 style={{ fontSize: 20, fontWeight: 650 }}>{name}</h1>
                </div>
            </div>
            <div className="row" >
                <div className="col-12 text-left">
                    <h1 style={{ fontSize: 14, color: "#6A6AC4" }}>{slogan}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-left">
                    <h1 style={{ fontSize: 12}}>{description}</h1>
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
    }
};

export default Product;