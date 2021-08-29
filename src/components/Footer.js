import React from 'react';
import {
    Link
  } from "react-router-dom";

export default function Footer() {
    return (
        <div className="container-fluid pb-0 mb-0 justify-content-center">
            <footer className="row text-light bg-dark p-2">
                <div className="col-md-6">Copyright © 2021 Soumyajit Mondal. All Rights Reserved.</div>
                <div className="col-md-6">
                    <div className="float-right">

                        <a className="nav-link text-light float-left" href="https://digismartautomate.com/blog/">Blog</a>
                        
                        <Link className="nav-link text-light float-left" to="/privacy">Privacy Policy</Link>
                        <Link className="nav-link text-light float-left" to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
