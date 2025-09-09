# Building Templates



```js
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Bastardised Food - Breaking food conventions with creative, rebellious recipes and posts.">
        <meta name="keywords" content="food, recipes, unconventional, creative, cooking, posts, blog, Bastardised Food">
        <link rel="stylesheet" href="/styles/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <title> {{ title }} </title>
    </head>

    <body>
        {% include "nav.njk" %}
        
        <!-- MAIN -->
        <main class="container">
            {{ content | safe }}
        </main>
        <!-- FOOTER -->
        <footer>

        </footer>
        <script src="../scripts/script.js"></script>
    </body>
</html>
```


https://www.11ty.dev/docs/languages/nunjucks/#supported-features

| Feature | Syntax |
| :--- | :--- |
| ✅ Includes | `{% include 'included.njk' %}` looks in `_includes/included.njk`. Filenames must be in quotes. Does not process front matter in the include file. |
| ✅ Includes (Relative Path) | Relative paths use `./` (template's directory) or `../` (template's parent directory).<br>Example: `{% include './included.njk' %}` looks for `included.njk` in the template's current directory. Does not process front matter in the include file. |
| ✅ Extends | `{% extends 'base.njk' %}` looks in `_includes/base.njk`. Does not process front matter in the include file. |
| ✅ Extends (Relative Path) | Relative paths use `./` (template's directory) or `../` (template's parent directory)<br>Example: `{% extends './base.njk' %}` looks for `base.njk` in the template's current directory. Does not process front matter in the include file. |
| ✅ Imports | `{% import 'macros.njk' %}` looks in `_includes/macros.njk`. Does not process front matter in the include file. |
| ✅ Imports (Relative Path) | Relative paths use `./` (template's directory) or `../` (template's parent directory):<br>`{% import './macros.njk' %}` looks for `macros.njk` in the template's current directory. Does not process front matter in the include file. |
| ✅ Filters | `{% name \| filterName %}` Read more about Filters. |
| ✅ Universal Filters | `{% name \| filterName %}` Read more about Filters. |
| ✅ Custom Tags | `{% uppercase name %}` Read more about Custom Tags. |
| ✅ Shortcodes | `{% uppercase name %}` Read more about Shortcodes. |



The `index.njk` template includes yaml frontmatter. Here the base template is specified.
```njk
---
layout: base.njk
title: "Bastardised Food!"
---
```

The `index` page includes a hero element. The hero needs some values and these can be set before calling the element:
```njk
{% set title = "Welcome to Bastardised Food" %}
{% set subtitle = "Bollocks to conventions!" %}
{% include "hero.njk" %}
```





```njk
---
layout: base.njk
title: "Bastardised Food!"
---

{% set title = "Welcome to Bastardised Food" %}
{% set subtitle = "Bollocks to conventions!" %}
{% include "hero.njk" %}

<section class="latest">
    <h2>Latest Bastardisations</h2>
    <div class="post-grid">
        {% for post in collections.food %}
            <article class="post-card">
                <img src="{{ post.data.image or 'https://picsum.photos/id/63/400' }}" alt="{{ post.data.title }}">
                <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
                <p class="excerpt">{{ post.data.excerpt or '' }}</p>
                <span class="meta">Posted: {{ post.date | date('yyyy-MM-dd') }}</span>
            </article>
        {% endfor %}
    </div>
</section>
```