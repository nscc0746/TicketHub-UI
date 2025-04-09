import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/layout'
import ConcertsPage from './pages/concerts'
import OrderPage from './pages/order'

    //Remove me later

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<ConcertsPage />} />
          <Route path="order/:concertId" element={<OrderPage />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
