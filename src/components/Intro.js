import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.png'

export default class Intro extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentPath } = this.props;
    const { name } = this.props.config;
    const description = this.props.config.introText[currentPath];

    return (
      <div id="intro" className="">
        <img className="image-container" id="logo" src={logo} alt="" />
        <h1>{name}</h1>
        <p>A weekly brief on financial markets curated by daily market watchers</p>
        <div className="row">
          <form id="email" method="post" action="#">
            <input size="50" className="fit" type="email" placeholder="One email a week no spam" />
            <input id="submit" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
