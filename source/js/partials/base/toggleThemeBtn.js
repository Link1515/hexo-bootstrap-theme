const toggleThemeBtnEl = document.querySelector('#toggleThemeBtn');

toggleThemeBtnEl.addEventListener('click', toggleThemeWithAnimation);

function toggleThemeWithAnimation() {
  if (!document.startViewTransition) toggleTheme();
  document.startViewTransition(toggleTheme);
}

function toggleTheme() {
  const theme = document.body.dataset.bsTheme;

  if (theme === 'dark') {
    document.body.dataset.bsTheme = '';
    window.localStorage.setItem('theme', '');
  } else {
    document.body.dataset.bsTheme = 'dark';
    window.localStorage.setItem('theme', 'dark');
  }
}
