import $ from 'jquery';
import 'jquery-ui/ui/widgets/slider';

export default {
  init() {
    // priceFilter
    const Slider = $('.price__select');
    const valueFirst = $('.value__first');
    const valueSecondary = $('.value__secondary');
    const minValue = 0;
    const maxValue = 2500;
    Slider.slider({
      range: true,
      min: minValue,
      max: maxValue,
      step: 100,
      values: [500, 1900],
      slide: (event, ui) => {
        valueFirst.val(`${ui.values[0]}`);
        valueSecondary.val(`${ui.values[1]}`);
      },
    });

    // checkFirstInput
    valueFirst.on('input', () => {
      const valueFirstVal = parseInt(valueFirst.val(), 10);
      const valueSecondaryVal = parseInt(valueSecondary.val(), 10);
      Slider.slider('values', [Math.min(Math.max(valueFirstVal, minValue), maxValue), Math.min(Math.max(valueSecondaryVal, minValue), maxValue)]);
    });

    // checkSecondaryInput
    valueSecondary.on('input', () => {
      const valueFirstVal = parseInt(valueFirst.val(), 10);
      const valueSecondaryVal = parseInt(valueSecondary.val(), 10);
      Slider.slider('values', [Math.min(Math.max(valueFirstVal, minValue), maxValue), Math.min(Math.max(valueSecondaryVal, minValue), maxValue)]);
    });

    // clearPriceBtn
    const clearPriceBtn = $('.title__clear-btn');
    clearPriceBtn.on('click', () => {
      Slider.slider('values', [500, 1900]);
      valueFirst.val('');
      valueSecondary.val('');
    });

    // addActiveCategoryClass
    const categoriesFilters = document.querySelectorAll('.categories__item');
    // toggleActiveForCategory
    categoriesFilters.forEach((filter) => {
      filter.addEventListener('click', () => {
        filter.classList.toggle('is-active');
      });
    });

    // createFiltersBlock
    const productContainer = document.querySelector('.container__item');
    const filterContainer = document.querySelector('.item__filters');

    // removeFilterBlock
    function removeFilter(event) {
      const filterItems = filterContainer.querySelectorAll('.filters__item');
      filterItems.forEach((item) => {
        if (item.contains(event.target)) {
          item.remove();
        }
      });
    }

    // filterApplyBtn
    const filterApplyBtn = document.querySelector('.filter__apply-btn');
    filterApplyBtn.addEventListener('click', () => {
      // blankCheck
      if (!Array.from(categoriesFilters).some((filter) => filter.classList.contains('is-active')) && (valueFirst.val() === '' || valueSecondary.val() === '')) {
        return;
      }

      // addVisibilityFilterContainer
      filterContainer.style.display = 'flex';

      // priceBlock
      if (valueFirst.val() !== '' && valueSecondary.val() !== '') {
        const priceText = filterContainer.querySelector('.item__text[data-filter="price"]');
        if (priceText) {
          priceText.textContent = `Цена от ${valueFirst.val()} до ${valueSecondary.val()}`;
        } else {
          const priceBlock = document.createElement('div');
          priceBlock.className = 'filters__item';
          const itemText = document.createElement('div');
          itemText.className = 'item__text';
          itemText.dataset.filter = 'price';
          itemText.textContent = `Цена от ${valueFirst.val()} до ${valueSecondary.val()}`;
          priceBlock.appendChild(itemText);
          const itemImg = document.createElement('img');
          itemImg.className = 'item__img';
          itemImg.src = '../img/sections/filter/x.svg';
          itemImg.addEventListener('click', removeFilter);
          priceBlock.appendChild(itemImg);
          filterContainer.prepend(priceBlock);
        }
      }

      // categoryBlock
      const activeFilters = Array.from(categoriesFilters).filter((filter) => filter.classList.contains('is-active'));
      const filterTexts = activeFilters.map((filter) => filter.textContent.trim());
      const uniqueFilterTexts = [...new Set(filterTexts)];

      uniqueFilterTexts.forEach((text) => {
        const existingBlock = filterContainer.querySelector(`div[data-filter="${text}"]`);
        if (!existingBlock) {
          const categoryBlock = document.createElement('div');
          categoryBlock.className = 'filters__item';
          const itemText = document.createElement('div');
          itemText.className = 'item__text';
          itemText.dataset.filter = text;
          itemText.textContent = text;
          categoryBlock.appendChild(itemText);
          const itemImg = document.createElement('img');
          itemImg.className = 'item__img';
          itemImg.src = '../img/sections/filter/x.svg';
          itemImg.addEventListener('click', removeFilter);
          categoryBlock.appendChild(itemImg);
          const lastChild = filterContainer.lastElementChild;
          filterContainer.insertBefore(categoryBlock, lastChild);
        }
      });

      // clearAllFilters
      const clearAllBtn = document.createElement('div');
      const clearAllText = filterContainer.querySelector('.item__text[data-filter="clearAll"]');
      if (!clearAllText) {
        clearAllBtn.className = 'filters__item clearAll';
        const itemText = document.createElement('div');
        itemText.className = 'item__text';
        itemText.dataset.filter = 'clearAll';
        itemText.textContent = 'Очистить';
        clearAllBtn.appendChild(itemText);
        const itemImg = document.createElement('img');
        itemImg.className = 'item__img';
        itemImg.src = '../img/sections/filter/x.svg';
        clearAllBtn.appendChild(itemImg);

        clearAllBtn.addEventListener('click', () => {
          Array.from(categoriesFilters).forEach((filter) => filter.classList.remove('is-active'));
          valueFirst.val('');
          valueSecondary.val('');
          filterContainer.innerHTML = '';
          filterContainer.style.display = 'none';
        });
        filterContainer.appendChild(clearAllBtn);
      }

      productContainer.prepend(filterContainer);
    });
  },
};
