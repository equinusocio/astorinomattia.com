import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["trigger"]

  /* Set the current button theme as active if match the current theme */
  onHover() {
    const hoverFx = new Audio('/audio/click.m4a');
    hoverFx.play()
  }

  /* Init theme switcher actions */
  connect() {
    const triggers = this.triggerTargets

    triggers.forEach(element => {
      if (!element.hasAttribute('aria-current')){
        element.addEventListener('click', this.onHover, true);
      }
    });
  }

  disconnect() {
    const triggers = this.triggerTargets

    triggers.forEach(element => {
      if (!element.hasAttribute('aria-current')){
        element.removeEventListener("click", this.onHover);
      }
    });
  }
}
