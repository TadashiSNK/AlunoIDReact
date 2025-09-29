
import './sidemenu.css'
import { Link } from 'react-router-dom'

function MenuIcon(props){
    return (
        <div>
            <li><img className='menuIcon' src={props.image} /><Link className='noDecor' to={props.targetLink}><p className='sideBarFont'>{props.name}</p></Link></li>
        </div>
    )
}

export default MenuIcon