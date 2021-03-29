import { Controller } from 'stimulus'
import gsap from "gsap";

export default class extends Controller {
  static targets = ["bullet"]

  /* Init buttons mouse tracking */
  connect() {
    const svg = this.bulletTarget;

    document.addEventListener('mousemove', (e) => {
      gsap.to(svg, {
        x: e.clientX - 12,
        y: e.clientY - 12,
        force3D: true,
        rotation: 0.01,
        duration: 0.4,
        opacity: 0.2,
      });
    }, true);

    document.addEventListener('mouseenter', (e) => {
      switch (e.target.nodeName) {
        case 'BUTTON':
        case 'A':
          gsap.to(svg, {
            force3D: true,
            scale: 1.8,
            duration: 0.3
          });
          break;

        default:
          break;
      }
    }, true);

    document.addEventListener('mouseleave', (e) => {
      gsap.to(svg, {
        force3D: true,
        scale: 1,
        duration: 0.3
      });
    }, true);
  }
}
