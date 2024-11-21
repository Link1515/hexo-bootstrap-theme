const toggleThemeBtnEl = document.querySelector('#toggleThemeBtn');
const sunIconEl = document.querySelector('#sunIcon');
const moonIconEl = document.querySelector('#moonIcon');

initTheme();

function initTheme() {
  const theme = window.localStorage.getItem('theme') ?? '';
  document.body.dataset.bsTheme = theme;

  theme === ''
    ? sunIconEl.classList.remove('d-none')
    : moonIconEl.classList.remove('d-none');
}

toggleThemeBtnEl.addEventListener('click', () => {
  toggleBtnIcon();
  toggleTheme();
});

function toggleBtnIcon() {
  sunIconEl.classList.toggle('d-none');
  moonIconEl.classList.toggle('d-none');
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
