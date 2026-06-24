document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio của Nguyễn Phan Diễm My đã load xong!');
    
    // --- KHU VỰC 1: XỬ LÝ HIỆU ỨNG CUỘN ẨN HIỆN (INTERSECTION OBSERVER) ---
    const projects = document.querySelectorAll('.project');
    
    const observerOptions = {
        root: null, // Lấy toàn bộ màn hình trình duyệt làm khung nền
        threshold: 0.15 // Khi dự án ló diện được 15% diện tích thì kích hoạt hiệu ứng
    };

    const projectObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Thêm class .show để làm hiện phần dưới
                observer.unobserve(entry.target); // Hiện xong thì ngừng theo dõi để tiết kiệm hiệu năng
            }
        });
    }, observerOptions);

    projects.forEach(project => {
        projectObserver.observe(project);
    });
});
