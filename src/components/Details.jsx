import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import CheckBoxTwoToneIcon from '@material-ui/icons/CheckBoxTwoTone';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Loading from './Loading';
import ReactPlayer from 'react-player';
import {API_URL} from '../globals/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



function Details(props) {

    const { details } = useParams();
    const [detailsVal, setDetailsVal] = useState([]);


    useEffect(() => {
        axios.get(`${API_URL}/productdetails/${details}`)
            .then(res => {
                setDetailsVal(res.data[0]);
            })
    }, [details])



    if (detailsVal) {
        return (
            <div className="container">
                <div className="row my-4">
                            <h2 className="text-success text-right p-2">{detailsVal.productName}</h2>
                            <p className="p-3">{detailsVal.productLongDesc}</p>
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
                                            <FontAwesomeIcon icon={faStar} />&nbsp;&nbsp;
                                            {detailsVal.rating} / 5 Rated
                                        </h4>

                                        <CardActions>
                                            <a variant="contained" className="btn btn-warning" href={detailsVal.productAffiliateUrl} target="_blank" rel="noopener noreferrer">
                                                {props.buttonText}
                                            </a>
                                        </CardActions>
                                    </Grid>
                                   
                                </Paper>
                            </div>

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
    buttonText: "Buy Now"
}

export default Details;
