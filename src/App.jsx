
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import CatalogPage from './pages/CatalogPage/CatalogPage'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import Layout from './pages/Layout/Layout'

function App() {
 

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
<Route index element={<HomePage />} />
      <Route path='/catalog' element={<CatalogPage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
      </Route>
      
    </Routes>
  )
}

export default App
