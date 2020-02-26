const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')
const { useGenerator } = require("cezanne")
const { generateArticlesOpengraph } = useGenerator;
const eleventyConfig = require('../../src/_data/config.json')
const fm = require('front-matter')

const paths = {
  blogPath: `./src/${eleventyConfig.paths.blogdir}/`,
  coversPath: './static/images/covers/'
}

const generateImages = async (title) => {
  const isMD = path.extname(title) === '.md'
  const cleanFileName = title.replace(path.extname(title), '');
  if (isMD) {
    const { toFile } = await generateArticlesOpengraph({ slug: cleanFileName });
    await fse.ensureDir(paths.coversPath);
    await toFile(`${paths.coversPath}${cleanFileName}.png`);
  }
}

fs.readdirSync(paths.blogPath).map(fileName => {
  generateImages(fileName)
})
