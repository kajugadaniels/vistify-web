import React from 'react'

const PlaceDetails = () => {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Place</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li><a href="#"><i className="lni lni-home"></i> Explore</a></li>
                                <li>Place</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaceDetails