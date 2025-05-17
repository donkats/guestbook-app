import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// Import all images at the top
import rcs01 from "../assets/rcs01.jpeg";
import rcs02 from "../assets/rcs02.jpeg";
import rcs03 from "../assets/rcs03.jpeg";
import rcs04 from "../assets/rcs04.jpeg";
import rcs05 from "../assets/rcs05.jpeg";
import rcs06 from "../assets/rcs06.jpeg";
import rcs07 from "../assets/rcs07.jpeg";
import rcs08 from "../assets/rcs08.jpeg";
import rcs09 from "../assets/rcs09.jpeg";
import rcs10 from "../assets/rcs10.jpeg";
import rcs11 from "../assets/rcs11.jpeg";
import rcs12 from "../assets/rcs12.jpeg";
import rcs13 from "../assets/rcs13.jpeg";
import rcs14 from "../assets/rcs14.jpeg";
import rcs15 from "../assets/rcs15.jpeg";
import rcs16 from "../assets/rcs16.jpeg";
import rcs17 from "../assets/rcs17.jpeg";
import rcs18 from "../assets/rcs18.jpeg";
import rcs19 from "../assets/rcs19.jpeg";

const images = [
  { original: rcs01, thumbnail: rcs01 },
  { original: rcs02, thumbnail: rcs02 },
  { original: rcs03, thumbnail: rcs03 },
  { original: rcs04, thumbnail: rcs04 },
  { original: rcs05, thumbnail: rcs05 },
  { original: rcs06, thumbnail: rcs06 },
  { original: rcs07, thumbnail: rcs07 },
  { original: rcs08, thumbnail: rcs08 },
  { original: rcs09, thumbnail: rcs09 },
  { original: rcs10, thumbnail: rcs10 },
  { original: rcs11, thumbnail: rcs11 },
  { original: rcs12, thumbnail: rcs12 },
  { original: rcs13, thumbnail: rcs13 },
  { original: rcs14, thumbnail: rcs14 },
  { original: rcs15, thumbnail: rcs15 },
  { original: rcs16, thumbnail: rcs16 },
  { original: rcs17, thumbnail: rcs17 },
  { original: rcs18, thumbnail: rcs18 },
  { original: rcs19, thumbnail: rcs19 },
];

const Album = () => (
  <div style={{ marginTop: "2rem" }}>
    <ImageGallery items={images} showPlayButton={false} />
  </div>
);

export default Album;