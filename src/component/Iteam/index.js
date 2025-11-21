
import "./index.css"
import Header from '../Header'
import Productcart from "../Productcart"
import { Component } from "react"



const  detailslistdata = [
    {
        id:1,
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/e85acd6d-cf11-42bd-8251-492e17a32e61_87103.jpg",
        name:"Paradise Biryani",
        star:"4.15-20 mins",
        price:99
    },
    {
        id:2,
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hqilwii7tokkileglhq4",
        name:"Biryani Chinese",
        star:"4.3.20-25 mins",
        price:200
    },
    {
        id:3,
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkq8pjxfoe137p4m6bqi",
        name:"Biryani,Indian",
        star:"4.7.15-25 mins",
        price:170
    },
    {
        id:4,
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/11/3/791b470d-4f1e-4f49-8847-cb5cba3095e6_4cd1050f-b584-4b76-b9c0-3fa57e2df891.jpg",
        name:"Biryani,Andhra",
        star:"4.0.15-25 mins",
        price:120
    },
    {
        id: 5,
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6eb32d5023b175ebd535f8b9c0de554b",
        name:"Biryani,Andhra",
        star:"5.0.15-30 mins",
        price:400
    },
    {
        id:6,
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/10/11/68581c9b-df26-4dad-888e-738649e21f1b_833005.JPG",
        name:"North Indian,Chaat",
        star:"4.2.35-45 mins",
        price:140
    },
    {
        id:7,
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/8824a6e4-6d9d-4476-9adf-b3dd729e9dab_24615.JPG",
        name:"Pizzas,Italian",
        star:"4.4.20-25 mins",
        price: 200
    },
    {
        id:8,
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/4b9677ef-913c-434a-9299-b5bf85a8cc91_81962.JPG",
        name:"Pizza Hut",
        star:"4.1.15-25 mins",
        price:125
    },
    {
        id:9,
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/5276eb32-5751-4977-b95c-b075f2cd0864_34350.jpg",
        name:"Pizzas,Pastas",
        star:"4.2.15-45 mins",
        price:200
    },
    {
        id:10,
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/a368e075-0766-44da-950e-5218ef6bee24_25412.jpg",
        name:"Pizza",
        star:"4.2.15-45 mins",
        price:200
    },
    {
        id:11,
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/24/de5fcbf5-85bb-4258-9ab3-4ff1349d3908_63672.JPG",
        name:"Cream Stone Ice Cream",
        star:"4.7.20-25 mins",
        price: 100
    },
    {
        id:12,
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/27/5bab54c2-edff-4fb9-8829-9f658653dbc2_1069866.jpg",
        name:"OCAKES Icecream",
        star:"3.8.30-45 mins",
        price:750
    },
    {
        id:13,
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/8/25/28c14b22-eb4a-4b73-a93d-337b2652cca2_756781.jpg",
        name:"Rolls & Wraps,Snacks",
        star:"4.2.30-45 mins",
        price:150
    },
    {
        id:14,
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/flqh6lrkwybxhzhusup4",
        name:"Fish Fry",
        star:"4.5.20-35 mins",
        price:200
    },
    {
        id:15,
        imageUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/6/6/eeda493d-f0ba-4aab-aaac-eff582f1db1b_5553dd6f-c2a1-4793-ae25-1077d369387c.jpeg",
        name:"Fish Pulusu",
        star:"5.0.30-45 mins",
        price:250
    }
] 


class  Iteam extends Component {
  state = {
     searchInput:"",
     data:detailslistdata,
     originalData : detailslistdata
  }
  

onChangeSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    this.setState({ searchInput: searchValue }, () => {
        const { searchInput, originalData } = this.state;

        const filterData = originalData.filter((each) =>
            each.name.toLowerCase().includes(searchInput)
        );

        this.setState({ data: filterData });
    });
};

selsetccot = (event) => {
   const sortType = event.target.value 
   const {originalData} = this.state 
   const sortData = [...originalData]
   if(sortType === "low"){
    sortData.sort((a, b) => a.price - b.price)
   } else if(sortType === "high"){
    sortData.sort((a, b) => b.price - a.price)
   }
   this.setState({data: sortData})
}



    render(){
        const {data, searchInput} = this.state
          return (
        <div className="itemContainer">
            <Header />
            <div className="searchcontainer">
                <input value={searchInput} type="search"  onChange={this.onChangeSearch}  className="searchinput" placeholder="enter the food" />
                <select onChange={this.selsetccot} className="selectcont">
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                </select>
            </div>

            <ul className="itemCard">
      {data.map((eachIteam) => (
        <Productcart userDetails ={eachIteam} key={eachIteam.id}/>
       ))}
            </ul>

       
        </div>
      
    )
    }
} 


  


export default Iteam
