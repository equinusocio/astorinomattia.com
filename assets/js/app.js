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

document.addEventListener("turbolinks:load", (event) => {
  if (typeof galite === "function"){

    galite("set", "location", event.data.url)
    galite('create', 'UA-134447939-1', 'auto')
    galite('send', 'pageview')
  }
})
