const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Pass through static files, add shortcodes, etc.
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/images");


  // ***Filters:***
  // date filter for Nunjucks
  eleventyConfig.addFilter("date", (value, format = "yyyy-MM-dd") => {
    if (!value) return "";
    let dateObj = typeof value === "string" ? DateTime.fromISO(value, { zone: "utc" }) : DateTime.fromJSDate(value, { zone: "utc" });
    return dateObj.toFormat(format);
    // return DateTime.fromJSDate(value, { zone: "utc" }).toFormat(format);
  });

  // ***Collections:***
  // Add a collection for food posts
  eleventyConfig.addCollection("food", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/food/*.njk").reverse();
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};