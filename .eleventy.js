module.exports = function (eleventyConfig) {
    // eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("src/css/styles.css");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addFilter("randomItem", (arr) => {
        arr.sort(() => {
          return 0.5 - Math.random();
        });
        return arr.slice(0, 1);
      });
    return {
      dir: {
        input: "src",
        output: "public",
        data:"_data",
      },
    };
};