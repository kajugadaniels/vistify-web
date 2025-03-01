import React, { useEffect, useState } from 'react';
import { getCategories, getPlaces } from '../api.js';

const Sidebar = ({ onSearch }) => {
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        // Fetch all categories
        const fetchCategories = async () => {
            try {
                const response = await getCategories();
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    // Handle live search
    const handleSearch = async (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        if (query.length > 0) {
            try {
                const response = await getPlaces();
                // Filter places based on search query
                const filteredPlaces = response.data.filter((place) =>
                    place.name.toLowerCase().includes(query.toLowerCase())
                );
                onSearch(filteredPlaces);
            } catch (error) {
                console.error("Error fetching places for search:", error);
            }
        } else {
            // If search is cleared, reset places
            onSearch([]);
        }
    };

    return (
        <div className="product-sidebar">
            <div className="single-widget search">
                <h3>Search Place</h3>
                <input
                    type="text"
                    placeholder="Search Here..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
                <button type="submit"><i className="lni lni-search-alt"></i></button>
            </div>
            <div className="single-widget">
                <h3>All Categories</h3>
                <ul className="list">
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <li key={category.id}>
                                <a href="#">{category.name}</a>
                                <span>({category.places ? category.places.length : 0})</span>
                            </li>
                        ))
                    ) : (
                        <li>Loading categories...</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
