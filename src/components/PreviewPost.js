import React from 'react';
import Link from 'gatsby-link';

export default class PreviewPost extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("props", this.props.post);
    return (
      <article>
        <header>
          <span className="date">{this.props.post.fields.date}</span>
          <h2>
            {/* <Link to={this.props.post.frontmatter.path}>
              
            </Link> */}
            {this.props.post.fields.slug}
          </h2>
        </header>
        <p>
          {/* {this.props.post.excerpt} */}
        </p>
        <ul className="actions">
          <li>
            <Link to={this.props.post.fields.slug} className="button">Full Story</Link>
          </li>
        </ul>
      </article>
    );
  }
}