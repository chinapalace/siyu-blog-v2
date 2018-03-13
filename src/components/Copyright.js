import React from 'react';


export default class Copyright extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { copyright } = this.props.config;

    return (
      <div id="copyright">
        <ul>
          <li><a target="blank" href="https://justinmclaren.com">{copyright.owner}</a></li>
          <li>Photo: <a target="blank" href="https://unsplash.com/@peterlaster?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadget">Peter Laster</a></li>
          <li>Powered by: <a target="blank" href="https://www.gatsbyjs.org/">GatsbyJS</a></li>
        </ul>
      </div>
    );
  }
}
