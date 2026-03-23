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

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
        if (e.key === 'ArrowLeft') {
            prevImage();
        }
        if (e.key === 'ArrowRight') {
            nextImage();
        }
    };

    return (
        <div
            className="room3-modal-overlay"
            onClick={onClose}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            aria-labelledby="room3-title"
        >
            <div className="room3-modal" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button
                    className="room3-close-btn"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="room3-header">
                    <h2 id="room3-title">Deluxe Suite with Jacuzzi</h2>
                    <div className="room3-specs">
                        <span>🛏️ 1 King Bed</span>
                        <span>🛁 Private Jacuzzi</span>
                        <span>📐 550 sq ft</span>
                    </div>
                </div>

                {/* Content */}
                <div className="room3-content">
                    {/* Image Gallery */}
                    <div className="room3-image-section">
                        <div className="room3-main-image">
                            <img
                                src={images[currentImageIndex]}
                                alt={`Deluxe Suite with Jacuzzi - View ${currentImageIndex + 1}`}
                            />
                            <button
                                className="room3-nav-btn room3-prev"
                                onClick={prevImage}
                                aria-label="Previous image"
                            >
                                ‹
                            </button>
                            <button
                                className="room3-nav-btn room3-next"
                                onClick={nextImage}
                                aria-label="Next image"
                            >
                                ›
                            </button>
                            <div className="room3-image-counter">
                                {currentImageIndex + 1} / {images.length}
                            </div>
                        </div>

                        <div className="room3-thumbnails">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Deluxe suite view ${index + 1}`}
                                    className={currentImageIndex === index ? 'active' : ''}
                                    onClick={() => setCurrentImageIndex(index)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => e.key === 'Enter' && setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Room Info */}
                    <div className="room3-info-section">
                        <div className="room3-room-overview">
                            <h3>Luxury Deluxe Suite</h3>
                            <p>Indulge in ultimate luxury with our premium deluxe suite featuring a private jacuzzi, spa amenities, and elegant furnishings. Perfect for honeymooners and those seeking an unforgettable romantic getaway with world-class comfort.</p>
                        </div>

                        {/* Room Features */}
                        <div className="room3-features">
                            <div className="room3-feature-item">
                                <div className="room3-feature-icon">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01 1.01l-2.54 7.63A1.5 1.5 0 0 0 12.86 18H16v4h4z" />
                                    </svg>
                                </div>
                                <div className="room3-feature-text">
                                    <span>2 Guests Maximum</span>
                                </div>
                            </div>

                            <div className="room3-feature-item">
                                <div className="room3-feature-icon">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <div className="room3-feature-text">
                                    <span>Spa & Wellness</span>
                                </div>
                            </div>

                            <div className="room3-feature-item">
                                <div className="room3-feature-icon">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3V2h-2v2H8V2H6v2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H3V8h14v12z" />
                                    </svg>
                                </div>
                                <div className="room3-feature-text">
                                    <span>550 sq ft</span>
                                </div>
                            </div>
                        </div>

                        {/* Amenities Section */}
                        <div className="room3-amenities">
                            <h4>Premium Suite Amenities</h4>

                            <div className="room3-amenities-category">
                                <h5>🛏️ Master Bedroom</h5>
                                <div className="room3-amenities-grid">
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>1 King Bed</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Egyptian Cotton Sheets</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Memory Foam Pillows</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Smart Temperature Control</span>
                                    </div>
                                </div>
                            </div>

                            <div className="room3-amenities-category">
                                <h5>🛁 Spa & Jacuzzi</h5>
                                <div className="room3-amenities-grid">
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Private Jacuzzi Tub</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Rainfall Shower</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Spa Robes & Slippers</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Aromatherapy Diffuser</span>
                                    </div>
                                </div>
                            </div>

                            <div className="room3-amenities-category">
                                <h5>📺 Entertainment & Tech</h5>
                                <div className="room3-amenities-grid">
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>75-Inch 4K Smart TV</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Surround Sound System</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>All Streaming Services</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Ultra-Fast WiFi 6</span>
                                    </div>
                                </div>
                            </div>

                            <div className="room3-amenities-category">
                                <h5>🍽️ Gourmet Kitchen</h5>
                                <div className="room3-amenities-grid">
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Full Kitchen</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Stainless Steel Appliances</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Wine Cooler</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Gourmet Coffee Bar</span>
                                    </div>
                                </div>
                            </div>

                            <div className="room3-amenities-category">
                                <h5>🚿 Luxury Bathroom</h5>
                                <div className="room3-amenities-grid">
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Marble & Stone Finishes</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Heated Towel Racks</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Premium Hair Dryer</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Luxury Toiletries</span>
                                    </div>
                                </div>
                            </div>

                            <div className="room3-amenities-category">
                                <h5>💼 Work & Living Space</h5>
                                <div className="room3-amenities-grid">
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Executive Workspace</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Lounge Area with Sofa</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Dining Table for 2</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Premium Sound System</span>
                                    </div>
                                </div>
                            </div>

                            <div className="room3-amenities-category">
                                <h5>🌟 Exclusive Services</h5>
                                <div className="room3-amenities-grid">
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Personal Concierge</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>In-Room Spa Services</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Private Chef Available</span>
                                    </div>
                                    <div className="room3-amenity-item">
                                        <div className="room3-amenity-icon">✓</div>
                                        <span>Champagne & Chocolates</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Accessibility */}
                        <div className="room3-accessibility">
                            <h4>♿ Accessibility Features</h4>
                            <div className="room3-accessibility-list">
                                <div className="room3-accessibility-item">
                                    <span>• Wheelchair accessible suite</span>
                                </div>
                                <div className="room3-accessibility-item">
                                    <span>• Accessible jacuzzi with grab bars</span>
                                </div>
                                <div className="room3-accessibility-item">
                                    <span>• Accessible bathroom with roll-in shower</span>
                                </div>
                                <div className="room3-accessibility-item">
                                    <span>• Hearing loop system available</span>
                                </div>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="room3-pricing">
                            <div className="room3-price-info">
                                <div className="room3-price-display">
                                    <span className="room3-price-label">Starting from</span>
                                    <div className="room3-price-main">
                                        <span className="room3-original-price">$299</span>
                                        <span className="room3-current-price">$249</span>
                                    </div>
                                    <span className="room3-price-period">USD per night</span>
                                </div>
                                <div className="room3-price-details">
                                    <p className="room3-member-rate">✨ Luxury Suite Special - Save 17%</p>
                                    <p className="room3-price-note">*Excludes taxes and fees</p>
                                </div>
                            </div>
                            <button className="room3-book-btn">View Rates & Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Room3;