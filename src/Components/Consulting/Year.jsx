import React, { Component } from 'react'
import './year.css'

export default class year extends Component {
  render() {
    return (
        <>
      <div className='year-main-container'>
          <h1>Year In Review 2021</h1>
          <button type="button" class="btn btn-primary btn-lg annual-button">See Annual Report</button>
      </div>
        </>
    )
  }
}
