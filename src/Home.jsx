import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './home.css'
import Header from './Header'
import Footer from './Footer'

function Home(){
    return(
        <div className='container'>
            <Header></Header>
            <Footer></Footer>
        </div>

    )
}

export default Home