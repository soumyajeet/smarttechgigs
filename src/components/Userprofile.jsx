import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Loading from './Loading';
//import Avatar from '@material-ui/core/Avatar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getUserProfileData} from '../services/services';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Userprofile() {

    const [userdata, setUserdata] = useState();
    const [updateOpen, setUpdateOpen] = useState(false);
    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        let loggedIn = localStorage.getItem('user');
        if (loggedIn) {
            getUserProfileData(loggedIn)
            .then(res=>{
                setUserdata(res);
            })
            .catch()
        } else {
            toast("Profile Data Is Unavailable!");
        }
    }, [])

    function openUpdatePopup() {
        setUpdateOpen(true);
    }

    function handleClose() {
        setUpdateOpen(false);
    }

    function updateUser() {
        let updateObj = {firstname:firstname, lastname: lastname, mobile: mobile, password: password }
        console.log("Updating", userdata.data.data.emailid+""+updateObj);
        updateUser(updateObj)
        .then(res=>{
            if(res) {
                setUpdateOpen(false);
            } else {
                toast("Not able to update user!");
            }
            
        })
        .catch(function (error) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            if (error.response.status === 404) {
                console.log(error);
                toast("User Doesn't Exist");
            } else if (error.response.status === 400) {
                console.log(error);
                toast("Invalid");
            }
        })
       
    }

    return (
        <Container>
            {userdata ?
                <Box sx={{ flexGrow: 1 }} m={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={9}>

                            <Item>
                                <h3>
                                    My Reviews
                                </h3>
                            </Item>
                            
                        </Grid>
                        <Grid item>
                            {/* <Item>
                                <Avatar />
                            </Item> */}
                            <Item>
                                Email: {userdata.data.data.emailid}
                            </Item>
                            <Item>
                                Name: {userdata.data.data.fullname}
                            </Item>
                            <Item>
                                Mobile: {userdata.data.data.mobile}
                            </Item>
                            <Item>
                                <Button variant="contained" color="success" onClick={openUpdatePopup}>
                                    Update
                                </Button>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
                :
                <Loading />
            }

            {userdata ?
                <Dialog open={updateOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title"> Update {userdata.data.data.emailid} Details</DialogTitle><DialogContent>
                        <TextField
                            margin="dense"
                            id="first-name"
                            label="First Name"
                            type="text"
                            onChange={e => setFirstName(e.target.value)}
                            fullWidth />
                        <TextField
                            margin="dense"
                            id="last-name"
                            label="Last Name"
                            type="text"
                            onChange={e => setLastName(e.target.value)}
                            fullWidth />
                        <TextField
                            margin="dense"
                            id="mobile"
                            label="Mobile"
                            type="number"
                            onChange={e => setMobile(e.target.value)}
                            fullWidth />
                        <TextField
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            fullWidth />
                    </DialogContent><DialogActions>
                        <Button color="primary" variant="contained" onClick={updateUser}>
                            Submit
                        </Button>
                        <Button color="secondary" variant="contained" onClick={handleClose}>
                            Cancel
                        </Button>
                    </DialogActions>

                </Dialog>
                :
                <Loading />
            }


        </Container>
    )
}


export default Userprofile
