function toggleTheme() {
    const body = document.body;
    // Переключаем тему
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        // Сохранение темы в localStorage
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        // Сохранение темы в localStorage
        localStorage.setItem('theme', 'light');
    }
}

// Функция для загрузки темы из localStorage
function loadTheme() {
    const theme = localStorage.getItem('theme') || 'light'; // По умолчанию 'light'
  
    // Удаляем предыдущую тему и добавляем текущую
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme + '-theme');
}

// Загрузка темы при загрузке страницы
window.onload = loadTheme;