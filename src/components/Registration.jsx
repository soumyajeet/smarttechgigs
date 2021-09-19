import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '20rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Registration() {

    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState();

    const signup = () => {
        axios.post(`https://digismartautomate.com/api/registration`,{emailid:email , username: username, password: password })
            .then(res => {
                console.log(res.data);
                setMessage(res.data);
            })
            .catch(function (error) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                if (error.response.status === 400) {
                    console.log("Registration Successfully");
                }
            });
    }

    return (
        <Container fixed>
            <Box m={2} p={2}>
                <Card p={2}>
                    <h2>User Registration</h2>
                    <h5>{message}</h5>
                    <form className={classes.root} autoComplete="off">
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                            fullWidth
                        />

                        <TextField
                            margin="dense"
                            id="username"
                            label="Username"
                            type="text"
                            onChange={e => setUsername(e.target.value)}
                            fullWidth
                        />

                        <TextField
                            id="password"
                            margin="dense"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            onChange={e => setPassword(e.target.value)}
                            fullWidth
                        />

                        <Button onClick={signup} color="primary" variant="contained">
                            Sign Up
                        </Button>


                    </form>
                </Card>
            </Box>

        </Container>
    )
}
