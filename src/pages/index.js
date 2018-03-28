import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import PreviewPost from '../components/PreviewPost';
import Intro from '../components/Intro';

export default function Index({ data }) {
  console.log("data2", data);
  const { edges: posts } = data.allPost;
  console.log("posts", posts)
  return (
    <div>
      <Intro />
      <div id="main">
        <section className="posts">
          {posts
            .map(({ node: post }) => {

              return (

                <PreviewPost key={post.id} post={post} />
              );
            })}
        </section>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query MassivelyIndexQuery {
    allPost {
      edges {
        node {
          title
          updated,
          fields {
            slug,
            date
          }
        }
      }
    }  
  }
`;
