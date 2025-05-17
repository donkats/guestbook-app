import React from 'react';
// import { StaticImage } from 'gatsby-plugin-image';

const FullBackground = ({ children }) => (
  <div style={{
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    overflow: 'hidden'
  }}>
    {/* 
    <StaticImage
      src="../images/background-wide.jpg"
      alt="Fullscreen Background"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
      imgStyle={{
        objectFit: 'cover',
        objectPosition: 'center center',
        width: '100%',
        height: '100%',
      }}
      placeholder="blurred"
      layout="fullWidth"
    />
    */}
    <div style={{ position: 'relative', zIndex: 1 }}>
      {children}
    </div>
  </div>
);

export default FullBackground;