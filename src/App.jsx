import React, { useState, useEffect, useCallback } from "react";
import { Analytics } from "@vercel/analytics/react";
import { TerminalSquare } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LazySection from "./components/LazySection";
import {
    AboutSkeleton,
    SkillsSkeleton,
    ExperienceSkeleton,
    ProjectsSkeleton,
    ContactSkeleton,
} from "./components/SkeletonLoader";
import "./App.css";

import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Easter Eggs
import SecretTerminal from "./components/SecretTerminal";
import DevStats from "./components/DevStats";
import PersonalNote from "./components/PersonalNote";

let hasLoggedEasterEgg = false;

function App() {
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);
    const [isStatsOpen, setIsStatsOpen] = useState(false);
    const [isNoteOpen, setIsNoteOpen] = useState(false);

    // Developer Console Easter Egg
    useEffect(() => {
        if (hasLoggedEasterEgg) return;
        hasLoggedEasterEgg = true;

        const asciiArt = `
 ██████╗  █████╗ ██╗   ██╗██████╗  █████╗ ██╗   ██╗
██╔════╝ ██╔══██╗██║   ██║██╔══██╗██╔══██╗██║   ██║
███████╗ ███████║██║   ██║██████╔╝███████║██║   ██║
╚════██║ ██╔══██║██║   ██║██╔══██╗██╔══██║╚██╗ ██╔╝
███████║ ██║  ██║╚██████╔╝██║  ██║██║  ██║ ╚████╔╝ 
╚══════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  
    `;

        console.info(
            `%c${asciiArt}\n%c> ACCESS GRANTED_\n\n%cWelcome to the source, agent. 🕵️\nMost visitors never make it past the pixels. You did — that\nusually means one of two things: you're a developer, or you're\nabout to become my next favorite interview.\n\nThis site runs on the same principles I bring to real products:\nfast, clean, and built to survive contact with real users.\n\n%c📬 pandeysaurav878@gmail.com\n🔗 github.com/Saurav-TB-Pandey\n\n%c> type @ # or $ anywhere on the page to continue_`,
            "color: #00ff88; font-weight: bold; font-family: monospace;",
            "color: #00ff88; font-size: 22px; font-weight: bold; font-family: monospace; text-shadow: 0 0 8px #00ff88;",
            "color: #d1fae5; font-size: 14px; line-height: 1.6;",
            "color: #00ff88; font-size: 14px; font-weight: bold; line-height: 1.6; padding: 8px 0;",
            "color: #6ee7b7; font-size: 13px; font-style: italic;",
        );
    }, []);

    // Global key listener for the secret terminal (` key)
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Ignore if typing in any input field (contact form, terminal, etc.)
            const tagName = e.target.tagName;
            if (
                ["INPUT", "TEXTAREA", "SELECT"].includes(tagName) ||
                e.target.isContentEditable
            ) {
                return;
            }

            // Check if the pressed key is a special character
            const isSpecialChar =
                /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]$/.test(e.key);

            if (isSpecialChar) {
                e.preventDefault();
                setIsTerminalOpen((prev) => !prev);
            }
        };

        const handleCustomOpen = () => setIsTerminalOpen(true);

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("open-terminal", handleCustomOpen);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("open-terminal", handleCustomOpen);
        };
    }, []);

    return (
        <div className="app">
            <Navbar />
            <Hero />

            <div id="about">
                <LazySection fallback={<AboutSkeleton />}>
                    <About />
                </LazySection>
            </div>
            <div id="skills">
                <LazySection fallback={<SkillsSkeleton />}>
                    <Skills />
                </LazySection>
            </div>
            <div id="experience">
                <LazySection fallback={<ExperienceSkeleton />}>
                    <Experience />
                </LazySection>
            </div>
            <div id="projects">
                <LazySection fallback={<ProjectsSkeleton />}>
                    <Projects />
                </LazySection>
            </div>
            <div id="contact">
                <LazySection fallback={<ContactSkeleton />}>
                    <Contact />
                </LazySection>
            </div>

            {/* Secret Easter Egg Overlays */}
            <SecretTerminal
                isOpen={isTerminalOpen}
                onClose={() => setIsTerminalOpen(false)}
                onOpenStats={() => setIsStatsOpen(true)}
                onOpenNote={() => setIsNoteOpen(true)}
            />
            <DevStats
                isOpen={isStatsOpen}
                onClose={() => setIsStatsOpen(false)}
            />
            <PersonalNote
                isOpen={isNoteOpen}
                onClose={() => setIsNoteOpen(false)}
            />

            <footer className="footer">
                <div className="container footer-container">
                    <div className="footer-logo">&lt;SauravKumar /&gt;</div>
                    <p className="footer-quote">
                        "Code is like humor. When you have to explain it, it's
                        bad."
                    </p>
                    <p className="footer-text">
                        &copy; {new Date().getFullYear()} Saurav Kumar. All
                        rights reserved. Designed with visual excellence.
                    </p>
                </div>
            </footer>
            <Analytics debug={false} />
        </div>
    );
}

export default App;
