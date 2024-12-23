import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import { Nav } from 'react-bootstrap';
import Loading from './Loading';
import Rating from '@mui/material/Rating';
import {getSecurity} from '../services/services';




const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    margin: 15,
    float: 'left'
  },
});



function Security(props) {
  const classes = useStyles();
  const [security, setSecurity] = useState([]);
  

    
  useEffect(() => {
    getSecurity()
    .then(res => {
      setSecurity(res.data.data);
    })
    .catch((error) => console.error('Error',error))
  }, []);

  if (security) {
    return (
        security.map((tools) => {
        return (
          <>
            <Card className={classes.root} key={tools.toolId}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={tools.productName}
                  height="140"
                  image={tools.productImgUrl}
                  title={tools.productName}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h6">
                    {tools.productName}
                  </Typography>
                  <Rating name="size-medium" value={tools.rating} m={2} readOnly />
                </CardContent>
              </CardActionArea>

              
              
              <CardActions>
                <Nav.Link as={Link} variant="contained" className="button button-yellow" to={`/details/${tools.toolId}`} >
                  View
                </Nav.Link>
              </CardActions>
            </Card>
            
          </>
        )
      })
    )
  } else {
    return (
      <div>
       <Loading />
      </div>

    )
  }

}


export default Security;