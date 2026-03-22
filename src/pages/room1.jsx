import React from 'react';
import './Room1.css';

const Room1 = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="room1-modal-overlay" onClick={onClose}>
            <div className="room1-modal" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className="room1-close-btn" onClick={onClose}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="room1-header">
                    <h2>Room Details</h2>
                </div>

                {/* Content */}
                <div className="room1-content">
                    {/* Image Gallery */}
                    <div className="room1-image-section">
                        <div className="room1-main-image">
                            <img src="https://www.choicehotels.com/hoteldam/ar/ar352/images/1280/AR352NQQ1.jpg?webp=true" alt="1 King Bed Room" />
                            <button className="room1-nav-btn room1-prev">‹</button>
                            <button className="room1-nav-btn room1-next">›</button>
                        </div>
                    </div>

                    {/* Room Info */}
                    <div className="room1-info-section">
                        <h3>1 King Bed, Nonsmoking</h3>
                        <p className="room1-bed-info">1 king bed</p>

                        {/* Room Features */}
                        <div className="room1-features">
                            <div className="room1-feature-item">
                                <div className="room1-feature-icon">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01 1.01l-2.54 7.63A1.5 1.5 0 0 0 12.86 18H16v4h4z" />
                                    </svg>
                                </div>
                                <div className="room1-feature-text">
                                    <span>2 Guests</span>
                                </div>
                            </div>

                            <div className="room1-feature-item">
                                <div className="room1-feature-icon">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <div className="room1-feature-text">
                                    <span>No Smoking</span>
                                </div>
                            </div>

                            <div className="room1-feature-item">
                                <div className="room1-feature-icon">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3V2h-2v2H8V2H6v2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H3V8h14v12z" />
                                    </svg>
                                </div>
                                <div className="room1-feature-text">
                                    <span>25 sq mt</span>
                                </div>
                            </div>
                        </div>

                        {/* Amenities Section */}
                        <div className="room1-amenities">
                            <h4>Amenities</h4>
                            <div className="room1-amenities-category">
                                <h5>Room</h5>
                                <div className="room1-amenities-grid">
                                    <div className="room1-amenity-item">
                                        <div className="room1-amenity-icon">
                                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <span>Shower</span>
                                    </div>

                                    <div className="room1-amenity-item">
                                        <div className="room1-amenity-icon">
                                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
                                            </svg>
                                        </div>
                                        <span>55-Inch TV with Soundbar</span>
                                    </div>

                                    <div className="room1-amenity-item">
                                        <div className="room1-amenity-icon">
                                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
                                            </svg>
                                        </div>
                                        <span>TV, Cable/Satellite</span>
                                    </div>

                                    <div className="room1-amenity-item">
                                        <div className="room1-amenity-icon">
                                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                            </svg>
                                        </div>
                                        <span>Desk with Electrical Outlet</span>
                                    </div>

                                    <div className="room1-amenity-item">
                                        <div className="room1-amenity-icon">
                                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3V2h-2v2H8V2H6v2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H3V8h14v12z" />
                                            </svg>
                                        </div>
                                        <span>Refrigerator</span>
                                    </div>

                                    <div className="room1-amenity-item">
                                        <div className="room1-amenity-icon">
                                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        </div>
                                        <span>Hair Dryer</span>
                                    </div>

                                    <div className="room1-amenity-item">
                                        <div className="room1-amenity-icon">
                                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                            </svg>
                                        </div>
                                        <span>Iron and Ironing Board</span>
                                    </div>

                                    <div className="room1-amenity-item">
                                        <div className="room1-amenity-icon">
                                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8H8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z" />
                                            </svg>
                                        </div>
                                        <span>Microwave</span>
                                    </div>

                                    <div className="room1-amenity-item">
                                        <div className="room1-amenity-icon">
                                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                            </svg>
                                        </div>
                                        <span>Coffee Maker</span>
                                    </div>

                                    <div className="room1-amenity-item">
                                        <div className="room1-amenity-icon">
                                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                                            </svg>
                                        </div>
                                        <span>Wireless Streaming TV Service</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="room1-pricing">
                            <div className="room1-price-info">
                                <span className="room1-original-price">$104</span>
                                <span className="room1-current-price">$94</span>
                                <span className="room1-price-period">USD/night</span>
                                <p className="room1-member-rate">Member Rate</p>
                            </div>
                            <button className="room1-book-btn">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Room1;