import { Application } from 'stimulus'
import Turbolinks from 'turbolinks'

/* Import controllers */
import ThemeSwitcher from './controllers/theme-switcher'

/* Init Stimulus library */
const application = Application.start()

/* Register Stimulus controllers */
application.register('theme-switcher', ThemeSwitcher)

/**
 * Init Turbolinks within the site
 */
Turbolinks.start()
