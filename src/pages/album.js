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
            original: require("../assets/rocasfoto09.jpg"),
            thumbnail: require("../assets/rocasfoto09.jpg"),
        },
        {
            original: require("../assets/rocasfoto16.jpg"),
            thumbnail: require("../assets/rocasfoto16.jpg"),
        },
        {
            original: require("../assets/rocasfoto04.jpg"),
            thumbnail: require("../assets/rocasfoto04.jpg"),
        },
        {
            original: require("../assets/rocasfoto05.jpg"),
            thumbnail: require("../assets/rocasfoto05.jpg"),
        },
        {
            original: require("../assets/rocasfoto06.jpg"),
            thumbnail: require("../assets/rocasfoto06.jpg"),
        },
        {
            original: require("../assets/rocasfoto11.jpg"),
            thumbnail: require("../assets/rocasfoto11.jpg"),
        },
        {
            original: require("../assets/rocasfoto18.jpg"),
            thumbnail: require("../assets/rocasfoto18.jpg"),
        },
        {
            original: require("../assets/rocasfoto17.jpg"),
            thumbnail: require("../assets/rocasfoto17.jpg"),
        },
        {
            original: require("../assets/rocasfoto02.jpg"),
            thumbnail: require("../assets/rocasfoto02.jpg"),
        },
        {
            original: require("../assets/rocasfoto14.jpg"),
            thumbnail: require("../assets/rocasfoto14.jpg"),
        },
        {
            original: require("../assets/rocasfoto07.jpg"),
            thumbnail: require("../assets/rocasfoto07.jpg"),
        },
        {
            original: require("../assets/rocasfoto12.jpg"),
            thumbnail: require("../assets/rocasfoto12.jpg"),
        },
        {
            original: require("../assets/rocasfoto08.jpg"),
            thumbnail: require("../assets/rocasfoto08.jpg"),
        },
        {
            original: require("../assets/rocasfoto13.jpg"),
            thumbnail: require("../assets/rocasfoto13.jpg"),
        },

        {
            original: require("../assets/rocasfoto01.jpg"),
            thumbnail: require("../assets/rocasfoto01.jpg"),
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