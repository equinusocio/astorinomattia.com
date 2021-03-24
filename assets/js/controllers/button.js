import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["button"]

  /* Init buttons mouse tracking */
  connect() {
    if (this.hasButtonTarget) {
      let buttons = this.buttonTargets;

      buttons.forEach(btn => {
        btn.addEventListener('mousemove', e => {
          const rect = e.target.getBoundingClientRect();

          let x = e.clientX - rect.left;
          let y = e.clientY - rect.top;

          btn.style.setProperty('--x', `${x}px`);
          btn.style.setProperty('--y', `${y}px`);
        });
      });
    }
  }
}
