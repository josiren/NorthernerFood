import './vendor/polyfills';
import './modules/sitePreloader';
import documentReady from './utils/documentReady';
import documentLoaded from './utils/documentLoaded';
import resize from './modules/resize';
import cssVars from './modules/cssVars';
import lazyload from './modules/lazyload';
import stores from './modules/stores';
import header from './modules/site-header';
import product from './modules/product';
import filter from './modules/filter';

documentReady(() => {
  resize.init();
  cssVars.init();
  lazyload.init();
  stores.init();
  product.init();
  header.init();
  filter.init();
});

documentLoaded(() => {
  //
});
