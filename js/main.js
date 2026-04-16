document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // Theme Toggle Functionality
    // ----------------------------------------------------
    const themeToggleBtn = document.getElementById('themeToggle');
    const body = document.body;
    let icon = null;
    
    if(themeToggleBtn) {
        icon = themeToggleBtn.querySelector('i');
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            icon.classList.replace('ph-moon', 'ph-sun');
        } else if (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-mode');
            icon.classList.replace('ph-moon', 'ph-sun');
        }

        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                icon.classList.replace('ph-moon', 'ph-sun');
            } else {
                localStorage.setItem('theme', 'light');
                icon.classList.replace('ph-sun', 'ph-moon');
            }
        });
    }

    // ----------------------------------------------------
    // Intersection Observer for Smooth Scroll Animations
    // ----------------------------------------------------
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

    document.querySelectorAll('.fade-up').forEach(element => {
        observer.observe(element);
    });

    // ----------------------------------------------------
    // Highlight Active Nav Link
    // ----------------------------------------------------
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });

    // ----------------------------------------------------
    // Navbar visual change on scroll
    // ----------------------------------------------------
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.style.borderBottom = '1px solid var(--color-glass-border)';
                navbar.style.boxShadow = 'var(--shadow-soft)';
            } else {
                navbar.style.borderBottom = '1px solid transparent';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // ----------------------------------------------------
    // Mobile Menu Toggle
    // ----------------------------------------------------
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isVisible = navLinks.style.display === 'flex';
            navLinks.style.display = isVisible ? 'none' : 'flex';
            
            if (!isVisible) {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'var(--color-bg)';
                navLinks.style.padding = '2rem';
                navLinks.style.boxShadow = 'var(--shadow-soft)';
                navLinks.style.borderBottom = '1px solid var(--color-glass-border)';
            } else {
                navLinks.style = '';
            }
        });
    }

    // ----------------------------------------------------
    // Localization / Translations Logic
    // ----------------------------------------------------
    const langBtns = document.querySelectorAll('.lang-btn');
    
    // Default lang behavior
    let currentLang = localStorage.getItem('language') || 'vi'; // Default to vi

    function resolveTranslationInfo(keyPath, translationsObj) {
        return keyPath.split('.').reduce((acc, part) => acc && acc[part], translationsObj);
    }

    function applyTranslations(lang) {
        if (!window.siteTranslations) return;
        const dict = window.siteTranslations[lang];
        if (!dict) return;

        // Set HTML lang attribute
        document.documentElement.lang = lang;

        // Translate normal text innerHTML / textContent
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = resolveTranslationInfo(key, dict);
            if (translation) {
                // If it contains HTML entities like <br> or <strong>, use innerHTML
                if (translation.includes('<')) {
                    el.innerHTML = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });

        // Translate placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = resolveTranslationInfo(key, dict);
            if (translation) {
                el.placeholder = translation;
            }
        });
        
        // Translate title attributes
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const translation = resolveTranslationInfo(key, dict);
            if (translation) {
                el.setAttribute('title', translation);
            }
        });
    }

    function updateLanguageUI(lang) {
        langBtns.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Init translation
    if (langBtns.length > 0) {
        applyTranslations(currentLang);
        updateLanguageUI(currentLang);

        langBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetLang = e.target.dataset.lang;
                if (targetLang !== currentLang) {
                    currentLang = targetLang;
                    localStorage.setItem('language', currentLang);
                    applyTranslations(currentLang);
                    updateLanguageUI(currentLang);
                }
            });
        });
    }
});
