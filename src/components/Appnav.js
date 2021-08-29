import React from 'react';
import {
    Link
} from "react-router-dom";

export default function Appnav(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">


                    <Link className="navbar-brand" to="/">
                        <h3>
                            <span className="text-light">{props.title}</span>&nbsp;<span className="text-dark rounded-logo-bg">{props.tail}</span>
                        </h3>
                    </Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-reorder"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-2"><Link className="nav-link text-light" to="/">Home</Link></li>
                            <li className="nav-item mx-2"><Link className="nav-link text-light" to="/hosting">Ideal Hosting</Link></li>
                            <li className="nav-item mx-2"><Link className="btn btn-warning" to="/freesoftwares">Free Softwares</Link></li>
                        </ul>
                    </div>


                </div>
            </nav>
        </div>
    )
}

Appnav.defaultProps = {
    title: "Smart",
    tail: "Tech Gigs",
    imageAlt: "boost",
    headline: "Tools Those Inspire"
}
