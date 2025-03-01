import React, { useEffect, useState } from "react";
import { getCategories } from "../api.js";

const Sidebar = ({ onSearch, onFilterByCategory }) => {
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
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

    // Handle category selection
    const handleCategorySelect = (categoryId) => {
        setSelectedCategory(categoryId);
        onFilterByCategory(categoryId);
    };

    return (
        <div className="product-sidebar">
            {/* Search Box */}
            <div className="single-widget search">
                <h3>Search Place</h3>
                <form>
                    <input
                        type="text"
                        placeholder="Search Here..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            onSearch(e.target.value);
                        }}
                    />
                    <button type="submit">
                        <i className="lni lni-search-alt"></i>
                    </button>
                </form>
            </div>

            {/* Categories List */}
            <div className="single-widget">
                <h3>All Categories</h3>
                <ul className="list">
                    <li key="all">
                        <a
                            href="#"
                            className={!selectedCategory ? "active" : ""}
                            onClick={(e) => {
                                e.preventDefault();
                                handleCategorySelect(null);
                            }}
                        >
                            All
                        </a>
                    </li>
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <li key={category.id}>
                                <a
                                    href="#"
                                    className={selectedCategory === category.id ? "active" : ""}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleCategorySelect(category.id);
                                    }}
                                >
                                    {category.name}
                                </a>
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
