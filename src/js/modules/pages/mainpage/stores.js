const pointLinks = [
  'https://yandex.ru/map-widget/v1/?um=constructor%3A413562c576579b54c52c9405fc8e8ad01e11d2c665b778dcbb9feb8a6e95e55e&amp;source=constructor',
  'https://yandex.ru/map-widget/v1/?um=constructor%3A2b073084bf2d874083cdb82ecdc5d8c7e0d457b487f21f0f815a17fd7882c4ee&amp;source=constructor',
  'https://yandex.ru/map-widget/v1/?um=constructor%3Afcf4c6307c690e03d49fd8611a9ec4561893c07c29e486947c3aaff7f1bba9b9&amp;source=constructor',
  'https://yandex.ru/map-widget/v1/?um=constructor%3Ac33e4fe9766e5565239d5510517c00dbacb4ba61455c01b4ca15673172e7c827&amp;source=constructor',
];

const iframeElement = document.querySelector('.map__item');
const selectPoint = document.querySelectorAll('.points__item');

export default {
  init() {
    selectPoint.forEach((point, index) => {
      point.addEventListener('click', () => {
        selectPoint.forEach((p) => p.classList.remove('selected'));
        point.classList.add('selected');

        iframeElement.src = pointLinks[index];
      });
    });
  },
};
