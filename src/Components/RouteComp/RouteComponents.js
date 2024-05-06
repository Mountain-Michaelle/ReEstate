import React from 'react'
import { Routes, Route, useNavigate} from 'react-router-dom'
import HomePage from './HomePage'
import ListPage from './ListPage'
import UserDetail from '../Data/UserDetail'
import Login from './Login'
import Register from './Register'
import NotFound from './NotFound'
import ListDetail from './ListDetail'
import Renderer from '../Renderer'
import ProtectedRoutes from './ProtectedRoutes'

function RouteComponents() {

  return (
  <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="/:page" element={<Renderer />} />
      <Route path='/listing/:sale_type/:city/:max_price/:min_price' element={<ListPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/listing/:sale_type/:city/:max_price/:min_price/:slug' element={<ListDetail />} />
        <Route path='/user' element={<UserDetail />} />
      </Route>
      
      <Route path='/sign-in' element={<Login />} />
      <Route path='/sign-up' element={<Register />} />
      <Route element={() => <NotFound />} />
  </Routes>
  )
}

export default RouteComponents