const likeBtn = document.querySelectorAll('.item__img__like-btn');
const addBasketBtn = document.querySelectorAll('.description__basket-btn');
const Basket = document.querySelector('.basket__item');
let BasketAmount = null;
const BasketAmountElement = document.createElement('div');
BasketAmountElement.className = 'basket__amount';
BasketAmountElement.textContent = BasketAmount;
Basket.appendChild(BasketAmountElement);

// Todo если чувствуешь в себе силы можем поработать и сделаем сохранение
//  добавленных товаров в local-storage или добавление в api
//  и когда переходишь в корзину чтобы товары там подгружались какие добавил в корзину
//  приди ко мне с сообщением хочешь ли ты это делать или пока и так много всего?
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
