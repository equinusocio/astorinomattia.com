import { Controller } from 'stimulus'

export default class extends Controller {
  playSound(event) {
    const audioFile = event.target.dataset.audioName || 'click-1';

    const hoverFx = new Audio(`/audio/${audioFile}.m4a`);
    hoverFx.play()
  }
}
