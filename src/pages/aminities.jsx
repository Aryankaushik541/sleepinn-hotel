import "./aminities.css";

export default function Amenities({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="amenities-modal-overlay" onClick={onClose}>
            <div className="amenities-modal" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="amenities-header">
                    <h2>Amenities</h2>
                    <button className="close-btn" onClick={onClose}>
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="amenities-content">
                    <h3>Hotel Amenities</h3>

                    <div className="amenities-grid">
                        {/* Row 1 */}
                        <div className="amenity-item">
                            <div className="amenity-icon">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M2 17h20v2H2zm1.15-4.05L4 11l.85 1.95L6.8 13l-1.95.85L4 15.8l-.85-1.95L1.2 13l1.95-.85zM9 12l.85 1.95L11.8 14l-1.95.85L9 16.8l-.85-1.95L6.2 14l1.95-.85L9 12zm8.85 1.95L19 12l.85 1.95L21.8 14l-1.95.85L19 16.8l-.85-1.95L16.2 14l1.95-.85z" />
                                </svg>
                            </div>
                            <span style={{ color: "#000" }}>Indoor Heated Pool</span>
                        </div>

                        <div className="amenity-item">
                            <div className="amenity-icon">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7 2v11h3v9l7-12h-4l4-8z" />
                                </svg>
                            </div>
                            <span style={{ color: "#000" }}>Free Hot Breakfast</span>
                        </div>

                        <div className="amenity-item">
                            <div className="amenity-icon">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                                </svg>
                            </div>
                            <span style={{ color: "#000" }}>Truck Parking</span>
                        </div>

                        {/* Row 2 */}
                        <div className="amenity-item">
                            <div className="amenity-icon">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z" />
                                </svg>
                            </div>
                            <span style={{ color: "#000" }}>Fitness Center</span>
                        </div>

                        <div className="amenity-item">
                            <div className="amenity-icon">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                            <span style={{ color: "#000" }}>Government Travelers: FEMA Approved</span>
                        </div>

                        <div className="amenity-item">
                            <div className="amenity-icon">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                </svg>
                            </div>
                            <span style={{ color: "#000" }}>Free Parking</span>
                        </div>

                        {/* Row 3 */}
                        <div className="amenity-item">
                            <div className="amenity-icon">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                </svg>
                            </div>
                            <span style={{ color: "#000" }}>Elevator(s)</span>
                        </div>

                        <div className="amenity-item">
                            <div className="amenity-icon">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <span style={{ color: "#000" }}>100% Smoke Free Hotel</span>
                        </div>

                        <div className="amenity-item">
                            <div className="amenity-icon">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <span style={{ color: "#000" }}>No Pets Allowed Only service animals are permitted, free of charge.</span>
                        </div>

                        {/* Row 4 */}
                        <div className="amenity-item">
                            <div className="amenity-icon">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
                                </svg>
                            </div>
                            <span style={{ color: "#000" }}>Bus Parking</span>
                        </div>

                        <div className="amenity-item">
                            <div className="amenity-icon">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
                                </svg>
                            </div>
                            <span style={{ color: "#000" }}>Laundry*</span>
                        </div>

                        <div className="amenity-item">
                            <div className="amenity-icon">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z" />
                                </svg>
                            </div>
                            <span style={{ color: "#000" }}>Business Center</span>
                        </div>
                    </div>

                    <p className="amenities-note">*May require an additional cost</p>

                    {/* What this place offers section */}
                    <div className="place-offers">
                        <h3>What this place offers</h3>
                        <p>
                            Our amenities are designed to leave you feeling rested and ready for the day ahead. Settle into cozy guest rooms with microwaves, refrigerators, coffee makers and flat-screen TVs with casting and streaming, then wake up to our delicious free hot breakfast in the morning. Get moving by using our fitness center or indoor pool, or head to our convenient business center if you need to get some work done. We also offer free parking, making it that much easier to stay here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}