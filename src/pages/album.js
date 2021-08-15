import React from "react";
import ImageGallery from 'react-image-gallery';
import '../components/style.scss';

const Fotos = (props) => {

  const images = [
    {
      original: require("../assets/rocasfoto19.jpg"),
      thumbnail: require("../assets/rocasfoto19.jpg"),
    },
    {
      original: require("../assets/rocasfoto20.jpg"),
      thumbnail: require("../assets/rocasfoto20.jpg"),
    },
    {
      original: require("../assets/rocasfoto21.jpg"),
      thumbnail: require("../assets/rocasfoto21.jpg"),
    },
    {
      original: require("../assets/rocasfoto22.jpg"),
      thumbnail: require("../assets/rocasfoto22.jpg"),
    },
    {
      original: require("../assets/rocas01.jpeg"),
      thumbnail: require("../assets/rocas01.jpeg"),
    },   
    {
      original: require("../assets/rocas02.jpeg"),
      thumbnail: require("../assets/rocas02.jpeg"),
    },   
    {
      original: require("../assets/rocas03.jpeg"),
      thumbnail: require("../assets/rocas03.jpeg"),
    },   
    {
      original: require("../assets/rocas04.jpeg"),
      thumbnail: require("../assets/rocas04.jpeg"),
    },   
    {
      original: require("../assets/rocas05.jpeg"),
      thumbnail: require("../assets/rocas05.jpeg"),
    },   
    {
      original: require("../assets/rocas06.jpeg"),
      thumbnail: require("../assets/rocas06.jpeg"),
    },   
    {
      original: require("../assets/rocas07.jpeg"),
      thumbnail: require("../assets/rocas07.jpeg"),
    },   
    {
      original: require("../assets/rocas08.jpeg"),
      thumbnail: require("../assets/rocas08.jpeg"),
    },   
    {
      original: require("../assets/rocas09.jpeg"),
      thumbnail: require("../assets/rocas09.jpeg"),
    },   
    {
      original: require("../assets/rocas10.jpeg"),
      thumbnail: require("../assets/rocas10.jpeg"),
    },  
    {
      original: require("../assets/rocas11.jpeg"),
      thumbnail: require("../assets/rocas11.jpeg"),
    }, 
    {
      original: require("../assets/rocas12.jpeg"),
      thumbnail: require("../assets/rocas12.jpeg"),
    },
    {
      original: require("../assets/rocasfoto25.jpeg"),
      thumbnail: require("../assets/rocasfoto25.jpeg"),
    },
    {
      original: require("../assets/rocasfoto26.jpeg"),
      thumbnail: require("../assets/rocasfoto26.jpeg"),
    }
  ]

  return (
    <div>
      <ImageGallery items={images} />
    </div>
  )
};

export default Fotos;