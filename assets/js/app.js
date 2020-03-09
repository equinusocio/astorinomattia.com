import { Application } from 'stimulus'
import Turbolinks from 'turbolinks'
/* Import controllers */
import ThemeSwitcher from './controllers/theme-switcher'
import GridList from './controllers/grid-list'
import { Scrolles } from 'scrolles';

/* Init Stimulus library */
const application = Application.start()

/* Register Stimulus controllers */
application.register('theme-switcher', ThemeSwitcher)
application.register('post-list', GridList)


Scrolles({
  selector: '[data-scrolles]',
  mode: 'continuous',
});

/**
 * Init Turbolinks within the site
 */
Turbolinks.start()
