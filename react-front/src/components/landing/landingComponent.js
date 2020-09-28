import React from 'react';

import useModal from "../auth/useModal";
import Register from "../auth/register/registerComponent";
import Login from "../auth/login/loginComponent";
import './landingCSS.css'

const Landing = () => {

  const {isShowing, toggle} = useModal();

  return (
    <div>
      <div className="container-fluid w-100" style={styles.container}>
        <div classNameName="row w-100 col-12">
          <div className="col-sm-12 col-md-6 col-lg-6 text-center">
            <span className="col-sm-12 col-md-6 col-lg-6 text-center align-middle">
              <h1 className="text-white" >A better, faster and smarter way of building your offers.</h1>
              <p className="text-white"> Increase revenue and outshine competition. </p><br/>
              <button type="button" className="btn btn-success btn-lg modal-toggle" style={styles.buttonFull}>Register Today</button>
              <button type="button" className="btn btn-outline-success  btn-lg" style={styles.buttonHover}>Register Today</button>
            </span>
          </div>
          <div className="col-sm-12 col-md-6 text-center">
            <img className="img-fluid w-40" src="./images/background/header.png" alt="" style={styles.img}></img>
          </div>
        </div>
      </div>

      <div className="container-fluid w-100 cards-container">
            <div className="row w-100 col-12">
              <h1 className="text-black">What do we do ?</h1>
            </div>
            <div className="row w-100 col-12">
                <div className="card col-sm-12 col-md-4 col-lg-4 center-elements" style={styles.row1card1}>
                  <img src="./images/icons/offer.png" className="embed-responsive card-img-top img-whatwedo" alt="..." ></img>
                    <div className="card-body">
                      <h2>Amazing looking quotes </h2>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum eu mauris eu tempor. Etiam vitae gravida tortor. Pellentesque tempus et felis at molestie. Nam in fermentum justo.</p>
                    </div>
                </div>

                <div className="card col-sm-12 col-md-4 col-lg-4 center-elements" style={styles.row1card1}>
                  <img src="./images/icons/fast.png" className="embed-responsive card-img-top img-whatwedo" alt="..."></img>
                    <div className="card-body">
                      <h2>Lighting fast quoting </h2>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum eu mauris eu tempor. Etiam vitae gravida tortor. Pellentesque tempus et felis at molestie. Nam in fermentum justo.</p>
                    </div>
                </div>

                <div className="card col-sm-12 col-md-4 col-lg-4 center-elements" style={styles.row1card1}>
                  <img src="./images/icons/log.png" className="embed-responsive card-img-top img-whatwedo" alt="..." ></img>
                    <div className="card-body">
                      <h2>Live changelog</h2>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum eu mauris eu tempor. Etiam vitae gravida tortor. Pellentesque tempus et felis at molestie. Nam in fermentum justo.</p>
                    </div>
                </div>
            </div>

            <div className="row center-elements">
              <button type="button" className="btn btn-primary btn-lg button-after-cards center-elements" style={styles.buttonTryItOutToday}>Try it out today !</button>
            </div>

            <div class="container-fluid w-100 cards-container2">
              <div class="row w-100 col-12">
                <h1 class="text-black">Recent blog posts</h1>
              </div>
              <div class="row w-100 col-12">
                  <div class="card col-sm-12 col-md-4 col-lg-4 center-elements" style={styles.blogPost}>
                    <img src="./images/background/image-1.png" class=".embed-responsive card-img-top img-blogposts" alt="..."></img>
                      <div class="card-body">
                        <h2>Promotional items </h2>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum eu mauris eu tempor. Etiam vitae gravida tortor. Pellentesque tempus et felis at molestie. Nam in fermentum justo.</p>
                      </div>
                  </div>

                  <div class="card col-sm-12 col-md-4 col-lg-4 center-elements" style={styles.blogPost}>
                    <img src="./images/background/image-2.png" class=".embed-responsive card-img-top img-blogposts" alt="..." ></img>
                      <div class="card-body">
                        <h2>Promotional items </h2>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum eu mauris eu tempor. Etiam vitae gravida tortor. Pellentesque tempus et felis at molestie. Nam in fermentum justo.</p>
                      </div>
                  </div>

                  <div class="card col-sm-12 col-md-4 col-lg-4 center-elements" style={styles.blogPost}>
                    <img src="./images/background/image-3.png" class=".embed-responsive card-img-top img-blogposts" alt="..." ></img>
                      <div class="card-body">
                        <h2>Promotional items</h2>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum eu mauris eu tempor. Etiam vitae gravida tortor. Pellentesque tempus et felis at molestie. Nam in fermentum justo.</p>
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
    width: "80%"
  },
  row1card1: {
    backgroundColor: "#E1E1E1",
    border: "none"
  },
  buttonTryItOutToday: {
    backgroundColor: "#00C8AA",
    color: "white",
    width: "200px",
    borderColor: "#00C8AA"
  },
  blogPost: {
    border: "none"
  }
}

export default Landing;
