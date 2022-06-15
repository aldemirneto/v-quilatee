
import { createRouter, createWebHistory } from "vue-router"

import AppCadastro from '../components/AppCadastro.vue'
import AppContato from '../components/AppContato.vue'
import AppHome from '../components/AppHome.vue'
import AppServices from '../components/AppServices.vue'


const routes = [
    {
        path: '/',
        component: AppHome,
        name: 'home'
    },

    {
        path: '/Cadastro',
        component: AppCadastro,
        name: 'cadastro'
    },{
        path: '/Contato',
        component: AppContato,
        name: 'contato'
    },
    {
        path: '/Services',
        component: AppServices,
        name: 'services'
    }
    ]


    const router = createRouter({
        history : createWebHistory(), 
        routes
    })


export default router
