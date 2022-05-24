import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { getBannerImages } from '../services/services';
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    image: {
      width: "100%",
      height: 280,
    },
    carousel: {
      marginTop: "10",
    },
  });



const Header = (props) => {

    const iState = [];
    const classes = useStyles();

    let autoplay = true;
    const [images, setImages] = useState(iState);
    const style = {
        textAlign: "center",
        fontSize: "30px"
    };

    useEffect(() => {
        getBannerImages()
            .then(res => {
                let allBanners = res.data;
                setImages(allBanners);
            })
    }, []);



    return (
        <>
            <div className="container-fluid py-5 bg-light">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">

                        <Carousel
                            autoplay={true}
                            animation="slide"
                            indicators={false}
                            navButtonsAlwaysVisible={true}
                            cycleNavigation={true}
                            navButtonsProps={{
                                style: {
                                    background: "#fff",
                                    color: "#494949",
                                    borderRadius: 0,
                                    margin: 0,
                                },
                            }}
                            className={classes.carousel}
                        >
                            {images.map((item) => (
                                <img src={item.imageUrl} alt={item.imageName} className={classes.image} />
                            ))}
                        </Carousel>

                        {/* <Slide autoplay={autoplay}>
                            {images.map(elem => {
                                return (
                                    <div style={style} key={elem.imageId}>
                                        <a href={elem.affiliateUrl}>
                                            <img src={elem.imageUrl} className="img-fluid" alt={elem.imageName} />
                                        </a>
                                    </div>
                                )
                            })}
                        </Slide> */}
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
