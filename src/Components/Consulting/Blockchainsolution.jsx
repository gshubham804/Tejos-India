import React, { Component } from "react";
import "./Blockchainsolution.css";
import Slider from "react-slick";
import Buildon from "./Buildon";
import Year from "./Year.jsx";

export default class Blockchainsolution extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <>
        <div className="blockchain-first-container">
          <div className="blockchain-first-container-text">
            <h5>What Do We Do?</h5>
            <h2>
              Unlock The Web3 World.
              <br />
              Build On Tezos.
              <br />
              Collaborate Worldwide.
            </h2>
            <button class="btn btn-primary blockchain-button" type="submit">
              Learn More
            </button>
          </div>
        </div>

        <div className="blockchain-second-container">
          <div class="row know-row">
            <h5>Know This First</h5>
            <h2>Trusted By The Leading Brands In The Industry</h2>
            <p>
              We have worked with one of the best brand in the industry to bring
              blockchain to the world.
            </p>
          </div>
          <div class="row icon-row">
            <Slider {...settings}>
              <div>
                <div className="blockchain-slider-main-container">
                  <div className="blockchain-slider-image">
                    <img src="https://tezosindia.org.in/wp-content/uploads/2022/01/coindcx_logo.png" />
                  </div>
                </div>
              </div>
              <div>
                <div className="blockchain-slider-main-container">
                  <div className="blockchain-slider-image">
                    <img src="https://tezosindia.org.in/wp-content/uploads/2022/01/Logo-True-Colors.png" />
                  </div>
                </div>
              </div>
              <div>
                <div className="blockchain-slider-main-container">
                  <div className="blockchain-slider-image">
                    <img src="https://tezosindia.org.in/wp-content/uploads/2022/01/89-893360_skoda-logo-2018-png-download-skoda-logo-transparent.jpg" />
                  </div>
                </div>
              </div>
              <div>
                <div className="blockchain-slider-main-container">
                  <div className="blockchain-slider-image">
                    <img src="https://tezosindia.org.in/wp-content/uploads/2022/01/inc42-logo.png" />
                  </div>
                </div>
              </div>
              <div>
                <div className="blockchain-slider-main-container">
                  <div className="blockchain-slider-image">
                    <img src="https://tezosindia.org.in/wp-content/uploads/2022/01/Coincrunch_logo_640_416.png" />
                  </div>
                </div>
              </div>
              <div>
                <div className="blockchain-slider-main-container">
                  <div className="blockchain-slider-image">
                    <img src="https://tezosindia.org.in/wp-content/uploads/2022/01/Lumos-Labs.png" />
                  </div>
                </div>
              </div>
              <div>
                <div className="blockchain-slider-main-container">
                  <div className="blockchain-slider-image">
                    <img src="https://tezosindia.org.in/wp-content/uploads/2022/01/spaces_-LX2wpUXI1eWMY46nkHR_avatar-rectangle.png" />
                  </div>
                </div>
              </div>
              <div>
                <div className="blockchain-slider-main-container">
                  <div className="blockchain-slider-image">
                    <img src="https://tezosindia.org.in/wp-content/uploads/2022/01/58480fd7cef1014c0b5e4943.png" />
                  </div>
                </div>
              </div>
              <div>
                <div className="blockchain-slider-main-container">
                  <div className="blockchain-slider-image">
                    <img src="https://tezosindia.org.in/wp-content/uploads/2022/01/index.png" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div class="row button-row ">
            <div className="button-row-wrapper-blockchain">
              <button class="btn btn-primary blockchain-button" type="submit">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="blockchain-main-container">
          <div class="row row-first">
            <div class="col col-first">
              <h2>Blockchain Solutions By Tezos India</h2>
              <p>
                Tezos India is one of the leading blockchain adoption entities
                in India. We design blockchain strategies for companies and
                developers by working closely with experts and stakeholders in
                the Tezos ecosystem.
              </p>
            </div>
          </div>

          <div class="row row-second">
            <div class="col col-lg-4 col-md-6 col-sm-12 row-col-second">
              <h3>Grants Deployment</h3>
              <p>
                Secure ecosystem grants to support the technical implementation
                of Tezos in your projects.
              </p>
            </div>
            <div class="col col-lg-4 col-md-6 col-sm-12 row-col-second">
              <h3>Development Support</h3>
              <p>
                Get developers for your project from a global pool of Tezos
                blockchain developers, development tools, and open source
                solutions.
              </p>
            </div>
            <div class="col col-lg-4 col-md-6 col-sm-12 row-col-second">
              <h3>Strategic Advisory</h3>
              <p>
                We act as a strategic advisor and partner for all of our
                grantees, ensuring that every project creates maximum impact.
              </p>
            </div>
          </div>

          <div class="row row-third">
            <div class="col col-lg-4 col-md-6 col-sm-12 row-col-third">
              <h3>Project Management</h3>
              <p>
                We assist your team across all stages of your blockchain
                project, from conceptualisation to implementation and launch.
              </p>
            </div>
            <div class="col col-lg-4 col-md-6 col-sm-12 row-col-third">
              <h3>Marketing/PR</h3>
              <p>
                Ensure your blockchain news hits the headlines in India and
                across the globe with our Tezos India marketing, media
                distribution and internal communications support.
              </p>
            </div>
            <div class="col col-lg-4 col-md-6 col-sm-12 row-col-third">
              <h3>Recruitment</h3>
              <p>
                We help you build your team for the projects from the best
                talent pool of the ecosytem.
              </p>
            </div>
          </div>
        </div>
        <Year/>
              <Buildon/>    
        <div className="blockchain-last-container">
          <div class="row blockchain-last-container-row-first">
            <h2>Write To Us</h2>
          </div>
          <div class="row blockchain-last-container-row-second">
            <p>Let's discuss how we can help your project grow faster</p>
          </div>
          <div class="row blockchain-last-container-row-third">
            <div className="blockchain-last-button">
          <button class="btn btn-primary blockchain-button" type="submit">
              Get In Touch
            </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
