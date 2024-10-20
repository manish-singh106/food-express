import './index.css';
import MenuItem from '../MenuItem/MenuItem'
import { useState } from 'react';
const ItemCategory = ({category, showItem, setShowItem, index})=>{
  // console.log("category---> >",category)
  // const {name} = category.card.info;
  // console.log("length>",category.card.card.itemCards.length)
  const toggleAccordian = ()=>{
    setShowItem( )
  }

   return (
    <div className="acc">
      <div className='acc-header' onClick = {()=>toggleAccordian(index)}>
        <span>{category.card.card.title} {(category.card.card.itemCards.length)}</span>
        <span>*</span>
      </div>
      {console.log(showItem)}
      {showItem && <MenuItem itemCards = {category.card.card.itemCards}/>}

    </div>
   ) 
}

export default ItemCategory;