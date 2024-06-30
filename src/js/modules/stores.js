import * as ymaps from 'ymaps';

const selectPoint = document.querySelectorAll('.points__item');

export default {
  init() {
    ymaps.ready(() => {
      const mapContainer = document.querySelector('.stores__map');
      if (mapContainer) {
        const map = new ymaps.Map(
          document.querySelector('.stores__map'),
          {
            center: [65.325869, 53.417914],
            zoom: 15,
          },
        );

        selectPoint.forEach((point) => {
          const lat = parseFloat(point.dataset.lat);
          const lng = parseFloat(point.dataset.lng);
          map.geoObjects.add(new ymaps.Placemark([lat, lng], {}, {
            iconLayout: 'default#image',
          }));

          point.addEventListener('click', () => {
            selectPoint.forEach((p) => p.classList.remove('selected'));
            point.classList.add('selected');
            map.geoObjects.removeAll();
            map.geoObjects.add(new ymaps.Placemark([lat, lng], {}, {
              iconLayout: 'default#image',
            }));
            map.setCenter([lat, lng], 15);
          });
        });
      }
    });
  },
};
