import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["light", "dark", "auto"]

  connect() {
    const html = document.documentElement;
    const lightSelector = this.lightTarget.dataset.themeName;
    const darkSelector = this.darkTarget.dataset.themeName;
    const autoSelector = this.autoTarget.dataset.themeName;
    const lightButton = this.lightTarget
    const darkButton = this.darkTarget
    const autoButton = this.autoTarget

    lightButton.addEventListener('click', () => {
      html.dataset.theme = lightSelector;
      lightButton.setAttribute('aria-pressed', 'true')
      darkButton.setAttribute('aria-pressed', 'false')
      autoButton.setAttribute('aria-pressed', 'false')
    }, false);

    darkButton.addEventListener('click', () => {
      html.dataset.theme = darkSelector;
      lightButton.setAttribute('aria-pressed', 'false')
      darkButton.setAttribute('aria-pressed', 'true')
      autoButton.setAttribute('aria-pressed', 'false')
    }, false);

    autoButton.addEventListener('click', () => {
      html.dataset.theme = autoSelector;
      lightButton.setAttribute('aria-pressed', 'false')
      darkButton.setAttribute('aria-pressed', 'false')
      autoButton.setAttribute('aria-pressed', 'true')
    }, false);
  }
}
