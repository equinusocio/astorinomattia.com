const axios = require('axios').default

axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.CDA}`

module.exports = async function() {
  try {
    const response = await axios.get(
      `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/${process.env.ENVIRONMENT}/entries?content_type=blogPost&order=-sys.createdAt`
    )
    // const allTags = response.data.items.map((item) => item.fields.tags);
    let tags = []
    response.data.items.forEach(item => {
      tags.push(...item.fields.tags.map(tag => tag.replace(/ /gi, '-')))
    });
    const cleanedTags = [...new Set(tags)]
    return cleanedTags
  } catch (error) {
    throw new Error(error)
  }
}
