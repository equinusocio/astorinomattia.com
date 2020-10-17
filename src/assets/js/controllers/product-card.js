import { Controller } from 'stimulus'
import mediumZoom from 'medium-zoom'

export default class extends Controller {
  static targets = ["image"]

  connect() {
    const images = this.imageTargets;

    mediumZoom(images, {
      background: 'var(--ne-global-background)',
      margin: 40
    })

  }
}
