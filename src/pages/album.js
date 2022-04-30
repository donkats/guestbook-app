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
      original: require("../assets/rocasnieuw1.jpeg"),
      thumbnail: require("../assets/rocasnieuw1.jpeg"),
    },   
    {
      original: require("../assets/rocasnieuw2.jpeg"),
      thumbnail: require("../assets/rocasnieuw2.jpeg"),
    },   
    {
      original: require("../assets/rocasnieuw3.jpeg"),
      thumbnail: require("../assets/rocasnieuw3.jpeg"),
    },   
    {
      original: require("../assets/rocasnieuw4.jpeg"),
      thumbnail: require("../assets/rocasnieuw4.jpeg"),
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
      original: require("../assets/rocasnieuw9.jpeg"),
      thumbnail: require("../assets/rocasnieuw9.jpeg"),
    },   
    {
      original: require("../assets/rocasnieuw10.jpeg"),
      thumbnail: require("../assets/rocasnieuw10.jpeg"),
    },  
    {
      original: require("../assets/rocasnieuw11.jpeg"),
      thumbnail: require("../assets/rocasnieuw11.jpeg"),
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