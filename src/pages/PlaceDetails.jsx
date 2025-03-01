import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { placeDetails } from "../api.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker issue in Leaflet
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const PlaceDetails = () => {
    const { id } = useParams(); // Get place ID from URL
    const [place, setPlace] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {
        const fetchPlaceDetails = async () => {
            try {
                const response = await placeDetails(id);
                setPlace(response.data);
                if (response.data.images.length > 0) {
                    setMainImage(response.data.images[0].image);
                }
            } catch (error) {
                console.error("Error fetching place details:", error);
                setError("Failed to load place details. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchPlaceDetails();
    }, [id]);

    if (loading) {
        return <div className="text-center">Loading place details...</div>;
    }

    if (error) {
        return <div className="alert alert-danger text-center">{error}</div>;
    }

    const position = [place.latitude, place.longitude];

    return (
        <>
            <section className="item-details">
                <div className="container">
                    <div className="top-area">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="product-images">
                                    <main id="gallery">
                                        {/* Main Image */}
                                        <div className="main-img">
                                            <img src={mainImage || "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png"} id="current" alt={place.name} />
                                        </div>
                                        {/* Thumbnails */}
                                        <div className="images">
                                            {place.images.length > 0 ? (
                                                place.images.map((img, index) => (
                                                    <img
                                                        key={index}
                                                        src={img.image}
                                                        className="img"
                                                        alt={`Image ${index + 1}`}
                                                        onClick={() => setMainImage(img.image)}
                                                    />
                                                ))
                                            ) : (
                                                <p>No images available</p>
                                            )}
                                        </div>
                                    </main>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="product-info">
                                    <h2 className="title">{place.name}</h2>
                                    <p className="category">
                                        <i className="lni lni-tag"></i> Category:{" "}
                                        <a href="#">{place.category_detail?.name || "Uncategorized"}</a>
                                    </p>
                                    <p>
                                        <strong>Address:</strong> {place.address || "Not provided"}
                                    </p>
                                    <p>
                                        <strong>Location:</strong> {place.province}, {place.district}, {place.sector}, {place.cell}, {place.village}
                                    </p>
                                    <p className="info-text">{place.description}</p>
                                    <h3 className="price">
                                        {place.social_medias?.phone_number || "No contact available"}
                                    </h3>
                                    <div className="bottom-content">
                                        <div className="row align-items-end">
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="wish-button">
                                                    <button className="btn">
                                                        <i className="lni lni-reload"></i> Find Location
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="wish-button">
                                                    <button className="btn">
                                                        <i className="lni lni-heart"></i> Add to Wishlist
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Place Details */}
                    <div className="product-details-info">
                        <div className="single-block">
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <div className="info-body custom-responsive-margin">
                                        <h4>Details</h4>
                                        <p>{place.description || "No additional details provided."}</p>
                                    </div>
                                </div>
                                {/* Tags */}
                                <div className="col-lg-12 col-12">
                                    <div className="info-body">
                                        <h4>Tags</h4>
                                        <ul className="normal-list">
                                            {place.tags_detail.length > 0 ? (
                                                place.tags_detail.map((tag) => (
                                                    <li key={tag.id}>{tag.name}</li>
                                                ))
                                            ) : (
                                                <li>No tags available</li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-details-info">
                            <div className="single-block">
                                <div className="row">
                                    {/* OpenStreetMap Location */}
                                    {place.latitude && place.longitude ? (
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h4 className="pb-4">Location on Map</h4>
                                                <MapContainer
                                                    center={position}
                                                    zoom={13}
                                                    style={{ height: "400px", width: "100%", borderRadius: "8px", marginBottom: "20px" }}
                                                >
                                                    <TileLayer
                                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                    />
                                                    <Marker
                                                        position={position}
                                                        icon={new L.Icon({
                                                            iconUrl: markerIconPng,
                                                            shadowUrl: markerShadowPng,
                                                            iconSize: [25, 41],
                                                            iconAnchor: [12, 41]
                                                        })}
                                                    >
                                                        <Popup>
                                                            <strong>{place.name}</strong>
                                                            <br />
                                                            {place.address}
                                                        </Popup>
                                                    </Marker>
                                                </MapContainer>
                                            </div>
                                        </div>
                                    ) : (
                                        <p>No location data available</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PlaceDetails;
