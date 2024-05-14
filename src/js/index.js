import './vendor/polyfills';
import './modules/sitePreloader';
import documentReady from './utils/documentReady';
import documentLoaded from './utils/documentLoaded';
import resize from './modules/resize';
import cssVars from './modules/cssVars';
import lazyload from './modules/lazyload';
import product from './modules/product';
import stores from './modules/pages/mainpage/stores';

documentReady(() => {
  resize.init();
  cssVars.init();
  lazyload.init();
});

documentLoaded(() => {
  product.init();
  stores.init();
});
