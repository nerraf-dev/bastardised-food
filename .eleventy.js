module.exports = function(eleventyConfig) {
  // Pass through static files, add shortcodes, etc.
  eleventyConfig.addPassthroughCopy("src/styles");
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};