import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import axios from 'axios';




function Userprofile() {

  
             
    useEffect(()=>{
        let loggedIn = localStorage.getItem('user');
       console.log(loggedIn);
    },[])
     
    return (
        
        <Container fixed>
           
            
            
        </Container>
    )
}


export default Userprofile
