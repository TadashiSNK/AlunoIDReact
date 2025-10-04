

import './SideMenu.css'
import MenuIcon from './MenuIcon'

import carteirinha from './assets/RGicon.png'
import catraca from './assets/catracaIcon.png'
import livro from './assets/livro.png'
import calendario from './assets/calendarioIcon.png'
import kevin from './assets/kevin.jpg'
import casinha from './assets/homeIcon.png'
import { Link } from 'react-router-dom'


function SideMenu(){
    return(
        <div className='sideMenuContainer'>
            <ul>
                <MenuIcon  name="Inicio" image={casinha} targetLink="/"/>
                <MenuIcon  name="Carteirinha" image={carteirinha} targetLink="/Carteirinha"/>
                <MenuIcon  name="Entrada e Saida" image={catraca} targetLink="/Horarios"/>
                <MenuIcon  name="Anotações" image={livro} targetLink="/Anotacoes"/>
                <MenuIcon  name="Calendário" image={calendario} targetLink="https://google.com"/>
                <MenuIcon  name="DEBUG" targetLink="/LoadingDebug"/>
            </ul>
        </div>
    )
}

export default SideMenu