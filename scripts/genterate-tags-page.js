hexo.extend.generator.register('tags-page', function (locals) {
  return {
    path: 'tags/index.html',
    layout: 'tags',
  };
});