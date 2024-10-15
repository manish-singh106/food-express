// import { SWIGGY_IMG_CDN_URL } from '../../utills/constants';
// import { SWIGGY_IMG_CDN_URL } from "../../utills/constants";
import { MENU_ITEM_CDN_URL } from '../../utills/constants'
import './index.css';
const MenuItem = ({ menuItem }) => {
  console.log("menuItem->", menuItem);
  const {name, price, description, imageId, ratings} = menuItem.card.info;
  console.log("--->imageurl",MENU_ITEM_CDN_URL+imageId)
  return (
    <div className="menu-item-container">
      <div className="menu-info">
        <div>{name}</div>
        <div>{price}</div>
        <div>{ratings.aggregatedRating.rating}</div>
        <div>{description}</div>
      </div>
      <div className="menu-image">
        <img src = {MENU_ITEM_CDN_URL+imageId}></img>
      </div>
    </div>
  );
};

export default MenuItem;
