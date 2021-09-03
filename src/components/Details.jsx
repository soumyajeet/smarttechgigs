import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import CheckBoxTwoToneIcon from '@material-ui/icons/CheckBoxTwoTone';
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';



function Details(props) {

    const { details } = useParams();
    const [detailsVal, setDetailsVal] = useState([]);


    useEffect(() => {
        axios.get('/data/alldata.json')
            .then(res => {
                console.log(res.data);
                setDetailsVal(res.data);
            })
    }, [])




    return (
        <Container fixed>


            {
                detailsVal.filter(items => items.toolId === details).map((filteredItems, index) => {
                    return (
                        <Box component="span" m={1} key={index}>
                            <h2 className="text-success text-right p-2">{filteredItems.productName}</h2>

                            <Paper elevation={3}>
                                <img src={filteredItems.productImgUrl} className="img-fluid my-3 p-3 img-width" alt={filteredItems.productBaseName} />

                                <h6 className="px-3">Features:</h6>
                                <Box p={2}>

                                    {
                                        filteredItems.features.map((items) => {
                                            return (
                                                <>
                                                    <CheckBoxTwoToneIcon /><span>{items}</span><br />
                                                </>
                                            )
                                        })
                                    }
                                    <hr />
                                    <Grid item sm={6}>
                                        <h4 className="p-2 text-success">{filteredItems.rating} / 5 Rated</h4>
                                        <Rating name="size-medium" defaultValue={filteredItems.rating} m={2} />
                                    </Grid>
                                    <Grid item sm={6}>
                                        <CardActions>
                                            <a variant="contained" className="btn btn-warning" href={filteredItems.productAffiliateUrl} target="_blank" rel="noopener noreferrer">
                                                {props.buttonText}
                                            </a>
                                            
                                        </CardActions>
                                    </Grid>

                                </Box>

                            </Paper>
                        </Box>


                    )

                })
            }

        </Container>
    )
}

Details.defaultProps = {
    buttonText: "See Prices"
}

export default Details;
