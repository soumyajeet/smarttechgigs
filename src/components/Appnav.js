import React, { useState, useEffect } from 'react';
import {
    Link,
    withRouter
} from "react-router-dom";
import { Navbar, Container, NavDropdown } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClipboard, faUserTimes, faUserCog, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import {logIn, registration} from '../services/services';


function Appnav(props) {
    
    const [open, setOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState();

    const [login, setLogin] = useState();



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleLoginClickOpen = () => {
        setLoginOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setLoginOpen(false);
    };

    const logOut = () => {
        localStorage.clear();
        setLogin('');
        setUser('');
        props.history.push('/')
    }



    const signin = () => {
        if (email === '' || password === '') {
            toast("Email or Password is missing!");
        } else {
            let obj = { email: email, password: password }
            logIn(obj)
                .then(res => {
                    console.log(res.data);
                    if (!res) {
                        toast("An unexpected error occurred");
                    } else {
                        setUser(email)
                        localStorage.setItem('user', email);
                        setLogin(localStorage.getItem('user'));
                        console.log(user);
                        setLoginOpen(false);
                        toast("Login successful!");
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
                        toast("Invalid Credentials");
                    }
                });
        }
    }


    const signup = (e) => {
        if (email === '' || password === '') {
            toast("Email or Password is missing!");
        } else {
            let regObj = { email: email, firstname: firstname, lastname: lastname, password: password };
            registration(regObj)
                .then(res => {
                    console.log(res.data);
                    if (!res) {
                        toast("An unexpected error occurred");
                    } else {
                        //setUser(res.data.emailid)
                        //localStorage.setItem('user', res.data.emailid);
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
        setLogin(localStorage.getItem('user'));
    }, [])

    const getProfile = () => {
        props.history.push('/profile')
    }

    return (
        <>
            <ToastContainer />
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">{props.title}&nbsp;{props.tail}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    {/* <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse> */}
                    
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                        
                            <NavDropdown title="Membership" id="basic-nav-dropdown">
                                
                                {login ?
                                    <>
                                        <NavDropdown.Item style={{ 'cursor': 'pointer', 'color': '#000' }}>
                                            <FontAwesomeIcon icon={faUserCheck} /> Welcome {login}
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={getProfile} style={{ 'cursor': 'pointer', 'color': '#000' }}>
                                            <FontAwesomeIcon icon={faUserCog} />  Profile
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={logOut} style={{ 'cursor': 'pointer', 'color': '#000' }}>
                                            <FontAwesomeIcon icon={faUserTimes} />  Log Out
                                        </NavDropdown.Item>
                                    </>
                                    :
                                    <>
                                        <NavDropdown.Item onClick={handleLoginClickOpen} style={{ 'cursor': 'pointer', 'color': '#000' }}>
                                            <FontAwesomeIcon icon={faUser} /> Log In
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={handleClickOpen} style={{ 'cursor': 'pointer', 'color': '#000' }}>
                                            <FontAwesomeIcon icon={faClipboard} /> Register
                                        </NavDropdown.Item>
                                    </>
                                }
                            </NavDropdown>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"><FontAwesomeIcon icon={faClipboard} /> Become a FREE member to get exclusive deals, coupons, information and many more..</DialogTitle>
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
                        id="firstname"
                        label="First Name"
                        type="text"
                        onChange={e => setFirstname(e.target.value)}
                        fullWidth
                    />

                    <TextField
                        margin="dense"
                        id="lastname"
                        label="Last Name"
                        type="text"
                        onChange={e => setLastname(e.target.value)}
                        fullWidth
                    />

                    <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
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


            <Dialog open={loginOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"><FontAwesomeIcon icon={faUser} /> Log In</DialogTitle>
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
                        id="password"
                        label="Password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        fullWidth
                    />


                </DialogContent>
                <DialogActions>
                    <Button onClick={signin} color="primary" variant="contained">
                        Log in
                    </Button>
                    <Button onClick={handleClose} color="secondary" variant="contained">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

Appnav.defaultProps = {
    title: "Mega Digital Mart",
    tail: "",
    imageAlt: "boost",
    headline: "Tools Those Inspire"
}

export default withRouter(Appnav)