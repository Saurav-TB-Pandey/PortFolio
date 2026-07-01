import React, { useEffect, useRef } from "react";
import { X, Mail, Code2, Server, Cloud, CreditCard, Plug, ArrowRight } from "lucide-react";
import "./PersonalNote.css";

const PersonalNote = ({ isOpen, onClose }) => {
    const closeBtnRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;
        closeBtnRef.current?.focus();

        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="note-overlay"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div className="note-card" onClick={(e) => e.stopPropagation()}>
                <button
                    ref={closeBtnRef}
                    className="note-close"
                    onClick={onClose}
                    aria-label="Close note"
                >
                    <X size={24} />
                </button>

                <div className="note-header">
                    <div className="note-badge-secret">CONFIDENTIAL 🕵️</div>
                    <h2>Hey \u2014 you found the secret note.</h2>
                    <p className="note-subtitle">
                        Most people never look this deep into a portfolio. You did \u2014 that already tells me you care about the details.
                    </p>
                </div>

                <div className="note-body">
                    <p className="note-intro">
                        I built this portfolio not just as a digital resume, but as a playground. Here is a quick rundown of what I bring to the table:
                    </p>

                    <div className="note-skills-grid">
                        <div className="note-skill-item">
                            <div className="skill-icon"><Code2 size={20} /></div>
                            <div className="skill-content">
                                <strong>Frontend</strong>
                                <span>React, obsessive about motion & detail</span>
                            </div>
                        </div>
                        <div className="note-skill-item">
                            <div className="skill-icon"><Server size={20} /></div>
                            <div className="skill-content">
                                <strong>Backend</strong>
                                <span>Node/Express APIs built to survive 3am traffic</span>
                            </div>
                        </div>
                        <div className="note-skill-item">
                            <div className="skill-icon"><Cloud size={20} /></div>
                            <div className="skill-content">
                                <strong>Cloud & DBs</strong>
                                <span>AWS (EC2, S3, RDS) & SQL/NoSQL databases</span>
                            </div>
                        </div>
                        <div className="note-skill-item">
                            <div className="skill-icon"><CreditCard size={20} /></div>
                            <div className="skill-content">
                                <strong>Payments</strong>
                                <span>Stripe, Razorpay & Thawani integrations</span>
                            </div>
                        </div>
                        <div className="note-skill-item full-width">
                            <div className="skill-icon"><Plug size={20} /></div>
                            <div className="skill-content">
                                <strong>Integrations</strong>
                                <span>Xero, PRODA, Telnyx, Mistral AI, Twilio, and counting</span>
                            </div>
                        </div>
                    </div>

                    <div className="note-looking-for">
                        <h3>What I'm looking for:</h3>
                        <p>Teams building something ambitious, scalable, and user-focused.</p>
                    </div>
                </div>

                <div className="note-footer">
                    <div className="note-signature-block">
                        <p>Looking forward to connecting,</p>
                        <h4>Saurav Kumar</h4>
                    </div>
                    <a href="mailto:pandeysaurav878@gmail.com" className="note-cta">
                        Let's Talk <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PersonalNote;
