import React, { useState } from 'react';
import './room2.css';

const Room2 = ({ isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "https://www.choicehotels.com/hoteldam/ar/ar352/images/1280/AR352Exterior3.jpg?webp=true",
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
        "https://www.choicehotels.com/hoteldam/ar/ar352/images/1280/AR352Exterior1.jpg?webp=true"
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    if (!isOpen) return null;

    return (
        <div className="room2-modal-overlay" onClick={onClose}>
            <div className="room2-modal" onClick={(e) => e.stopPropagation()}>
                <button className="room2-close-btn" onClick={onClose}>×</button>

                <div className="room2-header">
                    <h2>Room Details</h2>
                </div>

                <div className="room2-content">
                    <div className="room2-image-section">
                        <div className="room2-main-image">
                            <img src={images[currentImageIndex]} alt="2 Queen Beds Room" />
                            {images.length > 1 && (
                                <>
                                    <button className="room2-nav-btn room2-prev" onClick={prevImage}>‹</button>
                                    <button className="room2-nav-btn room2-next" onClick={nextImage}>›</button>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="room2-info-section">
                        <h3>2 Queen Beds, Nonsmoking</h3>
                        <p className="room2-bed-info">2 queen beds</p>

                        <div className="room2-features">
                            <div className="room2-feature-item">
                                <div className="room2-feature-icon">👥</div>
                                <div className="room2-feature-text">
                                    <span>4 Guests</span>
                                </div>
                            </div>
                            <div className="room2-feature-item">
                                <div className="room2-feature-icon">🚭</div>
                                <div className="room2-feature-text">
                                    <span>No Smoking</span>
                                </div>
                            </div>
                            <div className="room2-feature-item">
                                <div className="room2-feature-icon">📐</div>
                                <div className="room2-feature-text">
                                    <span>300 sq ft</span>
                                </div>
                            </div>
                        </div>

                        <div className="room2-amenities">
                            <h4>Amenities</h4>

                            <div className="room2-amenities-category">
                                <h5>Room</h5>
                                <div className="room2-amenities-grid">
                                    <div className="room2-amenity-item">
                                        <div className="room2-amenity-icon">🚿</div>
                                        <span>Shower/Tub Combination</span>
                                    </div>
                                    <div className="room2-amenity-item">
                                        <div className="room2-amenity-icon">📺</div>
                                        <span>32-inch TV</span>
                                    </div>
                                    <div className="room2-amenity-item">
                                        <div className="room2-amenity-icon">📺</div>
                                        <span>TV, Cable/Satellite</span>
                                    </div>
                                    <div className="room2-amenity-item">
                                        <div className="room2-amenity-icon">🪑</div>
                                        <span>Desk with Electrical Outlet</span>
                                    </div>
                                    <div className="room2-amenity-item">
                                        <div className="room2-amenity-icon">🪑</div>
                                        <span>Desk with Ergonomic Chair</span>
                                    </div>
                                    <div className="room2-amenity-item">
                                        <div className="room2-amenity-icon">❄️</div>
                                        <span>Refrigerator</span>
                                    </div>
                                    <div className="room2-amenity-item">
                                        <div className="room2-amenity-icon">💨</div>
                                        <span>Hair Dryer</span>
                                    </div>
                                    <div className="room2-amenity-item">
                                        <div className="room2-amenity-icon">👔</div>
                                        <span>Iron and Ironing Board</span>
                                    </div>
                                    <div className="room2-amenity-item">
                                        <div className="room2-amenity-icon">🔥</div>
                                        <span>Microwave</span>
                                    </div>
                                    <div className="room2-amenity-item">
                                        <div className="room2-amenity-icon">☕</div>
                                        <span>Coffee Maker</span>
                                    </div>
                                    <div className="room2-amenity-item">
                                        <div className="room2-amenity-icon">📶</div>
                                        <span>Wireless Streaming TV Service</span>
                                    </div>
                                    <div className="room2-amenity-item">
                                        <div className="room2-amenity-icon">🌙</div>
                                        <span>Blackout Curtains</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="room2-pricing">
                            <div className="room2-price-info">
                                <span className="room2-original-price">$104</span>
                                <span className="room2-current-price">$98</span>
                                <span className="room2-price-period">USD/night</span>
                                <p className="room2-member-rate">Member Rate</p>
                            </div>
                            <button className="room2-book-btn">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Room2;