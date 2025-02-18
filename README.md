# hexo-bootstrap-theme

A simple hexo theme made by [bootstrap 5](https://getbootstrap.com/)

### [Github](https://github.com/Link1515/hexo-bootstrap-theme)

[![cover](https://raw.githubusercontent.com/Link1515/hexo-bootstrap-theme/refs/heads/master/cover.jpg)](https://github.com/Link1515/hexo-bootstrap-theme)

## How to use

- Open terminal in your hexo project

- Clone this repository into `themes` directory

```bash
git clone https://github.com/Link1515/hexo-bootstrap-theme themes/hexo-bootstrap-theme

# Or, use it as submodule
git submodule add https://github.com/Link1515/hexo-bootstrap-theme themes/hexo-bootstrap-theme
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
  favicon: ''         # favicon path
  logo:
    title: 'My Blog'  # logo title in the navbar
    image: ''         # logo image in the navbar
  post:
    show_cover: true           # show cover in the post
    show_description: true     # show description in the post
  footer_content: © Copyright 2025   # footer content
```

## Post Front-matter

- You can update your `scaffolds/post.md` with following

```yaml
---
title: {{ title }}
date: {{ date }}
cover: https://myBlog.com/cover.jpg   # For share image, and recommended to use a 1200 x 630 image
description: hello my description      # For share description
categories: my category
tags:
  - tag 1
  - tag 2
---
```

## Syntax Highlighting

This theme use `prismjs` for syntax highlighting. To enable it, update the configuration in _config.yml

```yaml
syntax_highlighter: prismjs
prismjs:
  preprocess: false
  line_number: true
  line_threshold: 0
  tab_replace: ''
```

### Supported Languages

<table>
  <tr>
    <td>ASP.NET</td>
    <td>Apache</td>
    <td>Bash</td>
    <td>C</td>
    <td>C#</td>
    <td>C++</td>
  </tr>
  <tr>
    <td>CSS</td>
    <td>CSV</td>
    <td>Django</td>
    <td>Docker</td>
    <td>EJS</td>
    <td>Go</td>
  </tr>
  <tr>
    <td>GraphQL</td>
    <td>HTML</td>
    <td>Handlebars</td>
    <td>JSON</td>
    <td>Java</td>
    <td>JavaScript</td>
  </tr>
  <tr>
    <td>Kotlin</td>
    <td>Lua</td>
    <td>Makefile</td>
    <td>Nginx</td>
    <td>Objective-C</td>
    <td>PHP</td>
  </tr>
  <tr>
    <td>PowerShell</td>
    <td>Python</td>
    <td>Ruby</td>
    <td>Rust</td>
    <td>SASS/SCSS</td>
    <td>SQL</td>
  </tr>
  <tr>
    <td>Swift</td>
    <td>Twig</td>
    <td>TypeScript</td>
    <td>YAML</td>
    <td>cshtml</td>
    <td>ini</td>
  </tr>
  <tr>
    <td>vim</td>
  </tr>
</table>
