export const triggerGravity = async () => {
    // Prevent multiple triggers
    if (window._gravityTriggered) return;
    window._gravityTriggered = true;

    // Dynamically import Matter.js to avoid bloating the main bundle
    const Matter = await import('matter-js');
    const { Engine, Runner, World, Bodies } = Matter;

    const engine = Engine.create();
    const world = engine.world;
    
    // Make the gravity fall much faster
    engine.gravity.y = 2.5;

    // Instantly hide any React fallback skeletons that might try to render when the DOM is ripped apart
    document.body.insertAdjacentHTML('beforeend', '<style>.skeleton-container, .skeleton-section, [class*="skeleton"], [class*="Skeleton"] { display: none !important; opacity: 0 !important; visibility: hidden !important; }</style>');

    // Force the document height to stay fixed so falling items don't stretch it infinitely
    const docWidth = document.documentElement.scrollWidth;
    const docHeight = document.documentElement.scrollHeight;
    document.body.style.minHeight = `${docHeight}px`;
    document.body.style.height = `${docHeight}px`;

    // Grab elements to turn into physical bodies
    const selectors = 'p, h1, h2, h3, h4, h5, h6, span, a, button, img, input, textarea, label, li, .project-card, .skill-badge, .orbit-icon, .hero-glow-circle, svg, .footer-logo, .hero-avatar-container, .hero-tag, .glass-panel, .skill-card, .exp-card, .timeline-item, .timeline-dot, .contact-card, .form-group, .skill-progress-bg, .skill-progress-fill, .about-container, .code-editor, .about-domain-item';
    
    const physicsBodies = [];

    // Helper to convert elements to physics bodies
    const dropElements = (elementsList) => {
        const rects = elementsList.map(el => {
            const rect = el.getBoundingClientRect();
            return {
                el,
                x: rect.left + window.scrollX,
                y: rect.top + window.scrollY,
                w: rect.width,
                h: rect.height,
                isZero: rect.width === 0 || rect.height === 0
            };
        }).filter(r => !r.isZero);

        rects.forEach(r => {
            // Check if already processed
            if (r.el.dataset.gravityProcessed) return;
            r.el.dataset.gravityProcessed = "true";

            // Move to body to strip relative parent constraints
            document.body.appendChild(r.el);
            
            // Lock absolute position
            r.el.style.position = 'absolute';
            r.el.style.left = `${r.x}px`;
            r.el.style.top = `${r.y}px`;
            r.el.style.width = `${r.w}px`;
            r.el.style.height = `${r.h}px`;
            r.el.style.margin = '0';
            r.el.style.zIndex = '9999';
            r.el.style.animation = 'none';
            r.el.style.transition = 'none';

            // Create body
            const body = Bodies.rectangle(r.x + r.w / 2, r.y + r.h / 2, r.w, r.h, {
                restitution: 0.7,
                friction: 0.1,
                frictionAir: 0.01,
                density: 0.05
            });

            physicsBodies.push({ body, el: r.el, w: r.w, h: r.h });
            World.add(world, body);
        });
    };

    // 1. Drop existing elements
    dropElements(Array.from(document.querySelectorAll(selectors)));

    // 2. Add boundaries (thicker walls/floor to prevent objects escaping)
    const floor = Bodies.rectangle(docWidth / 2, docHeight + 50, docWidth + 2000, 200, { isStatic: true });
    const leftWall = Bodies.rectangle(-100, docHeight / 2, 200, docHeight + 3000, { isStatic: true });
    const rightWall = Bodies.rectangle(docWidth + 100, docHeight / 2, 200, docHeight + 3000, { isStatic: true });
    
    World.add(world, [floor, leftWall, rightWall]);

    // 3. Sync engine with DOM
    Matter.Events.on(engine, 'afterUpdate', () => {
        // Iterate backwards for safe removal
        for (let i = physicsBodies.length - 1; i >= 0; i--) {
            const { body, el, w, h } = physicsBodies[i];
            const { x, y } = body.position;
            
            // Garbage collect objects that somehow escaped to prevent infinite scroll
            if (y > docHeight + 1000) {
                if (el && el.parentNode) el.parentNode.removeChild(el);
                World.remove(world, body);
                physicsBodies.splice(i, 1);
                continue;
            }

            el.style.left = `${x - w / 2}px`;
            el.style.top = `${y - h / 2}px`;
            el.style.transform = `rotate(${body.angle}rad)`;
        }
    });

    const runner = Runner.create();
    Runner.run(runner, engine);

    // 4. Setup MutationObserver to drop lazy-loaded elements on the fly
    const observer = new MutationObserver((mutations) => {
        let newElements = [];
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                // If a skeleton container somehow still renders, forcefully delete it from DOM
                if (node.nodeType === 1 && node.className && typeof node.className === 'string' && node.className.toLowerCase().includes('skeleton')) {
                    node.parentNode?.removeChild(node);
                    return;
                }

                if (node.nodeType === 1) { // Element node
                    // Check if node itself matches
                    if (node.matches && node.matches(selectors)) {
                        newElements.push(node);
                    }
                    // Check children
                    const children = node.querySelectorAll(selectors);
                    if (children.length > 0) {
                        newElements = newElements.concat(Array.from(children));
                    }
                }
            });
        });
        
        if (newElements.length > 0) {
            // Need a slight delay to allow the browser to paint and assign height/width before dropping
            setTimeout(() => {
                dropElements(newElements);
            }, 50);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
};
