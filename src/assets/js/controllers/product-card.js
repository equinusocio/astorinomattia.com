import { Controller } from 'stimulus'
import mediumZoom from 'medium-zoom'

export default class extends Controller {
  static targets = ["image"]
  static Paddle = window.Paddle;

  openCheckout(event) {
    const prodID = event.target.dataset.id
    window.Paddle.Checkout.open({
      product: prodID,
      coupon: process.env.GLOBAL_COUPON
    });
  }

  connect() {
    const images = this.imageTargets;

    mediumZoom(images, {
      background: 'var(--ne-global-background)',
      margin: 40
    })
  }
}
