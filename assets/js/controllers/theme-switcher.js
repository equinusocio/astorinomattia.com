import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["light", "dark"]

  connect() {
    const html = document.documentElement;
    const lightSelector = this.lightTarget.dataset.themeName;
    const darkSelector = this.darkTarget.dataset.themeName;

    this.lightTarget.addEventListener('click', () => {
      html.dataset.theme = lightSelector;
    }, false);

    this.darkTarget.addEventListener('click', () => {
      html.dataset.theme = darkSelector;
    }, false);
  }
}
