import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { getBannerImages } from '../services/services';


const Header = (props) => {

    const iState = [];
    
    let autoplay = true;
    const [images, setImages] = useState(iState);
    const style = {
        textAlign: "center",
        fontSize: "30px"
    };

    useEffect(() => {
        getBannerImages()
            .then(res => {
                setImages(res.data.data);
            })
    }, []);



    return (
        <>
            <div className="container-fluid py-5 bg-light">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">

                        

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
                    <div className="col-md-2"></div>
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
