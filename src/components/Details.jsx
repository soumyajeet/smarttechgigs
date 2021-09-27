import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import CheckBoxTwoToneIcon from '@material-ui/icons/CheckBoxTwoTone';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Loading from './Loading';
import ReactPlayer from 'react-player';



function Details(props) {

    const { details } = useParams();
    const [detailsVal, setDetailsVal] = useState([]);


    useEffect(() => {
        axios.get(`https://digismartautomate.com/api/productdetails/${details}`)
            .then(res => {
                console.log(res.data[0])
                setDetailsVal(res.data[0]);
            })
    }, [details])



    if (detailsVal) {
        return (
            <div className="container lower-bg">
                <div className="row my-4">
                    <h2 className="text-success text-right p-2">{detailsVal.productName}</h2>

                    <p className="p-3">{detailsVal.productLongDesc}</p>



                    <div className="col-md-6">

                        {

                            detailsVal.videoUrl
                                ?
                                <ReactPlayer url={detailsVal.videoUrl}
                                    playing
                                    width="100%"
                                    height="100%"
                                    controls={false}
                                />

                                : <img src={detailsVal.productImgUrl} className="img-fluid my-3 p-3 img-width" alt={detailsVal.productBaseName} />

                        }
                    </div>
                    <div className="col-md-6">
                        <Paper elevation={3} style={{ padding: "24px" }}>

                            <h4 className="p-2 text-danger">Features:</h4>


                            {detailsVal.features ?
                                detailsVal.features.map((items, i) => {
                                    return (
                                        <>
                                            <CheckBoxTwoToneIcon /><span key={i}>{items}</span><br />
                                        </>
                                    )
                                })

                                :
                                <>
                                    <Loading />
                                </>
                            }
                            <hr />
                            <Grid item sm={6}>

                                <h4 className="p-2 text-success">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bookmark-star-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z" />
                                    </svg>&nbsp;&nbsp;
                                    {detailsVal.rating} / 5 Rated
                                </h4>

                            </Grid>
                            <Grid item sm={6}>
                                <CardActions>
                                    <a variant="contained" className="btn btn-warning" href={detailsVal.productAffiliateUrl} target="_blank" rel="noopener noreferrer">
                                        {props.buttonText}
                                    </a>
                                </CardActions>
                            </Grid>



                        </Paper>
                    </div>
                </div>

            </div>

        )
    } else {
        return (
            <div>
                <Loading />
            </div>

        )
    }
}

Details.defaultProps = {
    buttonText: "See Prices"
}

export default Details;
