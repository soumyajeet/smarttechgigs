import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import Rating from '@material-ui/lab/Rating';
import { Nav } from 'react-bootstrap';
import Loading from './Loading';
import {getAllTools} from '../services/services';



const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    margin: 15,
    float: 'left'
  },
});



function Onlinetools(props) {
  const classes = useStyles();
  const [onlineTools, setOnlineTools] = useState('');

    
  useEffect(() => {
    getAllTools()
    .then(res => {
      let allTools = res.data;
      setOnlineTools(allTools);
    })
    .catch((error) => console.error('Error'))
  }, []);

  if (onlineTools) {
    return (
      onlineTools.map((tools) => {
        return (
          <>
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
                  <Typography gutterBottom variant="h5" component="h6">
                    {tools.productName}
                  </Typography>
                  
                </CardContent>
              </CardActionArea>
              
              <CardActions>
                <Nav.Link as={Link} variant="contained" className="btn btn-warning" to={`/details/${tools.toolId}`} >
                  View
                </Nav.Link>
                <Rating name="size-medium" defaultValue={tools.rating} m={2} />
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


export default Onlinetools;