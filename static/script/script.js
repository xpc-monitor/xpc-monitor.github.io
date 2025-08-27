(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const YEAR = document.getElementById('year');

  // Persisted theme
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') {
    root.classList.add(saved);
  }

  // Toggle theme
  toggle?.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');
    if (!isDark) root.classList.add('light'); else root.classList.remove('light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Current year
  if (YEAR) YEAR.textContent = new Date().getFullYear();
})();


