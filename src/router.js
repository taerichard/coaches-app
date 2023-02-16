import { createWebHistory, createRouter } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail';
import CoachesList from './pages/coaches/CoachesList';
import CoachRegistration from './pages/coaches/CoachRegistration';
import RequestsReceived from './pages/requests/RequestsReceived';
import ContactCoach from './pages/requests/ContactCoach';
import NotFound from './pages/NotFound.vue';

const routes = createRouter({
  route: createWebHistory(),
  routes: [
    {
      path: `/`,
      redirect: `/coaches`,
    },
    {
      path: `/coaches`,
      component: CoachesList,
    },
    {
      path: `/coaches/:id`,
      component: CoachDetail,
      children: [
        {
          path: `contact`,
          component: ContactCoach, // /coaches/3/contact
        },
      ],
    },
    {
      path: `/register`,
      component: CoachRegistration,
    },
    {
      path: `/requests`,
      component: RequestsReceived,
    },
    {
      path: `/:notFound(.*)`,
      component: NotFound,
    },
  ],
});
