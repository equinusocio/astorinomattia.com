import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["light", "dark"]

  connect() {
    const html = document.documentElement;
    const lightSelector = this.lightTarget.dataset.themeName;
    const darkSelector = this.darkTarget.dataset.themeName;

    // switch (html.dataset.theme) {
    //   case lightSelector:
    //     html.dataset.theme = lightSelector;
    //     break;

    //   default:
    //     break;
    // }

    this.lightTarget.addEventListener('click', () => {
      html.dataset.theme = 'light';
    }, false);

    this.darkTarget.addEventListener('click', () => {
      html.dataset.theme = 'dark';
    }, false);
  }
}
