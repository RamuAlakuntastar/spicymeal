import './index.css'
import {Link} from 'react-router-dom'



const Header = () => {
    return (
        <nav className='navContainer'>
            <img src="https://res.cloudinary.com/dune02pvg/image/upload/v1763186951/freepik-hand-drawn-colorful-spicy-meal-food-logo-202511150601551R7l_2_iojszk.png" className='imglogo' alt='logo'/>
            <ul className='ulContainer'>
             <Link to="/" className='linkhome'> <li className='homelist'>Home</li></Link> 
               <Link  to="/item" className='linkitem'> <li  className='homeitem'>Items</li></Link> 
               <Link  to="/cart" className='linkcart'> <li  className='homecart'>Cart</li></Link> 
               <button className='buttonLogin'>Login</button>
            </ul>
            
        </nav>
    )
}






export default Header