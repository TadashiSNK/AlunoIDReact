import { useState } from 'react'
import '../App.css'
import '../index.css'
import './home.css'
import Header from '../Header'
import Footer from '../Footer'
import SideMenu from '../SideMenu'
import ConteudoCarteirinha from '../ConteudoCarteirinha'
import carteiraIcon from "../assets/RGicon.png"


function Carteirinha(){
    return(

        <div className='homeContainer'>
            <Header title="Carteira" subtitle="de Estudante" src={carteiraIcon}/>
            <SideMenu />
            <ConteudoCarteirinha />
            <Footer />
        </div>
    )
}

export default Carteirinha