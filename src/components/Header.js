import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import axios from 'axios';
import { API_URL } from '../globals/config';



const Header = (props) => {

    const iState = [];


    let autoplay = true;
    const [images, setImages] = useState(iState);
    const style = {
        textAlign: "center",
        fontSize: "30px"
    };

    useEffect(() => {
        getBannerImages();
    }, []);

    const getBannerImages = () => {
        axios.get(`${API_URL}/allbanners`)
            .then(res => {
                let allBanners = res.data;
                setImages(allBanners);
            })
    }

    return (
        <>
            <div className="container-fluid py-5 bg-light">
                <div className="row">

                    <div className="col-md-12">
                        
                        <Slide autoplay={autoplay}>
                            {images.map(elem => {
                                return (
                                    <div style={style} key={elem.imageId}>
                                        <a href={elem.affiliateUrl}>
                                            <img src={elem.imageUrl} className="img-fluid" alt={elem.imageName} />
                                        </a>
                                    </div>
                                )
                            })}
                        </Slide>
                    </div>

                </div>
            </div>
        </>
    )
}

Header.defaultProps = {
    title: "Smart",
    tail: "Soft Hub",
    imageAlt: "boost",
    headline: "Tools Those Inspire"
}

export default Header;
