// common.js
document.addEventListener("DOMContentLoaded", () => {
    // Применяем тему при загрузке страницы
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.className = savedTheme;
});

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    document.documentElement.classList.toggle("light");
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}