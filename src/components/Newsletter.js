import React, { useState } from 'react';
import axios from 'axios';


export const Newsletter = () => {

    const [fullName, setFullName] = useState("");
    const [emailId, setEmailId] = useState("");

    const grabIt = (e) => {
        
        e.preventDefault();

        if(emailId==='' || emailId==null) {
			alert('Email is required!');
			return false;
		}

        var aweberObj = {
			"email": emailId,		
			"name": fullName,
			"status": "Active",
			"niche": null,
			"connect" : null
		};

		

        axios({
            method: 'post',
            url: 'https://digismartautomate.com/savedata.php',
            data: JSON.stringify(aweberObj)
        })
        .then(res => this.setState({ recipes: res.data }));
    }

    return (

        <div className="container-fluid bg-gray-100">
            <div className="container p-4">
                <h4 className="text-center heading-color p-3">Sign Up For Free Consultation.</h4>
                <h5 className="text-center heading-color p-1">Also Get ONE Social Media Ad Guide FREE.</h5>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-center">
                        <div className="form-inline row">
                            <div className="col-md-4 p-1">
                                <div className="input-group">
                                    <div className="input-group-text"><i className="icon-user"></i></div>
                                    <input type="text" className="form-control" placeholder="Enter your full name ..." value={fullName} onChange={(e)=>setFullName(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-md-4 p-1">
                                <div className="input-group">
                                    <div className="input-group-text"><i className="icon-envelope"></i></div>
                                    <input type="email" className="form-control" placeholder="Enter your email address ..." value={emailId} onChange={(e)=>setEmailId(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-md-4 p-1">
                                <div className="float-center">
                                    <div className="input-group ">
                                        <button className="btn btn-primary btn-lg" onClick={grabIt}>Sign Up</button>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className="col-md-2"></div>

                </div>
            </div>
        </div>

    )
}
