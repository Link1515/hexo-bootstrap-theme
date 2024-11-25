const searchModalEl = document.querySelector('#searchModal');
const searchInputEl = document.querySelector('#searchInput');
const searchResultsEl = document.querySelector('#searchResults');
const searchNoResultEl = document.querySelector('#searchNoResult');
const logoEl = document.querySelector('#logo');

searchModalEl.addEventListener('shown.bs.modal', () => searchInputEl.focus());

const base = logoEl.href;

fetch(`${base}search.json`)
  .then(res => res.json())
  .then(posts => {
    const fuse = new window.Fuse(posts, { keys: ['title'] });

    searchInputEl.addEventListener(
      'input',
      window.debounce(
        event => {
          hideNoResult();

          const searchPattern = event.target.value;
          if (!searchPattern) {
            clearSearchResults();
            return;
          }

          const results = fuse.search(searchPattern);
          if (results.length === 0) {
            clearSearchResults();
            showNoResult();
            return;
          }
          appendSearchResults(results);
        },
        { leading: true }
      )
    );
  });

function clearSearchResults() {
  searchResultsEl.innerHTML = '';
}

function appendSearchResults(results) {
  const html = results
    .map(
      result => `
        <a href="${result.item.link}" class="list-group-item list-group-item-action">
          ${result.item.title}
        </a>
      `
    )
    .join('');
  searchResultsEl.innerHTML = html;
}

function showNoResult() {
  searchNoResultEl.style.display = 'block';
}

function hideNoResult() {
  searchNoResultEl.style.display = 'none';
}
