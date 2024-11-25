const searchModalEl = document.querySelector('#searchModal');
const searchInputEl = document.querySelector('#searchInput');
const searchResultsEl = document.querySelector('#searchResults');
const searchNoResultEl = document.querySelector('#searchNoResult');
const noResultEl = document.querySelector('#searchResults #noResult');
const postTitlesEl = document.querySelector('#postTitles');
const postTitles = JSON.parse(postTitlesEl.dataset.postTitles) || [];

searchModalEl.addEventListener('shown.bs.modal', () => searchInputEl.focus());

const fuse = new window.Fuse(postTitles, { keys: ['title'] });

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
