import React, { useState, useEffect } from 'react';
import {
    Link,
    withRouter
} from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Appnav(props) {



    const [open, setOpen] = useState(false);
    const [erroropen, setErrorOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setFullname] = useState('');

    const [user, setUser] = useState();

    const [login, setLogin] = useState();



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setErrorOpen(false);
    };

    const logOut = () => {
        localStorage.clear();
        setLogin();
    }


    const signup = (e) => {
        if (email === '') {
            console.log("Form field missing");
            toast("Email is mandatory!");
        } else {
            axios.post(`https://digismartautomate.com/api/registration`, { email: email, name: name })
                .then(res => {
                    console.log(res.data);
                    if (!res) {
                        toast("An unexpected error occurred");
                    } else {
                        setUser(res.data.emailid)
                        localStorage.setItem('user', res.data.emailid);
                        setOpen(false);
                        toast("Membership successful!");
                    }


                })
                .catch(function (error) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    if (error.response.status === 404) {
                        console.log(error);
                        toast(error.response.data.msg);
                    } else if (error.response.status === 400) {
                        console.log(error);
                        toast(error.response.data.msg);
                    }
                });
        }


    }


    useEffect(() => {
        let loggedIn = localStorage.getItem('user');
        setLogin(loggedIn);
    }, [])



    return (
        <>
            <ToastContainer />

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">{props.title}&nbsp;{props.tail}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/freesoftwares">Free Softwares</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>



                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>


                            <Nav variant="outlined" color="primary" onClick={handleClickOpen} style={{ 'cursor': 'pointer' }}>Free Membership</Nav>


                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Become a FREE member to get exclusive deals, coupons, information and many more..</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="fullname"
                        label="Full Name"
                        type="text"
                        onChange={e => setFullname(e.target.value)}
                        fullWidth
                    />


                </DialogContent>
                <DialogActions>
                    <Button onClick={signup} color="primary" variant="contained">
                        Sign Up
                    </Button>
                    <Button onClick={handleClose} color="secondary" variant="contained">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={erroropen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>User Does Not Exist</DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

Appnav.defaultProps = {
    title: "Smart",
    tail: "Soft Hub",
    imageAlt: "boost",
    headline: "Tools Those Inspire"
}

export default withRouter(Appnav)