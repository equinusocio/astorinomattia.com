import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["light", "dark", "auto"]

  /* Set the current button theme as active if match the current theme */
  setPressed(element) {
    if (!element.hasAttribute('aria-current')) {
      const currentPressed = this.scope.element.querySelector('[aria-current]')
      currentPressed ? currentPressed.removeAttribute('aria-current') : null;
      element.setAttribute('aria-current', true);
    }
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
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
      localStorage.setItem('theme', currentTheme)

      const elementToActivate = this.scope.element.querySelector(`[data-theme-name="${currentTheme}"]`)
      this.setPressed(elementToActivate)
    }

    [this.lightTarget, this.darkTarget, this.autoTarget].forEach(element => {
      element.addEventListener('click', (event) => {
        this.setTheme(event.target)
      }, false);
    });
  }
}
