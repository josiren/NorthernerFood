// eslint-disable-next-line camelcase
const likeBtn = document.getElementsByClassName('item__img__like-btn');
// eslint-disable-next-line no-plusplus
for (let i = 0; i < likeBtn.length; i++) {
  // eslint-disable-next-line func-names
  likeBtn[i].addEventListener('click', function () {
    this.classList.toggle('liked');
  });
}
