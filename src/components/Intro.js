import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.png'

export default class Intro extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentPath } = this.props;


    return (
      <div id="intro" className="">
        <img className="image-container" id="logo" src={logo} alt="" />
        <h1>Siyu Capital</h1>
        <p>A weekly brief on financial markets curated by daily market watchers</p>

      </div>
    );
  }
}
