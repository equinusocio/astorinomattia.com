import { Application } from 'stimulus'
import Turbolinks from 'turbolinks'
/* Import controllers */
import ThemeSwitcher from './controllers/theme-switcher'
import GridList from './controllers/grid-list'
import galite from 'ga-lite'


/* Init Stimulus library */
const application = Application.start()

/* Register Stimulus controllers */
application.register('theme-switcher', ThemeSwitcher)
application.register('post-list', GridList)

/**
 * Init Turbolinks within the site
 */
Turbolinks.start()

galite('create', 'UA-134447939-1', 'auto')

document.addEventListener("turbolinks:load", (event) => {
  galite("set", "location", event.data.url)
  galite('send', 'pageview')
})
