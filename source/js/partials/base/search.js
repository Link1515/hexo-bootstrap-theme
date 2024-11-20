const searchInputEl = document.querySelector("#searchInput");
const searchResultsEl = document.querySelector("#searchResults");
const postTitlesEl = document.querySelector("#postTitles");
const postTitles = JSON.parse(postTitlesEl.dataset.postTitles) || [];

const fuse = new window.Fuse(postTitles, { keys: ['title'] });

searchInputEl.addEventListener("input", (event) => {
  const searchPattern = event.target.value;
  const results = fuse.search(searchPattern);
  appendSearchResults(results);
});

function appendSearchResults(results) {
  const html = results.map(result => `
    <a href="${result.item.link}" class="list-group-item list-group-item-action">${result.item.title}</a>
  `).join("");
  searchResultsEl.innerHTML = html;
}
