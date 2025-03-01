import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { placeDetails } from "../api.js";

const PlaceFoodMenu = () => {
    const { id } = useParams();
    const [menu, setMenu] = useState([]);
    const [placeName, setPlaceName] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await placeDetails(id);
                setPlaceName(response.data.place?.name || "Restaurant");
                setMenu(response.data.menu || []);
            } catch (error) {
                console.error("Error fetching menu:", error);
                setError("Failed to load menu. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, [id]);

    if (loading) {
        return <div className="text-center mt-5">Loading menu...</div>;
    }

    if (error) {
        return <div className="alert alert-danger text-center mt-5">{error}</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center">{placeName} - Food & Drinks Menu</h2>
            <div className="row">
                {menu.length > 0 ? (
                    menu.map((item, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text text-muted">{item.description}</p>
                                    <h6 className="card-subtitle text-success">${item.price}</h6>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center mt-4">No menu items available</p>
                )}
            </div>
        </div>
    );
};

export default PlaceFoodMenu;
