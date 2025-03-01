import React, { useEffect, useState } from "react";
import { Sidebar } from "../components";
import { getPlaces } from "../api.js";

const Explore = () => {
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const placesPerPage = 7;

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await getPlaces();
                setPlaces(response.data);
                setFilteredPlaces(response.data);
            } catch (error) {
                console.error("Error fetching places:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPlaces();
    }, []);

    // Handle live search
    const handleSearch = (query) => {
        if (query.length > 0) {
            const searchedPlaces = places.filter((place) =>
                place.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredPlaces(searchedPlaces);
        } else {
            setFilteredPlaces(places);
        }
    };

    // Handle category filter
    const handleFilterByCategory = (categoryId) => {
        if (!categoryId) {
            setFilteredPlaces(places);
        } else {
            const filtered = places.filter((place) => place.category_detail?.id === categoryId);
            setFilteredPlaces(filtered);
        }
        setCurrentPage(1); // Reset pagination
    };

    // Pagination logic
    const indexOfLastPlace = currentPage * placesPerPage;
    const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
    const currentPlaces = filteredPlaces.slice(indexOfFirstPlace, indexOfLastPlace);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="row">
            <div className="col-lg-3 col-12">
                <Sidebar onSearch={handleSearch} onFilterByCategory={handleFilterByCategory} />
            </div>
            <div className="col-lg-9 col-12">
                <div className="product-grids-head">
                    <div className="product-grid-topbar">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-8 col-12">
                                <div className="product-sorting">
                                    <label htmlFor="sorting">Sort by:</label>
                                    <select className="form-control" id="sorting">
                                        <option>Popularity</option>
                                        <option>Low - High Price</option>
                                        <option>High - Low Price</option>
                                        <option>Average Rating</option>
                                        <option>A - Z Order</option>
                                        <option>Z - A Order</option>
                                    </select>
                                    <h3 className="total-show-product">
                                        Showing: <span>{currentPlaces.length} of {filteredPlaces.length} places</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane show active fade">
                            {loading ? (
                                <div className="text-center">Loading places...</div>
                            ) : (
                                <div className="row">
                                    {currentPlaces.map((place) => (
                                        <div key={place.id} className="col-lg-12 col-md-12 col-12">
                                            <div className="single-product">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4 col-md-4 col-12">
                                                        <div className="product-image">
                                                            <img
                                                                src={
                                                                    place.images.length > 0
                                                                        ? place.images[0].image
                                                                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png"
                                                                }
                                                                alt={place.name}
                                                            />
                                                            <div className="button">
                                                                <a href={`/place/${place.id}`} className="btn">
                                                                    <i className="lni lni-heart"></i>
                                                                    Add to Wishlist
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 col-md-8 col-12">
                                                        <div className="product-info">
                                                            <span className="category">
                                                                {place.category_detail ? place.category_detail.name : "Uncategorized"}
                                                            </span>
                                                            <h4 className="title">
                                                                <a href={`/place/${place.id}`}>{place.name}</a>
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
                                                                <span>Pricing Info</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {/* Pagination */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="pagination left">
                                        <ul className="pagination-list">
                                            {Array.from({ length: Math.ceil(filteredPlaces.length / placesPerPage) }).map((_, index) => (
                                                <li key={index}>
                                                    <a href="#" className={currentPage === index + 1 ? "active" : ""}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            paginate(index + 1);
                                                        }}>
                                                        {index + 1}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
