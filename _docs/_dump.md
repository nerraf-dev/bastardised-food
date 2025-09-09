
## Eleventy - Getting Started

```
npm init -y
npm install @11ty/eleventy --save-dev
```


## Collections
A collection in Eleventy is a group of content files, like a series of posts, that can be iterrated over in the templates. Define collections in `.eleventy.js` config, usually by filtering files by folder or tag.

### How to Create a Collection

```js
eleventyConfig.addCollection("food", function(collectionApi) {
  return collectionApi.getFilteredByGlob("food/*.njk").reverse();
});
```

This grabs all .njk files in food and puts them in a collection called food.
The .reverse() is a quick way to show newest first (since Eleventy’s default is oldest first).

Sorting by Date
Each content file can have a date in its front matter:

```yaml
---
title: My Recipe
date: 2025-09-08
---
```

Eleventy automatically parses this and adds it to the collection item as post.date.

To sort by date (newest first), you can do:

```js
eleventyConfig.addCollection("food", function(collectionApi) {
  return collectionApi.getFilteredByGlob("food/*.njk")
    .sort((a, b) => b.date - a.date); // newest first
});
```


## In the template:

```js
{% for post in collections.food %}
  <h2>{{ post.data.title }}</h2>
  <p>{{ post.date | date('yyyy-MM-dd') }}</p>
{% endfor %}
```


