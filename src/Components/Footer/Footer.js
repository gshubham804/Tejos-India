import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div class="main">
          <div style={{ margin: "0" }} class="row footer-row">
            <div class="col  column footer-column-first">
              <div><h3>Brand</h3></div>
              <p>
                Copyright © 2022 Tezos India Built with love in India All rights
                reserved.
              </p>
            </div>
            <div class="col column second">
              <div className="footer-Events">Events</div>
              <div className="footer-Resources">Resources</div>
              <div className="footer-Consulting">Consulting</div>
              <div className="footer-Blog">Blog</div>
              <div className="footer-Contact">Contact</div>
            </div>
            <div class="col column third">
              <h5>Recent Post</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
