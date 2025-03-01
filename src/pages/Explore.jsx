import React from 'react'
import { Sidebar } from '../components'

const Explore = () => {
    return (
        <div className="row">
            <div className="col-lg-3 col-12">
                <Sidebar />
            </div>
            <div className="col-lg-9 col-12">
                <div className="product-grids-head">
                    <div className="product-grid-topbar">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-8 col-12">
                                <div className="product-sorting">
                                    <label for="sorting">Sort by:</label>
                                    <select className="form-control" id="sorting">
                                        <option>Popularity</option>
                                        <option>Low - High Price</option>
                                        <option>High - Low Price</option>
                                        <option>Average Rating</option>
                                        <option>A - Z Order</option>
                                        <option>Z - A Order</option>
                                    </select>
                                    <h3 className="total-show-product">Showing: <span>1 - 12 items</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane show active fade">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                    <div className="single-product">
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="product-image">
                                                    <img src="https://www.kcc.rw/uploads/9/8/2/4/98249186/dome-business-class-lounge_orig.jpg" alt="#" />
                                                    <div className="button">
                                                        <a href="/place/:id" className="btn">
                                                            <i className="lni lni-cart"></i>
                                                            Add to Wishlist
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-12">
                                                <div className="product-info">
                                                    <span className="category">Restaurant</span>
                                                    <h4 className="title">
                                                        <a href="/place/:id">Pili Pili</a>
                                                    </h4>
                                                    <ul className="review">
                                                        <li><i className="lni lni-star-filled"></i></li>
                                                        <li><i className="lni lni-star-filled"></i></li>
                                                        <li><i className="lni lni-star-filled"></i></li>
                                                        <li><i className="lni lni-star-filled"></i></li>
                                                        <li><i className="lni lni-star"></i></li>
                                                        <li><span>4.0 Review(s)</span></li>
                                                    </ul>
                                                    <div className="price">
                                                        <span>$199.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="pagination left">
                                        <ul className="pagination-list">
                                            <li><a href="#">1</a></li>
                                            <li className="active"><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#"><i
                                                className="lni lni-chevron-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore