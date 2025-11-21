import './index.css'
import Header from "../Header"
import contextContent from "../../context/contextContent";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <contextContent.Consumer>
      {value => {
        const { cartList, deleteCartIteam } = value;
        const total = cartList.reduce((sum, item) => sum + item.price, 0);
        return (
          <div className="cartContainer">
            <Header />

            <ul className="ulContainerCart">

              {cartList.length === 0 ? (
                <li className='listnotcarrt'>
                  <img
                    src="https://img.freepik.com/free-vector/safe-food-delivery_23-2148573179.jpg?t=st=1763659907~exp=1763663507~hmac=6687b5f0db0318f326db5fda8d0f92c4d04abb2d085f71d4f31ba79a0b4f56da&w=1480"
                    alt="logo"
                    className='img'
                  />
                  <p className='hea'>Order is Empty</p>
                  <Link to="/iteam">
                    <button className='buttonordernow'>
                      Order Now <GrLinkNext />
                    </button>
                  </Link>
                </li>
              ) : (
                cartList.map(item => (
                  <li key={item.id} className='listCartc'>
                    <img src={item.imageUrl} alt={item.name} className='re' />

                    <div className="cartDetails">
                      <p className="itemName">{item.name}</p>
                      <p className="itemPrice">₹ {item.price}</p>
                    </div>

                    <button
                      className="deleteBtn"
                      onClick={() => deleteCartIteam(item.id)}
                    >
                      Remove
                    </button>
                  </li>
                ))
              )}

            </ul>
            {total === 0 ? "" : <p className="totalAmount">Total Amount: ₹{total}</p>}
          </div>
        );
      }}
    </contextContent.Consumer>
  );
};

export default Cart;
