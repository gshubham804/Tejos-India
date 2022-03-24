import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="first-container">
          <div className="wanna-chat">
            Wanna Chat?
            <div className="get-in-touch">Get In Touch</div>
            <button type="button" class="btn btn-primary button-contact-us">
              Contact us
            </button>
          </div>
        </div>
        <div class="second-container">
          <div class="row">
            <div class="col column-first">
              <div className="contact"><h3>Contact</h3></div>
              <p>
                If you’re passionate about development on tezos and think you
                have what it takes, please reach out to us at
                hello@tezosindia.foundation for all opportunities.
              </p>
              <div className="for-projects">For Projects</div>
              <p>hello@tezosindia.foundation</p>
              <div className="for-partnerships">For Partnerships</div>
              <p>hello@tezosindia.foundation</p>
            </div>

            <div class="col column-second">
              <div className="connect">Connect</div>
              <div className="social-platform">
              <div className="social-twitter">Twitter</div>
              <div className="social-discord">Discord</div>
              <div className="social-telegram">Telegram</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
