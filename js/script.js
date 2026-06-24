document.addEventListener('DOMContentLoaded', () => {
    
    // 1. XỬ LÝ ĐỔI CHẾ ĐỘ TỐI / SÁNG (DARK MODE)
    const toggleBtn = document.getElementById('dark-mode-toggle');
    
    toggleBtn.addEventListener('click', () => {
        // Thêm hoặc xóa class "dark-mode" ở thẻ body
        document.body.classList.toggle('dark-mode');
        
        // Đổi chữ hiển thị trên nút tương ứng
        if (document.body.classList.contains('dark-mode')) {
            toggleBtn.innerText = "☀️ Chế độ sáng";
        } else {
            toggleBtn.innerText = "🌙 Chế độ tối";
        }
    });

    // 2. XỬ LÝ HIỆU ỨNG HIỆN HÌNH KHI CUỘN TRANG (INTERSECTION OBSERVER)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Nếu phần tử lọt vào tầm nhìn của màn hình
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Thêm class "show" để chạy CSS transition
            }
        });
    }, {
        threshold: 0.1 // Chỉ cần 10% diện tích dự án xuất hiện là kích hoạt hiệu ứng
    });

    // Tìm tất cả các thẻ có class .project và bắt đầu theo dõi hành vi cuộn chuột
    const projects = document.querySelectorAll('.project');
    projects.forEach((el) => observer.observe(el));
});
