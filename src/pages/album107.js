import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// Import all images at the top
import rcs10701 from "../assets/rcs107-01.jpeg";
import rcs10702 from "../assets/rcs107-02.jpeg";
import rcs10703 from "../assets/rcs107-03.jpeg";
import rcs10704 from "../assets/rcs107-04.jpeg";
import rcs10705 from "../assets/rcs107-05.jpeg";
import rcs10706 from "../assets/rcs107-06.jpeg";
import rcs10707 from "../assets/rcs107-07.jpeg";
import rcs10708 from "../assets/rcs107-08.jpeg";
import rcs10709 from "../assets/rcs107-09.jpeg";
import rcs10710 from "../assets/rcs107-10.jpeg";
import rcs10711 from "../assets/rcs107-11.jpeg";
import rcs10712 from "../assets/rcs107-12.jpeg";
import rcs10713 from "../assets/rcs107-13.jpeg";
import rcs10714 from "../assets/rcs107-14.jpeg";
import rcs10715 from "../assets/rcs107-15.jpeg";
import rcs10716 from "../assets/rcs107-16.jpeg";


const images = [
  { original: rcs10701, thumbnail: rcs10701 },
  { original: rcs10702, thumbnail: rcs10702 },
  { original: rcs10703, thumbnail: rcs10703 },
  { original: rcs10704, thumbnail: rcs10704 },
  { original: rcs10705, thumbnail: rcs10705 },
  { original: rcs10706, thumbnail: rcs10706 },
  { original: rcs10707, thumbnail: rcs10707 },
  { original: rcs10708, thumbnail: rcs10708 },
  { original: rcs10709, thumbnail: rcs10709 },
  { original: rcs10710, thumbnail: rcs10710 },
  { original: rcs10711, thumbnail: rcs10711 },
  { original: rcs10712, thumbnail: rcs10712 },
  { original: rcs10713, thumbnail: rcs10713 },
  { original: rcs10714, thumbnail: rcs10714 },
  { original: rcs10715, thumbnail: rcs10715 },
  { original: rcs10716, thumbnail: rcs10716 },
];

const Album107 = () => (
  <div style={{ marginTop: "2rem" }}>
    <ImageGallery items={images} showPlayButton={false} />
  </div>
);

export default Album107;