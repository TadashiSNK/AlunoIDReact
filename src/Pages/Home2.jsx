import { useState } from 'react'
import './home.css'
import Header from '../Header'
import Footer from '../Footer'
import SideMenu from '../SideMenu'
import Conteudo from '../Conteudo'
import qrcode from '../assets/qr-code-default.png'
import LoadingScreen from '../LoadingScreen'


function Home(){
    return(
        <div className='homeContainer'>
            <Header title="Acesse seu" subtitle="QR CODE" src={qrcode}/>
            <SideMenu />
            <LoadingScreen />
            <Footer />
        </div>

    )
}

export default Home