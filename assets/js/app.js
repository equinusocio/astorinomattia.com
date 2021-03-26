import { Application } from 'stimulus'
import Turbolinks from 'turbolinks'

/* Import controllers */
import ThemeSwitcher from './controllers/theme-switcher'
import AudioFx from './controllers/audio-fx'
import Button from './controllers/button'
// import Cursor from './controllers/cursor'

/* Init Stimulus library */
const application = Application.start()

/* Register Stimulus controllers */
application.register('theme-switcher', ThemeSwitcher)
application.register('audio-fx', AudioFx)
application.register('button', Button)
// application.register('cursor', Cursor)

/**
 * Init Turbolinks within the site
 */
Turbolinks.start()
