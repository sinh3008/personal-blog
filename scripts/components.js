// scripts/components.js
const Components = {
    loadContent: async function() {
        try {
            // Load Header
            const headerRes = await fetch('/components/header.html');
            if (headerRes.ok) {
                const headerHtml = await headerRes.text();
                document.getElementById('header-placeholder').outerHTML = headerHtml;
            }

            // Load Footer
            const footerRes = await fetch('/components/footer.html');
            if (footerRes.ok) {
                const footerHtml = await footerRes.text();
                document.getElementById('footer-placeholder').outerHTML = footerHtml;
            }

            // Mark components loaded so main logic can fire
            document.dispatchEvent(new Event('ComponentsLoaded'));

        } catch (error) {
            console.error("Error loading components", error);
        }
    }
};

window.Components = Components;
