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

catalogElements.forEach((item, index) => {
  const element = item;
  element.style.backgroundSize = 'cover';
  element.style.backgroundRepeat = 'no-repeat';
  if (index === 1) {
    element.style.background = `linear-gradient(180deg, rgba(255, 102, 51, 0) 0%, #f63 100%), url(${imageSources[index]})`;
  } else {
    element.style.background = `linear-gradient(180deg, transparent 35%, #70c05b 90%), url(${imageSources[index]})`;
  }
});
