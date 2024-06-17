import $ from 'jquery';
import 'jquery-ui/ui/widgets/slider';

const Slider = $('.price__select');

const valueFirst = $('.value__first');
const valueSecondary = $('.value__secondary');

const minValue = 1;
const maxValue = 5000;

const clearPriceBtn = $('.title__clear-btn');

export default {
  init() {
    Slider.slider({
      range: true,
      min: minValue,
      max: maxValue,
      step: 100,
      values: [1000, 3800],
      slide: (event, ui) => {
        valueFirst.val(`${ui.values[0]}`);
        valueSecondary.val(`${ui.values[1]}`);
      },
    });

    clearPriceBtn.on('click', () => {
      Slider.slider('values', [1000, 3800]);
      valueFirst.val('');
      valueSecondary.val('');
    });
  },
};
