import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Carteirinha from './Carteirinha'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path : '/',
    element: <Home />
  },
  {
    path : 'carteirinha',
    element: <Carteirinha />
  }
])

function App() {
  return (
    <div class="container">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
