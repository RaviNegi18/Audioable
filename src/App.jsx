import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import HomePage from './pages/HomePage'
import HeadPhonePage from './pages/HeadPhonePage'
import SpeakerPage from './pages/SpeakerPage'
import EarPhonePage from './pages/EarPhonePage'
import { CartProvider } from './context/cardContext'
import Products from './compoents/Products'
import StorePage from "./pages/StorePage"
import 'react-toastify/dist/ReactToastify.css';
import Greeting from './compoents/Greeting'
import CheckoutPage from './compoents/CheckoutPage'
import PrivateRoute from './protectedRoutes/PrivateRoute'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (<>



    <BrowserRouter>
      <CartProvider>
        <div className='min-h-screen flex flex-col'>
          <Navbar />
          <main className='grow'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/headphones' element={<HeadPhonePage />} />
              <Route path='/speakers' element={<SpeakerPage />} />
              <Route path='/earphones' element={<EarPhonePage />} />
              <Route path="/products/:slug" element={<Products />} />
              <Route path='/store/:slug' element={<StorePage />} />
              <Route path='/checkout' element={<CheckoutPage />} />

              <Route element={<PrivateRoute />}>

                <Route path='/thank-you' element={<Greeting />} />
              </Route>


            </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </CartProvider >
    </BrowserRouter >

    <ToastContainer position='top-right' autoClose={3000} theme='colored'/>
  </>
  )
}

export default App
