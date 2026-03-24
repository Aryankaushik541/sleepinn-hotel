import React, { useState } from 'react';
import './room2.css';

const Room2 = ({ isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ];

    if (!isOpen) return null;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="room2-modal-overlay" onClick={onClose}>
            <div className="room2-modal" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className="room2-close-btn" onClick={onClose}>
                    ✕
                </button>

                {/* Header */}
                <div className="room2-header">
                    <h2>Room Details</h2>
                </div>

                {/* Image Section */}
                <div className="room2-image-section">
                    <div className="room2-main-image">
                        <img src={images[currentImageIndex]} alt="Room" />
                        <button className="room2-nav-btn room2-prev" onClick={prevImage}>‹</button>
                        <button className="room2-nav-btn room2-next" onClick={nextImage}>›</button>
                        <div className="room2-image-caption">
                            Guest room with two queen beds and added amenities | Sleep Inn, San...
                        </div>
                    </div>
                </div>

                {/* Room Info */}
                <div className="room2-info-section">
                    <h3>2 Queen Beds, Nonsmoking</h3>
                    <p className="room2-bed-info">2 queen beds</p>

                    {/* Room Features */}
                    <div className="room2-features">
                        <div className="room2-feature-item">
                            <div className="room2-feature-icon">👥</div>
                            <span>4 Guests</span>
                        </div>
                        <div className="room2-feature-item">
                            <div className="room2-feature-icon">🚭</div>
                            <span>No Smoking</span>
                        </div>
                        <div className="room2-feature-item">
                            <div className="room2-feature-icon">📐</div>
                            <span>32 sqmt</span>
                        </div>
                    </div>

                    {/* Amenities Section - Direct Display */}
                    <div className="room2-amenities-section">
                        <h4>Amenities</h4>
                        <h5>Room</h5>

                        <div className="room2-amenities-grid">
                            <div className="room2-amenity-item">
                                <div className="room2-amenity-icon">🚿</div>
                                <span>Shower</span>
                            </div>

                            <div className="room2-amenity-item">
                                <div className="room2-amenity-icon">📺</div>
                                <span>65-Inch TV with Soundbar</span>
                            </div>

                            <div className="room2-amenity-item">
                                <div className="room2-amenity-icon">📺</div>
                                <span>TV, Cable/Satellite</span>
                            </div>

                            <div className="room2-amenity-item">
                                <div className="room2-amenity-icon">🖥️</div>
                                <span>Desk with Electrical Outlet</span>
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
                                <div className="room2-amenity-icon">🍽️</div>
                                <span>Microwave</span>
                            </div>

                            <div className="room2-amenity-item">
                                <div className="room2-amenity-icon">☕</div>
                                <span>Coffee Maker</span>
                            </div>

                            <div className="room2-amenity-item">
                                <div className="room2-amenity-icon">📡</div>
                                <span>Wireless Streaming TV Service</span>
                            </div>
                        </div>

                        <p className="room2-additional-cost">*May require an additional cost</p>
                    </div>

                    {/* Pricing */}
                    <div className="room2-pricing">
                       
                        <button className="room2-book-btn">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Room2;