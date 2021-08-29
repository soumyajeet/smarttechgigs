import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


import axios from 'axios';



import {
    FormControl,
    Select,
    MenuItem,
    Button
} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 380,
        margin: 15,
        float:'left'
      },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 240,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
    },
}));



function Choosehosting(props) {

    const classes = useStyles();
    const [type, setType] = useState('');
    
    const [hostingData, setHostingData] = useState([]);


    const handleChange = (event) => {
        setType(event.target.value);

    };

    const clkHandler = (val) => {
        window.location.href = val.productAffiliateUrl;
      }

    const addItemHandler = (obj) => {
        //obj.type, obj.usercount, obj.imageheavy, obj.serverControl, obj.emailAcnt

        if (obj.type === '') {
            alert("Please select your website type!")
        } else {
            axios.get('/data/hostings.json')
                .then(res => {
                    setHostingData(res.data);

                });
        }
    }






    return (
        <div className="lower-bg">
            <div className="container">
                <div className="row p-5">
                    <h4>Select the <span className="text-primary">website type</span> from below to get your <span className="text-primary">ideal recommended hosting</span></h4>
                    <Paper variant="outlined">
                        <div>
                            <form>
                                <FormControl className={classes.formControl}>
                                    <Select
                                        value={type}
                                        displayEmpty
                                        onChange={handleChange}>
                                        <MenuItem value="">
                                            <em>Your website type</em>
                                        </MenuItem>
                                        <MenuItem value="Blog">Blog</MenuItem>
                                        <MenuItem value="Ecommerce">eCommerce</MenuItem>
                                        <MenuItem value="Portfolio">Portfolio</MenuItem>
                                        <MenuItem value="Video">Video</MenuItem>
                                    </Select>
                                </FormControl>

                                
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    className={classes.button}
                                    onClick={() => addItemHandler({ "type": type})}
                                >
                                    Next
                                </Button>
                            </form>
                        </div>

                        <div>
                            {hostingData.filter(items => items.hostWebType === type).map(filteredItems => (
                                <Card className={classes.root} key={filteredItems.toolId}>

                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Namecheap"
                                            height="140"
                                            image={filteredItems.productImgUrl}
                                            title="namecheap"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h4">
                                                {filteredItems.productName}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component={'span'}>
                                                {filteredItems.productShortDesc}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button color="secondary" variant="contained" onClick={()=>clkHandler(filteredItems)}> 
                                            Check It Out
                                        </Button>

                                    </CardActions>
                                </Card>
                            ))}
                        </div>
                    </Paper>
                </div>
            </div>
        </div>
    )

}



export default Choosehosting;
