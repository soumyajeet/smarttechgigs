import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 380,
      margin: 15,
      float:'left'
    },
  });

export default function Pctools() {

    const classes = useStyles();

    const [pcTools, setPctools] = useState('');

    useEffect(() => {
        getPcTools();
    }, []);

   

    const getPcTools = () => {
        axios.get('/data/pctools.json')
        .then(res=>{
            
            let allPctools = res.data;
            setPctools(allPctools);
        })
    }


    const clkHandler = (val) => {
        window.location.href = val.productAffiliateUrl;
      }

    if (pcTools) {
        return (
            pcTools.map((tools) => {
            
            return (
                
              <Card className={classes.root} key={tools.toolId}>
    
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="razer"
                    height="140"
                    image={tools.productImgUrl}
                    title="razer"
                    className="img-fluid"
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
                  <Button color="secondary" variant="contained" onClick={()=>clkHandler(tools)}>
                    Check It Out
                  </Button>
    
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
