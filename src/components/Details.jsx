import React, {useEffect} from 'react';
import { useLocation, useParams } from "react-router-dom";


function Details(props) {

    const { details } = useParams();

    useEffect(() => {
        console.log(details)
        return () => {
           
        }
    }, [])

    return (
        <div className="container">
           <h1>Details</h1> 
           
           
        </div>
    )
}

export default Details;
