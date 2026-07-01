import React, { useEffect, useRef } from "react";
import { X, Terminal } from "lucide-react";
import "./PersonalNote.css";

/**
 * A "found in devtools" easter egg styled as real source code —
 * on-brand for a full-stack portfolio instead of a generic note card.
 */
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
            aria-labelledby="note-filename-label"
        >
            <div className="note-modal" onClick={(e) => e.stopPropagation()}>
                <div className="note-titlebar">
                    <div className="note-dots" aria-hidden="true">
                        <span className="dot-red" />
                        <span className="dot-amber" />
                        <span className="dot-green" />
                    </div>
                    <div className="note-filename" id="note-filename-label">
                        <Terminal size={14} />
                        <span>recruiter-note.js</span>
                    </div>
                    <span className="note-badge">READ ONLY</span>
                    <button
                        ref={closeBtnRef}
                        className="note-close-btn"
                        onClick={onClose}
                        aria-label="Close note"
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="note-scroll-area">
                    <CodeLine n={1} tokens={[["tok-comment", "/**"]]} />
                    <CodeLine
                        n={2}
                        tokens={[
                            [
                                "tok-comment",
                                " * Hey — you found the secret note. ",
                            ],
                            ["tok-emoji", "🕵️"],
                        ]}
                    />
                    <CodeLine
                        n={3}
                        tokens={[
                            [
                                "tok-comment",
                                " * Most people never open devtools on a portfolio.",
                            ],
                        ]}
                    />
                    <CodeLine
                        n={4}
                        tokens={[
                            [
                                "tok-comment",
                                " * You did — that already tells me something.",
                            ],
                        ]}
                    />
                    <CodeLine n={5} tokens={[["tok-comment", " */"]]} />
                    <div className="code-line spacer" aria-hidden="true" />

                    <CodeLine
                        n={6}
                        tokens={[
                            ["tok-key", "const"],
                            ["tok-plain", " about = {"],
                        ]}
                    />
                    <CodeLine
                        n={7}
                        indent
                        tokens={[
                            ["tok-plain", "frontend: "],
                            [
                                "tok-string",
                                '"React, obsessive about motion & detail"',
                            ],
                            ["tok-punct", ","],
                        ]}
                    />
                    <CodeLine
                        n={8}
                        indent
                        tokens={[
                            ["tok-plain", "backend: "],
                            [
                                "tok-string",
                                '"Node/Express APIs built to survive 3am traffic"',
                            ],
                            ["tok-punct", ","],
                        ]}
                    />
                    <CodeLine
                        n={9}
                        indent
                        tokens={[
                            ["tok-plain", "database: "],
                            [
                                "tok-string",
                                '"PostgreSQL & MongoDB schemas that don\u2019t fall over"',
                            ],
                            ["tok-punct", ","],
                        ]}
                    />
                    <CodeLine
                        n={10}
                        indent
                        tokens={[
                            ["tok-plain", "cloud: "],
                            [
                                "tok-string",
                                '"AWS \u2014 EC2, S3, Lambda, RDS, and whatever else ships it"',
                            ],
                            ["tok-punct", ","],
                        ]}
                    />
                    <CodeLine n={11} tokens={[["tok-plain", "};"]]} />
                    <div className="code-line spacer" aria-hidden="true" />

                    <CodeLine
                        n={12}
                        tokens={[
                            ["tok-key", "const"],
                            ["tok-plain", " lookingFor = "],
                            [
                                "tok-string",
                                '"teams building something ambitious, scalable, and user-focused"',
                            ],
                            ["tok-punct", ";"],
                        ]}
                    />
                    <div className="code-line spacer" aria-hidden="true" />

                    <CodeLine
                        n={13}
                        tokens={[
                            [
                                "tok-comment",
                                "// there are a few more easter eggs hiding around here too ",
                            ],
                            ["tok-emoji", "👀"],
                        ]}
                    />
                </div>

                <div className="note-prompt">
                    <div className="prompt-line">
                        <span className="prompt-user">saurav@portfolio</span>
                        <span className="tok-punct">:~$</span>
                        <span className="prompt-cmd">echo "let's talk"</span>
                    </div>
                    <div className="prompt-output">
                        <span className="tok-plain">
                            Looking forward to connecting —
                        </span>
                        <span className="signature-name">Saurav Kumar</span>
                        <span className="cursor-blink" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </div>
    );
};

/** Renders one line of the code block with a line number and inline tokens. */
const CodeLine = ({ n, tokens, indent = false }) => (
    <div className={`code-line${indent ? " indent-1" : ""}`}>
        <span className="line-num">{n}</span>
        <span className="line-content">
            {tokens.map(([cls, text], i) => (
                <span key={i} className={cls}>
                    {text}
                </span>
            ))}
        </span>
    </div>
);

export default PersonalNote;
