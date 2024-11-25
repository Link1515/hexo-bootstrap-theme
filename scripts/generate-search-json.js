hexo.extend.generator.register('search-json', function (locals) {
  const posts = locals.posts.map(post => ({
    title: post.title,
    link: hexo.config.root + post.path
  }));

  return {
    path: 'search.json', 
    data: JSON.stringify(posts)
  };
});
