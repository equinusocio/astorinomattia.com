import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["light", "dark", "auto"]

  /* Set the current button theme as active if match the current theme */
  setPressed(element) {
    const currentPressed = this.scope.element.querySelector('[aria-pressed="true"]')
    currentPressed.setAttribute('aria-pressed', false);
    element.setAttribute('aria-pressed', true);
  }

  /* Set the activated theme to root and save it to localStorage */
  setTheme(element) {
    const html = document.documentElement;
    const themeName = element.dataset.themeName;

    html.dataset.theme = themeName;
    localStorage.setItem('theme', themeName)
    this.setPressed(element)
  }

  /* Init theme switcher actions */
  connect() {
    const lightButton = this.lightTarget
    const darkButton = this.darkTarget
    const autoButton = this.autoTarget


    lightButton.addEventListener('click', () => {
      this.setTheme(lightButton)
    }, false);

    darkButton.addEventListener('click', () => {
      this.setTheme(darkButton)
    }, false);

    autoButton.addEventListener('click', () => {
      this.setTheme(autoButton)
    }, false);
  }
}
