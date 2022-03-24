import React, { Component } from 'react'
import './Seewhat.css'
import {FiCircle} from 'react-icons/fi'

export default class Seewhat extends Component {
  render(){
    return (
      <>
      <div className='seewhat-container'>
      <h2>See What Else Is There In The Developer Handbook</h2>
      <div className='handbook-container'>
        <div className='image-handbook-container'>
        </div>
      </div>
      <FiCircle className='radio-icon'/>
      <div className='viewmore-container'>
        <h3>View The Developer Handbook</h3>
        <button type="button" class="btn btn-primary view-button">View Now</button>
      </div>
      </div>
      </>
    )
  }
}
