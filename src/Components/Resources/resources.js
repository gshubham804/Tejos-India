import React, { Component } from "react";
import "./resources.css";


export default class resources extends Component {
  render() {
    return (
      <>
        <div className="resources-container-first">
          <div className="reources-wanna-chat">
          <h5>Let’s Get Started</h5>
            <div className="get-started"><h2>Get Started With Tezos Development</h2></div>
            <button type="button" class="btn btn-primary resources-button-contact-us">
           <h4> Get Started</h4>
            </button> 
          </div>
          <div className="resources-container-first-image">
            <img src="https://tezosindia.org.in/wp-content/uploads/2022/01/maxresdefault.jpeg" alt="" />
          </div>
        </div>



        <div class="resources-container-second">
          <div class="row ">
            <div class="col-lg-4  resources-container-second-col-first">
            <div className="image-resources-container-second-col-first">
            </div>
            </div>



            <div class="col resources-container-second-column-second">
              <div class="row">
                <h2>Developer’s Handbook</h2>
                <p>This handbook is designed for developers
                with all levels of experience.<br/> Whether you are new to blockchain
                or have some prior experience with other blockchains and want to
                learn Tezos, you will find this handbook helpful.</p>
              </div>
              <div class="row">
                <div class="col easy">
                  <h4>Easy to understand</h4> <p>It is the easiest way to get started with
                  development of Tezos. Built with the learning experience of
                  Tezos developement experts, this handbook will make the
                  learning journey very quick</p>
                </div>
                <div class="col easy">
                  <h4>Developer Focused</h4><p>The Handbook has been developed by experts
                  who have years of development experience on Tezos. The whole
                  handbook is very focused towards developers and getting
                  started with Tezos development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
