function changeHeadTitle(html, title, pageTitle) {
  html = html.replace(
    /(<title>).*?(<\/title>)/,
    (_, start, end) => `${start}${pageTitle} | ${title}${end}`
  );

  html = html.replace(
    /(<meta property="og:title" content=").*?(" \/>)/,
    (_, start, end) => `${start}${pageTitle} | ${title}${end}`
  );

  html = html.replace(
    /(<meta name="twitter:title" value=").*?(" \/>)/,
    (_, start, end) => `${start}${pageTitle} | ${title}${end}`
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

module.exports = { changeHeadTitle, changeHeadImage, changeHeadDescription };
