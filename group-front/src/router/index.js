import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
// import LoginForm from '../components/LoginForm'
// import SignUpForm from '../components/SignUpForm'

Vue.use(VueRouter);

// Lazy Load 적용
const Login = () => import(/* webpackChunkName: "login" */ '../components/LoginForm');
const SignUp = () => import(/* webpackChunkName: "home" */ '../components/SignUpForm');
const MakeGroup = () => import(/* webpackChunkName: "home" */ '@/views/MakeGroup');

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUp,
        },
        {
            path: '/group/newgroup',
            name: 'makegroup',
            component: MakeGroup,
        }
    ],
})

export default router