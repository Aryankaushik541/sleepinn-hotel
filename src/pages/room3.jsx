import React, { useState } from 'react';
import './room3.css';

const Room3 = ({ isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80"
    ];

    if (!isOpen) return null;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="room3-modal-overlay" onClick={onClose}>
            <div className="room3-modal" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className="room3-close-btn" onClick={onClose}>
                    ✕
                </button>

                {/* Header */}
                <div className="room3-header">
                    <h2>Room Details</h2>
                </div>

                {/* Image Section */}
                <div className="room3-image-section">
                    <div className="room3-main-image">
                        <img src={images[currentImageIndex]} alt="Room" />
                        <button className="room3-nav-btn room3-prev" onClick={prevImage}>‹</button>
                        <button className="room3-nav-btn room3-next" onClick={nextImage}>›</button>
                        <div className="room3-image-caption">
                            Deluxe suite with jacuzzi and luxury amenities | Sleep Inn, San...
                        </div>
                    </div>
                </div>

                {/* Room Info */}
                <div className="room3-info-section">
                    <h3>Deluxe Suite with Jacuzzi</h3>
                    <p className="room3-bed-info">1 king bed</p>

                    {/* Room Features */}
                    <div className="room3-features">
                        <div className="room3-feature-item">
                            <div className="room3-feature-icon">👥</div>
                            <span>2 Guests</span>
                        </div>
                        <div className="room3-feature-item">
                            <div className="room3-feature-icon">🛁</div>
                            <span>Jacuzzi</span>
                        </div>
                        <div className="room3-feature-item">
                            <div className="room3-feature-icon">📐</div>
                            <span>50 sqmt</span>
                        </div>
                    </div>

                    {/* Amenities Section - Direct Display */}
                    <div className="room3-amenities-section">
                        <h4>Amenities</h4>
                        <h5>Room</h5>

                        <div className="room3-amenities-grid">
                            <div className="room3-amenity-item">
                                <div className="room3-amenity-icon">🛁</div>
                                <span>Private Jacuzzi</span>
                            </div>

                            <div className="room3-amenity-item">
                                <div className="room3-amenity-icon">🚿</div>
                                <span>Rainfall Shower</span>
                            </div>

                            <div className="room3-amenity-item">
                                <div className="room3-amenity-icon">📺</div>
                                <span>75-Inch 4K Smart TV</span>
                            </div>

                            <div className="room3-amenity-item">
                                <div className="room3-amenity-icon">🖥️</div>
                                <span>Executive Workspace</span>
                            </div>

                            <div className="room3-amenity-item">
                                <div className="room3-amenity-icon">❄️</div>
                                <span>Wine Cooler</span>
                            </div>

                            <div className="room3-amenity-item">
                                <div className="room3-amenity-icon">💨</div>
                                <span>Premium Hair Dryer</span>
                            </div>

                            <div className="room3-amenity-item">
                                <div className="room3-amenity-icon">👔</div>
                                <span>Spa Robes & Slippers</span>
                            </div>

                            <div className="room3-amenity-item">
                                <div className="room3-amenity-icon">🍽️</div>
                                <span>Full Kitchen</span>
                            </div>

                            <div className="room3-amenity-item">
                                <div className="room3-amenity-icon">☕</div>
                                <span>Gourmet Coffee Bar</span>
                            </div>

                            <div className="room3-amenity-item">
                                <div className="room3-amenity-icon">🌟</div>
                                <span>Personal Concierge</span>
                            </div>
                        </div>

                        <p className="room3-additional-cost">*May require an additional cost</p>
                    </div>

                    {/* Pricing */}
                    <div className="room3-pricing">
                       
                        <button className="room3-book-btn">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Room3;