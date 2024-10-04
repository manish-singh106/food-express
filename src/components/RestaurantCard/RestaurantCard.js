import { SWIGGY_IMG_CDN_URL } from "../../utills/constants";
import './index.css';
export const RestaurantCard = ({resData}) =>{
  console.log("data->",resData)
  const {areaName, avgRatingString, cloudinaryImageId, costForTwo, cuisines, name, locality, sla  } = resData.info;
  return (
    <div className="res-card">
      <div className="res-image">
        <img src = {SWIGGY_IMG_CDN_URL+cloudinaryImageId}></img>
      </div>
      <div className="resInfo">
        <div>{name}</div>
        <div>⭐{avgRatingString}.{sla.slaString}</div>
        <div>{cuisines.join(' ')}</div>
        <div>{costForTwo}</div>
        <div>{areaName}, {locality} </div>
      </div>
    </div>
  )  
}

// Image
// resNAme
// star
// Distance in minutes
// cuisins
// Area