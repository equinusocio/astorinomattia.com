import { Application } from 'stimulus'

/* Import controllers */
import ThemeSwitcher from './controllers/theme-switcher'
import AudioFx from './controllers/audio-fx'
import Button from './controllers/button'
import Mark from './controllers/mark'
import Cursor from './controllers/cursor'

/* Init Stimulus library */
const application = Application.start()

/* Register Stimulus controllers */
application.register('theme-switcher', ThemeSwitcher)
application.register('audio-fx', AudioFx)
application.register('button', Button)
application.register('mark', Mark)
application.register('cursor', Cursor)
