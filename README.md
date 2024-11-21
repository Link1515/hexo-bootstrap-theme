# hexo-bootstrap-theme

A simple hexo theme made by [bootstrap 5](https://getbootstrap.com/)

### [Github](https://github.com/Link1515/hexo-bootstrap-theme)

[![cover](https://raw.githubusercontent.com/Link1515/hexo-bootstrap-theme/refs/heads/master/cover.jpg)](https://github.com/Link1515/hexo-bootstrap-theme)

## How to use

- Open terminal in your hexo project

- cd into `themes` directory

```bash
cd themes
```

- Clone this repository

```bash
git clone https://github.com/Link1515/hexo-bootstrap-theme
```

- Modify the `theme` configuration in the root `_config.yml` file to `hexo-bootstrap-theme`

```yaml
theme: hexo-bootstrap-theme
```

Then start enjoying the theme!

## Theme Configuration

```yaml
theme_config:
  share_image: ''     # default share image
  logo:
    title: 'My Blog'  # logo title in the navba
    image: ''         # logo image in the navbar
  post:
    show_cover: true           # show cover in the post
    show_description: true     # show description in the post
  footer_content: © Copyright 2024   # footer content
```

## Syntax highlighting

This theme use `prismjs` for syntax highlighting. If you want to enable it, update the configuration in _config.yml

```yaml
syntax_highlighter: prismjs
prismjs:
  preprocess: false
  line_number: true
  line_threshold: 0
  tab_replace: ''
```