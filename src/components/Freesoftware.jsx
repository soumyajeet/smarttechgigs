import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Loading from './Loading';


const useStyles = makeStyles({
    root: {
        maxWidth: 370,
        margin: 15,
        float: 'left'
    },
});

function Freesoftware() {

    const classes = useStyles();
    const [softwareList, setSoftwareList] = useState();



    const getAllSoftware = () => {
        axios.get('https://digismartautomate.com/api/productsinfo/desktop_software')
            .then(res => {

                let allTools = res.data;
                setSoftwareList(allTools);
            })
            .catch((error) => console.error('Error'))


    }

    useEffect(() => {
        getAllSoftware();
    }, []);

   

    if (softwareList) {
        return (
            <div className="container-fluid lower-bg">
                <div className="container p-3">

                    <div className="row">
                        <h3>Get Your <span className="text-primary text-center">Desktop Essential Software.</span> They are <span className="text-danger">FREE</span></h3>
                        <hr />
                        {
                            softwareList.map((tools) => {
                                return (
                                    
                                        <Card className={classes.root} key={tools.toolId}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt="Namecheap"
                                                    height="140"
                                                    image={tools.productImgUrl}
                                                    title="namecheap"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h4">
                                                        {tools.productName}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component={'span'}>
                                                        {tools.productShortDesc}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <a color="secondary" variant="contained" className="btn btn-success" href={tools.productAffiliateUrl} target="_blank" rel="noopener noreferrer">
                                                    Get It Now
                                                </a>

                                            </CardActions>
                                        </Card>
                                    

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )


    } else {
        return (
            <div className="container p-3">
                <Loading />
            </div>
            
        )
    }
}

export default Freesoftware;