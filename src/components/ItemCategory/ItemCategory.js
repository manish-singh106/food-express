import './index.css';
import MenuItem from '../MenuItem/MenuItem'
const ItemCategory = ({category})=>{
  console.log("category---> >",category)
  // const {name} = category.card.info;
  console.log("length>",category.card.card.itemCards.length)
   return (
    <div className="acc">
      <div className='acc-header'>
        <span>{category.card.card.title} {(category.card.card.itemCards.length)}</span>
        <span>*</span>
      </div>
      {category.card.card.itemCards.map((menuItem) => (
        <MenuItem menuItem = {menuItem}/>
      ))}

    </div>
   ) 
}

export default ItemCategory;