import React from 'react'

export default class SocialLinks extends React.Component {

  render() {
    const { initialLinks } = this.props.config;

    const socialLinks = initialLinks.socialLinks.map((obj, idx) => {
      return (
        <li key={idx}>
          <a href={obj.path} className={`icon ${obj.icon} alt`}><span className="label">{obj.name}</span></a>
        </li>
      );
    });
  }

}