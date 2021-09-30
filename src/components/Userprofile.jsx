import React, {useEffect} from 'react';
import Container from '@material-ui/core/Container';



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
