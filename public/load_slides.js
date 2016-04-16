var slideContext = require.context("./slides", false, /png$/)
var slides = _.chain(slideContext.keys())
  .map((slidePath) => slideContext(slidePath))
  .value();

module.exports = slides;
