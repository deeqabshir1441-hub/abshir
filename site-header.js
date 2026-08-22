document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    if (!menuToggle || !navMenu || menuToggle.dataset.menuReady === 'true') return;

    menuToggle.dataset.menuReady = 'true';
    const setMenuState = open => {
        navMenu.classList.toggle('active', open);
        menuToggle.setAttribute('aria-expanded', String(open));
        menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
        const icon = menuToggle.querySelector('i');
        icon?.classList.toggle('fa-bars', !open);
        icon?.classList.toggle('fa-xmark', open);
    };

    menuToggle.addEventListener('click', event => {
        event.stopPropagation();
        setMenuState(!navMenu.classList.contains('active'));
    });
    navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuState(false)));
    document.addEventListener('click', event => {
        if (navMenu.classList.contains('active') && !navMenu.contains(event.target)) setMenuState(false);
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') setMenuState(false);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle || themeToggle.dataset.themeReady === 'true') return;

    themeToggle.dataset.themeReady = 'true';
    const updateThemeIcon = () => {
        const icon = themeToggle.querySelector('i');
        if (!icon) return;
        const light = document.body.classList.contains('light-mode');
        if (window.lucide) {
            icon.className = '';
            icon.setAttribute('data-lucide', light ? 'sun' : 'moon');
            window.lucide.createIcons();
        } else {
            icon.removeAttribute('data-lucide');
            icon.className = `fa-solid ${light ? 'fa-sun' : 'fa-moon'}`;
        }
    };

    document.body.classList.toggle('light-mode', localStorage.getItem('theme') === 'light');
    updateThemeIcon();
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
        updateThemeIcon();
    });
});
