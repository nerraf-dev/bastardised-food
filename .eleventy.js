const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Pass through static files, add shortcodes, etc.
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/scripts");

  // Shortcode to load JSON data for a recipe
  const fs = require("fs");
  eleventyConfig.addShortcode("loadRecipe", function(jsonPath) {
    const fullPath = require("path").join(__dirname, "src", "recipes", jsonPath.replace("../recipes/", ""));
    return JSON.parse(fs.readFileSync(fullPath, "utf-8"));
  });


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
      output: "./_site"
    }
  };
};