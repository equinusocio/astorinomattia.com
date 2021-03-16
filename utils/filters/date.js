
module.exports = function (value) {
  const dateObject = new Date(value)

  return Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(dateObject)
}
