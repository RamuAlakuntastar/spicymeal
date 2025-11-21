import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from "js-cookie"
import contextContent from "../../context/contextContent";

const Header = () => {
  const navigator = useNavigate();

  const onClickButtonLoginout = () => {
    Cookies.remove("jwt_token");
    navigator("/login");
  };

  return (
    <contextContent.Consumer>
      {value => {
        const { cartList } = value;

        return (
          <nav className='navContainer'>
            <img
              src="https://res.cloudinary.com/dune02pvg/image/upload/v1763186951/freepik-hand-drawn-colorful-spicy-meal-food-logo-202511150601551R7l_2_iojszk.png"
              className='imglogo'
              alt='logo'
            />

            <ul className='ulContainer'>
              <Link to="/" className='linkhome'>
                <li className='homelist'>Home</li>
              </Link>

              <Link to="/iteam" className='linkitem'>
                <li className='homeitem'>Items</li>
              </Link>

              <Link to="/cart" className='linkcart'>
                <li className='homecart'>
                  Cart 
                  <span className="cartcount" >  {cartList.length === 0 ? "" : cartList.length} </span>
                </li>
              </Link>

              <button className='buttonLogin' onClick={onClickButtonLoginout}>
                Logout
              </button>
            </ul>
          </nav>
        );
      }}
    </contextContent.Consumer>
  );
};

export default Header;
