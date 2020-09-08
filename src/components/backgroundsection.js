import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

/**
 * In this functional component a fullscreen <BackgroundImage />  is created.
 * @param className   string    className(s) from styled-components.
 * @param children    nodes     Child-components.
 * @return {*}
 * @constructor
 */
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

  // Watch out for CSS's stacking order, especially when styling the individual
  // positions! The lowermost image comes last!
  const backgroundFluidImageStack = [
    desktop.childImageSharp.fluid,

  ].reverse();

  return (
    <BackgroundImage
      Tag="section"
      fluid={backgroundFluidImageStack}
      title="Fullscreen Background"
      id="fullscreenbg"
      role="img"
      aria-label="Fullscreen Background"
      preserveStackingContext={true}
      style={{
        // Defaults are overwrite-able by setting one of the following:
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        // backgroundRepeat: '',
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