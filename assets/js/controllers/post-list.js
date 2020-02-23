import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["post"]

  connect() {
    const posts = this.postTargets;

    const fadeInTopAnimation = [
      { opacity: '0', transform: 'translateY(50%)'},
      { opacity: '1', transform: 'translateY(0%)'},
    ];

    const animationTiming = {
      duration: 800,
      iterations: 1,
      easing: 'cubic-bezier(0.42, 0, 0.58, 1)'
    }

    let observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.intersectionRatio > 0) {
          entry.target.animate(
            [
              { opacity: '0'},
              { opacity: '1'},
            ],
            animationTiming
          )
          // cardAnimation.play()
          observer.unobserve(entry.target);
        }
      });
    });

    posts.forEach(post => {
      observer.observe(post);
    });
  }
}
