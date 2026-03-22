import React from "react";
import "./room1.css";
const RoomModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="room-modal-overlay" onClick={onClose}>
            <div className="room-modal" onClick={(e) => e.stopPropagation()}>

                {/* HEADER */}
                <div className="modal-header">
                    <h3>Room Details</h3>
                    <button onClick={onClose}>✕</button>
                </div>

                {/* IMAGE */}
                <div className="modal-image">
                    <img
                        src="https://images.unsplash.com/photo-1566665797739-1674de7a421a"
                        alt="room"
                    />
                    <div className="nav left">‹</div>
                    <div className="nav right">›</div>
                </div>

                {/* TITLE */}
                <h2 className="room-title">1 King Bed, Nonsmoking</h2>
                <p className="room-sub">1 king bed</p>

                {/* FEATURES */}
                <div className="room-features">
                    <div>👤 2 Guests</div>
                    <div>🚭 No Smoking</div>
                    <div>📐 28 sqm</div>
                </div>

                {/* AMENITIES */}
                <h3 className="section-title">Amenities</h3>
                <p className="sub-heading">Room</p>

                <div className="amenities-grid">

                    {[
                        "Shower",
                        "55-Inch TV with Soundbar",
                        "TV, Cable/Satellite",
                        "Desk with Electrical Outlet",
                        "Refrigerator",
                        "Hair Dryer",
                        "Iron and Ironing Board",
                        "Microwave",
                        "Coffee Maker",
                        "Wireless Streaming TV Service",
                    ].map((item, i) => (
                        <div className="amenity" key={i}>
                            <div className="icon-box">✓</div>
                            <span>{item}</span>
                        </div>
                    ))}

                </div>

                {/* FOOTER */}
                <div className="modal-footer">
                    <div>
                        <p className="price">
                            <span className="old">$104</span> $94
                            <span className="per"> USD/night</span>
                        </p>
                        <small>Member Rate</small>
                    </div>

                    <button className="book-btn">Book Now</button>
                </div>

            </div>
        </div>
    );
};

export default RoomModal;