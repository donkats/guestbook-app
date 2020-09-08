import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';


const FullBackground = ({ children }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "background-wide.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 3310) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `);
    

  return (
    <BackgroundImage
      Tag="section"
      fluid={desktop.childImageSharp.fluid}
      title="Fullscreen Background"
      id="fullscreenbg"
      role="img"
      aria-label="Fullscreen Background"
      preserveStackingContext={true}
      style={{

        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      {children}
    </BackgroundImage>
  );
};

const StyledFullBackground = styled(FullBackground)`
`;

export default StyledFullBackground