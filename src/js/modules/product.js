const likeBtn = document.querySelectorAll('.item__img__like-btn');
const addBasketBtn = document.querySelectorAll('.description__basket-btn');
const Basket = document.querySelector('.basket__item');
let BasketAmount = null;
const BasketAmountElement = document.createElement('div');
BasketAmountElement.className = 'basket__amount';
BasketAmountElement.textContent = BasketAmount;
Basket.appendChild(BasketAmountElement);

export default {
  init() {
    likeBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('liked');
      });
    });

    addBasketBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        BasketAmountElement.style.visibility = 'visible';
        BasketAmount += 1;
        BasketAmountElement.textContent = BasketAmount;
        const clickedBtn = btn;
        clickedBtn.disabled = true;
        const parentProduct = btn.closest('.product-container__item');
        parentProduct.classList.add('is-active');
      });
    });
  },
};
