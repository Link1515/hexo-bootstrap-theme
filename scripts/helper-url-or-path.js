hexo.extend.helper.register("url_or_path", function (path) {
  return path.startsWith('http') ? path : this.url_for(path);
});