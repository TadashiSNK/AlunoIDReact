import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Home2 from './Pages/Home2'
import Carteirinha from './Pages/Carteirinha'
import Anotacoes from './Pages/Anotacoes.jsx'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import LoadingScreen from './LoadingScreen.jsx'
import EntradaSaida from './Pages/EntradaSaida.jsx'


const router = createBrowserRouter([
  {
    path : '/',
    element: <Home />
  },
  {
    path : 'Carteirinha',
    element: <Carteirinha />
  },
  {
    path : '/Anotacoes',
    element: <Anotacoes />
  },
  {
    path : '/Horarios',
    element : <EntradaSaida />
  },
  {
    path : '/LoadingDebug',
    element: <Home2 />
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
