function getFullYear() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

// Вызываем функцию при загрузке страницы
window.onload = getFullYear;
