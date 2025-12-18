// script.js 的內容 (互動功能)
// 手機版選單切換
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// 導航列捲動變色效果
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        navbar.classList.remove('py-4'); // 假設初始有 padding
    } else {
        navbar.classList.remove('shadow-md');
    }
});

// 簡單的捲動淡入偵測
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                entry.target.style.opacity = '1'; // 確保動畫後可見
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 選擇所有作品卡片進行觀察
    document.querySelectorAll('article').forEach(el => {
        el.style.opacity = '0'; // 初始隱藏
        observer.observe(el);
    });
});