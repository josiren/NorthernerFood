import './vendor/polyfills';
import './modules/sitePreloader';
import documentReady from './utils/documentReady';
import documentLoaded from './utils/documentLoaded';
import resize from './modules/resize';
import cssVars from './modules/cssVars';
import lazyload from './modules/lazyload';
import header from './modules/site-header';
import product from './modules/product';
import stores from './modules/pages/mainpage/stores';
import catalog from './modules/pages/catalogpage/catalog';

documentReady(() => {
  resize.init();
  cssVars.init();
  lazyload.init();
  catalog.init();
  stores.init();
  product.init();
  header.init();
});

documentLoaded(() => {
  //
});
