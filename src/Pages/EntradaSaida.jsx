import EntradaSaidaCont from '../EntradaSaidaCont'
import './entradaSaida.css'
import { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import SideMenu from '../SideMenu'
import qrcode from '../assets/qr-code-default.png'
import ConteudoCarteirinha from '../ConteudoCarteirinha'



function EntradaSaida(props){
    return(
        <div className='homeContainer'>
            <Header title="Entrada" subtitle="E Saida"/>
            <SideMenu />
            <EntradaSaidaCont />
            <Footer />
        </div>
    )
}

export default EntradaSaida


