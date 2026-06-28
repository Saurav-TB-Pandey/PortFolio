import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Award } from "lucide-react";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

    const suggestions = [
        {
            label: "💼 Hire Saurav",
            subject: "Project Collaboration Request",
            message:
                "Hi Saurav, I checked your portfolio and would love to discuss a project collaboration opportunity. Let's connect!",
        },
        {
            label: "🤝 Schedule Interview",
            subject: "Interview Invitation",
            message:
                "Hi Saurav, I would love to schedule a technical interview for an open developer role at our company.",
        },
        {
            label: "💬 Technical Query",
            subject: "General Technical Inquiry",
            message:
                "Hi Saurav, I have a quick question about your MERN stack or AWS deployment experiences.",
        },
    ];

    const handleSuggestionClick = (suggestion) => {
        setFormData((prev) => ({
            ...prev,
            subject: suggestion.subject,
            message: suggestion.message,
        }));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        // Load access key securely from environment variables (.env file)
        const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

        if (!ACCESS_KEY || ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
            // Simulation fallback if the access key is not yet set in .env
            console.warn(
                "Web3Forms Access Key is not configured in .env. Falling back to simulation mode.",
            );
            setTimeout(() => {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setStatus(null), 5000);
            }, 1200);
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: ACCESS_KEY,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    from_name: formData.name || "Portfolio Visitor",
                }),
            });

            const res = await response.json();
            if (res.success) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setStatus(null), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus(null), 5000);
            }
        } catch (err) {
            console.error("Error submitting form:", err);
            setStatus("error");
            setTimeout(() => setStatus(null), 5000);
        }
    };

    const socials = [
        {
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
            ),
            url: "https://github.com/Saurav-TB-Pandey",
            label: "GitHub",
        },
        {
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            ),
            url: "https://linkedin.com/in/pandeysaurav",
            label: "LinkedIn",
        },
        {
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            ),
            url: "https://instagram.com/saurav_tb_pandey",
            label: "Instagram",
        },
        {
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
            ),
            url: "https://facebook.com/pandeyji9570",
            label: "Facebook",
        },
        {
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z M4 20l6.768 -6.768 M20 4l-6.768 6.768"></path>
                </svg>
            ),
            url: "https://twitter.com/pandeyji9570",
            label: "Twitter",
        },
        {
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2a29 29 0 0 0 .46-5.25a29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
            ),
            url: "https://www.youtube.com/@hiddenguruji",
            label: "YouTube",
        },
    ];

    const codingProfiles = [
        {
            name: "CodeChef",
            url: "https://www.codechef.com/users/pandeyji9570",
        },
        { name: "HackerRank", url: "https://www.hackerrank.com/pandeyji0495" },
    ];

    return (
        <section
            id="contact"
            className="section"
            style={{ paddingBottom: "8rem" }}
        >
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="section-subtitle">
                        Let's discuss your next project, integration challenges,
                        or job opportunities.
                    </p>
                </div>

                <div className="contact-container">
                    <div className="contact-info">
                        <div className="contact-card-list">
                            <div className="glass-panel contact-card-item">
                                <span className="contact-card-icon">
                                    <Mail size={22} />
                                </span>
                                <div className="contact-card-details">
                                    <h4>Email Address</h4>
                                    <a href="mailto:pandeysaurav878@gmail.com">
                                        pandeysaurav878@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="glass-panel contact-card-item">
                                <span className="contact-card-icon">
                                    <Phone size={22} />
                                </span>
                                <div className="contact-card-details">
                                    <h4>Phone Number</h4>
                                    <a href="tel:+919570823816">
                                        +91 95708 23816
                                    </a>
                                </div>
                            </div>

                            <div className="glass-panel contact-card-item">
                                <span className="contact-card-icon">
                                    <MapPin size={22} />
                                </span>
                                <div className="contact-card-details">
                                    <h4>Location</h4>
                                    <p>Jaipur, Rajasthan, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-social-grid">
                            <h3 className="contact-social-title">
                                Coding Profiles
                            </h3>
                            <div
                                className="contact-social-links"
                                style={{ marginBottom: "1.5rem" }}
                            >
                                {codingProfiles.map((profile, idx) => (
                                    <a
                                        key={idx}
                                        href={profile.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="badge badge-primary"
                                        style={{
                                            display: "inline-flex",
                                            gap: "0.4rem",
                                            padding: "0.5rem 1rem",
                                            fontSize: "0.85rem",
                                        }}
                                    >
                                        <Award size={14} />
                                        {profile.name}
                                    </a>
                                ))}
                            </div>

                            <h3 className="contact-social-title">
                                Social Networks
                            </h3>
                            <div className="contact-social-links">
                                {socials.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="badge"
                                        style={{
                                            display: "inline-flex",
                                            gap: "0.4rem",
                                            padding: "0.5rem 1rem",
                                            fontSize: "0.85rem",
                                        }}
                                    >
                                        {social.icon}
                                        {social.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel contact-form-panel">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="email">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            {/* Clickable Quick Templates */}
                            <div className="form-group">
                                <label className="suggestions-title">
                                    Quick Message Templates
                                </label>
                                <div className="suggestions-list">
                                    {suggestions.map((s, idx) => (
                                        <button
                                            key={idx}
                                            type="button"
                                            className="suggestion-chip"
                                            onClick={() =>
                                                handleSuggestionClick(s)
                                            }
                                        >
                                            {s.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="subject">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="Project Collaboration"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-textarea"
                                    placeholder="Hi Saurav, I would like to discuss..."
                                    required
                                ></textarea>
                            </div>

                            {status === "sending" && (
                                <div className="contact-form-status status-sending">
                                    Sending message... Please wait.
                                </div>
                            )}

                            {status === "success" && (
                                <div className="contact-form-status status-success">
                                    Message sent successfully! Saurav will get
                                    back to you shortly.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="contact-form-status status-error">
                                    Oops! Something went wrong. Please check
                                    your network or try again.
                                </div>
                            )}

                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{
                                    justifyContent: "center",
                                    marginTop: "0.5rem",
                                }}
                                disabled={status === "sending"}
                            >
                                Send Message <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
