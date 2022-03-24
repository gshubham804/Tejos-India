import React, { Component } from "react";
import "./learn.css";
import {AiFillPlayCircle} from 'react-icons/ai'

export default class Learn extends Component {
  render() {
    return (
      <>
        <div className="learn-container">
          <h1>Learn More About Tezos</h1>
          <div className="card-section">
            <div class="card">
              <div className="image-container">
              <AiFillPlayCircle className="play-button"/>
                <img
                  src="https://images.unsplash.com/photo-1565292540769-5b33e87f93f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h3> Introduction To Tezos</h3>
                <p class="card-text">
                  Get familiar with Tezos, its features, and what makes it a
                  unique one-of-a-kind cryptocurrency and smart-contract
                  platform in this 3 part video series brought to you by Tezos
                  India.
                </p>
              </div>
            </div>

            <div class="card">
              <div className="image-container">
              <AiFillPlayCircle className="play-button"/>
                <img
                  src="https://images.unsplash.com/photo-1565291981226-1283441a98ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h3>How Baking Works In Tezos?</h3>
                <p class="card-text">
                  Baking in Tezos is equivalent to what Mining is in Bitcoin.
                  Bakers participate in the Tezos network by performing the
                  process of Baking.
                </p>
              </div>
            </div>

            <div class="card">
              <div className="image-container">
                  <AiFillPlayCircle className="play-button"/>
                <img
                  src="https://images.unsplash.com/photo-1565406074930-ac3ae876f182?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  class="card-img-top"
                  alt="..."
                  />
              </div>
              <div class="card-body">
                <h3>How Self Amendment Works In Tezos?</h3>
                <p class="card-text">
                  Learn about how self-amendment works in Tezos which enables
                  the Tezos protocol to evolve seamlessly over time without the
                  need of any fork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
