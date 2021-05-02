import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="img">
                            <h1 style={{marginLeft: '50px'}}>AT</h1>
                        </div>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link ms-5" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-5" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-5" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-5" to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item" style={{marginRight: "200px"}}>
                                <Link className="nav-link ms-5" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;