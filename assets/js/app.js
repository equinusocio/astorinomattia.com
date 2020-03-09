import { Application } from 'stimulus'
import Turbolinks from 'turbolinks'
/* Import controllers */
import ThemeSwitcher from './controllers/theme-switcher'
import GridList from './controllers/grid-list'
import Scrolles from './controllers/scrolles'

/* Init Stimulus library */
const application = Application.start()

/* Register Stimulus controllers */
application.register('theme-switcher', ThemeSwitcher)
application.register('post-list', GridList)
application.register('scrolles', Scrolles)

/**
 * Init Turbolinks within the site
 */
Turbolinks.start()
