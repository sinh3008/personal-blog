// scripts/main.js
document.addEventListener("DOMContentLoaded", () => {
    // 1. Kick off component fetch
    if(window.Components) {
        window.Components.loadContent();
    }
    
    // 2. Wait for components to parse and mount to DOM before firing interaction logic
    document.addEventListener('ComponentsLoaded', () => {
        // Init Themes & Handlers
        if(window.Utils) {
            window.Utils.initTheme();
            window.Utils.initMobileMenu();
            window.Utils.initScrollReveal();

            // Premium Animations
            window.Utils.initNavbarShrink();
            window.Utils.initParallax();
            window.Utils.initCardTilt();
            window.Utils.initTimelineDraw();
            window.Utils.initScrollIndicator();
        }
        
        // Init i18n translation system + Switcher
        if(window.I18n) {
            window.I18n.init();
            window.I18n.bindLanguageSwitchers();
        }
        
        // Dispatch custom event for page-specific inits
        document.dispatchEvent(new Event('AppReady'));
    });
});
