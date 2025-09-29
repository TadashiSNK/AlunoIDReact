import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import './home.css'
import Header from './Header'
import Footer from './Footer'
import SideMenu from './SideMenu'
import ConteudoCarteirinha from './ConteudoCarteirinha'


function Carteirinha(){
    return(

        <div className='homeContainer'>
            <Header />
            <SideMenu />
            <ConteudoCarteirinha />
            <Footer />
        </div>
    )
}

export default Carteirinha