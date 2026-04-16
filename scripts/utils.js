// scripts/utils.js
const Utils = {
    initTheme: function() {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;

        // Light is the DEFAULT — dark-mode is the override
        let isLight = localStorage.getItem('theme') !== 'dark';

        const applyTheme = (light) => {
            if (light) {
                document.documentElement.classList.add('light-mode');
                themeToggle.innerHTML = '<i class="ph ph-moon"></i>';
            } else {
                document.documentElement.classList.remove('light-mode');
                themeToggle.innerHTML = '<i class="ph ph-sun"></i>';
            }
        };

        applyTheme(isLight);

        themeToggle.addEventListener('click', () => {
            isLight = !isLight;
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            applyTheme(isLight);
        });
    },

    initScrollReveal: function() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        setTimeout(() => {
            document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach((el) => {
                observer.observe(el);
            });
        }, 100);
    },

    initMobileMenu: function() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }
    },

    // ── Custom Cursor ─────────────────────────────────────────
    initCustomCursor: function() {
        // Skip on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const dot  = document.createElement('div');
        const ring = document.createElement('div');
        dot.className  = 'cursor-dot';
        ring.className = 'cursor-ring';
        document.body.append(dot, ring);

        let mouseX = 0, mouseY = 0;
        let ringX  = 0, ringY  = 0;
        let raf;

        document.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = mouseX + 'px';
            dot.style.top  = mouseY + 'px';
        });

        // Ring follows with lerp (smoothed)
        function animateRing() {
            ringX += (mouseX - ringX) * 0.14;
            ringY += (mouseY - ringY) * 0.14;
            ring.style.left = ringX + 'px';
            ring.style.top  = ringY + 'px';
            raf = requestAnimationFrame(animateRing);
        }
        animateRing();

        // Hover state on interactive elements
        const hoverTargets = 'a, button, .btn, .filter-btn, .lang-btn, .portfolio-card, .glass-card, .link-arrow, input, textarea, label';
        document.body.addEventListener('mouseover', e => {
            if (e.target.closest && e.target.closest(hoverTargets)) {
                ring.classList.add('hovering');
            }
        });
        document.body.addEventListener('mouseout', e => {
            if (e.target.closest && e.target.closest(hoverTargets)) {
                ring.classList.remove('hovering');
            }
        });

        document.addEventListener('mousedown', () => dot.classList.add('clicking'));
        document.addEventListener('mouseup',   () => dot.classList.remove('clicking'));

        window.addEventListener('beforeunload', () => cancelAnimationFrame(raf));
    },

    // ── Navbar Scroll Shrink ─────────────────────────────────
    initNavbarShrink: function() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 60);
        }, { passive: true });
    },

    // ── Micro-Parallax (hero section) ───────────────────────
    initParallax: function() {
        const hero = document.querySelector('.hero-minimal');
        if (!hero) return;

        const tag  = hero.querySelector('.tag');
        const h1   = hero.querySelector('h1');
        const desc = hero.querySelector('.text-lead');
        const btns = hero.querySelector('.hero-actions');

        const layers = [
            { el: tag,  rate: 0.25 },
            { el: h1,   rate: 0.18 },
            { el: desc, rate: 0.12 },
            { el: btns, rate: 0.06 },
        ];

        window.addEventListener('scroll', () => {
            const y = window.scrollY;
            layers.forEach(({ el, rate }) => {
                if (el) el.style.transform = `translateY(${y * rate}px)`;
            });
        }, { passive: true });
    },

    // ── Card Tilt on Mouse Move ──────────────────────────────
    initCardTilt: function() {
        const cards = document.querySelectorAll('.glass-card, .portfolio-card');
        if (!cards.length) return;

        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const cx = rect.width  / 2;
                const cy = rect.height / 2;
                const rotateX = ((y - cy) / cy) * -6;
                const rotateY = ((x - cx) / cx) *  6;

                card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;

                // Update CSS vars for glow position
                const mx = ((x / rect.width)  * 100).toFixed(1) + '%';
                const my = ((y / rect.height) * 100).toFixed(1) + '%';
                card.style.setProperty('--mx', mx);
                card.style.setProperty('--my', my);
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    },

    // ── Timeline Draw on Scroll ──────────────────────────────
    initTimelineDraw: function() {
        const timeline = document.querySelector('.timeline');
        if (!timeline) return;

        window.addEventListener('scroll', () => {
            const rect   = timeline.getBoundingClientRect();
            const viewH  = window.innerHeight;
            const total  = rect.height;
            const start  = rect.top;
            const drawn  = Math.max(0, Math.min(total, viewH - start));
            const pct    = Math.round((drawn / total) * 100);
            timeline.style.setProperty('--timeline-progress', pct + '%');
        }, { passive: true });
    },

    // ── Scroll Indicator on Hero ─────────────────────────────
    initScrollIndicator: function() {
        const hero = document.querySelector('.hero-minimal');
        if (!hero) return;

        // Make hero relative so indicator can be absolute
        hero.style.position = 'relative';

        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        indicator.innerHTML = '<span></span>';
        hero.appendChild(indicator);

        // Hide indicator once user scrolls
        window.addEventListener('scroll', () => {
            indicator.style.opacity = window.scrollY > 80 ? '0' : '';
        }, { passive: true });
    }
};

window.Utils = Utils;

