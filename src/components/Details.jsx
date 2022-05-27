import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import CheckBoxTwoToneIcon from '@material-ui/icons/CheckBoxTwoTone';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Loading from './Loading';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faClipboard } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import { postReviews, getUserProfileData, getProductsInfo } from '../services/services';


function Details(props) {

    const { details } = useParams();
    const [detailsVal, setDetailsVal] = useState();
    const [open, setOpen] = useState(false);
    const [review, setReview] = useState();
    const [rating, setRating] = useState();
    
    const [txtDisable, setTxtDisable] = useState();

    const [userFullName, setUserFullName] = useState();

            

    

    const loggedInUser = localStorage.getItem('user');
    console.log("loggedInUser", loggedInUser)
    

    function getCurrentUserDetails(loggedInUser) {
        let userEmail = loggedInUser;
        console.log(userEmail)
        getUserProfileData(userEmail)
        .then(res=>{
            setUserFullName(res.data.data.fullname);
        })
        .catch(err=>console.log(err))
    }


    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        console.log("loggedInUser", loggedInUser)
        getCurrentUserDetails(loggedInUser);
        
        getProductsInfo(details)
        .then(res=>{
            setDetailsVal(res.data.data[0]);
        })
        .catch((error)=>console.error(error))

        
    }, [details])

    function handleWriteReview() {
        setOpen(true);
        if (loggedInUser === null) {
            setTxtDisable(true)
        } else {
            setTxtDisable(false)
        }
        console.log("Review writing!")
    }

    function handleClose() {
        setOpen(false);
    }

    
    
    
    
    function submitReview() {
        
        postReviews({
            toolid: details,
            user: userFullName,
            reviews: review,
            rating: rating
        })
            .then(res => {
                console.log(res)
                if (res) {
                    toast('Review Submitted! Wait for approval');
                    setOpen(false);
                }
            })
            .catch(err => console.log(err))
        
    }





    if (detailsVal) {
        return (
            <>
                <div className="container">
                    <ToastContainer />
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
                                        <a variant="contained" className="button button-yellow" href={detailsVal.productAffiliateUrl} target="_blank" rel="noopener noreferrer">
                                            {props.buyButtonText}
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

                    <Box sx={{
                        '& > legend': { mt: 2 },
                    }}>
                        <div className="row mt-5">

                            <div className="col-md-12">
                                <h5 className="text-secondary">Product reviews</h5>
                                <hr />
                                {
                                    
                                    detailsVal.userReviews ?
                                        detailsVal.userReviews.map((val, index) => {
                                    
                                            
                                            return (
                                                <div key={index}>
                                                    <h5 className="text-primary">{val.username}</h5>
                                                    <p><Rating value={val.ratings} readOnly /></p>
                                                    <p>{val.reviews}</p>
                                                    <hr />
                                                </div>
                                            )
                                        })
                                        :
                                        <>
                                            <h5 className="text-center">No Reviews Yet</h5>
                                        </>

                                }
                            </div>

                        </div>
                    </Box>

                    <div className="row my-2">
                        <button className="btn btn-secondary btn-lg" onClick={handleWriteReview}>
                            {props.writeReviewBtn}
                        </button>
                    </div>



                </div>

                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth="true" maxWidth="sm">
                    <DialogTitle id="form-dialog-title"><FontAwesomeIcon icon={faClipboard} /> Write a review</DialogTitle>
                    <DialogContent>

                        <Rating
                            name="simple-controlled"
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                            disabled={txtDisable}
                        />

                        <TextField
                            id="review"
                            label="Write your review."
                            multiline
                            maxRows={4}
                            onChange={e => setReview(e.target.value)}
                            variant="standard"
                            fullWidth={true}
                            disabled={txtDisable}
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={submitReview} color="primary" variant="contained">
                            Submit Review
                        </Button>
                        <Button onClick={handleClose} color="secondary" variant="contained">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>


            </>
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
    buyButtonText: "GET IT NOW",
    writeReviewBtn: "Review this product"
}

export default Details;
