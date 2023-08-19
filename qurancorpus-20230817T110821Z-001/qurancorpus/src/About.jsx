import React from "react";


const About = () => {
    return (
        <div className="about-container">
            <div className="welcome-section">
                <h2 className="welcome-heading">Learn About Us</h2>
            </div>
            <div className="mission-section">
                <h2 className="section-heading">Our Mission</h2>
                <p className="mission-description">
                    Our mission is to develop a collaborative project designed by Alimayah and computer science students. Pedagogic Quran Ebook is designed to cater to the needs of teachers, Alims, and students, enhancing their learning activities and bridging the gap between academia and Dastar-e-Nizami.
                </p>
            </div>
            <div className="developers-section">
                <h2 className="section-heading">About Developers</h2>
                <div className="developers-list">
                    <p className="developer-name">Arooba Zulfiqar (2019-BCS-012)</p>
                    <p className="developer-name">Rabia Ashraf (2019-BCS-036)</p>
                    <p className="developer-name">Ujala Aleem (2019-BCS-046)</p>
                </div>
            </div>
            <div className="clients-section">
                <h2 className="section-heading">About Clients</h2>
                <p className="clients-description">Pedagogic Quran Ebook is developed for Hamna Center Madrissa in Lahore, Pakistan.</p>
            </div>
            <div className="contact-section">
                <h2 className="section-heading">Contact Us</h2>
                <p className="contact-info">
                    For any inquiries, feedback, or support, please reach out to our team at <a href="mailto:rabiaashrafpk233@gmail.com">rabiaashrafpk233@gmail.com</a>.
                </p>
            </div>
        </div>
    );
};

export default About;
