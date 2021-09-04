import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default class Header extends Component {
    render() {
        return (
            <section className="header">
                <nav className="navbar navbar-expand-sm navbar-light justify-content-between">
                    <div className="name">
                        <img src="./images/R.png" alt="" width="200px" height="200px"/>
                        <a className="navbar-brand" href="#">
                            Cinema Booking
                        </a>
                    </div>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-around flex-grow-1"
                        id="collapsibleNavId"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news">
                                    News
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/application">
                                    Application
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="collapse navbar-collapse flex-grow-0"
                        id="collapsibleNavId"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <i className="fa fa-user"></i>
                                <Link className="nav-link btn btn-primary" to="/login">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <i className="fa fa-pen-square"></i>
                                <Link className="nav-link btn btn-success" to="/register">
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
        );
    }
}
