import React from 'react'
import { Switch, Route } from 'react-router-dom'
import loadable from '@/libs/loadable'
const Home = loadable(() => import('@/views/home'))
const About = loadable(() => import('@/views/about'))
const Detail = loadable(() => import('@/views/detail'))
const Login = loadable(() => import('@/views/login'))
const router = [
  {
    name: '首页',
    path: '/',
    exact: true,
    component: Home
  },
  {
    name: '关于',
    path: '/about',
    exact: true,
    component: About
  },
  {
    name: '详情',
    path: '/detail',
    exact: true,
    component: Detail
  },
  {
    name: '登录',
    path: '/login',
    exact: true,
    component: Login
  }
]
export const Router =  function () {
  return <Switch>
    {
      router.map((item, index) =>
        <Route key={index}
          exact={item.exact}
          path={item.path}
          component={ item.component }
        />
      )
    }
  </Switch>
}
