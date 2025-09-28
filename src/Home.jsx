import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './home.css'
import Header from './Header'
import Footer from './Footer'
import SideMenu from './SideMenu'
import Conteudo from './Conteudo'

function Home(){
    return(
        <div className='homeContainer'>
            <Header />
            <SideMenu />
            <Conteudo />
            <Footer />
        </div>

    )
}

export default Home