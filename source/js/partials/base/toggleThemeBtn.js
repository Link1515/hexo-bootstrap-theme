const toggleThemeBtnEl = document.querySelector('#toggleThemeBtn');
const sunIconEl = document.querySelector('#sunIcon');
const moonIconEl = document.querySelector('#moonIcon');

initTheme();

function initTheme() {
  const theme = window.localStorage.getItem('theme') ?? '';
  document.documentElement.dataset.bsTheme = theme;

  if (theme === '') {
    toggleBtnIcon();
  }
}

toggleThemeBtnEl.addEventListener('click', () => {
  toggleBtnIcon();
  toggleTheme();
});

function toggleBtnIcon () {
  sunIconEl.classList.toggle('d-none');
  moonIconEl.classList.toggle('d-none');
}

function toggleTheme () {
  const theme = document.documentElement.dataset.bsTheme;

  if (theme === 'dark') {
    document.documentElement.dataset.bsTheme = '';
    window.localStorage.setItem('theme', '');
  } else {
    document.documentElement.dataset.bsTheme = 'dark';
    window.localStorage.setItem('theme', 'dark');
  }
}
