import React from "react";

const Header = () => {
    return (
        <header className="header navbar-area">
            <div className="topbar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="top-left">
                                <ul className="menu-top-link">
                                    <li>
                                        <div className="select-position">
                                            <select id="select4">
                                                <option value="0" selected>$ USD</option>
                                                <option value="1">€ RWF</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="select-position">
                                            <select id="select5">
                                                <option value="0" selected>English</option>
                                                <option value="1">French</option>
                                            </select>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="top-middle">
                                <ul className="useful-links">
                                    <li><a href="/">Explore</a></li>
                                    <li><a href="/">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="top-end">
                                <ul className="user-login">
                                    <li>
                                        <a href="/">Sign In</a>
                                    </li>
                                    <li>
                                        <a href="/">Register</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;
