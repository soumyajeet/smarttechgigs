import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';


const useStyles = makeStyles({
  root: {
    maxWidth: 380,
    margin: 15,
    float:'left'
  },
});





function Onlinetools(props) {
  const classes = useStyles();

  const [onlineTools, setOnlineTools] = useState('');

  useEffect(() => {
    getAllTools();
  }, []);

  const getAllTools = () => {
    axios.get('/data/hostings.json')
      .then(res => {

        let allTools = res.data;
        setOnlineTools(allTools);
      })
      .catch((error) => console.error('Error'))
  }


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
                <Typography gutterBottom variant="h5" component="h4">
                  {tools.productName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component={'span'}>
                  {tools.productShortDesc}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a variant="contained" className="btn btn-warning" href={`/details/${tools.toolId}`}>
                View
              </a>
            </CardActions>
          </Card>
        )
      })
    )
  } else {
    return (
      <div>
        <h3>No data found</h3>
      </div>
      
    )
  }

}




export default Onlinetools;