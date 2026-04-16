// scripts/page-init.js
// Đọc toàn bộ dữ liệu từ window.SiteData (data/site.js)

document.addEventListener('AppReady', () => {
    const SD = window.SiteData;
    if (!SD) return;

    const lang = (window.I18n && window.I18n.currentLang) || 'vi';
    const t = (obj) => (obj && obj[lang]) ? obj[lang] : (obj && obj['vi']) || '';

    // ── 1. Projects Grid ───────────────────────────────────────
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid && SD.projects) {
        projectsGrid.innerHTML = SD.projects.map((p, i) => {
            const imgBlock = p.image
                ? `<img src="${p.image}" alt="${t(p.title)}">`
                : `<div style="width:100%;height:100%;background:var(--color-secondary);display:flex;align-items:center;justify-content:center;"><i class="ph ph-image" style="font-size:3rem;opacity:0.3;"></i></div>`;
            return `
            <article class="portfolio-card fade-up ${i > 0 ? 'stagger-' + i : ''}">
                <div class="portfolio-img">${imgBlock}</div>
                <h3>${t(p.title)}</h3>
                <p class="portfolio-desc text-lead" style="font-size:1rem;">${t(p.desc)}</p>
                <div class="portfolio-meta" style="font-size:0.85rem;color:var(--color-text-light);">${t(p.role)}</div>
                <a href="${p.link}" class="link-arrow" style="margin-top:1rem;">
                    <span>${lang === 'vi' ? 'Xem Chi Tiết' : 'View Case Study'}</span>
                    <i class="ph ph-arrow-right"></i>
                </a>
            </article>`;
        }).join('');
    }

    // ── 2. Products Grid ───────────────────────────────────────
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid && SD.products) {
        productsGrid.innerHTML = SD.products.map((p, i) => `
            <article class="glass-card product-card fade-up ${i > 0 ? 'stagger-' + i : ''}"
                     data-category="${p.category}"
                     style="padding:3rem;">
                <div style="width:60px;height:60px;border-radius:16px;display:flex;align-items:center;justify-content:center;background:${p.color};margin-bottom:2rem;border:1px solid var(--color-glass-border);">
                    <i class="ph ${p.icon}" style="font-size:2rem;color:var(--color-primary);"></i>
                </div>
                <span class="tag" style="margin-bottom:1.5rem;">${t(p.tag)}</span>
                <h3 style="font-size:1.6rem;margin-bottom:1rem;">${t(p.title)}</h3>
                <p class="text-lead" style="margin-bottom:2rem;">${t(p.desc)}</p>
                <div style="font-weight:700;font-size:1.1rem;margin-bottom:2rem;color:var(--color-primary);">${t(p.price)}</div>
                <div style="display:flex;gap:1rem;flex-wrap:wrap;">
                    <a href="${p.btn1.href}" class="btn btn-primary">${t(p.btn1.label)}</a>
                    <a href="${p.btn2.href}" class="link-arrow">${t(p.btn2.label)} <i class="ph ph-arrow-right"></i></a>
                </div>
            </article>
        `).join('');

        // ── Filter logic ──────────────────────────────────────
        const filterTabs = document.getElementById('product-filter-tabs');
        if (filterTabs) {
            filterTabs.addEventListener('click', (e) => {
                const btn = e.target.closest('.filter-btn');
                if (!btn) return;

                // Update active button
                filterTabs.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');
                const cards = productsGrid.querySelectorAll('.product-card');

                cards.forEach(card => {
                    const cat = card.getAttribute('data-category');
                    const show = filter === 'all' || cat === filter;

                    if (show) {
                        card.style.display = '';
                        // Trigger re-animation
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(24px)';
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                card.style.transition = 'opacity 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease';
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            });
                        });
                    } else {
                        card.style.transition = 'opacity 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease';
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(16px)';
                        setTimeout(() => { card.style.display = 'none'; }, 260);
                    }
                });
            });
        }
    }


    // ── 3. Blog Grid ───────────────────────────────────────────
    const blogGrid = document.getElementById('blog-grid');
    if (blogGrid && SD.blog) {
        blogGrid.innerHTML = SD.blog.map((b, i) => {
            const imgBlock = b.image
                ? `<img src="${b.image}" alt="${t(b.title)}">`
                : `<div style="width:100%;height:100%;background:${b.color};aspect-ratio:4/3;border-radius:16px;"></div>`;
            return `
            <article class="blog-card fade-up ${i > 0 ? 'stagger-' + i : ''}">
                <div class="blog-card-img-wrapper">${imgBlock}</div>
                <div class="article-meta"><span class="tag">${t(b.tag)}</span></div>
                <h3>${t(b.title)}</h3>
                <p class="text-lead" style="font-size:1rem;">${t(b.desc)}</p>
                <a href="${b.href}" class="link-arrow" style="margin-top:1rem;">
                    <span>${lang === 'vi' ? 'Đọc Bài Viết' : 'Read Article'}</span>
                    <i class="ph ph-arrow-right"></i>
                </a>
            </article>`;
        }).join('');
    }

    // ── 4. Experience Timeline ─────────────────────────────────
    const expTimeline = document.getElementById('experience-timeline');
    if (expTimeline && SD.experience) {
        expTimeline.innerHTML = SD.experience.map((job, i) => {
            const highlights = t(job.highlights) || [];
            const brandBtn = job.brandLink
                ? `<a href="${job.brandLink}" class="link-arrow" style="margin-top:1rem;">
                       <span>${lang === 'vi' ? 'Khám Phá Thương Hiệu' : 'Explore Brand'}</span>
                       <i class="ph ph-arrow-right"></i>
                   </a>`
                : '';
            return `
            <div class="timeline-item fade-up ${i > 0 ? 'stagger-' + i : ''}">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span class="timeline-date">${job.period}</span>
                    <h3>${job.company}</h3>
                    <h4>${t(job.role)}</h4>
                    <p>${t(job.desc)}</p>
                    ${highlights.length ? `<ul style="margin-top:1rem;">${highlights.map(h => `<li>${h}</li>`).join('')}</ul>` : ''}
                    ${brandBtn}
                </div>
            </div>`;
        }).join('');
    }

    // ── 5. About: Skills & Mindset ─────────────────────────────
    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid && SD.profile && SD.profile.skills) {
        skillsGrid.innerHTML = SD.profile.skills.map(s => `
            <div class="glass-card" style="padding:1.5rem;display:flex;align-items:center;gap:1rem;">
                <i class="ph ${s.icon}" style="font-size:1.6rem;color:var(--color-primary);flex-shrink:0;"></i>
                <span style="font-weight:600;">${lang === 'vi' ? s.vi : s.en}</span>
            </div>
        `).join('');
    }

    const mindsetGrid = document.getElementById('mindset-grid');
    if (mindsetGrid && SD.profile && SD.profile.mindset) {
        mindsetGrid.innerHTML = SD.profile.mindset.map((m, i) => `
            <div class="glass-card fade-up ${i > 0 ? 'stagger-' + i : ''}" style="padding:2.5rem;">
                <i class="ph ${m.icon}" style="font-size:2.5rem;color:var(--color-primary);margin-bottom:1.5rem;display:block;"></i>
                <h3 style="margin-bottom:1rem;">${t(m)[lang]?.title || t(m).title}</h3>
                <p>${t(m)[lang]?.desc || t(m).desc}</p>
            </div>
        `).join('');
    }

    // ── 6. Product Detail Logic ────────────────────────────────
    const productDetailContainer = document.getElementById('product-detail-container');
    if (productDetailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const product = SD.products.find(p => p.id === productId);

        if (product) {
            const detailData = t(product.detail) || [];
            
            let detailHtml = `
            <div class="article-header" style="text-align: center; max-width: 800px; margin: 0 auto; margin-bottom: 3rem;">
                <span class="tag" style="margin-bottom: 2rem; display: inline-block;">${t(product.tag)}</span>
                <h1 style="font-size: 3.5rem; margin-bottom: 1.5rem;">${t(product.title)}</h1>
                <p class="text-lead" style="margin: 0 auto; margin-bottom: 2rem;">${t(product.desc)}</p>
                <div style="display: flex; gap: 2rem; justify-content: center; color: var(--color-text-light);">
                    <span><strong>Category:</strong> ${t(product.tag)}</span>
                    <span style="color: var(--color-primary);"><strong>${t(product.price)}</strong></span>
                </div>
            </div>

            <div class="detail-hero-icon" style="background: ${product.color};">
                <i class="ph ${product.icon}"></i>
            </div>

            <div class="article-content" style="max-width: 800px; margin: 0 auto;">`;

            detailData.forEach((section, index) => {
                detailHtml += `
                <h2>${index + 1}. ${section.title}</h2>
                <div style="margin-bottom: 1.5rem; line-height: 1.8;">${section.content}</div>`;
            });

            detailHtml += `
            </div>
            
            <div style="border-top: 1px solid var(--color-glass-border); padding-top: 4rem; margin-top: 5rem; text-align: center;">
                <a href="${product.btn1.href}" class="btn btn-primary" style="font-size: 1.2rem; padding: 1rem 3rem; margin-bottom: 2rem; display: inline-block;">${t(product.btn1.label)}</a><br>
                <a href="/pages/products.html" class="link-arrow" style="font-size: 1.2rem;"><span>${lang === 'vi' ? 'Quay Lại Danh Sách Dịch Vụ' : 'Back to Products'}</span> <i class="ph ph-arrow-left"></i></a>
            </div>`;

            productDetailContainer.innerHTML = detailHtml;
            document.title = `${t(product.title)} | Lê Xuân Sinh`;
        } else {
            productDetailContainer.innerHTML = `
                <div style="text-align: center; padding: 5rem 0;">
                    <h1 style="font-size: 3rem; margin-bottom: 1rem;">Sản Phẩm Không Tồn Tại</h1>
                    <p style="margin-bottom: 2rem;">Product not found.</p>
                    <a href="/pages/products.html" class="btn btn-primary">Go back to products</a>
                </div>
            `;
        }
    }

    // ── Re-run after injecting HTML ────────────────────────────
    if (window.I18n) window.I18n.applyTranslations(window.I18n.currentLang);
    if (window.Utils) window.Utils.initScrollReveal();
    if (window.Utils) window.Utils.initCardTilt();
});
