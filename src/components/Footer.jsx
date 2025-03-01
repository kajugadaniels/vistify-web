import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-bottom">
                <div className="container">
                    <div className="inner-content">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-12">
                                <div className="copyright">
                                    <p>
                                        Vistify AI
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <ul className="socila">
                                    <li>
                                        <span>Follow Us On:</span>
                                    </li>
                                    <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                    <li><a href="#"><i className="lni lni-twitter-original"></i></a></li>
                                    <li><a href="#"><i className="lni lni-instagram"></i></a></li>
                                    <li><a href="#"><i className="lni lni-google"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer