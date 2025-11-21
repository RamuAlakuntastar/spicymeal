

import './index.css'
import { IoIosStarHalf } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import contextContent from "../../context/contextContent";

const Productcart = (props) => {
    const { userDetails } = props;
    const { imageUrl, name, star, price } = userDetails;

    return (
        <contextContent.Consumer>
            {value => {
                const { addCartIteam } = value;

                const onAdd = () => {
                    addCartIteam(userDetails);
                };

                return (
                    <li className="containerulcartlist">
                        <img src={imageUrl} alt={name} className="imgcartlist" />
                        
                        <p className="paralistcart">
                            {name} <br />
                            <IoIosStarHalf color="yellow" /> {star}
                        </p>

                        <p className="pa">
                            <FaRupeeSign /> {price}
                        </p>

                        <button className="buttonadd" type="button" onClick={onAdd}>
                            Add
                        </button>
                    </li> 
                );
            }}
        </contextContent.Consumer>
    );
};

export default Productcart;
