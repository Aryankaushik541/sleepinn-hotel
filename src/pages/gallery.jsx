// components/Gallery.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./gallery.css";

// Import all images
import img1 from "../Assets/1.jpeg";
import img2 from "../Assets/2.jpeg";
import img3 from "../Assets/3.jpeg";
import img4 from "../Assets/4.jpeg";
import img5 from "../Assets/5.jpeg";
import img6 from "../Assets/6.jpeg";
import img7 from "../Assets/7.jpeg";
import img8 from "../Assets/8.jpeg";
import img9 from "../Assets/9.jpeg";
import img10 from "../Assets/10.jpeg";
import img11 from "../Assets/11.jpeg";
import img12 from "../Assets/12.jpeg";
import img13 from "../Assets/13.jpeg";
import img14 from "../Assets/14.jpeg";
import img15 from "../Assets/15.jpeg";
import img16 from "../Assets/16.jpeg";
import img17 from "../Assets/17.jpeg";
import img18 from "../Assets/18.jpeg";
import img19 from "../Assets/19.jpeg";
import img20 from "../Assets/20.jpeg";
import img21 from "../Assets/21.jpeg";
import img22 from "../Assets/22.jpeg";
import img23 from "../Assets/23.jpeg";
import img24 from "../Assets/24.jpeg";
import img25 from "../Assets/25.jpeg";
import img26 from "../Assets/26.jpeg";
import img27 from "../Assets/27.jpeg";
import img28 from "../Assets/28.jpeg";
import img29 from "../Assets/29.jpeg";
import img30 from "../Assets/30.jpeg";
import img31 from "../Assets/31.jpeg";
import img32 from "../Assets/32.jpeg";
import img33 from "../Assets/33.jpeg";

export default function Gallery() {
    const [currentImage, setCurrentImage] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("All Photos");
    const [activeTab, setActiveTab] = useState("photos");
    const navigate = useNavigate();

    const categories = [
        { name: "All Photos", count: 33 },
        { name: "Rooms & Suites", count: 20 },
        { name: "Exterior", count: 5 },
        { name: "Lobby", count: 3 },
        { name: "Breakfast Area", count: 3 },
        { name: "Amenities", count: 2 }
    ];

    const imageUrls = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
        img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
        img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
        img31, img32, img33
    ];

    const images = imageUrls.map((url, i) => {
        const imageNumber = i + 1;
        return {
            id: imageNumber,
            url: url,
            caption: imageNumber === 1 ? "Spacious room with queen beds" : `Rooms & Suites ${imageNumber}`,
            category: imageNumber <= 20 ? "Rooms & Suites" :
                imageNumber <= 25 ? "Exterior" :
                    imageNumber <= 28 ? "Lobby" :
                        imageNumber <= 31 ? "Breakfast Area" :
                            "Amenities"
        };
    });

    const filteredImages = selectedCategory === "All Photos"
        ? images
        : images.filter(img => img.category === selectedCategory);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % filteredImages.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    };

    useEffect(() => {
        setCurrentImage(0);
    }, [selectedCategory]);

    const handleClose = () => {
        navigate('/');
    };

    return (
        <div className="gallery-container">
            {/* Close Button - Top Right */}
            <button className="close-button" onClick={handleClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            {/* Header */}
            <div className="gallery-header">
                <h1 className="gallery-title">Sleep Inn & Suites Searcy near University</h1>

                {/* Tab Navigation */}
                <div className="tab-navigation">
                    <button
                        className={`tab-button ${activeTab === "photos" ? "active" : "inactive"}`}
                        onClick={() => setActiveTab("photos")}
                    >
                        <span>📷</span> Photos
                    </button>
                    <button
                        className={`tab-button ${activeTab === "virtual-tour" ? "active" : "inactive"}`}
                        onClick={() => setActiveTab("virtual-tour")}
                    >
                        <span>🏨</span> Virtual tour
                    </button>
                </div>

                {/* Category Filters */}
                {activeTab === "photos" && (
                    <div className="category-filters">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => setSelectedCategory(category.name)}
                                className={`category-button ${selectedCategory === category.name ? 'active' : ''}`}
                            >
                                {category.name} ({category.count})
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Main Content Area */}
            <div className="main-image-container">
                {activeTab === "photos" && (
                    <>
                        <div className="image-wrapper">
                            <img
                                src={filteredImages[currentImage]?.url}
                                alt={filteredImages[currentImage]?.caption}
                                className="main-image"
                            />

                            {/* Left Arrow */}
                            <button
                                onClick={prevImage}
                                className="nav-arrow prev"
                                aria-label="Previous image"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>

                            {/* Right Arrow */}
                            <button
                                onClick={nextImage}
                                className="nav-arrow next"
                                aria-label="Next image"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>

                            {/* Image Caption */}
                            <div className="image-caption">
                                <p>{filteredImages[currentImage]?.caption}</p>
                            </div>

                            {/* Image Counter */}
                            <div className="image-counter">
                                {currentImage + 1} / {filteredImages.length}
                            </div>
                        </div>

                        {/* Thumbnail Strip */}
                        <div className="thumbnail-strip">
                            {filteredImages.slice(0, 10).map((image, index) => (
                                <button
                                    key={image.id}
                                    onClick={() => setCurrentImage(index)}
                                    className={`thumbnail-button ${index === currentImage ? 'active' : ''}`}
                                >
                                    <img
                                        src={image.url}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="thumbnail-image"
                                    />
                                </button>
                            ))}
                            {filteredImages.length > 10 && (
                                <div className="thumbnail-more">
                                    +{filteredImages.length - 10}
                                </div>
                            )}
                        </div>
                    </>
                )}

                {activeTab === "virtual-tour" && (
                    <div className="virtual-tour-wrapper">
                        <iframe
                            src="https://www.vpix.net/764425"
                            className="virtual-tour-iframe"
                            title="Virtual Tour"
                            allowFullScreen
                            frameBorder="0"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}