import React from 'react'

const Sidebar = () => {
    return (
        <div className="product-sidebar">
            <div className="single-widget search">
                <h3>Search Place</h3>
                <form action="#">
                    <input type="text" placeholder="Search Here..." />
                    <button type="submit"><i className="lni lni-search-alt"></i></button>
                </form>
            </div>
            <div className="single-widget">
                <h3>All Categories</h3>
                <ul className="list">
                    <li>
                        <a href="#">Bar </a><span>(1138)</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar