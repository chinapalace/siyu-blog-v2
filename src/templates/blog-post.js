import React from 'react';
import Helmet from 'react-helmet';
import Post from '../components/Post';

export default function Template({ data, pathContext }) {
  const { post: post } = data;
  const { next, prev } = pathContext;
  return (
    <Post post={post} next={next} prev={prev} />
  );
}

export const pageQuery = graphql`
query PostQuery($slug: String!) {
  post(fields: { slug: { eq: $slug } }) {
      title,
      content,
      updated
  }  
}
`;
