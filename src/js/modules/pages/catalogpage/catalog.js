// Todo карточки лучше сделать с помощью добавления о них информации в json файл из папки src/data
//  и потом использования в файле с вертской примеры можно найти
//  в файлике src/templates/pages/example-loop.twig
const imageSources = [
  '../img/pages/catalogpage/1.jpg',
  '../img/pages/catalogpage/2.jpg',
  '../img/pages/catalogpage/3.jpg',
  '../img/pages/catalogpage/4.jpg',
  '../img/pages/catalogpage/5.jpg',
  '../img/pages/catalogpage/6.jpg',
  '../img/pages/catalogpage/7.jpg',
  '../img/pages/catalogpage/8.jpg',
  '../img/pages/catalogpage/9.jpg',
  '../img/pages/catalogpage/10.jpg',
  '../img/pages/catalogpage/11.jpg',
  '../img/pages/catalogpage/12.jpg',
  '../img/pages/catalogpage/13.jpg',
];

const catalogElements = document.querySelectorAll('.container__select-item');

export default {
  init() {
    catalogElements.forEach((item, index) => {
      const element = item;
      if (index === 1) {
        //  Todo это делать надо стилями, не js, если не понятно как, приходи
        element.style.background = `linear-gradient(180deg, rgba(255, 102, 51, 0) 0%, #f63 100%), url(${imageSources[index]})`;
      } else {
        element.style.background = `linear-gradient(180deg, transparent 35%, #70c05b 90%), url(${imageSources[index]})`;
      }
    });
  },
};
