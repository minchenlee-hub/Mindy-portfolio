// script.js 的內容 (互動功能)
// 簡單的捲動淡入效果
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, article div, header p').forEach(el => {
        // 簡單判斷，只對部分元素加動畫，避免太花俏
        if(!el.classList.contains('fade-in-up')) {
            el.style.opacity = '1'; // 預設顯示，若要動畫可改為 0 並 add observe
        }
    });
});