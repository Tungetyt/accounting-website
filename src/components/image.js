import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

// Note: You can change "images" to whatever you'd like.

const Image = ({ filename, alt }) => (

  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));
      if (!image) {
        return null;
      }

      // const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return <Img alt={alt} fluid={image.node.childImageSharp.fluid} />;
    }}
  />
);

export default Image;
