import React from 'react';

import useModal from "../auth/useModal";
import Register from "../auth/register/registerComponent";
import Login from "../auth/login/loginComponent";
import './landingCSS.css'

const Landing = () => {

  const { isShowing, toggle } = useModal();

  return (
    <div className="">

      <div className="row justify-content" style={{ backgroundColor: "#6A6AC4", padding: 40, paddingBottom: 50}}>
        <div className="col-sm-5 offset-sm-1 ">
          <div>
            <p style={{ color: "white", fontSize: 36, fontWeight: 700}}>A better, faster and smarter way of building your offers.</p>
          </div>
          <div>
            <p style={{ color: "white", fontSize: 18 }}>Increase revenue and outshine competition. All for the price of the coffee.</p>
          </div>
          <div className="col-sm-6" style={{ padding: 0 }}>
            <button type="button" className="btn btn-success btn-lg modal-toggle" style={styles.buttonFull}>Register Today</button>
          </div>
        </div>
        <div className="col-sm-5  d-none d-sm-block">
          <img src="/images/background/header.png" style={{ height: 290, width: "auto" }} />
        </div>
      </div>

      <div style={{ backgroundColor: "#F5F5F5" }}>
        <div className="row" >
          <div className="col-12 offset-2" style={{ marginTop: 15, marginBottom: 15 }}>
            <h1 style={{ fontSize: 18, fontWeight: "bold" }}>What do we do ? </h1>
          </div>
        </div>

        <div className="row d-flex justify-content-center" >
          <div className="col-3 text-center">
            <div className="row">
              <div className="col-12 " >
                <img src="images/icons/offer.png" style={styles.img} />
              </div>
            </div>
            <div className="row">
              <div className="col-12" style={{ marginTop: 20, marginBottom: 5 }}>
                <h1 style={{ fontSize: 14, fontWeight: 600 }}>Amazing looking quotes</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12" >
                <p style={{ fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae arcu vel nulla finibus feugiat.</p>
              </div>
            </div>
          </div>
          <div className="col-3 text-center">
            <div className="row">
              <div className="col-12 " >
                <img src="images/icons/fast.png" style={styles.img} />
              </div>
            </div>
            <div className="row">
              <div className="col-12" style={{ marginTop: 20, marginBottom: 5 }}>
                <h1 style={{ fontSize: 14, fontWeight: 600 }}>Lighting fast quoting</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12" >
                <p style={{ fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae arcu vel nulla finibus feugiat.</p>
              </div>
            </div>
          </div>
          <div className="col-3 text-center">
            <div className="row">
              <div className="col-12 " >
                <img src="images/icons/log.png" style={styles.img} />
              </div>
            </div>
            <div className="row">
              <div className="col-12" style={{ marginTop: 20, marginBottom: 5 }}>
                <h1 style={{ fontSize: 14, fontWeight: 600 }}>Live changelog</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12" >
                <p style={{ fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae arcu vel nulla finibus feugiat.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center" style={{ marginTop: 15, marginBottom: 15 }}>
            <button type="button" className="btn btn-success btn-lg" style={styles.buttonTryItOutToday}>Try it out Today</button>
          </div>
        </div>
      </div>

      <div style={{marginBottom: 200}}>
        <div className="row">
          <div className="col-12 offset-2" style={{ marginTop: 15, marginBottom: 15 }}>
            <h1 style={{ fontSize: 18, fontWeight: "bold" }}>Recent blog posts </h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-3 text-left ">
            <div className="row">
              <div className="col-12" style={styles.img2}>
                <img src="/images/background/image-1.png" style={{ width: 400, height: "auto" }} />
              </div>
            </div>
            <div className="row">
              <div className="col-12" style={{ marginTop: 20, marginBottom: 5 }}>
                <h1 style={{ fontSize: 14, fontWeight: 600 }}>Promotional items</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-9" >
                <p style={{ fontSize: 12 }}>You are probably familiar with free merchandise offered by companies at no cost at all.  This is because they know...</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12" >
                <a href="/" style={{ fontSize: 12, color: "#00C8AA", marginTop: 5 }}>Read now...</a>
              </div>
            </div>
          </div>
          <div className="col-3 text-left">
            <div className="row">
              <div className="col-12" style={styles.img2}>
                <img src="/images/background/image-3.png" style={{ width: 350, height: "auto" }} />
              </div>
            </div>
            <div className="row">
              <div className="col-12" style={{ marginTop: 20, marginBottom: 5 }}>
                <h1 style={{ fontSize: 14, fontWeight: 600 }}>Promotional items</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-9" >
                <p style={{ fontSize: 12 }}>You are probably familiar with free merchandise offered by companies at no cost at all.  This is because they know...</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12" >
                <a href="/" style={{ fontSize: 12, color: "#00C8AA", marginTop: 5 }}>Read now...</a>
              </div>
            </div>
          </div>
          <div className="col-3 text-left ">
            <div className="row">
              <div className="col-12" style={styles.img2}>
                <img src="/images/background/image-2.png" style={{ width: 340, height: "auto" }} />
              </div>
            </div>
            <div className="row">
              <div className="col-12" style={{ marginTop: 20, marginBottom: 5 }}>
                <h1 style={{ fontSize: 14, fontWeight: 600 }}>Promotional items</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-9" >
                <p style={{ fontSize: 12 }}>You are probably familiar with free merchandise offered by companies at no cost at all.  This is because they know...</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12" >
                <a href="/" style={{ fontSize: 12, color: "#00C8AA", marginTop: 5 }}>Read now...</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: "#6A6AC4",
    width: 100
  },
  buttonFull: {
    backgroundColor: "#00C8AA",
    color: "white",
    width: "200px"
  },
  buttonHover: {
    backgroundColor: "#E1E1E1",
    color: "black",
    borderColor: "#E1E1E1",
    width: "200px"
  },
  img: {
    width: 50,
    height: 50
  },
  img2: {
    height: 200,
    width: 300,
    overflow: "hidden"
  },
  row1card1: {
    backgroundColor: "#E1E1E1",
    border: "none"
  },
  buttonTryItOutToday: {
    fontSize: 14,
    backgroundColor: "#00C8AA",
    color: "white",
    width: "200px",
    borderColor: "#00C8AA",
    marginTop: 30,
    marginBottom: 15
  },
  blogPost: {
    border: "none"
  }
}

export default Landing;
