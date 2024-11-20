const goTopBtnEl = document.querySelector('#goTopBtn');

goTopBtnEl.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});