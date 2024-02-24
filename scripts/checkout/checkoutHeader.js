import {calculateCartQuantity} from '../../data/cart.js'

export function renderCheckoutHeader(){
  const cartQuantity = calculateCartQuantity();
  const html = `
  Checkout (<a class="return-to-home-link js-return-to-home-link"
    href="amazon.html">${cartQuantity} items</a>)
  `
  document.querySelector('.checkout-header-middle-section')
    .innerHTML = html;
}

renderCheckoutHeader();