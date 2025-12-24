import './Cadastro.css'
import { useState } from 'react'
import './home.css'
import Header from '../Header'
import Footer from '../Footer'
import SideMenu from '../SideMenu'
import Conteudo from '../Conteudo'
import qrcode from '../assets/qr-code-default.png'
import { jwtDecode } from 'jwt-decode'
import { decodeToken } from '../utils/jwt'
import ConteudoCadastro from '../Components/ConteudoCadastro'
import cadastroIcon from '../assets/cadastroHeadericon.png'




export default function Cadastro(){


    const token = decodeToken()


    return(
        <div className='homeContainer'>
            <Header nome={token.nome ||"Undefined"} userID={token.userID} title="" subtitle="Cadastro" src={cadastroIcon}/>
            <SideMenu />
            <ConteudoCadastro />
            <Footer />
        </div>
    )
}