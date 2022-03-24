import React, { Component } from 'react'
import Resources from "./resources";
import Learn from './Learn';
import Seewhat from './Seewhat';

export default class Resourcesmain extends Component {
  render() {
    return (
        <>
      <Resources/>
      <Learn/>
      <Seewhat/>
      </>
    )
  }
}
