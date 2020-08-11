const Home = () =>
    import ('@/views/Home.vue')
const About = () =>
    import ('@/views/About.vue')

const Test = () =>
    import ('@/views/Test.vue')


export default [{
        path: '',
        redirect: '/index'
    },
    {
        path: '/index',
        component: Home,
        children: [{
                path: '',
                redirect: 'about'
            },
            {
                path: 'about',
                component: About
            }, {
                path: 'test',
                component: Test
            }
        ]
    }
];