import React from 'react';
import Tags from './Tags';
import Link from 'gatsby-link';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main">
        <section className="post">
          <header className="major">
            {console.log(this.props)}
            <span className="date">{this.props.post.updated}</span>
            <h1>{this.props.post.title}</h1>

          </header>
          <p
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: this.props.post.content }}
          />

          <div className="pagination">
            {this.props.prev &&
              <Link className="previous" to={this.props.prev.frontmatter.path}>
                {this.props.prev.frontmatter.title}
              </Link>}
            {this.props.next &&
              <Link className="next" to={this.props.next.frontmatter.path}>
                {this.props.next.frontmatter.title}
              </Link>}
          </div>
        </section>
      </div>
    );
  }
}