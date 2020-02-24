import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["light", "dark"]

  connect() {
    const html = document.documentElement;
    const lightSelector = this.lightTarget.dataset.themeName;
    const darkSelector = this.darkTarget.dataset.themeName;
    const lightButton = this.lightTarget
    const darkButton = this.darkTarget

    lightButton.addEventListener('click', () => {
      html.dataset.theme = lightSelector;
      lightButton.setAttribute('aria-pressed', 'true')
      darkButton.setAttribute('aria-pressed', 'false')
    }, false);

    darkButton.addEventListener('click', () => {
      html.dataset.theme = darkSelector;
      darkButton.setAttribute('aria-pressed', 'true')
      lightButton.setAttribute('aria-pressed', 'false')
    }, false);
  }
}
