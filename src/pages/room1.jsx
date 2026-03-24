import React, { useState } from 'react';
import './room1.css';

const Room1 = ({ isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "https://www.choicehotels.com/hoteldam/ar/ar352/images/1280/AR352NQQ1.jpg?webp=true",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
    ];

    if (!isOpen) return null;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="room1-modal-overlay" onClick={onClose}>
            <div className="room1-modal" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className="room1-close-btn" onClick={onClose}>
                    ✕
                </button>

                {/* Header */}
                <div className="room1-header">
                    <h2>Room Details</h2>
                </div>

                {/* Image Section */}
                <div className="room1-image-section">
                    <div className="room1-main-image">
                        <img src={images[currentImageIndex]} alt="Room" />
                        <button className="room1-nav-btn room1-prev" onClick={prevImage}>‹</button>
                        <button className="room1-nav-btn room1-next" onClick={nextImage}>›</button>
                        <div className="room1-image-caption">
                            Guest room with one king bed and added amenities | Sleep Inn, San...
                        </div>
                    </div>
                </div>

                {/* Room Info */}
                <div className="room1-info-section">
                    <h3>1 King Bed, Nonsmoking</h3>
                    <p className="room1-bed-info">1 king bed</p>

                    {/* Room Features */}
                    <div className="room1-features">
                        <div className="room1-feature-item">
                            <div className="room1-feature-icon">👥</div>
                            <span>2 Guests</span>
                        </div>
                        <div className="room1-feature-item">
                            <div className="room1-feature-icon">🚭</div>
                            <span>No Smoking</span>
                        </div>
                        <div className="room1-feature-item">
                            <div className="room1-feature-icon">📐</div>
                            <span>28 sqmt</span>
                        </div>
                    </div>

                    {/* Amenities Section - Direct Display */}
                    <div className="room1-amenities-section">
                        <h4>Amenities</h4>
                        <h5>Room</h5>

                        <div className="room1-amenities-grid">
                            <div className="room1-amenity-item">
                                <div className="room1-amenity-icon">🚿</div>
                                <span>Shower</span>
                            </div>

                            <div className="room1-amenity-item">
                                <div className="room1-amenity-icon">📺</div>
                                <span>55-Inch TV with Soundbar</span>
                            </div>

                            <div className="room1-amenity-item">
                                <div className="room1-amenity-icon">📺</div>
                                <span>TV, Cable/Satellite</span>
                            </div>

                            <div className="room1-amenity-item">
                                <div className="room1-amenity-icon">🖥️</div>
                                <span>Desk with Electrical Outlet</span>
                            </div>

                            <div className="room1-amenity-item">
                                <div className="room1-amenity-icon">❄️</div>
                                <span>Refrigerator</span>
                            </div>

                            <div className="room1-amenity-item">
                                <div className="room1-amenity-icon">💨</div>
                                <span>Hair Dryer</span>
                            </div>

                            <div className="room1-amenity-item">
                                <div className="room1-amenity-icon">👔</div>
                                <span>Iron and Ironing Board</span>
                            </div>

                            <div className="room1-amenity-item">
                                <div className="room1-amenity-icon">🍽️</div>
                                <span>Microwave</span>
                            </div>

                            <div className="room1-amenity-item">
                                <div className="room1-amenity-icon">☕</div>
                                <span>Coffee Maker</span>
                            </div>

                            <div className="room1-amenity-item">
                                <div className="room1-amenity-icon">📡</div>
                                <span>Wireless Streaming TV Service</span>
                            </div>
                        </div>

                        <p className="room1-additional-cost">*May require an additional cost</p>
                    </div>

                    {/* Pricing */}
                    <div className="room1-pricing">
                       
                        <button className="room1-book-btn">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Room1;