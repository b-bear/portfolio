import Vuex from 'vuex';
import portfolioItems from '../assets/portfolio-items/webpack-index';
import menuItems from '../assets/menu-items/webpack-index';

const createStore = () => new Vuex.Store({
  state: {
    portfolioItems,
    menuItems,
  },
  mutations: {

  },
});


export default createStore;
