// import { router } from './router/index'

// function isLogin() {
//     return localStorage.getItem('username') !== null
// }

// const whiteList = ['/login']

// router.beforeEach((to, from, next) => {
//     if (isLogin()) {
//         if (to.path === '/login') {
//             next({ path: '/' })
//         } else {
//             next()
//         }
//     } else {
//         if (whiteList.indexOf(to.path) !== -1) {
//             next()
//         } else {
//             next({ path: '/login' })
//         }
//     }
// })
