import * as ymaps from 'ymaps';

const selectPoint = document.querySelectorAll('.points__item');

export default {
  init() {
    ymaps.ready(() => {
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
