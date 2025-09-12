# Slicing

I wanted to restrict the number of items on the index, so I tried to use `slice`.

From the docs:  
The Nunjucks `slice` filter splits an array into a list of lists (columns), not just a subset of items.

**Example from the docs:**

```njk
{% set arr = [1,2,3,4,5,6,7,8,9] %}

<div class="columwrapper">
  {%- for items in arr | slice(3) %}
    <ul class="column-{{ loop.index }}">
    {%- for item in items %}
      <li>{{ item }}</li>
    {%- endfor %}
    </ul>
  {%- endfor %}
</div>
```

**Output:**
```html
<div class="columwrapper">
    <ul class="column-1">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <ul class="column-2">
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
    <ul class="column-3">
      <li>7</li>
      <li>8</li>
      <li>9</li>
    </ul>
</div>
```

**But this was not what I wanted!**  
The filter splits into columns, not a simple subset. I couldn’t get it to just limit the number of items.

**Workaround:**  
Use dot notation on the array (collection) to get a subset:

```njk
{% set latest = collections.food.slice(0, 3) %}
{% for post in latest %}
    <article class="post-card">
        <a href="{{ post.url }}"><img src="{{ post.data.cover_image or 'https://picsum.photos/id/63/400' }}" alt="{{ post.data.title }}"></a>
        <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
        <p class="excerpt">{{ post.data.excerpt or '' }}</p>
        <span class="meta">Posted: {{ post.date | date('yyyy-MM-dd') }}</span>
    </article>
{% endfor %}
```

**Summary:**  
- Use the Nunjucks `slice` filter for columns.
- Use `.slice(start, end)` (dot notation) for limiting the number of items in a collection.