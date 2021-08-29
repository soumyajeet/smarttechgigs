import React from 'react';
import {
    Link
  } from "react-router-dom";

export const Lower = (props) => {
    return (
        <div className="products" id="signup">
            <div className="container" >

                <h1 className="text-center text-light p-3">Auto Funnels Solution...</h1>
                <div className="row">

                    <div className="col-md-8">
                        <div className="p-4">


                            <h4 className="text-left text-light"><i className="text-success icon-check"></i>&nbsp;&nbsp;Customized high converting sales funnel.</h4>
                            <h4 className="text-left text-light"><i className="text-success icon-check"></i>&nbsp;&nbsp;High Converting Sales Copy For Your Funnel.</h4>
                            <h4 className="text-left text-light"><i className="text-success icon-check"></i>&nbsp;&nbsp;Mobile ready, adaptive to every screen resolution.</h4>
                            <h4 className="text-left text-light"><i className="text-success icon-check"></i>&nbsp;&nbsp;Customer information will be secured and encrypted.</h4>
                            <h4 className="text-left text-light"><i className="text-success icon-check"></i>&nbsp;&nbsp;Setup best AUTORESPONDER and email campaign for your business.</h4>






                        </div>


                    </div>
                    <div className="col-md-4 mt-n5">

                        <img src="images/work4-removebg-preview.png" className="img-fluid" alt={props.imageAlt}/>


                    </div>

                </div>

                <div className="row">
                    <h4 className="text-center text-light">Click on the button below for the solution.</h4>
                    <div className="col-md-12">
                        <p className="text-center"><Link className="btn btn-primary btn-xlarge" target="_blank" to="/autofunnels"><i className="icon-external-link"></i>&nbsp;Check Out Now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}



Lower.defaultProps = {
    imageAlt: "funnel"
}
