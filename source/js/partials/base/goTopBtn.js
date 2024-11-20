const goTopBtnEl = document.querySelector('#goTopBtn');

goTopBtnEl.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener(
  'scroll',
  window.debounce(() => {
    if (window.scrollY > 200) {
      goTopBtnEl.style.visibility = 'visible';
      goTopBtnEl.style.opacity = 1;
    } else {
      goTopBtnEl.style.visibility = '';
      goTopBtnEl.style.opacity = '';
    }
  })
);
