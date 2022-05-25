import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import { Nav } from 'react-bootstrap';
import {showDetails} from '../actions/Action';
import Loading from './Loading';
import Rating from '@mui/material/Rating';


const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    margin: 15,
    float:'left'
  },
});


function Assetlibrary() {
  const classes = useStyles();

  const [onlineTools, setOnlineTools] = useState('');
  
  

  if (onlineTools) {
    return (
      onlineTools.map((tools) => {  
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

const mapStateToProps=state=>({
    
})

const mapDispatchToProps=dispatch=>({
  clkHandler: data=>dispatch(showDetails(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Assetlibrary);