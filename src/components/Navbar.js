import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import classNames from 'classnames';


export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentPath } = this.props;
    const { initialLinks } = this.props.config;

    const navLinks = initialLinks.paths.map((obj, idx) => {
      return (
        <li key={idx} className={obj.path === currentPath ? 'active' : ''}>
          <Link to={obj.path}>{obj.title}</Link>
        </li>
      );
    });

    const socialLinks = initialLinks.socialLinks.map((obj, idx) => {
      return (
        <li key={idx}>
          <a href={obj.path} className={`icon ${obj.icon}`}>
            <span className="label">{obj.name}</span>
          </a>
        </li>
      );
    });
    console.log("navbar", this.props);
    return (

      <nav id="nav">
        <ul className="links">
          <li className={'' === currentPath ? 'active' : ''}>
            <Link to='/'>Home</Link>
          </li>
          <li className={'about' === currentPath ? 'active' : ''}>
            <Link to='/about'>About</Link>
          </li>
          <li className={'newsletter' === currentPath ? 'active' : ''}>
            <Link to='/newsletter'>Newsletter</Link>
          </li>
        </ul>
        <ul className="icons">
          {socialLinks}
        </ul>
      </nav>
    );
  }
}
