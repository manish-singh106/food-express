import { useSelector } from "react-redux";


const Cart = ()=>{
	const cartItems = useSelector((store)=>store.cart.items);
console.log("cartItems===>",cartItems)
	return (
		<div className="cart-container">
			<div className="user-info">

			</div>
			<div className="order-info">

       </div>

		</div>
	)
}
export default Cart;