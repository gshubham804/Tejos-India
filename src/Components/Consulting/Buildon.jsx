import React, { Component } from "react";
import "./Buildon.css";
import {RiShip2Line} from 'react-icons/ri'
import {FaRegHeart} from 'react-icons/fa'
import {TiPrinter} from 'react-icons/ti'
import {GiButterfly} from 'react-icons/gi'


export default class Buildon extends Component {
  render() {
    return (
      <div className="buildon-main-container">
        <div class="row">
          <div class="col col-lg-4 col-md-8 col-sm-12 build-column-first">
            <h1>Build On Tezos</h1>
            <p>
              Tezos India is committed to supporting the innovation and growth
              of the Tezos ecosystem.
            </p>
            <p>
              The Ecosystem Growth Grants (EGG) program issues early-stage
              grants to support projects that focus on the following:
            </p>
            <button type="button" class="btn btn-primary btn-lg annual-button">
              Learn More
            </button>
          </div>

          <div class="col col-lg-4 col-md-8 col-sm-12 build-column-second">
            <div class="row product-row">
            <div>
            <RiShip2Line className="buildon-icon"/>
            </div>
              <h3>Product</h3><p>What problem your are solving and how you are solving</p>
            </div>
            <div class="row community-row">
            <div>
            <FaRegHeart className="buildon-icon"/>
            </div>
            <h3>Community</h3>
            <p>How much support you have from the community</p>
            </div>
          </div>
          <div class="col col-lg-4 col-md-8 col-sm-12 build-column-third">
          <div class="row team-row">
          <div>
            <GiButterfly className="buildon-icon"/>
            </div>
              <h3>Team</h3><p>How good your team is and can it build the product that you intend to build</p>
            </div>
            <div class="row scope-row">
            <div>
            <TiPrinter className="buildon-icon"/>
            </div>
            <h3>Scope</h3>
            <p>What do you need to build you product and how we can help you</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
