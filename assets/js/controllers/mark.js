import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["item"]

  connect() {
    const items = this.itemTargets;

    let observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.intersectionRatio > 0) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.7
    });

    items.forEach(mark => {
      observer.observe(mark);
    });
  }
}
