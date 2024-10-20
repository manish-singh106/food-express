import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_MENU } from "../../utills/constants";
import './index.css';
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import ItemCategory from "../ItemCategory/ItemCategory";


const RestaurantMenu = () => {
  const [showItem, setShowItem] = useState(false)
  const { resid } = useParams();
  const [menuData, setMenuData] = useState([]);
console.log("resid===>",resid)


const fetchMenuData = async ( ) => {

  // console.log("FETCH_RESTAURANT_MENU+resid->",FETCH_RESTAURANT_MENU+resid)
  const result = await fetch(FETCH_RESTAURANT_MENU+resid);
    const menuData = await result.json();
    setMenuData(menuData)
   
  }

  useEffect(()=>{
    
    fetchMenuData()

  },[])

  if(menuData.length === 0){
    return <RestaurantMenuShimmer />
  }
  const resName = menuData.data.cards[2].card.card.info.name;
  const menuCategoryList = menuData?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(catagory => {
    return catagory.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
  })
  console.log("menuCategoryList===>",menuCategoryList)
  return (
    <div className="menu-container">
      <div className="resname">
        <h1>{resName}</h1>
      </div>
      {menuCategoryList.map((itemCategory, index)=>(
        <ItemCategory category = {itemCategory} showItem = {showItem === index} setShowItem = {()=> setShowItem(showItem === index? -1: index)} index = {index}/>
      ))}
    </div>
  );


};

export default RestaurantMenu;