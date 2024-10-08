import { useState, useEffect } from "react";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import { FETCH_RESTAURANT_LIST_API } from "../../utills/constants";
import "./index.css";

const Restaurants = () => {
  const [resList, setResList] = useState([]);

  const fetchRestaurantList = async () => {
    const res = await fetch(FETCH_RESTAURANT_LIST_API);
    const resList = await res.json();

    console.log("resList==>", resList);
    setResList(
      resList?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  console.log("resList11->", resList);

  return (
    <div className="restaurants">
      <div className="search-res">
        <input type="text" placeholder="Search restaurant here...."></input>
        <button>Search</button>
      </div>
      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Restaurants;
