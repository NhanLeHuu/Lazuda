import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '',
        name: 'home',
        component: () =>
            import ('@/views/Home/Home')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/views/User/Login')
    },
    {
        path: '/dashboard-account',
        name: 'dashboard',
        component: () =>
            import ('@/views/Account/ManageAccount'),
        children: [{
                path: '/dashboard-account/summary',
                name: 'summary',
                component: () =>
                    import ('@/views/Account/Summary')
            },
            {
                path: '/dashboard-account/profile',
                name: 'profile',
                component: () =>
                    import ('@/views/Account/MyProfile')
            },
            {
                path: '/dashboard-account/editprofile',
                name: 'edit-profile',
                component: () =>
                    import ('@/views/Account/EditProfile')
            },
            {
                path: '/dashboard-account/myaddress',
                name: 'address',
                component: () =>
                    import ('@/views/Account/MyAddress')
            },
            {
                path: '/dashboard-account/addaddress',
                name: 'add-address',
                component: () =>
                    import ('@/views/Account/AddMyAddress')
            },
            {
                path: '/dashboard-account/editaddress',
                name: 'edit-address',
                component: () =>
                    import ('@/views/Account/EditMyAddress')
            },
            {
                path: '/dashboard-account/trackorder',
                name: 'track-order',
                component: () =>
                    import ('@/views/Account/TrackOrder')
            },
            {
                path: '/dashboard-account/myorder',
                name: 'my-order',
                component: () =>
                    import ('@/views/Account/MyOrder')
            },
            {
                path: '/dashboard-account/paymentoption',
                name: 'payment-option',
                component: () =>
                    import ('@/views/Account/PaymentOption')
            },
            {
                path: '/dashboard-account/myrefund',
                name: 'my-refund',
                component: () =>
                    import ('@/views/Account/MyRefund')
            },
            {
                path: '/dashboard-account/managerorder_:id',
                name: 'managerorder',
                component: () =>
                    import ('@/views/Account/ManagerOrder')
            },
            {
                path: '/dashboard-account/managerrefund_:id',
                name: 'managerrefund',
                component: () =>
                    import ('@/views/Account/ManagerRefund')
            }
        ]
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('@/views/User/Register')
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: () =>
            import ('@/views/Payment/CheckOut')
    },
    {
        path: '/cart',
        name: 'cart',
        component: () =>
            import ('@/views/Payment/Cart')
    },
    {
        path: '/forgotpassword',
        name: 'forgotpassword',
        component: () =>
            import ('@/views/User/ForgotPassword')
    },
    {
        path: '/enterpw',
        name: 'enterpw',
        component: () =>
            import ('@/views/User/EnterPW')
    },
    {
        path: '/successfully',
        name: 'successfully',
        component: () =>
            import ('@/views/Payment/Successfully')
    },
    {
        path: '/test',
        name: 'test',
        component: () =>
            import ('@/views/404Page/Test')
    },
    {
        path: '/gdsuccess',
        name: 'gdsuccess',
        component: () =>
            import ('@/views/Payment/GDSuccess')
    },
    {
        path: '/search',
        name: 'search',
        component: () =>
            import ('@/views/Product/Search')
    },
    {
        path: '/detail_:name',
        name: 'productdetail',
        component: () =>
            import ('@/views/Product/Detail')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () =>
            import ('@/views/Admin/main')
    },
    {
        path: '/comichome',
        name: 'comic',
        component: () =>
            import ('@/views/Comic/comic')
    },
    {
        path: '/summarycomic',
        name: 'summarycomic',
        component: () =>
            import ('@/views/Comic/summarycomic')
    },
    {
        path: '/readingcomic',
        name: 'readingcomic',
        component: () =>
            import ('@/views/Comic/readingcomic')
    },
    {
        path: '/searchcomic',
        name: 'searchcomic',
        component: () =>
            import ('@/views/Comic/searchcomic')
    },
    {
        path: '/phim',
        name: 'phim',
        component: () =>
            import ('@/views/Film/film')
    },
    {
        path: '/summaryphim',
        name: 'summaryphim',
        component: () =>
            import ('@/views/Film/summaryfilm')
    },
    {
        path: '/readingphim',
        name: 'readingphim',
        component: () =>
            import ('@/views/Film/readingfilm')
    },
    {
        path: '/searchphim',
        name: 'searchphim',
        component: () =>
            import ('@/views/Film/searchfilm')
    },
    {
        path: '*',
        name: '404',
        component: () =>
            import ('@/views/404Page/404')
    }
]

export const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})