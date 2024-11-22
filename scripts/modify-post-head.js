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

function changeHeadTitle(html, title, postTitle) {
  html = html.replace(
    /(<title>).*?(<\/title>)/,
    (_, start, end) => `${start}${postTitle} | ${title}${end}`
  );

  html = html.replace(
    /(<meta property="og:title" content=").*?(" \/>)/,
    (_, start, end) => `${start}${postTitle} | ${title}${end}`
  );

  html = html.replace(
    /(<meta name="twitter:title" value=").*?(" \/>)/,
    (_, start, end) => `${start}${postTitle} | ${title}${end}`
  );

  return html;
}

function changeHeadImage(html, cover) {
  html = html.replace(
    /(<meta property="og:image" content=").*?(" \/>)/,
    (_, start, end) => `${start}${cover}${end}`
  );

  html = html.replace(
    /(<meta name="twitter:image" value=").*?(" \/>)/,
    (_, start, end) => `${start}${cover}${end}`
  );

  return html;
}

function changeHeadDescription(html, description) {
  html = html.replace(
    /(<meta name="description" content=").*?(" \/>)/,
    (_, start, end) => `${start}${description}${end}`
  );

  html = html.replace(
    /(<meta property="og:description" content=").*?(" \/>)/,
    (_, start, end) => `${start}${description}${end}`
  );

  html = html.replace(
    /(<meta name="twitter:description" value=").*?(" \/>)/,
    (_, start, end) => `${start}${description}${end}`
  );

  return html;
}
