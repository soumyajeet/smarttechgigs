import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import CheckBoxTwoToneIcon from '@material-ui/icons/CheckBoxTwoTone';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Loading from './Loading';



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
            <Container fixed>

                <Box component="span" m={1}>
                    <h2 className="text-success text-right p-2">{detailsVal.productName}</h2>

                    <p className="p-3">{detailsVal.productLongDesc}</p>

                    <Paper elevation={3}>
                        <img src={detailsVal.productImgUrl} className="img-fluid my-3 p-3 img-width" alt={detailsVal.productBaseName} />

                        

                        <h6 className="px-3">Features:</h6>
                        <Box p={2}>

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
                                <h4 className="p-2 text-success">{detailsVal.rating} / 5 Rated</h4>
                               
                            </Grid>
                            <Grid item sm={6}>
                                <CardActions>
                                    <a variant="contained" className="btn btn-warning" href={detailsVal.productAffiliateUrl} target="_blank" rel="noopener noreferrer">
                                        {props.buttonText}
                                    </a>
                                </CardActions>
                            </Grid>

                        </Box>

                    </Paper>
                </Box>


            </Container>

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
