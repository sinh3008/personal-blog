import codecs

prompts_js = """        const allPrompts = [
            // --- VIDEO (8) ---
            { id: 'v1', category: 'video', tagIcon: 'ph-video-camera', tagText: 'Video AI', tagStyle: 'background: rgba(139, 92, 246, 0.1); color: #8b5cf6;', title: 'Cinematic Drone Shot', desc: 'Quay flycam toàn cảnh thành phố tương lai về đêm.', prompt: 'Cinematic drone shot of a futuristic neon city at night, rain pouring down, reflecting neon lights, 4k, hyper-realistic, dramatic lighting, motion blur, highly detailed.' },
            { id: 'v2', category: 'video', tagIcon: 'ph-video-camera', tagText: 'Video AI', tagStyle: 'background: rgba(139, 92, 246, 0.1); color: #8b5cf6;', title: 'Nature Timelapse', desc: 'Cảnh bình minh hùng vĩ trên dãy núi tuyết.', prompt: 'Time-lapse of a glowing sunrise over snow-capped mountains, mist rolling through the valley, national geographic style, 8k resolution, photorealistic, cinematic color grading.' },
            { id: 'v3', category: 'video', tagIcon: 'ph-video-camera', tagText: 'Video AI', tagStyle: 'background: rgba(139, 92, 246, 0.1); color: #8b5cf6;', title: 'Macro Product Commercial', desc: 'Quay cận cảnh sản phẩm nước hoa rơi xuống nước.', prompt: 'Macro slow-motion shot of a premium glass perfume bottle splashing into clear water, dark studio background, elegant rim lighting, 4k, hyper-detailed, commercial style.' },
            { id: 'v4', category: 'video', tagIcon: 'ph-video-camera', tagText: 'Video AI', tagStyle: 'background: rgba(139, 92, 246, 0.1); color: #8b5cf6;', title: 'Cyberpunk Car Chase', desc: 'Cảnh rượt đuổi bằng ô tô trong thành phố cyberpunk.', prompt: 'High-speed car chase in a densely populated cyberpunk metropolis, flying cars, glowing neon signs, shaky cam, intense action, 8k, Unreal Engine 5 aesthetic.' },
            { id: 'v5', category: 'video', tagIcon: 'ph-video-camera', tagText: 'Video AI', tagStyle: 'background: rgba(139, 92, 246, 0.1); color: #8b5cf6;', title: 'Historical Battle', desc: 'Cảnh chiến đấu thời trung cổ với góc máy rộng.', prompt: 'Epic wide shot of a medieval battlefield, thousands of knights charging, dust billowing, overcast sky, cinematic grading, highly detailed armor.' },
            { id: 'v6', category: 'video', tagIcon: 'ph-video-camera', tagText: 'Video AI', tagStyle: 'background: rgba(139, 92, 246, 0.1); color: #8b5cf6;', title: 'Sci-Fi Space Station', desc: 'Trạm vũ trụ khổng lồ bay ngang qua hành tinh.', prompt: 'Slow pan across a massive sci-fi space station orbiting a gas giant, highly detailed surface, glowing thrusters, cinematic lighting, 8k.' },
            { id: 'v7', category: 'video', tagIcon: 'ph-video-camera', tagText: 'Video AI', tagStyle: 'background: rgba(139, 92, 246, 0.1); color: #8b5cf6;', title: 'Cozy Cafe Animation', desc: 'Quán cafe tĩnh lặng vào một chiều mưa.', prompt: 'Cozy lo-fi aesthetic animation of a cafe window on a rainy afternoon, steam rising from a coffee cup, soft warm lighting, relaxing atmosphere.' },
            { id: 'v8', category: 'video', tagIcon: 'ph-video-camera', tagText: 'Video AI', tagStyle: 'background: rgba(139, 92, 246, 0.1); color: #8b5cf6;', title: 'Animal Wildlife', desc: 'Báo gầm chậm rãi trong rừng rậm.', prompt: 'Slow-motion close-up of a jaguar walking stealthily through a dense jungle, sunlight piercing through the canopy, hyper-realistic, 4k.' },

            // --- CHAT (8) ---
            { id: 'c1', category: 'chat', tagIcon: 'ph-chat-teardrop-text', tagText: 'Chatbot', tagStyle: 'background: rgba(59, 130, 246, 0.1); color: #3b82f6;', title: 'Chuyên Gia Tư Vấn Khởi Nghiệp', desc: 'Đóng vai một chuyên gia tư vấn startup.', prompt: 'Đóng vai một chuyên gia tư vấn khởi nghiệp với 15 năm kinh nghiệm ở Silicon Valley. Hãy phân tích ý tưởng kinh doanh sau đây của tôi và chỉ ra 3 rủi ro lớn nhất cùng cách khắc phục: [Ý tưởng của bạn].' },
            { id: 'c2', category: 'chat', tagIcon: 'ph-chat-teardrop-text', tagText: 'Chatbot', tagStyle: 'background: rgba(59, 130, 246, 0.1); color: #3b82f6;', title: 'Tóm Tắt Sách Chi Tiết', desc: 'Tóm tắt mọi cuốn sách theo chương và bài học.', prompt: 'Tóm tắt cuốn sách "[Tên sách]" theo các điểm sau: 1. Thông điệp cốt lõi (3 câu), 2. Tóm tắt từng chương chính (3-4 bullet points mỗi chương), 3. 3 bài học có thể áp dụng ngay vào thực tế.' },
            { id: 'c3', category: 'chat', tagIcon: 'ph-chat-teardrop-text', tagText: 'Chatbot', tagStyle: 'background: rgba(59, 130, 246, 0.1); color: #3b82f6;', title: 'Viết Kịch Bản Tiktok Hook', desc: 'Tạo kịch bản Tiktok với 3 giây đầu siêu cuốn.', prompt: 'Viết 5 kịch bản video TikTok ngắn (dưới 60s) về chủ đề [chủ đề]. Mỗi kịch bản phải bắt đầu bằng một hook cực mạnh trong 3 giây đầu tiên để giữ chân người xem, và kết thúc bằng một call-to-action rõ ràng.' },
            { id: 'c4', category: 'chat', tagIcon: 'ph-chat-teardrop-text', tagText: 'Chatbot', tagStyle: 'background: rgba(59, 130, 246, 0.1); color: #3b82f6;', title: 'Luyện Phỏng Vấn (Mock Interview)', desc: 'Đóng vai người phỏng vấn khó tính.', prompt: 'Hãy đóng vai một HR Manager khó tính từ một công ty công nghệ lớn. Tiến hành phỏng vấn tôi cho vị trí [Tên vị trí]. Hãy hỏi từng câu một, đợi tôi trả lời rồi mới nhận xét và hỏi câu tiếp theo.' },
            { id: 'c5', category: 'chat', tagIcon: 'ph-chat-teardrop-text', tagText: 'Chatbot', tagStyle: 'background: rgba(59, 130, 246, 0.1); color: #3b82f6;', title: 'Sáng Tạo Tên Thương Hiệu', desc: 'Tạo 20 tên thương hiệu dễ nhớ.', prompt: 'Tôi đang chuẩn bị ra mắt một [loại sản phẩm]. Hãy gợi ý cho tôi 20 tên thương hiệu ngắn gọn (1-2 âm tiết), dễ nhớ, không mang ý nghĩa tiêu cực ở bất kỳ ngôn ngữ phổ biến nào. Phân loại theo: Sang trọng, Hiện đại, Vui nhộn.' },
            { id: 'c6', category: 'chat', tagIcon: 'ph-chat-teardrop-text', tagText: 'Chatbot', tagStyle: 'background: rgba(59, 130, 246, 0.1); color: #3b82f6;', title: 'Lên Lộ Trình Học Tập', desc: 'Tạo lộ trình học một kỹ năng mới từ con số 0.', prompt: 'Tôi muốn học [Kỹ năng] từ con số 0 để đạt được trình độ có thể làm việc được. Tôi có [Số giờ] tiếng mỗi tuần. Hãy lập cho tôi một lộ trình học tập chi tiết trong 3 tháng, chia theo tuần, bao gồm cả tài liệu tham khảo miễn phí.' },
            { id: 'c7', category: 'chat', tagIcon: 'ph-chat-teardrop-text', tagText: 'Chatbot', tagStyle: 'background: rgba(59, 130, 246, 0.1); color: #3b82f6;', title: 'Viết Lại Email Lịch Sự', desc: 'Biến email thô lỗ thành chuyên nghiệp.', prompt: 'Hãy viết lại đoạn email sau đây để nghe thật chuyên nghiệp, lịch sự nhưng vẫn kiên quyết và rõ ràng về quan điểm: "[Đoạn email gốc]".' },
            { id: 'c8', category: 'chat', tagIcon: 'ph-chat-teardrop-text', tagText: 'Chatbot', tagStyle: 'background: rgba(59, 130, 246, 0.1); color: #3b82f6;', title: 'Giải Quyết Mâu Thuẫn', desc: 'Xin lời khuyên tâm lý học để xử lý mâu thuẫn.', prompt: 'Đóng vai một nhà tâm lý học hành vi. Tôi đang gặp mâu thuẫn với [đối tượng] về vấn đề [vấn đề]. Hãy phân tích nguyên nhân tiềm ẩn và đưa ra 3 phương án giao tiếp mềm mỏng để giải quyết.' },

            // --- IMAGE (9) ---
            { id: 'i1', category: 'image', tagIcon: 'ph-image', tagText: 'Image Gen', tagStyle: 'background: rgba(236, 72, 153, 0.1); color: #ec4899;', title: 'Cyberpunk Avatar', desc: 'Tạo ảnh đại diện phong cách Cyberpunk.', prompt: 'A close up portrait of a cyberpunk hacker, glowing neon tattoos, wearing a high-tech visor, dark rainy alley background, volumetric lighting, unreal engine 5 render --ar 1:1 --v 6.0' },
            { id: 'i2', category: 'image', tagIcon: 'ph-image', tagText: 'Image Gen', tagStyle: 'background: rgba(236, 72, 153, 0.1); color: #ec4899;', title: 'Minimalist Logo', desc: 'Tạo logo phong cách minimal cho thương hiệu.', prompt: 'Minimalist vector logo for an AI technology company, abstract geometric letter A shape, flat colors, gradient purple and blue, white background, clean design --no text --v 6.0' },
            { id: 'i3', category: 'image', tagIcon: 'ph-image', tagText: 'Image Gen', tagStyle: 'background: rgba(236, 72, 153, 0.1); color: #ec4899;', title: 'Photorealistic Food', desc: 'Chụp ảnh món ăn hấp dẫn chuẩn tạp chí.', prompt: 'A mouthwatering gourmet burger with melting cheese, crispy bacon, and fresh lettuce, sitting on a rustic wooden table, dark moody background, studio food photography, macro lens, hyper-detailed --ar 4:5 --style raw' },
            { id: 'i4', category: 'image', tagIcon: 'ph-image', tagText: 'Image Gen', tagStyle: 'background: rgba(236, 72, 153, 0.1); color: #ec4899;', title: 'Anime Scenery', desc: 'Phong cảnh anime nhẹ nhàng (Studio Ghibli).', prompt: 'A beautiful Japanese countryside bus stop covered in overgrown ivy and colorful flowers, anime style, Makoto Shinkai aesthetic, golden hour lighting, cinematic clouds, highly detailed --ar 16:9' },
            { id: 'i5', category: 'image', tagIcon: 'ph-image', tagText: 'Image Gen', tagStyle: 'background: rgba(236, 72, 153, 0.1); color: #ec4899;', title: 'Watercolor Illustration', desc: 'Minh họa màu nước mềm mại.', prompt: 'A delicate watercolor illustration of a little fox sleeping under a giant glowing mushroom, enchanted forest, pastel colors, soft edges, whimsical storybook style --ar 3:4' },
            { id: 'i6', category: 'image', tagIcon: 'ph-image', tagText: 'Image Gen', tagStyle: 'background: rgba(236, 72, 153, 0.1); color: #ec4899;', title: 'Interior Design', desc: 'Thiết kế nội thất phòng khách hiện đại.', prompt: 'Modern minimalist living room, large floor-to-ceiling windows showing a mountain view, warm beige and grey tones, sleek furniture, indoor plants, natural sunlight, photorealistic architectural render --ar 16:9' },
            { id: 'i7', category: 'image', tagIcon: 'ph-image', tagText: 'Image Gen', tagStyle: 'background: rgba(236, 72, 153, 0.1); color: #ec4899;', title: 'Surreal Fantasy Art', desc: 'Nghệ thuật siêu thực đầy bí ẩn.', prompt: 'A giant floating island made of glowing crystals in a starry nebula sky, tiny silhouette of a person standing on the edge, surrealism, ethereal atmosphere, highly detailed digital painting --ar 16:9' },
            { id: 'i8', category: 'image', tagIcon: 'ph-image', tagText: 'Image Gen', tagStyle: 'background: rgba(236, 72, 153, 0.1); color: #ec4899;', title: 'App UI Mockup', desc: 'Thiết kế giao diện ứng dụng trên màn hình điện thoại.', prompt: 'UI/UX design of a modern fitness tracking mobile app, sleek dark mode, vibrant green accent colors, neumorphism elements, 3d isometric perspective, dribbble style --ar 4:3' },
            { id: 'i9', category: 'image', tagIcon: 'ph-image', tagText: 'Image Gen', tagStyle: 'background: rgba(236, 72, 153, 0.1); color: #ec4899;', title: 'Vintage Film Photography', desc: 'Ảnh chụp phim phong cách retro.', prompt: 'A candid film photo of a young woman laughing in a vintage diner, neon lights reflecting in the window, 35mm film, light leaks, grain, retro 1980s aesthetic --ar 3:2' },

            // --- CODE (9) ---
            { id: 'co1', category: 'code', tagIcon: 'ph-code', tagText: 'Lập Trình', tagStyle: 'background: rgba(14, 165, 233, 0.1); color: #0ea5e9;', title: 'Code Reviewer', desc: 'Yêu cầu AI review và tối ưu code.', prompt: 'Hãy review đoạn code [Ngôn ngữ] sau. Chỉ ra các vấn đề về hiệu suất, bảo mật và chuẩn mực viết code (Clean Code). Sau đó, viết lại đoạn code đã được tối ưu: \\n\\n[Dán code vào đây]' },
            { id: 'co2', category: 'code', tagIcon: 'ph-code', tagText: 'Lập Trình', tagStyle: 'background: rgba(14, 165, 233, 0.1); color: #0ea5e9;', title: 'Tạo Regex Nhanh', desc: 'Tạo biểu thức chính quy (Regex) phức tạp.', prompt: 'Viết một biểu thức chính quy (Regex) để trích xuất [ví dụ: địa chỉ email, số điện thoại Việt Nam]. Giải thích chi tiết từng phần của Regex để tôi hiểu cách nó hoạt động.' },
            { id: 'co3', category: 'code', tagIcon: 'ph-code', tagText: 'Lập Trình', tagStyle: 'background: rgba(14, 165, 233, 0.1); color: #0ea5e9;', title: 'Thiết Kế Database Schema', desc: 'Thiết kế cấu trúc cơ sở dữ liệu tối ưu.', prompt: 'Tôi đang xây dựng một ứng dụng [Loại ứng dụng]. Hãy thiết kế một Database Schema (sử dụng PostgreSQL). Liệt kê các bảng, các trường (kèm kiểu dữ liệu), và mối quan hệ (Foreign keys) giữa chúng.' },
            { id: 'co4', category: 'code', tagIcon: 'ph-code', tagText: 'Lập Trình', tagStyle: 'background: rgba(14, 165, 233, 0.1); color: #0ea5e9;', title: 'Giải Thích Lỗi (Debug)', desc: 'Tìm nguyên nhân và cách sửa lỗi.', prompt: 'Tôi đang nhận được thông báo lỗi sau trong [Ngôn ngữ/Framework]: "[Dán thông báo lỗi]". Hãy giải thích nguyên nhân gây ra lỗi này một cách đơn giản và đưa ra 3 bước cụ thể để khắc phục.' },
            { id: 'co5', category: 'code', tagIcon: 'ph-code', tagText: 'Lập Trình', tagStyle: 'background: rgba(14, 165, 233, 0.1); color: #0ea5e9;', title: 'Viết Unit Test', desc: 'Tự động tạo các bài kiểm thử unit.', prompt: 'Hãy viết các Unit Test đầy đủ cho hàm [Ngôn ngữ] sau đây, sử dụng thư viện [Tên thư viện test, vd: Jest/PyTest]. Bao gồm cả trường hợp thành công (happy path) và các trường hợp ngoại lệ (edge cases): \\n\\n[Dán hàm vào đây]' },
            { id: 'co6', category: 'code', tagIcon: 'ph-code', tagText: 'Lập Trình', tagStyle: 'background: rgba(14, 165, 233, 0.1); color: #0ea5e9;', title: 'Chuyển Đổi Ngôn Ngữ Code', desc: 'Dịch code từ ngôn ngữ này sang ngôn ngữ khác.', prompt: 'Hãy chuyển đổi đoạn mã [Ngôn ngữ A] sau đây sang [Ngôn ngữ B]. Đảm bảo sử dụng các best practice và thư viện tiêu chuẩn của [Ngôn ngữ B]: \\n\\n[Dán mã vào đây]' },
            { id: 'co7', category: 'code', tagIcon: 'ph-code', tagText: 'Lập Trình', tagStyle: 'background: rgba(14, 165, 233, 0.1); color: #0ea5e9;', title: 'Cấu Hình Dockerfile', desc: 'Tạo Dockerfile cho dự án.', prompt: 'Tạo một Dockerfile tối ưu cho môi trường Production cho một ứng dụng [Node.js/Python/Go]. Yêu cầu: sử dụng multi-stage build để giảm kích thước image, thiết lập non-root user để bảo mật.' },
            { id: 'co8', category: 'code', tagIcon: 'ph-code', tagText: 'Lập Trình', tagStyle: 'background: rgba(14, 165, 233, 0.1); color: #0ea5e9;', title: 'Giải Thích Code Cho Người Mới', desc: 'Giải thích đoạn code khó hiểu.', prompt: 'Hãy giải thích đoạn mã sau đây giống như tôi là một lập trình viên mới vào nghề. Tránh dùng các thuật ngữ quá hàn lâm mà hãy dùng ví dụ thực tế: \\n\\n[Dán code vào đây]' },
            { id: 'co9', category: 'code', tagIcon: 'ph-code', tagText: 'Lập Trình', tagStyle: 'background: rgba(14, 165, 233, 0.1); color: #0ea5e9;', title: 'Tạo Script Tự Động Hóa', desc: 'Viết Bash/Python script.', prompt: 'Viết một script bằng [Python/Bash] để tự động hóa việc: quét thư mục /logs, tìm các file cũ hơn 30 ngày, nén chúng lại thành file zip và xóa file gốc.' },

            // --- MARKETING (8) ---
            { id: 'm1', category: 'marketing', tagIcon: 'ph-megaphone', tagText: 'Marketing', tagStyle: 'background: rgba(245, 158, 11, 0.1); color: #f59e0b;', title: 'Bài PR Chuẩn Công Thức PAS', desc: 'Viết bài quảng cáo theo Problem-Agitate-Solve.', prompt: 'Đóng vai một Copywriter chuyên nghiệp. Viết một bài PR 500 chữ giới thiệu [Sản phẩm/Dịch vụ] áp dụng công thức PAS (Problem - Agitate - Solve). Nhắm tới đối tượng [Khách hàng mục tiêu].' },
            { id: 'm2', category: 'marketing', tagIcon: 'ph-megaphone', tagText: 'Marketing', tagStyle: 'background: rgba(245, 158, 11, 0.1); color: #f59e0b;', title: 'Lên Kế Hoạch Đăng Bài MXH', desc: 'Tạo content calendar 30 ngày.', prompt: 'Hãy lập cho tôi một kế hoạch nội dung mạng xã hội (Content Calendar) trong 30 ngày cho trang [Facebook/Instagram] của một thương hiệu [Ngành nghề]. Bảng gồm: Ngày, Chủ đề, Định dạng (Video/Ảnh), và Tiêu đề ngắn gọn.' },
            { id: 'm3', category: 'marketing', tagIcon: 'ph-megaphone', tagText: 'Marketing', tagStyle: 'background: rgba(245, 158, 11, 0.1); color: #f59e0b;', title: 'Viết Meta Description SEO', desc: 'Tối ưu thẻ mô tả SEO cho website.', prompt: 'Viết 5 biến thể Meta Description (mỗi biến thể dưới 155 ký tự) cho một bài viết blog có tiêu đề: "[Tiêu đề bài viết]". Chứa từ khóa chính "[Từ khóa]" và có Call to Action thúc đẩy lượt click.' },
            { id: 'm4', category: 'marketing', tagIcon: 'ph-megaphone', tagText: 'Marketing', tagStyle: 'background: rgba(245, 158, 11, 0.1); color: #f59e0b;', title: 'Nghiên Cứu Đối Thủ Cạnh Tranh', desc: 'Phân tích SWOT thông qua AI.', prompt: 'Đóng vai chuyên gia chiến lược Marketing. Hãy thực hiện phân tích SWOT (Điểm mạnh, Điểm yếu, Cơ hội, Thách thức) cho thương hiệu [Tên đối thủ] trong thị trường [Khu vực/Ngành].' },
            { id: 'm5', category: 'marketing', tagIcon: 'ph-megaphone', tagText: 'Marketing', tagStyle: 'background: rgba(245, 158, 11, 0.1); color: #f59e0b;', title: 'Tiêu Đề Email Marketing', desc: 'Tạo 10 tiêu đề email tăng tỷ lệ mở.', prompt: 'Viết 10 dòng tiêu đề Email Marketing cho chiến dịch [Tên chiến dịch/Giảm giá]. Tiêu đề cần ngắn gọn (dưới 50 ký tự), khơi gợi sự tò mở, tạo cảm giác cấp bách (FOMO) nhưng không bị đánh dấu là Spam.' },
            { id: 'm6', category: 'marketing', tagIcon: 'ph-megaphone', tagText: 'Marketing', tagStyle: 'background: rgba(245, 158, 11, 0.1); color: #f59e0b;', title: 'Kịch Bản Seeding Group', desc: 'Tạo bài đăng seeding tự nhiên trên hội nhóm.', prompt: 'Viết 3 mẫu kịch bản đăng bài seeding trên các Group Facebook để khéo léo giới thiệu [Sản phẩm]. Bài viết phải mang tính chất chia sẻ kinh nghiệm chân thực, hỏi đáp, không được mang hơi hướm quảng cáo lộ liễu.' },
            { id: 'm7', category: 'marketing', tagIcon: 'ph-megaphone', tagText: 'Marketing', tagStyle: 'background: rgba(245, 158, 11, 0.1); color: #f59e0b;', title: 'Cấu Trúc Landing Page Tối Ưu', desc: 'Lên outline cho trang đích tỷ lệ chuyển đổi cao.', prompt: 'Tôi cần tạo một Landing Page để bán [Sản phẩm]. Hãy thiết kế outline cấu trúc (từ trên xuống dưới) theo mô hình AIDA. Gợi ý luôn tiêu đề chính (Heading 1) và nội dung của các nút bấm (Button CTA).' },
            { id: 'm8', category: 'marketing', tagIcon: 'ph-megaphone', tagText: 'Marketing', tagStyle: 'background: rgba(245, 158, 11, 0.1); color: #f59e0b;', title: 'Phân Tích Chân Dung Khách Hàng', desc: 'Vẽ persona khách hàng mục tiêu.', prompt: 'Xây dựng một hồ sơ chân dung khách hàng (Customer Persona) chi tiết cho sản phẩm [Tên/Loại sản phẩm]. Bao gồm: Nhân khẩu học, Sở thích, Nỗi đau (Pain points), và Mục tiêu của họ.' },

            // --- PRODUCTIVITY (8) ---
            { id: 'pr1', category: 'productivity', tagIcon: 'ph-chart-bar', tagText: 'Năng Suất', tagStyle: 'background: rgba(16, 185, 129, 0.1); color: #10b981;', title: 'Công Thức Excel/Google Sheets', desc: 'Nhờ AI viết công thức phức tạp.', prompt: 'Viết một công thức [Excel/Google Sheets] để: [Mô tả chi tiết bạn muốn làm, vd: lấy dữ liệu từ cột A nếu cột B lớn hơn 100 và tính tổng chúng]. Giải thích cách công thức này hoạt động.' },
            { id: 'pr2', category: 'productivity', tagIcon: 'ph-chart-bar', tagText: 'Năng Suất', tagStyle: 'background: rgba(16, 185, 129, 0.1); color: #10b981;', title: 'Lên Kế Hoạch Cuộc Họp', desc: 'Tạo Agenda chuẩn chuyên nghiệp.', prompt: 'Lập một Agenda (chương trình họp) dài 45 phút cho cuộc họp về chủ đề [Chủ đề họp]. Chia rõ thời gian cho từng phần, ghi chú mục tiêu của cuộc họp và danh sách các tài liệu cần chuẩn bị trước.' },
            { id: 'pr3', category: 'productivity', tagIcon: 'ph-chart-bar', tagText: 'Năng Suất', tagStyle: 'background: rgba(16, 185, 129, 0.1); color: #10b981;', title: 'Viết Báo Cáo Tuần', desc: 'Tóm tắt công việc thành báo cáo sếp thích.', prompt: 'Dựa trên danh sách các công việc sau đây tôi đã làm trong tuần qua, hãy viết một bản báo cáo tuần (Weekly Report) gửi quản lý. Cấu trúc gồm: Những việc đã hoàn thành, Vấn đề tồn đọng, Kế hoạch tuần tới: \\n[Danh sách việc]' },
            { id: 'pr4', category: 'productivity', tagIcon: 'ph-chart-bar', tagText: 'Năng Suất', tagStyle: 'background: rgba(16, 185, 129, 0.1); color: #10b981;', title: 'Sắp Xếp Thời Gian (Pomodoro)', desc: 'Lên lịch làm việc khối lượng lớn.', prompt: 'Hôm nay tôi có 3 nhiệm vụ lớn: [A, B, C]. Tôi có 6 giờ làm việc trống. Hãy lập lịch trình làm việc chi tiết cho tôi áp dụng phương pháp Pomodoro (25p làm - 5p nghỉ), ưu tiên việc khó nhất vào buổi sáng.' },
            { id: 'pr5', category: 'productivity', tagIcon: 'ph-chart-bar', tagText: 'Năng Suất', tagStyle: 'background: rgba(16, 185, 129, 0.1); color: #10b981;', title: 'Viết VBA Macros (Excel)', desc: 'Tự động hóa Excel bằng VBA.', prompt: 'Viết một mã VBA Macro cho Excel để thực hiện tự động công việc sau: [Mô tả yêu cầu, ví dụ: Xóa tất cả các hàng trống trong Sheet1 và định dạng cột A thành ngày tháng].' },
            { id: 'pr6', category: 'productivity', tagIcon: 'ph-chart-bar', tagText: 'Năng Suất', tagStyle: 'background: rgba(16, 185, 129, 0.1); color: #10b981;', title: 'Phân Tích Dữ Liệu Bảng', desc: 'Rút trích insight từ dữ liệu thô.', prompt: 'Tôi sẽ cung cấp một đoạn dữ liệu định dạng CSV bên dưới. Hãy đọc nó, sau đó đưa ra 3 nhận xét quan trọng nhất về xu hướng của dữ liệu này và đề xuất hành động: \\n[Dán CSV]' },
            { id: 'pr7', category: 'productivity', tagIcon: 'ph-chart-bar', tagText: 'Năng Suất', tagStyle: 'background: rgba(16, 185, 129, 0.1); color: #10b981;', title: 'Soạn Hợp Đồng Nhanh', desc: 'Tạo khung văn bản hành chính cơ bản.', prompt: 'Hãy soạn một bản thảo cơ bản cho [Loại hợp đồng/biên bản, ví dụ: Biên bản bàn giao thiết bị] giữa Bên A và Bên B. Đảm bảo đầy đủ các mục cần thiết theo tiêu chuẩn văn bản hành chính Việt Nam.' },
            { id: 'pr8', category: 'productivity', tagIcon: 'ph-chart-bar', tagText: 'Năng Suất', tagStyle: 'background: rgba(16, 185, 129, 0.1); color: #10b981;', title: 'Chuẩn Bị Thuyết Trình (Slide)', desc: 'Lên dàn ý cho bài thuyết trình.', prompt: 'Tôi cần tạo một bài thuyết trình 10 slide bằng PowerPoint về chủ đề [Chủ đề]. Hãy lên dàn ý chi tiết: Tiêu đề cho mỗi slide, nội dung chính (bullet points) và gợi ý hình ảnh minh họa cho slide đó.' }
        ];

        let currentPage = 1;
        const itemsPerPage = 8;
        let currentFilter = 'all';

        function renderPrompts() {
            const grid = document.getElementById('prompts-grid');
            grid.innerHTML = ''; // Clear current

            const filtered = allPrompts.filter(p => currentFilter === 'all' || p.category === currentFilter);

            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const paginatedItems = filtered.slice(startIndex, endIndex);

            paginatedItems.forEach((p, index) => {
                const staggerClass = index % 2 !== 0 ? 'stagger-1' : '';
                const btnText = window.I18n ? window.I18n.t('prompts.copy_btn') : "Sao Chép Prompt";

                const cardHtml = `
                    <article class="prompt-card prompt-item fade-up ${staggerClass}">
                        <span class="prompt-tag" style="${p.tagStyle}"><i class="ph-fill ${p.tagIcon}"></i> ${p.tagText}</span>
                        <h3 style="margin: 0; font-size: 1.4rem;">${p.title}</h3>
                        <p class="text-lead" style="font-size: 1rem; margin: 0;">${p.desc}</p>
                        <div class="prompt-code-box">
                            <p class="prompt-code">${p.prompt}</p>
                        </div>
                        <button class="copy-btn" onclick="copyPrompt(this)"><i class="ph ph-copy"></i> <span>${btnText}</span></button>
                    </article>
                `;
                grid.innerHTML += cardHtml;
            });

            // Trigger scroll reveal for new items
            setTimeout(() => {
                if (window.Utils && window.Utils.initScrollReveal) {
                    window.Utils.initScrollReveal();
                } else {
                    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
                }
            }, 50);

            renderPagination(filtered.length);
        }

        function renderPagination(totalItems) {
            const paginationContainer = document.getElementById('prompt-pagination');
            paginationContainer.innerHTML = '';

            const totalPages = Math.ceil(totalItems / itemsPerPage);
            if (totalPages <= 1) return;

            const createBtn = (text, page, isDisabled = false, isActive = false) => {
                const btn = document.createElement('button');
                btn.className = `page-btn ${isActive ? 'active' : ''}`;
                btn.innerHTML = text;
                btn.disabled = isDisabled;
                
                if (!isDisabled && !isActive && page !== '...') {
                    btn.onclick = () => {
                        currentPage = page;
                        renderPrompts();
                        window.scrollTo({ top: document.getElementById('prompt-filters').offsetTop - 100, behavior: 'smooth' });
                    };
                }
                
                if (page === '...') {
                    btn.style.cursor = 'default';
                    btn.style.borderColor = 'transparent';
                    btn.style.background = 'transparent';
                    btn.style.fontWeight = 'bold';
                    btn.style.pointerEvents = 'none';
                }
                
                return btn;
            };

            // Prev Button
            paginationContainer.appendChild(createBtn('<i class="ph ph-caret-left"></i>', currentPage - 1, currentPage === 1));

            // Logic to show pages 1 2 3 ... 6 7 or similar
            let startPage = Math.max(1, currentPage - 1);
            let endPage = Math.min(totalPages, currentPage + 1);

            if (currentPage <= 2) {
                endPage = Math.min(totalPages, 3);
            }
            if (currentPage >= totalPages - 1) {
                startPage = Math.max(1, totalPages - 2);
            }

            if (startPage > 1) {
                paginationContainer.appendChild(createBtn(1, 1));
                if (startPage > 2) {
                    paginationContainer.appendChild(createBtn('...', '...', true));
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                paginationContainer.appendChild(createBtn(i, i, false, currentPage === i));
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    paginationContainer.appendChild(createBtn('...', '...', true));
                }
                paginationContainer.appendChild(createBtn(totalPages, totalPages));
            }

            // Next Button
            paginationContainer.appendChild(createBtn('<i class="ph ph-caret-right"></i>', currentPage + 1, currentPage === totalPages));
        }
"""

with codecs.open('f:/Website/personal-blog/pages/ai-prompts.html', 'r', 'utf-8') as f:
    content = f.read()

# Replace HTML filters
old_filters = '''            <div class="filter-tabs" id="prompt-filters">
                <button class="filter-btn active" data-filter="all" data-i18n="prompts.filter_all">Tất Cả</button>
                <button class="filter-btn" data-filter="video" data-i18n="prompts.filter_video">Video (Veo 3)</button>
                <button class="filter-btn" data-filter="chat" data-i18n="prompts.filter_chat">Chatbot
                    (GPT/Gemini)</button>
                <button class="filter-btn" data-filter="image" data-i18n="prompts.filter_img">Hình Ảnh
                    (Midjourney)</button>
            </div>'''
            
new_filters = '''            <div class="filter-tabs" id="prompt-filters" style="display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center;">
                <button class="filter-btn active" data-filter="all">Tất Cả</button>
                <button class="filter-btn" data-filter="video">Video (Veo/Sora)</button>
                <button class="filter-btn" data-filter="chat">Chatbot (GPT/Gemini)</button>
                <button class="filter-btn" data-filter="image">Hình Ảnh (Midjourney)</button>
                <button class="filter-btn" data-filter="code">Lập Trình (Code)</button>
                <button class="filter-btn" data-filter="marketing">Marketing (SEO/Ads)</button>
                <button class="filter-btn" data-filter="productivity">Năng Suất (Office)</button>
            </div>'''
            
content = content.replace(old_filters, new_filters)

# Replace Javascript block
import re
start_marker = 'const allPrompts = ['
end_marker = "document.addEventListener('AppReady', () => {"
idx1 = content.find(start_marker)
idx2 = content.find(end_marker)

if idx1 != -1 and idx2 != -1:
    content = content[:idx1] + prompts_js.strip() + '\\n\\n        ' + content[idx2:]
else:
    print('Could not find JS injection points')

with codecs.open('f:/Website/personal-blog/pages/ai-prompts.html', 'w', 'utf-8') as f:
    f.write(content)
print('Done!')
