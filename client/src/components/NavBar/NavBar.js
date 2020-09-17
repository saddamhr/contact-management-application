import React from 'react';
import { BrowserRouter as Link, NavLink } from "react-router-dom";

import './NavBar.css'

const NavBar = () => {
    return (
        <div style={{background: '#1BCE7C', color: '#fff'}} className="container" id="NavBar-sec">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        {/* <Link className="navbar-brand" to="/"> */}
                            {/* <img className="green-logo navbar-brand" src={logo} alt="Logo" /> */}
                            {/* SINGLE PARENTS */}
                        {/* </Link> */}
                        {/* <a className="navbar-brand" href="#">
                            <Link to="/">LOGO</Link>
                        </a> */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto" style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
                            <li class="nav-item">
                                    <NavLink className="nav-link NavBar-item" to="/">Home</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink className="nav-link NavBar-item" to="/signup">Signup</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink className="nav-link NavBar-item" to="/signin">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link NavBar-item" to="/person-details">Person Details</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link NavBar-item" to="/add-person">Add Person</NavLink>
                                </li>

                            </ul>
                        </div>

                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;