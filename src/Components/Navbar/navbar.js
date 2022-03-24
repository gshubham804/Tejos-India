import React, { Component } from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

export default class navbar extends Component {
  render() {
    return (
        <>
      <div  className='navbar-container'>
          <div className='navbar-logo' >Brand</div>
          <div className='navbar-wrapper' >
              <div className='navbar-Home'><Link to="/" style={{ textDecoration: 'none',color: '#FFF' }}>Home</Link>  </div> 
              <div className='navbar-Resources'><Link to ="/resources" style={{ textDecoration: 'none',color: '#FFF' }}>Resources</Link></div>
              <div className='navbar-Consulting'><Link to ="/consulting" style={{ textDecoration: 'none',color: '#FFF' }}>Consulting</Link></div>
              <div className='navbar-Blog'><Link to ="/Blog" style={{ textDecoration: 'none',color: '#FFF' }}>Blog</Link></div>
              <div className='navbar-Contact'><Link to ="/Contact" style={{ textDecoration: 'none',color: '#FFF' }}>Contact</Link></div>
          </div>
      </div>
      </>
    )
  }
}
