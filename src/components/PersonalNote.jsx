import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
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
            <div className="note-paper" onClick={(e) => e.stopPropagation()}>
                <button
                    ref={closeBtnRef}
                    className="note-close"
                    onClick={onClose}
                    aria-label="Close note"
                >
                    <X size={22} />
                </button>

                <div className="note-content">
                    <p className="note-greeting">Hey \u2014 you found the secret note. <span role="img" aria-label="detective">🕵️</span></p>
                    
                    <p>
                        Most people never look this deep into a portfolio. You did \u2014 that already tells me you care about the details.
                    </p>
                    
                    <p>
                        I built this portfolio not just as a digital resume, but as a playground. Here is a quick rundown of what I bring to the table:
                    </p>

                    <ul className="note-list">
                        <li><strong>Frontend:</strong> React, obsessive about motion & detail.</li>
                        <li><strong>Backend:</strong> Node/Express APIs built to survive 3am traffic.</li>
                        <li><strong>Databases:</strong> PostgreSQL, MySQL & MongoDB \u2014 relational or NoSQL, whichever fits.</li>
                        <li><strong>Cloud:</strong> AWS (EC2, S3, Lambda, RDS) and whatever else ships it.</li>
                        <li><strong>Payments:</strong> Stripe, Razorpay & Thawani \u2014 checkout flows that just work.</li>
                        <li><strong>Integrations:</strong> Xero, PRODA, Telnyx, Mistral AI, Twilio, and counting.</li>
                    </ul>

                    <p>
                        <strong>What I'm looking for:</strong> Teams building something ambitious, scalable, and user-focused.
                    </p>

                    <div className="note-signature">
                        <p>Looking forward to connecting,</p>
                        <a href="mailto:pandeysaurav878@gmail.com" className="note-name">Saurav Kumar</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalNote;
