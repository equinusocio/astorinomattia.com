import { Controller } from 'stimulus'
import { Scrolles } from 'scrolles';

export default class extends Controller {
  connect() {
    const body = this.scope.element;
    if (body.dataset.pageurl.includes('blog/')) {
      body.setAttribute('data-scrolles', true);
    }
    Scrolles({
      selector: '[data-scrolles]',
      mode: 'continuous',
    });
  }
}
