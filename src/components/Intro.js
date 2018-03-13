import React from 'react';
import PropTypes from 'prop-types';

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
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="row">
          <form id="email" method="post" action="#">
            <input className="fit" type="email" placeholder="Enter your email" />
            <input id="submit" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
