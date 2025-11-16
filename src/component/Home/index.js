import './index.css'
import { GrLinkNext } from "react-icons/gr";

import Header from '../Header'


const Home = () => {
    return ( <div className="homecont"><Header/>
    
    
    
    <div className='homeconimage'>
        <h1 className='headingposter1'>Delicious</h1>
        <p className='paraposter1'>Food menu</p>
        <p className='paraposter2'>Order your favorites now and enjoy hot, fresh meals delivered straight to your door — with exclusive deals every day!. <br/> Hungry? Get flat 30% OFF on your first food order. Fast delivery, fresh ingredients, and unbeatable taste!</p>
        <button className='buttonordernow'>Order Now <GrLinkNext /></button>

    </div>

    
    </div>)
}






export default Home