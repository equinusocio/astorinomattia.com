import { Application } from 'stimulus'
import Turbolinks from 'turbolinks'

/* Import controllers */
import ThemeSwitcher from './controllers/theme-switcher'
import AudioFx from './controllers/audio-fx'

/* Init Stimulus library */
const application = Application.start()

/* Register Stimulus controllers */
application.register('theme-switcher', ThemeSwitcher)
application.register('audio-fx', AudioFx)

/**
 * Init Turbolinks within the site
 */
Turbolinks.start()
