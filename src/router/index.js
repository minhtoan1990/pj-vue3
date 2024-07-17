import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Posts from '../views/posts/Posts.vue'
import Detail from '../views/posts/Detail.vue'
import Comments from '../views/comments/Comments.vue'
import CommentDetail from '../views/comments/CommentDetail.vue'
import Photos from '../views/photos/Photos.vue'
import Directives from '@/views/directive/Directive.vue'
import FormatDate from '@/views/plugin/FormatDate.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/user/Dashboard.vue'
import Profile from '@/views/user/Profile.vue';
import ProductList from '@/views/products/ProductList.vue'
import ProductAddNew from '@/views/products/AddProductItem.vue'
import NotFound from '@/views/NotFound.vue'
import Board from '@/views/trello/Board.vue'
import Register from '@/components/register/Register.vue'
import AdminUser from '@/views/user/AdminUser.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'Dashboard',
    meta: { requiresAuth: true },
    children: [
      { path: '', component: Dashboard },
      { path: 'profile', component: Profile },
      { path: 'admin', component: AdminUser }
    ],
  },
  { path: '/shop-list', component: ProductList, requiresAuth: true },
  { path: '/add-new', component: ProductAddNew, requiresAuth: true },
  { path: '/edit-product', component: ProductAddNew, requiresAuth: true },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
  },
  {
    path: '/posts/:id',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/comments',
    name: 'Comments',
    component: Comments,
    meta: {
      ton: true
    }
  },
  {
    path: '/comments/:id',
    name: 'Comment Detail',
    component: CommentDetail,
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Photos,
  },
  {
    path: '/directive',
    name: 'Directives',
    component: Directives,
  },
  {
    path: '/plugin',
    name: 'Plugin',
    component: FormatDate,
  },
  {
    path: '/trello',
    name: 'Trello Board',
    component: Board,
  },
  {
    path: '/404', name: 'NotFound', component: NotFound
  },
  {
    path: '/:catchAll(.*)', redirect: '404'
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Middleware kiểm tra xem người dùng đã đăng nhập chưa
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login' })
  } else {
    next()
  }
})


export default router
