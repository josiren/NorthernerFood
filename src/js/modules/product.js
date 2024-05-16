const likeBtn = document.querySelectorAll('.item__img__like-btn');

export default {
  init() {
    likeBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('liked');
      });
    });
  },
};
