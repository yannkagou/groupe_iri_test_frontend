import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EvaluationView from '../views/EvaluationView.vue'
import FormulaireView from '../views/FormulaireView.vue'
import ReleveView from '../views/ReleveView.vue'
import AuthentificationView from '../views/AuthentificationView.vue'
import SecurisationView from '../views/SecurisationView.vue'
import FormulaireDetailsView from '../views/FormulaireDetailsView.vue'
import ReleveDetailsView from '../views/ReleveDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/evaluation',
      name: 'evaluation',
      component: EvaluationView
    },
    {
      path: '/formulaire',
      name: 'formulaire',
      component: FormulaireView
    },
    {
      path: '/formulaire/:id',
      name: 'formulairedetails',
      component: FormulaireDetailsView,
    },
    {
      path: '/releve',
      name: 'releve',
      component: ReleveView
    },
    {
      path: '/releve/:id',
      name: 'relevedetails',
      component: ReleveDetailsView,
    },
    ,
    {
      path: '/authentification',
      name: 'authentification',
      component: AuthentificationView
    },
    ,
    {
      path: '/securisation',
      name: 'securisation',
      component: SecurisationView
    },
  ]
})

export default router
