import "./aminities.css";
import { useState, useEffect } from "react";

export default function Aminities({ isOpen, onClose, clickPosition }) {
    const [modalStyle, setModalStyle] = useState({});

    useEffect(() => {
        if (isOpen && clickPosition) {
            // Calculate position based on click coordinates
            const { x, y } = clickPosition;
            const modalWidth = 500;
            const modalHeight = 600;
            
            // Get viewport dimensions
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            
            // Calculate position to keep modal in viewport
            let left = x - modalWidth / 2;
            let top = y - modalHeight / 2;
            
            // Adjust if modal goes outside viewport
            if (left < 20) left = 20;
            if (left + modalWidth > viewportWidth - 20) left = viewportWidth - modalWidth - 20;
            if (top < 20) top = 20;
            if (top + modalHeight > viewportHeight - 20) top = viewportHeight - modalHeight - 20;
            
            setModalStyle({
                position: 'fixed',
                left: `${left}px`,
                top: `${top}px`,
                transform: 'none'
            });
        }
    }, [isOpen, clickPosition]);

    if (!isOpen) return null;

    return (
        <div className="aminities-modal-overlay" onClick={onClose}>
            <div 
                className="aminities-modal" 
                onClick={(e) => e.stopPropagation()}
                style={modalStyle}
            >
                {/* Close Button */}
                <button className="aminities-close-btn" onClick={onClose}>
                    ✕
                </button>

                {/* Header */}
                <div className="aminities-header">
                    <h2>Amenities</h2>
                </div>

                {/* Content */}
                <div className="aminities-content">
                    <h3>Hotel Amenities</h3>

                    <div className="aminities-grid">
                        <div className="aminity-item">
                            <div className="aminity-icon">🏊</div>
                            <span>Indoor Heated Pool</span>
                        </div>

                        <div className="aminity-item">
                            <div className="aminity-icon">🍳</div>
                            <span>Free Hot Breakfast</span>
                        </div>

                        <div className="aminity-item">
                            <div className="aminity-icon">🚛</div>
                            <span>Truck Parking</span>
                        </div>

                        <div className="aminity-item">
                            <div className="aminity-icon">💪</div>
                            <span>Fitness Center</span>
                        </div>

                        <div className="aminity-item">
                            <div className="aminity-icon">⭐</div>
                            <span>Government Travelers: FEMA Approved</span>
                        </div>

                        <div className="aminity-item">
                            <div className="aminity-icon">🅿️</div>
                            <span>Free Parking</span>
                        </div>

                        <div className="aminity-item">
                            <div className="aminity-icon">🛗</div>
                            <span>Elevator(s)</span>
                        </div>

                        <div className="aminity-item">
                            <div className="aminity-icon">🚭</div>
                            <span>100% Smoke Free Hotel</span>
                        </div>

                        <div className="aminity-item">
                            <div className="aminity-icon">🐕</div>
                            <span>No Pets Allowed Only service animals are permitted, free of charge.</span>
                        </div>

                        <div className="aminity-item">
                            <div className="aminity-icon">🚌</div>
                            <span>Bus Parking</span>
                        </div>

                        <div className="aminity-item">
                            <div className="aminity-icon">🧺</div>
                            <span>Laundry*</span>
                        </div>

                        <div className="aminity-item">
                            <div className="aminity-icon">💼</div>
                            <span>Business Center</span>
                        </div>
                    </div>

                    <p className="aminities-note">*May require an additional cost</p>

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