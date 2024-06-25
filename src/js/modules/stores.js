import * as ymaps from 'ymaps';

const selectPoint = document.querySelectorAll('.points__item');

export default {
  init() {
    ymaps.ready(() => {
      // Todo нужно сделать проверку есть ли элемент куда вставляется карта вообще на странице,
      //  так как ты сейчас такой проверки не делаешь, то можешь увидеть что когда находишься
      //  на странице на которой карты нет, у тебя ошибка в консоли
      const map = new ymaps.Map(
        document.querySelector('.stores__map'),
        {
          center: [65.325869, 53.417914],
          zoom: 15,
        },
      );
      map.geoObjects.add(new ymaps.Placemark([65.325869, 53.417914], {}, {
        iconLayout: 'default#image',
      }));

      selectPoint.forEach((point, index) => {
        point.addEventListener('click', () => {
          selectPoint.forEach((p) => p.classList.remove('selected'));
          point.classList.add('selected');
          map.geoObjects.removeAll();
          // Todo index использовать плохая идея потому что порядок элементов может меняться,
          //  давай переделаем на data атрибуты
          //  Как это должно работать:
          //  1) координаты хранились в дата атрибутах соответствующей кнопки
          //  2) при клике ты считываешь дата атрибут и перемещаешь карту в эти координаты
          //  почитать можно тут
          //  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
          //  https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
          if (index === 0) {
            map.geoObjects.add(new ymaps.Placemark([65.325869, 53.417914], {}, {
              iconLayout: 'default#image',
            }));
            map.setCenter([65.325869, 53.417914], 15);
          }
          if (index === 1) {
            map.geoObjects.add(new ymaps.Placemark([65.298894, 53.204025], {}, {
              iconLayout: 'default#image',
            }));
            map.setCenter([65.298894, 53.204025], 15);
          } else if (index === 2) {
            map.geoObjects.add(new ymaps.Placemark([65.294898, 53.285251], {}, {
              iconLayout: 'default#image',
            }));
            map.setCenter([65.294898, 53.285251], 15);
          } else if (index === 3) {
            map.geoObjects.add(new ymaps.Placemark([65.277609, 53.359892], {}, {
              iconLayout: 'default#image',
            }));
            map.setCenter([65.277609, 53.359892], 15);
          }
        });
      });
    });
  },
};
