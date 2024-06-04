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
import catalog from './modules/pages/catalogpage/catalog';

documentReady(() => {
  resize.init();
  cssVars.init();
  lazyload.init();
  stores.init();
  catalog.init();
  product.init();
  header.init();
});

documentLoaded(() => {
  //
});
