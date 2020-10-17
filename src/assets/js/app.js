import { Application } from 'stimulus'
import Turbolinks from 'turbolinks'
/* Import controllers */
import ThemeSwitcher from './controllers/theme-switcher'
import GridList from './controllers/grid-list'
import ProductCard from './controllers/product-card'

/* Init Stimulus library */
const application = Application.start()

/* Register Stimulus controllers */
application.register('theme-switcher', ThemeSwitcher)
application.register('grid-list', GridList)
application.register('product-card', ProductCard)

/**
 * Init Turbolinks within the site
 */
Turbolinks.start()

document.addEventListener('turbolinks:load', function () {
  const elements = [...document.querySelectorAll('[animate]')]
  elements.forEach((el) => {
    el.classList.add('fadeIn')
  })
})


