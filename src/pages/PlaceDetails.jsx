import React from 'react'

const PlaceDetails = () => {
    return (
        <>
            <section className="item-details">
                <div className="container">
                    <div className="top-area">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="product-images">
                                    <main id="gallery">
                                        <div className="main-img">
                                            <img src="https://www.kcc.rw/uploads/9/8/2/4/98249186/dome-business-class-lounge_orig.jpg" id="current" alt="#" />
                                        </div>
                                        <div className="images">
                                            <img src="https://www.kcc.rw/uploads/9/8/2/4/98249186/dome-business-class-lounge_orig.jpg" className="img" alt="#" />
                                        </div>
                                    </main>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="product-info">
                                    <h2 className="title">
                                        Pili Pili
                                    </h2>
                                    <p className="category">
                                        <i className="lni lni-tag"></i>
                                        Category:
                                        <a href="javascript:void(0)">
                                            Bar
                                        </a>
                                    </p>
                                    <h3 className="price">
                                        2507888888888
                                    </h3>
                                    <p className="info-text">
                                        Description here
                                    </p>
                                    <div className="bottom-content">
                                        <div className="row align-items-end">
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="wish-button">
                                                    <button className="btn"><i className="lni lni-reload"></i> Find Location</button>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="wish-button">
                                                    <button className="btn"><i className="lni lni-heart"></i> To Wishlist</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-details-info">
                        <div className="single-block">
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <div className="info-body custom-responsive-margin">
                                        <h4>Details</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-12">
                                    <div className="info-body">
                                        <div className="col-lg-4">
                                            <h4>Menu</h4>
                                            <ul className="normal-list">
                                                <li><span>Glass of Wine:</span> 6k</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="single-block give-review">
                                    <h4>4.5 (Overall)</h4>
                                    <ul>
                                        <li>
                                            <span>5 stars - 38</span>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                        </li>
                                        <li>
                                            <span>4 stars - 10</span>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star"></i>
                                        </li>
                                        <li>
                                            <span>3 stars - 3</span>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star"></i>
                                            <i className="lni lni-star"></i>
                                        </li>
                                        <li>
                                            <span>2 stars - 1</span>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star"></i>
                                            <i className="lni lni-star"></i>
                                            <i className="lni lni-star"></i>
                                        </li>
                                        <li>
                                            <span>1 star - 0</span>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star"></i>
                                            <i className="lni lni-star"></i>
                                            <i className="lni lni-star"></i>
                                            <i className="lni lni-star"></i>
                                        </li>
                                    </ul>
                                    <button type="button" className="btn review-btn" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                        Leave a Review
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PlaceDetails