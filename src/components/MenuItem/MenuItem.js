// import { SWIGGY_IMG_CDN_URL } from '../../utills/constants';
// import { SWIGGY_IMG_CDN_URL } from "../../utills/constants";
import { MENU_ITEM_CDN_URL } from '../../utills/constants'
import './index.css';
const MenuItem = ({ itemCards }) => {
  console.log("menuItem->", itemCards);
  // const {name, price, description, imageId, ratings} = menuItem.card.info;
  // console.log("--->imageurl",MENU_ITEM_CDN_URL+imageId)
  // {itemCards.map((menuItem)=>())}
  return (
    <div>
      {itemCards.map((menuItem)=>(
      //  { const {name} = menuItem.card,info;}
      //  {console.log("menuItem->",menuItem)}

        <div className="menu-item-container">
          <div className="menu-info">
            <div>{menuItem.card.info.name}</div>
            <div>{menuItem.card.info.price}</div>
            <div>{menuItem.card.info.ratings.aggregatedRating.rating}</div>
            <div>{menuItem.card.info.description}</div>
          </div>
         <div className="menu-image">
            <img src = {MENU_ITEM_CDN_URL+menuItem.card.info.imageId}></img>
            <button className='add-btn'>ADD</button>
         </div>
         </div>
      ))}
    </div>
  );
};

export default MenuItem;
