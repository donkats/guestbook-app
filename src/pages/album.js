import React from "react";
import ImageGallery from 'react-image-gallery';
import '../components/style.scss';

const Fotos = (props) => {

  const images = [
    {
      original: require("../assets/rcs01.jpeg"),
      thumbnail: require("../assets/rcs01.jpeg"),
    },
    {
      original: require("../assets/rcs02.jpeg"),
      thumbnail: require("../assets/rcs02.jpeg"),
    },
    {
      original: require("../assets/rcs03.jpeg"),
      thumbnail: require("../assets/rcs03.jpeg"),
    },
    {
      original: require("../assets/rcs04.jpeg"),
      thumbnail: require("../assets/rcs04.jpeg"),
    },
    {
      original: require("../assets/rcs05.jpeg"),
      thumbnail: require("../assets/rcs05.jpeg"),
    },
    {
      original: require("../assets/rcs06.jpeg"),
      thumbnail: require("../assets/rcs06.jpeg"),
    },
    {
      original: require("../assets/rcs07.jpeg"),
      thumbnail: require("../assets/rcs07.jpeg"),
    },
    {
      original: require("../assets/rcs08.jpeg"),
      thumbnail: require("../assets/rcs08.jpeg"),
    },
    {
      original: require("../assets/rcs09.jpeg"),
      thumbnail: require("../assets/rcs09.jpeg"),
    },
    {
      original: require("../assets/rcs10.jpeg"),
      thumbnail: require("../assets/rcs10.jpeg"),
    },
    {
      original: require("../assets/rcs11.jpeg"),
      thumbnail: require("../assets/rcs11.jpeg"),
    },
    {
      original: require("../assets/rcs12.jpeg"),
      thumbnail: require("../assets/rcs12.jpeg"),
    },
    {
      original: require("../assets/rcs13.jpeg"),
      thumbnail: require("../assets/rcs13.jpeg"),
    },
    {
      original: require("../assets/rcs14.jpeg"),
      thumbnail: require("../assets/rcs14.jpeg"),
    },
    {
      original: require("../assets/rcs15.jpeg"),
      thumbnail: require("../assets/rcs15.jpeg"),
    },
    {
      original: require("../assets/rcs16.jpeg"),
      thumbnail: require("../assets/rcs16.jpeg"),
    },
    {
      original: require("../assets/rcs17.jpeg"),
      thumbnail: require("../assets/rcs17.jpeg"),
    },
    {
      original: require("../assets/rcs18.jpeg"),
      thumbnail: require("../assets/rcs18.jpeg"),
    },
    {
      original: require("../assets/rcs19.jpeg"),
      thumbnail: require("../assets/rcs19.jpeg"),
    }
  ]

  return (
    <div>
      <ImageGallery items={images} />
    </div>
  )
};

export default Fotos;