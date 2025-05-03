

import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import CountryDetail from './components/countryDetail'
import NotFound from './components/notFound'

function App() {


  return (
  <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/country/:name' element={<CountryDetail/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </>
  )
}

export default App
