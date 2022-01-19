import React from "react";
import { Link } from "react-router-dom";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <FontAwesomeIcon icon={faFilm} /> 
                    |Movies|
                </Link>
                
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className=" nav-item">
                            <Link className="nav-link" to="/Favourites">
                                Favorites
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/LoginForm">
                                | Log In
                            </Link>
                        </li>
                        <li className=" nav-item">
                            <Link className=" nav-link" to="/RegisterForm">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}