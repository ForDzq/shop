import MSite from '../pages/MSite/MSite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'

export default [
  {
    path: '/',
    redirect: '/msite'
  }, {
    path: '/msite',
    component: MSite
  }, {
    path: '/search',
    component: Search
  }, {
    path: '/order',
    component: Order
  }, {
    path: '/profile',
    component: Profile
  }
]