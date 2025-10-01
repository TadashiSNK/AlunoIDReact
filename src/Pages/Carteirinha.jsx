import { useState } from 'react'
import '../App.css'
import '../index.css'
import './home.css'
import Header from '../Header'
import Footer from '../Footer'
import SideMenu from '../SideMenu'
import ConteudoCarteirinha from '../ConteudoCarteirinha'


function Carteirinha(){
    return(

        <div className='homeContainer'>
            <Header title="Carteira" subtitle="de Estudante" src=""/>
            <SideMenu />
            <ConteudoCarteirinha />
            <Footer />
        </div>
    )
}

export default Carteirinha