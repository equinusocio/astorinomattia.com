import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["bullet"]

  /* Init buttons mouse tracking */
  connect() {
    const svg = this.bulletTarget;

    document.addEventListener('mousemove', (e) => {
      svg.style.setProperty('--x', `${e.clientX}px`)
      svg.style.setProperty('--y', `${e.clientY}px`)
    }, true);
  }
}
