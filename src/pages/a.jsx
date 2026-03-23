import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import Amenities from "./aminities.jsx";
import Room1 from './room1.jsx';
import Room2 from './room2.jsx';
import Room3 from './room3.jsx';
import './room2.css';
import './room3.css';

export default function Home() {
    const [showDesktopDropdown, setShowDesktopDropdown] = useState(false);
    const [showMobileNavigation, setShowMobileNavigation] = useState(false);
    const [showMobileSubmenu, setShowMobileSubmenu] = useState(false);
    const [activeSection, setActiveSection] = useState("overview");
    const [showAmenitiesModal, setShowAmenitiesModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Room Modal States
    const [isRoom1Open, setIsRoom1Open] = useState(false);
    const [isRoom2Open, setIsRoom2Open] = useState(false);
    const [isRoom3Open, setIsRoom3Open] = useState(false);

    const amenitiesImages = [
        "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === amenitiesImages.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? amenitiesImages.length - 1 : prev - 1
        );
    };

    // Room1 Functions
    const openRoom1Modal = () => {
        setIsRoom1Open(true);
        document.body.style.overflow = 'hidden';
    };

    const closeRoom1Modal = () => {
        setIsRoom1Open(false);
        document.body.style.overflow = 'unset';
    };

    // Room2 Functions
    const openRoom2Modal = () => {
        setIsRoom2Open(true);
        document.body.style.overflow = 'hidden';
    };

    const closeRoom2Modal = () => {
        setIsRoom2Open(false);
        document.body.style.overflow = 'unset';
    };

    // Room3 Functions
    const openRoom3Modal = () => {
        setIsRoom3Open(true);
        document.body.style.overflow = 'hidden';
    };

    const closeRoom3Modal = () => {
        setIsRoom3Open(false);
        document.body.style.overflow = 'unset';
    };

    const navigate = useNavigate();

    // Close mobile navigation on window resize
    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth > 768) {
                setShowMobileNavigation(false);
                setShowMobileSubmenu(false);
            }
        };

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    // Prevent body scroll when mobile navigation is open
    useEffect(() => {
        if (showMobileNavigation) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showMobileNavigation]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.navigation-dropdown')) {
                setShowDesktopDropdown(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, []);

    // Scroll spy functionality
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['overview', 'guest-rooms', 'amenities', 'location', 'info', 'reviews', 'contact'];
            const scrollPosition = window.scrollY + 150;

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i]);
                if (element) {
                    const offsetTop = element.offsetTop;
                    if (scrollPosition >= offsetTop) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDesktopDropdown = () => {
        setShowDesktopDropdown(!showDesktopDropdown);
    };

    const toggleMobileNavigation = () => {
        setShowMobileNavigation(!showMobileNavigation);
    };

    const toggleMobileSubmenu = () => {
        setShowMobileSubmenu(!showMobileSubmenu);
    };

    const closeMobileNavigation = () => {
        setShowMobileNavigation(false);
        setShowMobileSubmenu(false);
    };

    // Scroll to section function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Navigate to gallery
    const handleAllPhotos = () => {
        navigate('/gallery');
    };

    return (
        <>
            <section className="hotel-preview-wrapper">

                <div className="hotel-preview">
                    <div className="preview-left">
                        <img
                            src="https://www.choicehotels.com/hoteldam/ar/ar352/images/1280/AR352NQQ1.jpg?webp=true"
                            alt="Hotel Room"
                        />
                    </div>

                    <div className="preview-right">
                        <img src="https://www.choicehotels.com/hoteldam/ar/ar352/images/1280/AR352Exterior3.jpg?webp=true" alt="" />
                        <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80" alt="" />
                        <img src="https://www.choicehotels.com/hoteldam/ar/ar352/images/1280/AR352Exterior1.jpg?webp=true" alt="" />

                        <div className="preview-last">
                            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt="" />
                            <button onClick={handleAllPhotos}>📷 All photos</button>
                        </div>
                    </div>
                </div>

                {/* Sticky Navigation Bar */}
                <div className="sticky-nav">
                    <div className="sticky-nav-container">
                        <button
                            className={`nav-item ${activeSection === 'overview' ? 'active' : ''}`}
                            onClick={() => scrollToSection('overview')}
                        >
                            📋 Overview
                        </button>
                        <button
                            className={`nav-item ${activeSection === 'guest-rooms' ? 'active' : ''}`}
                            onClick={() => scrollToSection('guest-rooms')}
                        >
                            🛏️ Guest Rooms
                        </button>
                        <button
                            className={`nav-item ${activeSection === 'amenities' ? 'active' : ''}`}
                            onClick={() => scrollToSection('amenities')}
                        >
                            🏊 Amenities
                        </button>
                        <button
                            className={`nav-item ${activeSection === 'location' ? 'active' : ''}`}
                            onClick={() => scrollToSection('location')}
                        >
                            📍 Location
                        </button>
                        <button
                            className={`nav-item ${activeSection === 'info' ? 'active' : ''}`}
                            onClick={() => scrollToSection('info')}
                        >
                            ℹ️ Info
                        </button>
                        <button
                            className={`nav-item ${activeSection === 'reviews' ? 'active' : ''}`}
                            onClick={() => scrollToSection('reviews')}
                        >
                            ⭐ Reviews
                        </button>
                        <button
                            className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
                            onClick={() => scrollToSection('contact')}
                        >
                            📞 Contact Us
                        </button>
                    </div>
                </div>

                {/* Overview Section */}
                <div className="overview-container">
                    <div className="overview-section" id="overview">

                        <div className="overview-left">
                            <p className="tag">OVERVIEW</p>

                            <h2>
                                Enjoy a simply stylish stay in <br />
                                Searcy
                            </h2>

                            <p className="desc">
                                Welcome to the newly renovated Sleep Inn & Suites® Searcy near University hotel,
                                where we've cultivated a welcoming stay for both business and leisure travelers
                                right off I-57 near local attractions. Our nature-inspired Designed to Dream®
                                property provides a serene retreat thanks to amenities like free WiFi and a
                                complimentary hot breakfast each morning, while our fitness center and business
                                center allow you to stay in touch with your routines. Plus, students and visitors
                                appreciate our proximity to Harding University and Arkansas State University
                                Beebe, Searcy Campus.
                            </p>

                            <a href="#" className="read-more">Read More</a>
                        </div>

                        <div className="overview-right-wrapper">
                            <div className="overview-right">

                                <h3>Highlights</h3>

                                <div className="highlights-grid">

                                    <div className="highlight-item">
                                        <div className="highlight-icon">🏊</div>
                                        <div>
                                            <span>Indoor Heated Pool</span>
                                        </div>
                                    </div>

                                    <div className="highlight-item">
                                        <div className="highlight-icon">💪</div>
                                        <div>
                                            <span>Fitness Center</span>
                                        </div>
                                    </div>

                                    <div className="highlight-item">
                                        <div className="highlight-icon">☕</div>
                                        <div>
                                            <span>Free Hot Breakfast</span>
                                        </div>
                                    </div>

                                    <div className="highlight-item">
                                        <div className="highlight-icon">🛡️</div>
                                        <div>
                                            <span>Government Travelers: FEMA Approved</span>
                                        </div>
                                    </div>

                                    <div className="highlight-item">
                                        <div className="highlight-icon">🚚</div>
                                        <div>
                                            <span>Truck Parking</span>
                                        </div>
                                    </div>

                                    <div className="highlight-item">
                                        <div className="highlight-icon">🕐</div>
                                        <div>
                                            <span>Check in / out</span>
                                            <small>15:00 / 11:00</small>
                                        </div>
                                    </div>

                                </div>

                                <button
                                    className="amenities-btn"
                                    onClick={() => setShowAmenitiesModal(true)}
                                >
                                    View all amenities
                                </button>

                            </div>
                        </div>

                    </div>
                </div>

                {/* Spring Promo Section */}
                <section className="spring-promo">
                    <div className="spring-promo-container">
                        <h2 className="spring-promo-title">Spring stays = more savings</h2>
                        <p className="spring-promo-text">
                            Book your spring getaway and save 20% on 3 nights or more!* Book by April 6, 2026 and stay by April 11, 2026 at participating brands and at participating locations only. *Terms apply.
                        </p>
                    </div>
                </section>

                {/* Guest Rooms Section */}
                <div className="guest-rooms-section" id="guest-rooms">
                    <div className="rooms-header">
                        <div className="rooms-title">
                            <p className="tag guest-rooms">GUEST ROOMS</p>
                            <h2>Available Guest Rooms</h2>
                        </div>

                        <div className="rooms-controls">
                            <div className="room-filters">
                                <span className="filter-item active">🟢 Advance book 30%</span>
                                <span className="filter-item">🟢 Advance book 14 days</span>
                                <span className="filter-item">🟢 Pay now and save 10% off BAR</span>
                            </div>

                            <div className="view-controls">
                                <button className="view-btn active">Grid</button>
                                <button className="view-btn">List</button>
                            </div>
                        </div>
                    </div>

                    <div className="room-selection-filters">
                        <button className="filter-btn active">All rooms</button>
                        <button className="filter-btn">🛏️ 1 Bed (2)</button>
                        <button className="filter-btn">🛏️ 2+ Beds (1)</button>
                    </div>

                    <div className="rooms-grid">
                        {/* Room 1 */}
                        <div className="room-card">
                            <div className="room-image" onClick={openRoom1Modal} style={{ cursor: 'pointer' }}>
                                <img src="https://www.choicehotels.com/hoteldam/ar/ar352/images/1280/AR352NQQ1.jpg?webp=true" alt="1 King Bed Room" />
                                <span className="room-count">5</span>
                                <div className="image-overlay">
                                    <span className="view-photos">View Details</span>
                                </div>
                            </div>

                            <div className="room-details">
                                <h3>1 King Bed, Nonsmoking</h3>

                                <div className="room-specs">
                                    <span className="spec">🛏️ 1 King Bed</span>
                                    <span className="spec">👥 No Smoking</span>
                                    <span className="spec">📐 300 sq ft</span>
                                </div>

                                <div className="room-features">
                                    <div className="feature-row">
                                        <span>• Microwave</span>
                                        <span>• 32-inch TV with cable/satellite</span>
                                        <span>• Air conditioning</span>
                                    </div>
                                    <div className="feature-row">
                                        <span>• Coffee maker with coffee</span>
                                        <span>• Desk with ergonomic chair</span>
                                        <span>• Free WiFi</span>
                                    </div>
                                </div>

                                <button className="room-details-btn" onClick={openRoom1Modal}>Room Details</button>
                            </div>

                            <div className="room-pricing">
                                <div className="price-info">
                                    <span className="price-label">from</span>
                                    <span className="price">$94</span>
                                    <span className="price-period">USD per night</span>
                                    <p className="price-note">Excludes taxes and fees</p>
                                </div>
                                <button className="book-room-btn">View rates</button>
                            </div>
                        </div>

                        {/* Room 2 */}
                        <div className="room-card">
                            <div className="room-image" onClick={openRoom2Modal} style={{ cursor: 'pointer' }}>
                                <img src="https://www.choicehotels.com/hoteldam/ar/ar352/images/1280/AR352Exterior3.jpg?webp=true" alt="2 Queen Beds Room" />
                                <span className="room-count">3</span>
                                <div className="image-overlay">
                                    <span className="view-photos">View Details</span>
                                </div>
                            </div>

                            <div className="room-details">
                                <h3>2 Queen Beds, Nonsmoking</h3>

                                <div className="room-specs">
                                    <span className="spec">🛏️ 2 Queen Beds</span>
                                    <span className="spec">👥 No Smoking</span>
                                    <span className="spec">📐 300 sq ft</span>
                                </div>

                                <div className="room-features">
                                    <div className="feature-row">
                                        <span>• Microwave</span>
                                        <span>• 32-inch TV with cable/satellite</span>
                                        <span>• Air conditioning</span>
                                    </div>
                                    <div className="feature-row">
                                        <span>• Coffee maker with coffee</span>
                                        <span>• Desk with ergonomic chair</span>
                                        <span>• Free WiFi</span>
                                    </div>
                                </div>

                                <button className="room-details-btn" onClick={openRoom2Modal}>Room Details</button>
                            </div>

                            <div className="room-pricing">
                                <div className="price-info">
                                    <span className="price-label">from</span>
                                    <span className="price">$98</span>
                                    <span className="price-period">USD per night</span>
                                    <p className="price-note">Excludes taxes and fees</p>
                                </div>
                                <button className="book-room-btn">View rates</button>
                            </div>
                        </div>

                        {/* Room 3 */}
                        <div className="room-card">
                            <div className="room-image" onClick={openRoom3Modal} style={{ cursor: 'pointer' }}>
                                <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80" alt="Deluxe Suite with Jacuzzi" />
                                <span className="room-count">2</span>
                                <div className="image-overlay">
                                    <span className="view-photos">View Details</span>
                                </div>
                            </div>

                            <div className="room-details">
                                <h3>Deluxe Suite with Jacuzzi</h3>

                                <div className="room-specs">
                                    <span className="spec">🛏️ 1 King Bed</span>
                                    <span className="spec">🛁 Private Jacuzzi</span>
                                    <span className="spec">📐 550 sq ft</span>
                                </div>

                                <div className="room-features">
                                    <div className="feature-row">
                                        <span>• Private Jacuzzi Tub</span>
                                        <span>• Rainfall Shower</span>
                                        <span>• Spa Robes & Slippers</span>
                                    </div>
                                    <div className="feature-row">
                                        <span>• 75-Inch 4K Smart TV</span>
                                        <span>• Full Kitchen</span>
                                        <span>• Executive Workspace</span>
                                    </div>
                                </div>

                                <button className="room-details-btn" onClick={openRoom3Modal}>Room Details</button>
                            </div>

                            <div className="room-pricing">
                                <div className="price-info">
                                    <span className="price-label">from</span>
                                    <span className="price">$249</span>
                                    <span className="price-period">USD per night</span>
                                    <p className="price-note">Excludes taxes and fees</p>
                                </div>
                                <button className="book-room-btn">View rates</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Room Modals */}
                <Room1 isOpen={isRoom1Open} onClose={closeRoom1Modal} />
                <Room2 isOpen={isRoom2Open} onClose={closeRoom2Modal} />
                <Room3 isOpen={isRoom3Open} onClose={closeRoom3Modal} />

                {/* Amenities Section */}
                <div className="amenities-section" id="amenities">
                    <div className="amenities-left">
                        <p className="tag">AMENITIES</p>
                        <h2>Featured Amenities <span>(12)</span></h2>

                        <div className="amenities-list">
                            <div className="amenity-item">
                                <span className="amenity-icon">🏊</span>
                                <span>Indoor Heated Pool</span>
                            </div>
                            <div className="amenity-item">
                                <span className="amenity-icon">💪</span>
                                <span>Fitness Center</span>
                            </div>
                            <div className="amenity-item">
                                <span className="amenity-icon">🛗</span>
                                <span>Elevator(s)</span>
                            </div>
                            <div className="amenity-item">
                                <span className="amenity-icon">🛡️</span>
                                <span>Government Travelers: FEMA Approved</span>
                            </div>
                            <div className="amenity-item">
                                <span className="amenity-icon">☕</span>
                                <span>Free Hot Breakfast</span>
                            </div>
                            <div className="amenity-item">
                                <span className="amenity-icon">🚭</span>
                                <span>100% Smoke Free Hotel</span>
                            </div>
                            <div className="amenity-item">
                                <span className="amenity-icon">🅿️</span>
                                <span>Free Parking</span>
                            </div>
                            <div className="amenity-item">
                                <span className="amenity-icon">🚚</span>
                                <span>Truck Parking</span>
                            </div>
                            <div className="amenity-item">
                                <span className="amenity-icon">🚫</span>
                                <span>No Pets Allowed Only service animals are permitted, free of charge.</span>
                            </div>
                        </div>

                        <button className="amenities-btn-dark" onClick={() => setShowAmenitiesModal(true)}>
                            View all amenities
                        </button>
                        <p className="note">*May require an additional cost</p>
                    </div>

                    <div className="amenities-right">
                        <div className="amenities-image-slider">
                            <div className="amenities-slider-container">
                                <img
                                    src={amenitiesImages[currentImageIndex]}
                                    alt={`Amenities view ${currentImageIndex + 1}`}
                                    className="amenities-slider-image"
                                />

                                <button
                                    className="amenities-slider-arrow amenities-slider-arrow-left"
                                    onClick={prevImage}
                                >
                                    &#8249;
                                </button>

                                <button
                                    className="amenities-slider-arrow amenities-slider-arrow-right"
                                    onClick={nextImage}
                                >
                                    &#8250;
                                </button>
                            </div>

                            <div className="amenities-slider-indicators">
                                {amenitiesImages.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`amenities-indicator ${index === currentImageIndex ? 'active' : ''}`}
                                        onClick={() => setCurrentImageIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Location Section */}
                <div className="location-section" id="location">
                    <p className="tag">LOCATION</p>
                    <h2>Discover the charm of Searcy, AR</h2>

                    <iframe
                        src="https://www.google.com/maps?q=Searcy,Arkansas&output=embed"
                        width="100%"
                        height="380"
                        style={{ border: 0 }}
                        loading="lazy"
                        title="map"
                    ></iframe>
                </div>

                {/* Nearby Section */}
                <div className="nearby-section">

                    <div className="nearby-left">
                        <h4>Find us</h4>
                        <p><b>1200 Truman Baker Drive, Searcy, AR, 72143, US</b></p>

                        <p>
                            Our hotel in Searcy, AR, is located off I-57 next to restaurants, shops and attractions. Harding University and Arkansas State University Beebe, Searcy Campus are both accessible within minutes, while Searcy Regional Airport is under five miles away. You can enjoy scenic activities at Riverside Park along the Little Red River or immerse yourself in interactive history at Pioneer Village. If you're traveling with a team, Searcy Sports Complex is just three miles from our hotel. Searcy is also home to a variety of businesses and companies, making us an ideal destination for professional travelers. Everything you need for a successful stay is within reach.
                        </p>
                    </div>

                    <div className="nearby-right">
                        <h3>What's nearby</h3>

                        <div className="nearby-grid">

                            {/* Dining */}
                            <div className="nearby-column">
                                <div className="nearby-heading">
                                    <div className="nearby-icon">🍴</div>
                                    <h5>Dining/Bars</h5>
                                </div>

                                <div className="nearby-item">
                                    <span>Rock House</span>
                                    <small>0.8 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Chilis</span>
                                    <small>0.8 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Texas Roadhouse</span>
                                    <small>0.8 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Fuji Japanese Steakhouse</span>
                                    <small>0.8 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Greek House</span>
                                    <small>0.8 km</small>
                                </div>
                            </div>

                            {/* Attractions */}
                            <div className="nearby-column">
                                <div className="nearby-heading">
                                    <div className="nearby-icon">📍</div>
                                    <h5>Attractions</h5>
                                </div>

                                <div className="nearby-item">
                                    <span>Searcy Sport Complex</span>
                                    <small>0.8 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Pioneer Village</span>
                                    <small>0.8 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>White County Fairground</span>
                                    <small>1.61 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Riverside Park</span>
                                    <small>1.61 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>River Oaks Golf Course</span>
                                    <small>1.61 km</small>
                                </div>
                            </div>

                            {/* Business */}
                            <div className="nearby-column">
                                <div className="nearby-heading">
                                    <div className="nearby-icon">🏢</div>
                                    <h5>Business</h5>
                                </div>

                                <div className="nearby-item">
                                    <span>Walmart Distribution</span>
                                    <small>0.8 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Harding University</span>
                                    <small>0.8 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Turkey Hill Dairy</span>
                                    <small>1.61 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Sams Distribution Center</span>
                                    <small>1.61 km</small>
                                </div>

                                <div className="nearby-item">
                                    <span>Land O Frost</span>
                                    <small>1.61 km</small>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Info Section */}
                <div className="info-section" id="info">
                    <p className="tag">INFO</p>
                    <h2>Essential details</h2>

                    <div className="info-grid">

                        <div className="info-item">
                            <div className="info-icon">⏰</div>
                            <div>
                                <h4>Check-In</h4>
                                <p>15:00</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">⏰</div>
                            <div>
                                <h4>Check-Out</h4>
                                <p>11:00</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">🚭</div>
                            <div>
                                <h4>Smoking Policy</h4>
                                <p>100% Smoke Free</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">🐕</div>
                            <div>
                                <h4>Pets</h4>
                                <p>Not Allowed</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">💳</div>
                            <div>
                                <h4>Payment Methods</h4>
                                <p>All Major Cards</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">♿</div>
                            <div>
                                <h4>Accessibility</h4>
                                <p>ADA Compliant</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">🌐</div>
                            <div>
                                <h4>WiFi</h4>
                                <p>Free High-Speed</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">🅿️</div>
                            <div>
                                <h4>Parking</h4>
                                <p>Free On-Site</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">🔐</div>
                            <div>
                                <h4>Security</h4>
                                <p>24/7 Surveillance</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Reviews Section */}
                <div className="reviews-section" id="reviews">
                    <p className="tag">REVIEWS</p>
                    <h2>Guest Reviews</h2>

                    <div className="reviews-container">
                        <div className="reviews-summary">
                            <div className="rating-display">
                                <div className="rating-number">4.5</div>
                                <div className="rating-stars">⭐⭐⭐⭐☆</div>
                                <p className="rating-count">Based on 248 reviews</p>
                            </div>

                            <div className="rating-breakdown">
                                <div className="rating-bar">
                                    <span>5 ⭐</span>
                                    <div className="bar">
                                        <div className="fill" style={{ width: '60%' }}></div>
                                    </div>
                                    <span>60%</span>
                                </div>
                                <div className="rating-bar">
                                    <span>4 ⭐</span>
                                    <div className="bar">
                                        <div className="fill" style={{ width: '25%' }}></div>
                                    </div>
                                    <span>25%</span>
                                </div>
                                <div className="rating-bar">
                                    <span>3 ⭐</span>
                                    <div className="bar">
                                        <div className="fill" style={{ width: '10%' }}></div>
                                    </div>
                                    <span>10%</span>
                                </div>
                                <div className="rating-bar">
                                    <span>2 ⭐</span>
                                    <div className="bar">
                                        <div className="fill" style={{ width: '3%' }}></div>
                                    </div>
                                    <span>3%</span>
                                </div>
                                <div className="rating-bar">
                                    <span>1 ⭐</span>
                                    <div className="bar">
                                        <div className="fill" style={{ width: '2%' }}></div>
                                    </div>
                                    <span>2%</span>
                                </div>
                            </div>
                        </div>

                        <div className="reviews-list">
                            <div className="review-card">
                                <div className="review-header">
                                    <div className="reviewer-info">
                                        <div className="reviewer-avatar">JD</div>
                                        <div>
                                            <h4>John Doe</h4>
                                            <p>Verified Guest • 2 weeks ago</p>
                                        </div>
                                    </div>
                                    <div className="review-rating">⭐⭐⭐⭐⭐</div>
                                </div>
                                <h5>Excellent Stay!</h5>
                                <p>The room was clean and spacious. The staff was very friendly and helpful. The breakfast was delicious and had plenty of options. I would definitely stay here again!</p>
                                <div className="review-footer">
                                    <button>👍 Helpful (12)</button>
                                    <button>👎 Not Helpful (1)</button>
                                </div>
                            </div>

                            <div className="review-card">
                                <div className="review-header">
                                    <div className="reviewer-info">
                                        <div className="reviewer-avatar">SM</div>
                                        <div>
                                            <h4>Sarah Miller</h4>
                                            <p>Verified Guest • 1 month ago</p>
                                        </div>
                                    </div>
                                    <div className="review-rating">⭐⭐⭐⭐</div>
                                </div>
                                <h5>Great Value for Money</h5>
                                <p>Good location, clean rooms, and friendly staff. The pool was nice and the fitness center was well-equipped. Only minor issue was the noise from the hallway at night, but overall a great experience.</p>
                                <div className="review-footer">
                                    <button>👍 Helpful (8)</button>
                                    <button>👎 Not Helpful (0)</button>
                                </div>
                            </div>

                            <div className="review-card">
                                <div className="review-header">
                                    <div className="reviewer-info">
                                        <div className="reviewer-avatar">MJ</div>
                                        <div>
                                            <h4>Michael Johnson</h4>
                                            <p>Verified Guest • 1 month ago</p>
                                        </div>
                                    </div>
                                    <div className="review-rating">⭐⭐⭐⭐⭐</div>
                                </div>
                                <h5>Perfect for Business Travel</h5>
                                <p>Stayed here for a business conference. The business center was excellent, WiFi was fast and reliable. The room had everything I needed including a comfortable desk. Highly recommended for business travelers!</p>
                                <div className="review-footer">
                                    <button>👍 Helpful (15)</button>
                                    <button>👎 Not Helpful (0)</button>
                                </div>
                            </div>

                            <div className="review-card">
                                <div className="review-header">
                                    <div className="reviewer-info">
                                        <div className="reviewer-avatar">EB</div>
                                        <div>
                                            <h4>Emily Brown</h4>
                                            <p>Verified Guest • 2 months ago</p>
                                        </div>
                                    </div>
                                    <div className="review-rating">⭐⭐⭐⭐</div>
                                </div>
                                <h5>Nice Hotel, Good Service</h5>
                                <p>The hotel is well-maintained and the staff is courteous. Breakfast was good with variety. The room was comfortable. Would have given 5 stars but the parking area could be better lit at night.</p>
                                <div className="review-footer">
                                    <button>👍 Helpful (6)</button>
                                    <button>👎 Not Helpful (1)</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="load-more-reviews">Load More Reviews</button>
                </div>

                {/* Contact Section */}
                <div className="contact-section" id="contact">
                    <p className="tag">CONTACT</p>
                    <h2>Get in Touch</h2>

                    <div className="contact-container">
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="contact-icon">📞</div>
                                <div>
                                    <h4>Phone</h4>
                                    <p><a href="tel:+15015922000">+1 (501) 592-2000</a></p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">📧</div>
                                <div>
                                    <h4>Email</h4>
                                    <p><a href="mailto:info@sleepinn-searcy.com">info@sleepinn-searcy.com</a></p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div>
                                    <h4>Address</h4>
                                    <p>1200 Truman Baker Drive<br />Searcy, AR 72143, US</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">🕐</div>
                                <div>
                                    <h4>Hours</h4>
                                    <p>24/7 Front Desk<br />Available Always</p>
                                </div>
                            </div>
                        </div>

                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="Your Name" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="your@email.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder="+1 (501) 000-0000" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" placeholder="How can we help?" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
                            </div>

                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>

                {/* Footer Section */}
                <footer className="footer-section">
                    <div className="footer-container">
                        <div className="footer-column">
                            <h4>About Sleep Inn</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Press</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Guest Services</h4>
                            <ul>
                                <li><a href="#">Reservations</a></li>
                                <li><a href="#">Manage Booking</a></li>
                                <li><a href="#">Loyalty Program</a></li>
                                <li><a href="#">Group Bookings</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Policies</h4>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Cancellation Policy</a></li>
                                <li><a href="#">Cookie Policy</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Follow Us</h4>
                            <div className="social-links">
                                <a href="#" className="social-icon">f</a>
                                <a href="#" className="social-icon">𝕏</a>
                                <a href="#" className="social-icon">📷</a>
                                <a href="#" className="social-icon">▶️</a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2026 Sleep Inn & Suites Searcy. All rights reserved.</p>
                    </div>
                </footer>

                {/* Amenities Modal */}
                {showAmenitiesModal && (
                    <Amenities onClose={() => setShowAmenitiesModal(false)} />
                )}

            </section>
        </>
    );
}