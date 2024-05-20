const dropdownBtn = document.querySelector('.catalog');
const dropdownMenu = document.querySelector('.catalog__dropdown-menu');
const dropdownMenuText = document.querySelectorAll('.menu__item__text');

export default {
  init() {
    dropdownBtn.addEventListener('mouseenter', () => {
      dropdownMenu.classList.add('is-active');
      dropdownMenuText.forEach((text) => {
        text.classList.add('is-active');
      });
    });

    dropdownMenu.addEventListener('mouseleave', () => {
      dropdownMenu.classList.remove('is-active');
      dropdownMenuText.forEach((text) => {
        text.classList.remove('is-active');
      });
    });
  },
};
