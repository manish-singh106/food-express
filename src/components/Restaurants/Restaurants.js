import { useState, useEffect } from "react";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import { FETCH_RESTAURANT_LIST_API } from "../../utills/constants";
import "./index.css";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from 'react-router-dom'; 



const Restaurants = () => {
  const [resList, setResList] = useState([]);

  const fetchRestaurantList = async () => {
    const res = await fetch(FETCH_RESTAURANT_LIST_API);
    const resList = await res.json();

    // console.log("resList==>", resList);
    setResList(
      resList?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  // setResList([]);
  // console.log("resList11->", resList);
  if(!resList.length){
    return <Shimmer />
  }
  // console.log()
  return (
    <div className="restaurants">
      <div className="search-res">
        <input type="text" placeholder="Search restaurant here...."></input>
        <button>Search</button>
      </div>
      <div className="restaurant-container">
        {resList.map((restaurant) => (
         <Link to = {'restaurant/'+restaurant.info.id} ><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Restaurants;
