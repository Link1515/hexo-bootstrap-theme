const { changeHeadTitle } = require('../utils/htmlUtils');

hexo.extend.filter.register('after_render:html', function (html, data) {
  if (data.path.includes('tags/')) {
    const pageTitle = data.page.tag ? `#${data.page.tag}` : data.__('tags');
    html = changeHeadTitle(html, data.config.title, pageTitle);
  }

  if (data.path.includes('categories/')) {
    const pageTitle = data.page.category ? data.page.category : data.__('tags');
    html = changeHeadTitle(html, data.config.title, pageTitle);
  }

  if (data.path.includes('archives/')) {
    let pageTitle = '';
    if (data.page.year) {
      pageTitle += data.page.year;
    }
    if (data.page.month) {
      pageTitle += ` / ${data.page.month}`;
    }
    if (pageTitle.length === 0) {
      pageTitle = data.__('list');
    }
    html = changeHeadTitle(html, data.config.title, pageTitle);
  }

  return html;
});
