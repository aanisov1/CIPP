import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { PrivateRoute, FullScreenLoading, ErrorBoundary } from 'src/components/utilities'
import 'src/scss/style.scss'
import routes from 'src/routes'
import { Helmet } from 'react-helmet'
import adminRoutes from './adminRoutes'
import Skeleton from 'react-loading-skeleton'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Page401 = React.lazy(() => import('./views/pages/page401/Page401'))
const Page403 = React.lazy(() => import('./views/pages/page403/Page403'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Logout = React.lazy(() => import('./views/pages/login/Logout'))

const App = () => {
  return <p>This is a test </p>
}

export default App
