import { Application } from 'stimulus'

/* Import controllers */
import ThemeSwitcher from './controllers/theme-switcher'
import Button from './controllers/button'
import Mark from './controllers/mark'
import Cursor from './controllers/cursor'
import { pageTransition } from './transition'

const canHoverDevice = window.matchMedia("hover: hover");

if (canHoverDevice) {
  pageTransition();
}

/* Init Stimulus library */
const application = Application.start()

/* Register Stimulus controllers */
application.register('theme-switcher', ThemeSwitcher)
application.register('button', Button)
application.register('mark', Mark)
application.register('cursor', Cursor)

