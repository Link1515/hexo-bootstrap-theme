const {
  changeHeadTitle,
  changeHeadImage,
  changeHeadDescription
} = require('../utils/htmlUtils');

hexo.extend.filter.register('after_render:html', function (html, data) {
  if (data.page.title) {
    html = changeHeadTitle(html, data.config.title, data.page.title);
  }

  if (data.page.cover) {
    html = changeHeadImage(html, data.page.cover);
  }

  if (data.page.description) {
    html = changeHeadDescription(html, data.page.description);
  }

  return html;
});
