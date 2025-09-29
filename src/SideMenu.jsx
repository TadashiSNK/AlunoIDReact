

import './SideMenu.css'
import MenuIcon from './MenuIcon'

import carteirinha from './assets/RGicon.png'
import catraca from './assets/catracaIcon.png'
import livro from './assets/livro.png'
import calendario from './assets/calendarioIcon.png'
import kevin from './assets/kevin.jpg'
import { Link } from 'react-router-dom'

function SideMenu(){
    return(
        <div className='sideMenuContainer'>
            <ul>
                <MenuIcon  name="Carteirinha" image={carteirinha} targetLink="/carteirinha"/>
                <MenuIcon  name="Entrada e Saida" image={catraca} targetLink="https://google.com"/>
                <MenuIcon  name="Anotações" image={livro} targetLink="https://google.com"/>
                <MenuIcon  name="Calendário" image={calendario} targetLink="https://google.com"/>
            </ul>
        </div>
    )
}

export default SideMenu