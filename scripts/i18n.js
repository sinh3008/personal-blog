// scripts/i18n.js
const I18n = {
    currentLang: 'en',
    
    init: function() {
        this.currentLang = localStorage.getItem('lang') || 'en';
        document.documentElement.lang = this.currentLang;
        this.applyTranslations(this.currentLang);
        this.updateSwitcherUI();
    },
    
    applyTranslations: function(lang) {
        if (!window.locales || !window.locales[lang]) {
            console.warn(`Translations for ${lang} not loaded yet.`);
            return;
        }
        
        const dict = window.locales[lang];
        
        // Translate text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const keyString = el.getAttribute('data-i18n');
            const translation = this.getNestedValue(dict, keyString);
            if (translation) {
                if (el.innerHTML.includes('<') || translation.includes('<')) {
                    el.innerHTML = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });

        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const keyString = el.getAttribute('data-i18n-placeholder');
            const translation = this.getNestedValue(dict, keyString);
            if (translation) {
                el.placeholder = translation;
            }
        });
    },
    
    getNestedValue: function(obj, path) {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    },
    
    updateSwitcherUI: function() {
        const langBtns = document.querySelectorAll('.lang-btn');
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    },

    bindLanguageSwitchers: function() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const selectedLang = e.target.getAttribute('data-lang');
                if (selectedLang !== this.currentLang) {
                    this.currentLang = selectedLang;
                    localStorage.setItem('lang', selectedLang);
                    document.documentElement.lang = selectedLang;
                    this.applyTranslations(selectedLang);
                    this.updateSwitcherUI();
                }
            });
        });
    }
};

window.I18n = I18n;
