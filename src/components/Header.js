import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import axios from 'axios';





const Header = (props) => {

    const iState = [
        {
            "imageUrl": "/images/freedotcomdomain.png",
            "imageName": "Free .com domain",
            "imageId": "BANNER1",
            "affiliateUrl": "https://namecheap.pxf.io/c/2733920/1124617/5618"
        }, {
            "imageUrl": "/images/bundleoffers.png",
            "imageName": "Bundle offers",
            "imageId": "BANNER2",
            "affiliateUrl": "https://namecheap.pxf.io/c/2733920/738168/5618"
        }
    ]

    let autoplay = true;


    const [images, setImages] = useState(iState);


    const style = {
        textAlign: "center",
        fontSize: "30px"
    }

    useEffect(() => {
        getBannerImages();
    }, []);

    const getBannerImages = () => {
        axios.get('/data/bannerimages.json')
            .then(res => {
                let allBanners = res.data;
                setImages(allBanners);
            })
    }


    return (
        <>

            <div className="container">






                <div className="container py-5">

                    <div className="row">
                        <div className="col-md-12">
                            <div>

                               

                                <Slide autoplay={autoplay}>
                                
                                    {images.map(elem=> {
                                        
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

                </div>
            </div>
        </>
    )
}

Header.defaultProps = {
    title: "Smart",
    tail: "Tech Gigs",
    imageAlt: "boost",
    headline: "Tools Those Inspire"
}

export default Header;
