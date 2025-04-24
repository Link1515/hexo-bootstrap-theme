const tableOfContentsEl = document.querySelector('#tableOfContents');
const titles = document.querySelectorAll('h2');

titles.forEach(title => {
  const link = document.createElement('a');
  link.href = `#${title.id}`;
  link.textContent = title.textContent;
  tableOfContentsEl.append(link);
});

tableOfContentsEl.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.tagName === 'A') {
    const target = document.querySelector(event.target.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  }
})