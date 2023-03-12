import { createStore } from 'vuex';
import coachesModules from './modules/coaches/index.js';
import requestModules from './modules/requests/index.js';

const store = createStore({
  modules: {
    coaches: coachesModules, // allows namespacing
    requests: requestModules,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
});

export default store;
