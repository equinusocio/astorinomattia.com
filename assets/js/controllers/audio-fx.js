import { Controller } from 'stimulus'
import Wad from 'web-audio-daw';

export default class extends Controller {
  playSound(event) {
    const audioFile = event.target.dataset.audioName || 'click-1';

    let hoverFx = new Wad({source : `/audio/${audioFile}.m4a`});
    hoverFx.play()
  }
}
