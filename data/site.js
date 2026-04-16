/**
 * ============================================================
 *  data/site.js — Single Source of Truth
 *  Chỉnh sửa file này để cập nhật toàn bộ nội dung website
 * ============================================================
 */
window.SiteData = {

    /* ----------------------------------------------------------
       1. THÔNG TIN CÁ NHÂN
       ---------------------------------------------------------- */
    profile: {
        name: "Lê Xuân Sinh",
        nickname: "Sinh",
        title_vi: "Digital Marketer & Chuyên Gia Thương Hiệu",
        title_en: "Digital Marketer & Brand Specialist",
        born: 2001,
        location: "Hà Nội / Hải Dương",
        email: "xuansinh@example.com",         // ← đổi email thật của bạn
        phone: "",                              // ← thêm số điện thoại nếu muốn
        cvLink: "#",                             // ← link Google Drive CV
        socials: {
            facebook: "https://www.facebook.com/sinhledev",
            linkedin: "https://linkedin.com/",
            tiktok: "",
            instagram: "",
        },
        bio: {
            vi: [
                "Tôi là một Digital Marketer và Chuyên gia Thương hiệu sinh năm 2001, hiện làm việc tại Hà Nội / đến từ Hải Dương.",
                "Trong vài năm qua, tôi đã xây dựng nền tảng sự nghiệp tạo ra kết quả trong các ngành công nghiệp cạnh tranh: từ thời trang đến thực phẩm chức năng, đến thiết bị gia dụng - điện máy - nội thất cao cấp.",
                "Tham vọng dài hạn của tôi? <strong>Trở thành một vị Giám Đốc Marketing tầm nhìn</strong> — người kết nối những sản phẩm tuyệt vời với đúng người thông qua câu chuyện thương hiệu cảm xúc và hiệu suất dựa trên dữ liệu."
            ],
            en: [
                "I am a Digital Marketer and Brand Specialist born in 2001, originally from Hải Dương.",
                "Over the last few years, I have built a foundational career driving results in competitive industries: from fast-paced fashion, to functional foods, and premium household appliances.",
                "My long-term ambition? <strong>To become a visionary Marketing Leader</strong> who connects great products with the right people through emotional branding and data-driven performance."
            ]
        },
        skills: [
            { icon: "ph-chart-bar", vi: "Quảng Cáo Facebook", en: "Facebook Ads" },
            { icon: "ph-image", vi: "Vận hành Photoshop", en: "Photoshop" },
            { icon: "ph-video", vi: "Dựng Video CapCut", en: "Premiere / CapCut" },
            { icon: "ph-strategy", vi: "Chiến Lược Digital", en: "Digital Strategy" },
            { icon: "ph-users", vi: "Lãnh Đạo Đội Nhóm", en: "Team Leadership" },
            { icon: "ph-handshake", vi: "Kỹ Năng Hợp Tác", en: "Collaboration" },
            { icon: "ph-magnifying-glass", vi: "Insight Khách Hàng", en: "Customer Insights" },
            { icon: "ph-robot", vi: "AI Prompting", en: "AI Prompting" },
        ],
        mindset: [
            {
                icon: "ph-chart-line-up",
                vi: { title: "Dữ Liệu & Cảm Xúc", desc: "Marketing tốt là bài toán toán học, nhưng marketing xuất sắc là bài toán cảm xúc. Tôi dùng dữ liệu để chọn khán giả, và kể chuyện để thu phục họ." },
                en: { title: "Data Meets Emotion", desc: "Good marketing is mathematical, but great marketing is emotional. I use data to find the audience, and storytelling to convert them." }
            },
            {
                icon: "ph-cpu",
                vi: { title: "Thực Thi Tối Ưu Bằng AI", desc: "Tôi chủ động áp dụng các quy trình làm việc có sự hỗ trợ của AI để mở rộng nội dung, tăng tốc lên kế hoạch, và đi trước xu hướng kỷ nguyên số." },
                en: { title: "AI-Augmented Execution", desc: "I actively leverage AI-assisted workflows to scale content, accelerate planning, and remain ahead of the curve in a competitive digital space." }
            },
            {
                icon: "ph-users-three",
                vi: { title: "Lãnh Đạo & Đội Nhóm", desc: "Không chiến dịch xuất sắc nào được làm một mình. Tôi ưu tiên giao tiếp rõ ràng, phân quyền chuẩn xác, và trao quyền tối đa cho đồng đội." },
                en: { title: "Leadership & Teamwork", desc: "No great campaign is built alone. I prioritize clear communication, structured delegation, and empowering those around me." }
            }
        ]
    },

    /* ----------------------------------------------------------
       2. KINH NGHIỆM / CÔNG TY
          Thêm 1 mục = thêm 1 object vào array này
       ---------------------------------------------------------- */
    experience: [
        {
            id: "mh",
            company: "Minh Hoàng Smart City",
            period: "2026 - Hiện tại",
            logo: "/assets/images/logo-mh.png",  // ← thêm logo nếu có
            role: {
                vi: "Chiến Lược Marketing & Nhận Diện Thương Hiệu",
                en: "Marketing Strategy & Brand Planning"
            },
            desc: {
                vi: "Tham gia vào chiến lược marketing tổng thể, kế hoạch truyền thông diện rộng, và thực thi các chương trình khuyến mãi. Trọng tâm chính là đưa ra chiến lược gây sự chú ý tới các sản phẩm trang trí nội thất và thiết bị nhà ở.",
                en: "Participated in overarching marketing strategy, broad communication plans, and executing promotion campaigns. A central focus was on creating awareness strategies for interior and household products."
            },
            highlights: {
                vi: [
                    "<strong>Định hướng thương hiệu:</strong> Cấu trúc sự kết nối bền vững với công ty mẹ trong kế hoạch thương hiệu của <strong>Eutek</strong>.",
                    "<strong>Tích hợp AI:</strong> Đi đầu quy trình ứng dụng công cụ AI để giảm thiểu thời lượng sáng tạo nội dung và hoàn thiện ấn phẩm quảng cáo.",
                    "<strong>Sản xuất truyền thông:</strong> Chỉ đạo quay phim, chụp ảnh và trực tiếp tinh chỉnh các clip quảng bá quy mô cao cấp sử dụng Premiere & CapCut."
                ],
                en: [
                    "<strong>Brand Navigation:</strong> Structured the parent company's connection to the <strong>Eutek</strong> branding initiative.",
                    "<strong>AI Integration:</strong> Spearheaded AI-assisted workflows to accelerate content ideation and ad asset creation.",
                    "<strong>Media Generation:</strong> Directed video shoots and edited high-level commercial assets using Premiere & CapCut."
                ]
            },
            brandLink: "/pages/brand.html"  // link tới trang brand nếu có
        },
        {
            id: "dt",
            company: "D.T / Functional Foods",
            period: "2024 - 2026",
            logo: "",
            role: {
                vi: "Chuyên Viên Digital Marketing",
                en: "Digital Marketing Executive"
            },
            desc: {
                vi: "Tập trung cực kỳ mạnh mẽ vào mảng hiệu suất, vòng lặp quản trị dữ liệu số và tối ưu tỷ lệ chuyển đổi khách hàng phễu đầu vào cho nhiều ngành hàng.",
                en: "Focused heavily on performance, data loops, and optimizing customer acquisition funnels for diverse product ranges."
            },
            highlights: {
                vi: [
                    "<strong>Facebook Ads:</strong> Quy mô hóa trực tiếp đầu tư mức ngân sách lớn đồng hành việc giám sát mạnh mẽ CPL (Giá mỗi số di động tiềm năng).",
                    "<strong>Vẽ chân dung Insight:</strong> Khảo sát và lập bảng đồ insight chuẩn xác nhất cho nhóm từng chiến lược chạy quảng cáo linh động.",
                    "<strong>Kiểm soát Nội Dung:</strong> Ban hành bộ quy chuẩn nội dung cho đội ngũ media cấp dưới biên tập đảm bảo mọi chi phí đổ vào thu lãi ròng."
                ],
                en: [
                    "<strong>Facebook Ads:</strong> Scaled ad spend aggressively while optimizing CPL (Cost Per Lead) across regional demographics.",
                    "<strong>Insights Analysis:</strong> Conducted deep customer insight mapping to tailor ad angles dynamically.",
                    "<strong>Content Direction:</strong> Established content guidelines for junior editors and copywriters to ensure brand performance metrics were hit."
                ]
            },
            brandLink: ""
        },
        {
            id: "lbee",
            company: "L.Bee Fashion",
            period: "2022 - 2024",
            logo: "",
            role: {
                vi: "Nhân Viên Marketing & Designer",
                en: "Marketing Staff & Designer"
            },
            desc: {
                vi: "Chặng bước đầu tiên trong phân khúc ngành bán lẻ thời trang chu kỳ cực nhanh, nơi tôi thực chiến chạy tăng lượng doanh thu từ phong cách thương hiệu nổi bật và độ phản ứng của thị trường.",
                en: "My entry into fast-paced fashion retail, directly driving sales volume through highly aesthetic branding and reactive market strategies."
            },
            highlights: {
                vi: [
                    "<strong>Xây Kế Hoạch Chiến Dịch:</strong> Tham gia vận hành các chương trình xả hàng và tạo event theo chu kì dòng đời sản phẩm mùa vụ.",
                    "<strong>Tối Ưu Ngân Sách:</strong> Theo dõi việc hoạt động phân bổ ngân sách chạy ads xuyên tuần đi kèm việc vượt qua biến cố khóa tài khoản của FB Policies.",
                    "<strong>Sáng Tạo Hình Ảnh:</strong> Tự thực thi vai trò của designer đồ họa thực tế (Photoshop) cùng xây dựng toàn vẹn quy chuẩn bộ ảnh thiết kế Fanpage."
                ],
                en: [
                    "<strong>Campaign Planning:</strong> Outlined end-to-end promotional campaigns corresponding to seasonal fashion drops.",
                    "<strong>Budget Optimization:</strong> Managed continuous Facebook Ads while actively monitoring and adapting to changing FB policies.",
                    "<strong>Visual Asset Creation:</strong> Acted as the core graphic designer (Photoshop) and video editor to ensure high-engagement visual assets for the fanpage."
                ]
            },
            brandLink: ""
        }
    ],

    /* ----------------------------------------------------------
       3. DỰ ÁN / PROJECTS
          Thêm 1 dự án = thêm 1 object vào array này
       ---------------------------------------------------------- */
    projects: [
        {
            id: "eutek",
            image: "/assets/images/project.png",
            link: "/pages/project-detail.html",
            category: ["brand", "ads"],   // dùng cho filter tabs: "camp" | "brand" | "ads" | "ai"
            title: {
                vi: "Eutek Ecosystem Launch",
                en: "Eutek Ecosystem Launch"
            },
            desc: {
                vi: "Chiến lược thông cáo toàn diện áp dụng mảng công nghệ ra mắt phân khúc ngành đồ điện gia đình mang lại tỷ suất tối ưu chi phí hạ 24% giá thành thu nhận khách.",
                en: "End-to-end communication strategy for launching a new household appliance product line, reducing customer acquisition cost by 24%."
            },
            role: {
                vi: "<strong>Quyền hạn:</strong> Chiến Lược & Media<br><strong>Sử dụng:</strong> Meta Ads, CapCut PC, AI Prompt",
                en: "<strong>Role:</strong> Strategy & Content<br><strong>Tools:</strong> FB Ads, CapCut, AI Prompts"
            },
            stats: [
                { value: "-24%", label: { vi: "Hạ Giá CPA", en: "CPA Reduction" } },
                { value: "1.2M+", label: { vi: "Lượt Hiển Thị", en: "Organic Reach" } },
                { value: "68%", label: { vi: "Tỉ Lệ Bán Hàng Thành Công", en: "Inventory Sold" } }
            ]
        },
        {
            id: "lbee",
            image: "/assets/images/project.png",
            link: "/pages/project-detail.html",
            category: ["brand", "camp"],
            title: {
                vi: "L.Bee Fashion Rebrand",
                en: "L.Bee Fashion Rebrand"
            },
            desc: {
                vi: "Sự định hình lại góc nhìn và lối tạo mỹ quan hình ảnh chính của hãng thời trang qua đa phương tiện mạng xã hội làm thu hút tăng vọt 40% chỉ số lượt tiếp cận thuần túy.",
                en: "Complete aesthetic overhaul of the fashion store's primary social properties resulting in a 40% organic reach increase."
            },
            role: {
                vi: "<strong>Quyền hạn:</strong> Lead Designer & Edit Ads<br><strong>Sử dụng:</strong> Adobe Photoshop, Premiere",
                en: "<strong>Role:</strong> Lead Designer & Ads Editor<br><strong>Tools:</strong> Photoshop, Premiere"
            },
            stats: []
        },
        {
            id: "dt-ads",
            image: "/assets/images/project.png",
            link: "/pages/project-detail.html",
            category: ["camp", "ads"],
            title: {
                vi: "Nhân Phân Lên Cấp Độ Vị Trí Vùng Mở Rộng Địa Lý Của Quảng Cáo Điểm Lẻ",
                en: "Hyper-local Retail Ads Scaling"
            },
            desc: {
                vi: "1 tài liệu cực đầy đủ phân tích những gì tôi xử lý điều phối và tinh gọn tái định vị ngân sách dựa trên bài kiểm tra phương án A/B song song định hình mục tiêu tập trung đúng nhóm đối tượng ngách vùng ven.",
                en: "A case study detailing how I reallocated budget through strict A/B testing on geo-targeted audiences."
            },
            role: {
                vi: "<strong>Quyền hạn:</strong> Performance Marketer<br><strong>Sử dụng:</strong> Công cụ Ads Manager, Data Analytics",
                en: "<strong>Role:</strong> Performance Marketer<br><strong>Tools:</strong> FB Ads Manager, Data Analytics"
            },
            stats: []
        },
        {
            id: "ai-copy",
            image: "",
            link: "/pages/project-detail.html",
            category: ["ai"],
            title: {
                vi: "Công Cụ Tạo Dựng Kịch Bản Điển Hình Bằng Lập Trình Máy",
                en: "Automated Copy Generation Engine"
            },
            desc: {
                vi: "Áp dụng và đưa thẳng hệ cơ sở dữ liệu ngôn ngữ lớn LLM để trích xuất ra tập văn bản mẫu theo chuẩn cấu hình thông số và độ uy tín cao chốt ngay tâm lý mua sắm người tiêu dùng trẻ ở xứ sở Việt Nam.",
                en: "Integrating LLM models to generate high-converting ad copy templates aligned with Vietnamese consumer psychology."
            },
            role: {
                vi: "<strong>Quyền hạn:</strong> Prototyper Builder<br><strong>Sử dụng:</strong> Code ChatGPT API, Notion Docs",
                en: "<strong>Role:</strong> Prototyper<br><strong>Tools:</strong> ChatGPT API, Notion"
            },
            stats: []
        }
    ],

    /* ----------------------------------------------------------
       4. SẢN PHẨM / DỊCH VỤ
          Thêm 1 sản phẩm = thêm 1 object vào array này
       ---------------------------------------------------------- */
    products: [
        {
            id: "chatgpt-plus",
            icon: "ph-robot",
            color: "rgba(16, 163, 127, 0.1)",
            category: "ai-account",
            tag: { vi: "Tài Khoản AI", en: "AI Account" },
            title: { vi: "Tài Khoản ChatGPT Plus", en: "ChatGPT Plus Account" },
            desc: {
                vi: "Tài khoản ChatGPT Plus truy cập GPT-4.5, tốc độ nhanh, ổn định, phù hợp làm việc và sáng tạo nội dung.",
                en: "Access GPT-4.5 with fast speed and stability, perfect for productivity and content creation."
            },
            price: { vi: "Giá Liên Hệ", en: "Contact for pricing" },
            btn1: { label: { vi: "Mua Ngay", en: "Buy Now" }, href: "/pages/contact.html" },
            btn2: { label: { vi: "Chi Tiết", en: "Details" }, href: "/pages/product-detail.html?id=chatgpt-plus" },
            detail: {
                vi: [
                    { title: "Tổng Quan Dịch Vụ", content: "Tài khoản ChatGPT Plus là gói trả phí cao cấp từ OpenAI, cung cấp quyền truy cập ưu tiên vào các mô hình ngôn ngữ tiên tiến nhất (GPT-4 / GPT-4.5). Đây là công cụ không thể thiếu cho bất kỳ ai hoạt động trong lĩnh vực sáng tạo nội dung, lập trình, hoặc quản lý chiến lược kinh doanh." },
                    { title: "Lợi Ích Nổi Bật", content: "<ul><li><strong>Thời gian phản hồi siêu tốc:</strong> Ngay cả trong khung giờ cao điểm toàn cầu.</li><li><strong>Truy cập sớm các tính năng mới:</strong> Được sử dụng DALL-E 3, Voice, và Custom GPTs trước những người dùng miễn phí.</li><li><strong>Phân tích dữ liệu (Advanced Data Analysis):</strong> Khả năng đọc hiểu file Excel, PDF, và hình ảnh cực kỳ nhạy bén giúp xử lý insight khách hàng nhanh chóng.</li></ul>" },
                    { title: "Chế Độ Bảo Hành", content: "Chúng tôi bảo hành ổn định trọn vòng đời gói cước, cam kết 1 đổi 1 ngay lập tức nếu gặp lỗi đăng nhập hoặc bị khóa sai quy định. Hỗ trợ support trực tuyến 24/7 qua nền tảng nhắn tin nhanh." }
                ],
                en: [
                    { title: "Service Overview", content: "The ChatGPT Plus account is the premium tier from OpenAI, granting priority access to the most advanced language models (GPT-4/GPT-4.5). This is an irreplaceable tool for anyone in content creation, programming, or strategic business management." },
                    { title: "Key Benefits", content: "<ul><li><strong>Lightning-fast responses:</strong> Even during global peak usage hours.</li><li><strong>Early access to new features:</strong> Utilize DALL-E 3, Voice capabilities, and Custom GPTs ahead of free-tier users.</li><li><strong>Advanced Data Analysis:</strong> The ability to comprehend Excel files, PDFs, and images sharply, accelerating customer insight processing.</li></ul>" },
                    { title: "Warranty Policy", content: "We guarantee stability throughout the subscription lifecycle, committing to an immediate 1-to-1 replacement in case of login errors or unjust bans. Online tech support is available 24/7 via instant messaging." }
                ]
            }
        },
        {
            id: "super-grok",
            icon: "ph-lightning",
            color: "rgba(0, 212, 255, 0.1)",
            category: "ai-account",
            tag: { vi: "Tài Khoản AI", en: "AI Account" },
            title: { vi: "Tài Khoản Super Grok", en: "Super Grok Account" },
            desc: {
                vi: "Truy cập Grok AI mạnh mẽ, tốc độ cao, hỗ trợ nghiên cứu và tạo nội dung chuyên sâu.",
                en: "Powerful Grok AI access for fast research and advanced content generation."
            },
            price: { vi: "Giá Liên Hệ", en: "Contact for pricing" },
            btn1: { label: { vi: "Mua Ngay", en: "Buy Now" }, href: "/pages/contact.html" },
            btn2: { label: { vi: "Chi Tiết", en: "Details" }, href: "/pages/product-detail.html?id=super-grok" },
            detail: {
                vi: [
                    { title: "Tổng Quan Dịch Vụ", content: "Grok là mô hình trí tuệ nhân tạo được phát triển bởi xAI. Nổi bật với tính năng truy cập dữ liệu thời gian thực độc quyền từ mạng X (Twitter), Grok mang lại góc nhìn hài hước, phản ứng nhanh nhạy và thông tin không bị kiểm duyệt quá gắt gao như các chatbot khác." },
                    { title: "Lợi Ích Nổi Bật", content: "<ul><li><strong>Dữ liệu Real-time:</strong> Cập nhật tức thời mọi thông tin, trending, và tin tức từ mạng xã hội X. Hiếm có AI nào theo dõi xu hướng thực chiến mạnh bằng Grok.</li><li><strong>Phong cách linh hoạt:</strong> Sở hữu chế độ 'Fun Mode', Grok có khả năng hành văn châm biếm, dí dỏm, cực kỳ phù hợp để viết bài PR, Viral Post hoặc tìm ý tưởng độc lạ.</li><li><strong>Khả năng code nhạy bén:</strong> Hỗ trợ sửa lỗi, tối ưu mã nguồn mạnh mẽ.</li></ul>" },
                    { title: "Chế Độ Bảo Hành", content: "Đảm bảo tài khoản hoạt động xuyên suốt chu kỳ. Kênh hỗ trợ ưu tiên giải quyết các vấn đề đăng nhập và xác thực 2 bước ngay khi cần." }
                ],
                en: [
                    { title: "Service Overview", content: "Grok is an artificial intelligence model developed by xAI. Distinguished by its exclusive real-time data access from the X (Twitter) network, Grok offers humorous angles, rapid responses, and information less strictly censored than other chatbots." },
                    { title: "Key Benefits", content: "<ul><li><strong>Real-time Data:</strong> Instant updates on information, trending topics, and news from the X network. Rarely does any AI track live trends as potently as Grok.</li><li><strong>Versatile Stylings:</strong> Equipped with 'Fun Mode,' Grok has the ability to write sarcastically and wittily, making it exceptionally fit for PR articles, viral posts, or out-of-the-box brainstorming.</li><li><strong>Sharp Coding Capabilities:</strong> Powerful assistance in debugging and optimizing source code.</li></ul>" },
                    { title: "Warranty Policy", content: "Guaranteed account continuity throughout the cycle. Priority support channel to resolve login and 2FA authentication issues immediately." }
                ]
            }
        },
        {
            id: "canva-pro",
            icon: "ph-palette",
            color: "rgba(124, 58, 237, 0.1)",
            category: "design",
            tag: { vi: "Thiết Kế", en: "Design Tool" },
            title: { vi: "Tài Khoản Canva Pro", en: "Canva Pro Account" },
            desc: {
                vi: "Sử dụng Canva Pro full tính năng: kho tài nguyên premium, xuất file chất lượng cao.",
                en: "Unlock Canva Pro with premium assets and high-quality export features."
            },
            price: { vi: "Giá Liên Hệ", en: "Contact for pricing" },
            btn1: { label: { vi: "Mua Ngay", en: "Buy Now" }, href: "/pages/contact.html" },
            btn2: { label: { vi: "Chi Tiết", en: "Details" }, href: "/pages/product-detail.html?id=canva-pro" },
            detail: {
                vi: [
                    { title: "Tổng Quan Dịch Vụ", content: "Canva Pro là công cụ thiết kế đồ họa trực tuyến số 1 thế giới dành cho người không chuyên. Thao tác kéo thả đơn giản nhưng mang lại hiệu quả thị giác chuẩn mực cho báo cáo, thuyết trình, và mạng xã hội." },
                    { title: "Lợi Ích Nổi Bật", content: "<ul><li><strong>Mở khóa 100+ triệu tài sản Media:</strong> Hình ảnh, video, âm thanh và đồ họa cao cấp không giới hạn bản quyền.</li><li><strong>Bộ công cụ ma thuật (Magic Studio):</strong> Xóa nền một chạm, mở rộng hình ảnh bằng AI, viết nội dung tự động.</li><li><strong>Brand Kit (Bộ nhận diện thương hiệu):</strong> Quản lý màu sắc, logo và font chữ chuyên nghiệp, đồng nhất cho toàn bộ ấn phẩm công ty.</li></ul>" },
                    { title: "Chế Độ Bảo Hành", content: "Tài khoản bảo hành full thời gian. Nâng cấp trực tiếp trên email chính chủ của khách hàng (nếu có yêu cầu). Trữ liệu thiết kế hoàn toàn riêng tư." }
                ],
                en: [
                    { title: "Service Overview", content: "Canva Pro is the world's leading online graphic design tool for non-professionals. Simple drag-and-drop mechanics yield standard-setting visual efficacy for reports, presentations, and social media." },
                    { title: "Key Benefits", content: "<ul><li><strong>Unlock 100+ Million Media Assets:</strong> Unrestricted premium royalty-free images, videos, audio, and graphics.</li><li><strong>Magic Studio Capabilities:</strong> One-tap background removal, AI image expansion, and automated content generation.</li><li><strong>Brand Kit:</strong> Professionally manage colors, logos, and typography for consistent branding across all company assets.</li></ul>" },
                    { title: "Warranty Policy", content: "Full-term warranty. Upgrades can be applied directly to the client's personal email (upon request). Design data remains completely private." }
                ]
            }
        },
        {
            id: "capcut-pro",
            icon: "ph-video",
            color: "rgba(255, 0, 128, 0.08)",
            category: "video-tool",
            tag: { vi: "Công Cụ Video", en: "Video Tool" },
            title: { vi: "Tài Khoản CapCut Pro", en: "CapCut Pro Account" },
            desc: {
                vi: "CapCut Pro hỗ trợ edit video chuyên nghiệp, template xịn, xuất video không watermark.",
                en: "Professional video editing with premium templates and no watermark export."
            },
            price: { vi: "Giá Liên Hệ", en: "Contact for pricing" },
            btn1: { label: { vi: "Mua Ngay", en: "Buy Now" }, href: "/pages/contact.html" },
            btn2: { label: { vi: "Chi Tiết", en: "Details" }, href: "/pages/product-detail.html?id=capcut-pro" },
            detail: {
                vi: [
                    { title: "Tổng Quan Dịch Vụ", content: "CapCut Pro phiên bản PC & Mobile trao cho bạn vũ khí sắc bén nhất để sáng tạo nội dung Video ngắn (Shorts/Reels/TikTok). Nó biến những rào cản kỹ thuật dựng phim phức tạp thành những cú click chuột dễ dàng." },
                    { title: "Lợi Ích Nổi Bật", content: "<ul><li><strong>Hiệu ứng & Chuyển cảnh Độc quyền:</strong> Mở khóa kho tàng hiệu ứng PRO, bắt trend nhanh chóng, giúp video mượt mà và hút mắt vô cùng.</li><li><strong>Chức năng AI tự động hóa:</strong> Tự động tách giọng hát, nhận diện và tạo phụ đề tự động siêu việt, Text-to-Speech đa giọng đọc chất lượng cao.</li><li><strong>Không giới hạn xuất file:</strong> Render video độ phân giải cao 4K/60fps, loại bỏ hoàn toàn watermark, đảm bảo chất lượng sắc nét.</li></ul>" },
                    { title: "Chế Độ Bảo Hành", content: "Cung cấp tài khoản ổn định hoặc nâng cấp qua kênh chính ngạch. Bảo trì lỗi đăng nhập và bảo hành toàn vẹn nếu gặp trục trặc kỹ thuật do tài khoản." }
                ],
                en: [
                    { title: "Service Overview", content: "CapCut Pro for PC & Mobile arms you with the sharpest weapon for creating Short-form Video content (Shorts/Reels/TikTok). It transforms complex video-editing technical barriers into effortless clicks." },
                    { title: "Key Benefits", content: "<ul><li><strong>Exclusive Effects & Transitions:</strong> Unlock the PRO treasure trove of effects, catching trends rapidly to make videos incredibly smooth and eye-catching.</li><li><strong>Automated AI Functions:</strong> Vocal isolation, superior auto-captions generation, and high-quality versatile Text-to-Speech voices.</li><li><strong>Unrestrictive Exports:</strong> Render high-resolution 4K/60fps video, completely eliminating watermarks for guaranteed crisp quality.</li></ul>" },
                    { title: "Warranty Policy", content: "Provide stable accounts or upgrades via official channels. Maintenance for login errors and full warranty if experiencing account-related technical hitches." }
                ]
            }
        },
        {
            id: "kling-ai",
            icon: "ph-brain",
            color: "rgba(0, 255, 163, 0.08)",
            category: "video-tool",
            tag: { vi: "Công Cụ Video AI", en: "Video Tool" },
            title: { vi: "Tài Khoản Kling AI", en: "Kling AI Account" },
            desc: {
                vi: "Công cụ AI tạo video tự động từ text, phù hợp làm content marketing và social.",
                en: "AI video generation tool from text, ideal for marketing and social content."
            },
            price: { vi: "Giá Liên Hệ", en: "Contact for pricing" },
            btn1: { label: { vi: "Mua Ngay", en: "Buy Now" }, href: "/pages/contact.html" },
            btn2: { label: { vi: "Chi Tiết", en: "Details" }, href: "/pages/product-detail.html?id=kling-ai" },
            detail: {
                vi: [
                    { title: "Tổng Quan Dịch Vụ", content: "Kling AI là nền tảng dựng video bằng AI thế hệ mới, cho phép bạn biến những dòng văn bản (Text-to-Video) hoặc hình ảnh tĩnh (Image-to-Video) thành các thước phim chuyển động vô cùng chân thực và sống động." },
                    { title: "Lợi Ích Nổi Bật", content: "<ul><li><strong>Độ chân thực vượt rào:</strong> Mô phỏng vật lý và biểu cảm con người xuất sắc, phá vỡ định kiến về video do AI tạo ra thường bị ảo hoặc lỗi chi tiết.</li><li><strong>Biến hóa linh động:</strong> Tuyệt vời để làm MV ca nhạc, TVC quảng cáo ngắn, hoặc xây kênh kể chuyện (Storytelling) mà không cần diễn viên.</li><li><strong>Tốc độ sản xuất:</strong> Cắt giảm hoàn toàn chi phí bối cảnh, ekip quay. Ý tưởng thành hiện thực chỉ trong vài phút thay vì vài tuần.</li></ul>" },
                    { title: "Chế Độ Bảo Hành", content: "Bảo hành lượng tokens/credits tạo video đúng với cam kết. Hỗ trợ cách tối ưu prompt để giảm thiểu điểm trừ hao phí." }
                ],
                en: [
                    { title: "Service Overview", content: "Kling AI is a next-generation AI video generation platform, enabling you to transform text lines (Text-to-Video) or static images (Image-to-Video) into highly realistic, animated cinematic sequences." },
                    { title: "Key Benefits", content: "<ul><li><strong>Boundary-breaking Realism:</strong> Excellent physical simulation and human expressions, shattering the stereotype of AI-generated videos being hallucinated or prone to detail errors.</li><li><strong>Dynamic Transformation:</strong> Superb for making music videos, short commercial TVCs, or storytelling channels without actors.</li><li><strong>Production Speed:</strong> Completely cuts out setting and crew costs. Ideas become reality in minutes instead of weeks.</li></ul>" },
                    { title: "Warranty Policy", content: "Warranty on video generation tokens/credits strictly per agreement. Support on optimizing prompts to minimize unnecessary token wastage." }
                ]
            }
        },
        {
            id: "gemini-pro",
            icon: "ph-star",
            color: "rgba(255, 193, 7, 0.1)",
            category: "google-ai",
            tag: { vi: "Google AI", en: "Google AI" },
            title: { vi: "Tài Khoản Gemini Pro", en: "Gemini Pro Account" },
            desc: {
                vi: "Truy cập Gemini Pro với hiệu suất cao, hỗ trợ công việc và sáng tạo nội dung.",
                en: "High-performance Gemini Pro for productivity and creative workflows."
            },
            price: { vi: "Giá Liên Hệ", en: "Contact for pricing" },
            btn1: { label: { vi: "Mua Ngay", en: "Buy Now" }, href: "/pages/contact.html" },
            btn2: { label: { vi: "Chi Tiết", en: "Details" }, href: "/pages/product-detail.html?id=gemini-pro" },
            detail: {
                vi: [
                    { title: "Tổng Quan Dịch Vụ", content: "Gemini Pro (nằm trong hệ sinh thái Google) là đối trọng trực tiếp đem lại sức mạnh phân tích sâu, tốc độ thần tốc và sự liền mạch tuyệt đối khi tích hợp với Docs, Gmail, Drive." },
                    { title: "Lợi Ích Nổi Bật", content: "<ul><li><strong>Khả năng suy luận đa phương thức:</strong> Đọc hiểu mã lập trình, nhận diện chi tiết hình ảnh lẫn xử lý khối ngôn ngữ khổng lồ.</li><li><strong>Hệ sinh thái đồng nhất:</strong> Truy vấn chéo các tệp trong Google Workspace cực mượt mà, giúp tra cứu tài liệu cá nhân mà không cần tải lên thủ công.</li><li><strong>Tra cứu Internet siêu việt:</strong> Lợi thế là con đẻ của Google Search, Gemini có khả năng tổng hợp nguồn thông tin mạng thời gian thực chuẩn xác và ít bịa đặt nhất.</li></ul>" },
                    { title: "Chế Độ Bảo Hành", content: "Duy trì quyền truy cập bền vững, xử lý kịp thời mọi tình huống out tài khoản hoặc gián đoạn kết nối. Cam kết bảo hành 1 đổi 1 nhanh gọn." }
                ],
                en: [
                    { title: "Service Overview", content: "Gemini Pro (within the Google Ecosystem) is a direct heavyweight competitor offering deep analytical power, lightning-fast speeds, and absolute seamless integration with Docs, Gmail, and Drive." },
                    { title: "Key Benefits", content: "<ul><li><strong>Multimodal Reasoning:</strong> Deciphers programming code, identifies image details, and processes massive language blocks fluidly.</li><li><strong>Unified Ecosystem:</strong> Extremely smooth cross-referencing of Google Workspace files, enabling personal document searches without manual uploads.</li><li><strong>Superior Internet Browsing:</strong> Benefiting as the offspring of Google Search, Gemini synthesizes real-time web sources accurately with minimal hallucination.</li></ul>" },
                    { title: "Warranty Policy", content: "Maintain sustainable access rights, promptly resolving any account lockouts or connection disruptions. Committed to quick 1-to-1 replacements." }
                ]
            }
        },
        {
            id: "gemini-ultra",
            icon: "ph-crown",
            color: "rgba(255, 87, 34, 0.1)",
            category: "google-ai",
            tag: { vi: "Google AI Cao Cấp", en: "Google AI" },
            title: { vi: "Tài Khoản Gemini Ultra", en: "Gemini Ultra Account" },
            desc: {
                vi: "Phiên bản cao cấp nhất của Gemini với khả năng AI mạnh mẽ, phục vụ nhu cầu chuyên sâu.",
                en: "Top-tier Gemini AI with advanced capabilities for professional use."
            },
            price: { vi: "Giá Liên Hệ", en: "Contact for pricing" },
            btn1: { label: { vi: "Mua Ngay", en: "Buy Now" }, href: "/pages/contact.html" },
            btn2: { label: { vi: "Chi Tiết", en: "Details" }, href: "/pages/product-detail.html?id=gemini-ultra" },
            detail: {
                vi: [
                    { title: "Tổng Quan Dịch Vụ", content: "Đây là mô hình AI vĩ đại và khổng lồ nhất của Google - Gemini Ultra (nay là Gemini 1.5 Pro). Được cấu trúc riêng lẻ thiết kế cho các tác vụ trí tuệ mang độ khó cực độ, xử lý tệp ngữ cảnh siêu dài chưa từng có tiền lệ." },
                    { title: "Lợi Ích Nổi Bật", content: "<ul><li><strong>Context Window 1 Triệu Token:</strong> Khả năng nhét trọn vẹn nhiều cuốn sách, codebase hàng triệu dòng, hoặc video dài 1 tiếng vào để phân tích và tóm tắt mà không quên chi tiết nào.</li><li><strong>Xử lý tác vụ vĩ mô cực đỉnh:</strong> Logic phân tích toán học tiến sâu, sáng tạo định dạng framework doanh nghiệp chuẩn hóa.</li><li><strong>Sự tinh hoa độc khuyết:</strong> Trải nghiệm một đẳng cấp tư duy vượt bậc khi AI thực sự có thể đóng vai 1 chuyên gia tư vấn chiến lược thực thụ với nền tảng trí nhớ dài hạn.</li></ul>" },
                    { title: "Chế Độ Bảo Hành", content: "Cam kết cao độ cho cấp bậc Ultra. Phản hồi và thay thế lập tức đối với lỗi hệ thống, ưu tiên chăm sóc quyền lợi cao nhất." }
                ],
                en: [
                    { title: "Service Overview", content: "This is Google's most monumental and massive AI model—Gemini Ultra (now conceptually aligned with Gemini 1.5 Pro capabilities). Architecturally configured solely for extreme-difficulty intellectual tasks, processing unprecedentedly long context windows." },
                    { title: "Key Benefits", content: "<ul><li><strong>1 Million Token Context Window:</strong> The ability to stuff multiple books, millions of lines of codebase, or an hour-long video for analysis and summarization without dropping any details.</li><li><strong>Ultimate Macro-task Processing:</strong> Advanced mathematical logic progressing deeply, creatively formulating standardized enterprise frameworks.</li><li><strong>Exclusive Quintessence:</strong> Experience a transcendent level of thought where AI can genuinely roleplay a true strategic consultant consultant using a long-term memory foundation.</li></ul>" },
                    { title: "Warranty Policy", content: "High-level commitment for the Ultra tier. Immediate response and replacement for system errors, prioritizing highest rightful care." }
                ]
            }
        }
    ],
    /* ----------------------------------------------------------
       5. BLOG POSTS
          Thêm 1 bài = thêm 1 object vào array này
       ---------------------------------------------------------- */
    blog: [
        {
            id: "capcut-workflow",
            image: "/assets/images/project.png",
            color: "",
            category: "content",
            tag: { vi: "Lập Bản Đồ Kĩ Năng", en: "Content Production" },
            title: { vi: "Tái Ráp Lại Cỗ Máy Mạng Hình Edit CapCut Video PC Sao Cho Ra Content Để A/B Test Trúng Nhất Và Siêu Cực Nhanh Chóng", en: "Structuring a CapCut Workflow for fast ad testing" },
            desc: { vi: "Với Ngành may mặc thời trang chần chừ đồng nghĩa mất túi tiền bạc tỉ. Do đó bài dưới ghi chi tiết cách mà cứ 2 tiếng tôi vọt ra được các bản mớ video ngon lành cực kỳ không hối tiếc.", en: "Speed is critical in fashion marketing. Here is my daily workflow." },
            date: "2026-03-10",
            href: "#"
        },
        {
            id: "fb-ad-library",
            image: "",
            color: "rgba(0, 212, 255, 0.06)",
            category: "fb",
            tag: { vi: "Hoạt Động FB Khối Meta", en: "Facebook Ads" },
            title: { vi: "Bẻ Khóa Vụ Xem Thư Viện Chứa Ads Nhãn Hiệu Facebook Của Ông Trùm Cạnh Tranh Mà Ko Bị Ngộ Nhận Bẫy Dụ", en: "Interpreting the Facebook Ad Library for Competitor Analysis" },
            desc: { vi: "Đừng vội phím CTRL+C (Copy). Làm ơn đếm lại khoảng kỳ tuổi đời và góc thời gian ra đòn bài Content đó trước khi nhận ra đường đi cất vốn mòi của họ.", en: "Don't just copy. Analyze the lifetime of the ad to deduce funnel strategy." },
            date: "2026-02-18",
            href: "#"
        },
        {
            id: "llm-insight",
            image: "",
            color: "rgba(124, 58, 237, 0.07)",
            category: "ai",
            tag: { vi: "Công Khí Dùng Tool Trợ Lực Bằng AI", en: "AI in Marketing" },
            title: { vi: "Giả Bộ Nhập Vai LLM Thay Bằng Giọng Điệu Khách Hàng Càm Ràm Cực Kỳ Quý Báu Để Bóc Mẽ Ra Cho Có Data Insight", en: "Using ChatGPT to reverse engineer Customer Insights" },
            desc: { vi: "1 trò ảo thuật ảo ảnh dùng chatGPT nhập vai làm vị khách hàng khó tinh siêu cay nghiệt nhưng trả lời lại làm tớ vỡ òa thay hẳn toàn phong thái lối đánh văn bán Ads của mình.", en: "How simulating customer interviews via LLMs changed my copywriting." },
            date: "2026-01-25",
            href: "#"
        }
    ]

};
