module.exports = function(value) {
  /* https://irisreading.com/what-is-the-average-reading-speed/ */
  const wordsPerMinute = 200;
  const numberOfWords = value.split(/\s/g).length;
  return Math.ceil(numberOfWords / wordsPerMinute);
}
