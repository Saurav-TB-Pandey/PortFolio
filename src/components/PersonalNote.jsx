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
            aria-labelledby="note-greeting"
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

                <div className="note-scroll">
                    <div className="note-content">
                        <p className="note-greeting" id="note-greeting">
                            Hey — you found the secret note.{" "}
                            <span role="img" aria-label="detective">
                                🕵️
                            </span>
                        </p>

                        <p>
                            Most people don't look this closely at a portfolio.
                            You did — and that already tells me you're someone
                            who pays attention to details, which is exactly how
                            I like to work too.
                        </p>

                        <p>
                            I didn't build this site to just list my skills. I
                            wanted it to feel like something I'd genuinely be
                            proud to hand someone — fast, smooth, and thought
                            through down to the smallest interaction.
                        </p>

                        <p>
                            In plain terms, here's what I actually do: I build
                            complete products, not just the parts you see on
                            screen. That means designing interfaces people enjoy
                            using, and also building everything running quietly
                            behind the scenes — the systems that store
                            information safely, keep a website up and running
                            without hiccups, and make sure things like payments
                            go through smoothly every time.
                        </p>

                        <p>
                            I've worked with tools like{" "}
                            <strong>PostgreSQL, MySQL, and MongoDB</strong> to
                            keep data organized, <strong>AWS</strong> to keep
                            everything running reliably in the cloud, and
                            payment systems like{" "}
                            <strong>Stripe, Razorpay, and Thawani</strong> so
                            customers can check out without a hitch. I've also
                            connected apps to outside services — things like{" "}
                            <strong>Xero</strong> for accounting,{" "}
                            <strong>Twilio</strong> and <strong>Telnyx</strong>{" "}
                            for messaging, <strong>PRODA</strong>, and AI tools
                            like <strong>Mistral</strong> — so different systems
                            can talk to each other and just work.
                        </p>

                        <p>
                            <strong>What I'm looking for:</strong> a team
                            building something ambitious, that cares about
                            getting the details right as much as I do.
                        </p>

                        <div className="note-signature">
                            <p>Looking forward to connecting,</p>
                            <a
                                href="mailto:pandeysaurav878@gmail.com"
                                className="note-name"
                            >
                                Saurav Kumar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalNote;
